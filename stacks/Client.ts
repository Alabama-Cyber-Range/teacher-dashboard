import { StackContext, Cognito, Bucket, StaticSite, Api } from "sst/constructs";
import { Lazy } from "aws-cdk-lib";
import { getFnHandler } from "./toolkit";

export function Client({ stack }: StackContext) {
  let site: StaticSite | undefined;
  const siteUrl = Lazy.string({
    produce() {
      return site?.customDomainUrl ?? site?.url ?? "http://localhost:5173";
    },
  });

  const profileImageBucket = new Bucket(stack, "profile-images");

  const auth = new Cognito(stack, "ClientAuth", {
    login: ["email"],
    cdk: {
      userPoolClient: {
        oAuth: {
          flows: {
            authorizationCodeGrant: true,
          },
          callbackUrls: [siteUrl],
          logoutUrls: [siteUrl],
        },
      },
      userPool: {
        selfSignUpEnabled: false,
        standardAttributes: {
          address: { required: true },
          gender: { required: true },
          birthdate: { required: true },
          givenName: { required: true },
          familyName: { required: true },
        },
      },
    },
  });

  const userApi = new Api(stack, "user-api", {
    defaults: {
      authorizer: "iam",
      function: {
        bind: [profileImageBucket],
      },
    },
    routes: {
      "GET /user/profile-picture": getFnHandler("api/user/profile-picture"),
      "PUT /user/profile-picture": getFnHandler(
        "api/user/profile-picture/upload"
      ),
    },
  });

  const cloudshareApi = new Api(stack, "cloudshare-api", {
    defaults: {
      authorizer: "iam",
    },
    routes: {
      "GET /rooms": getFnHandler("api/cloudshare/rooms"),
      "GET /rooms/{roomId}": getFnHandler("api/cloudshare/room"),
      "GET /path-rooms/{pathId}": getFnHandler("api/cloudshare/path-rooms"),
      "POST /rooms/{roomId}": getFnHandler("api/cloudshare/room-link"),
    },
  });

  const cognitoDomain = auth.cdk.userPool.addDomain("cognitoDomain", {
    cognitoDomain: { domainPrefix: `alabama-cyber-range-${stack.stage}-client` },
  });

  auth.attachPermissionsForAuthUsers(stack, [userApi]);
  auth.attachPermissionsForAuthUsers(stack, [cloudshareApi]);

  stack.addOutputs({
    VITE_CLIENT_APP_USER_POOL_ID: auth.userPoolId,
    VITE_CLIENT_APP_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId ?? "",
    VITE_CLIENT_APP_USER_POOL_CLIENT_ID: auth.userPoolClientId,
    VITE_CLIENT_APP_COGNITO_DOMAIN: `${cognitoDomain.domainName}.auth.${stack.region}.amazoncognito.com`,
    ApiEndpoint: userApi.url,
    CloudShareApiEndpoint: cloudshareApi.url,
  });

  return { profileImageBucket };
}
