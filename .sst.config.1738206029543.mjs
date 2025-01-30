import { createRequire as topLevelCreateRequire } from 'module';const require = topLevelCreateRequire(import.meta.url);
var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// stacks/Client.ts
import { Cognito } from "sst/constructs";
import { Lazy } from "aws-cdk-lib";
function Client({ stack }) {
  let site;
  const siteUrl = Lazy.string({
    produce() {
      return site?.customDomainUrl ?? site?.url ?? "http://localhost:5173";
    }
  });
  const auth = new Cognito(stack, "ClientAuth", {
    login: ["email"],
    cdk: {
      userPoolClient: {
        oAuth: {
          flows: {
            authorizationCodeGrant: true
          },
          callbackUrls: [siteUrl],
          logoutUrls: [siteUrl]
        }
      },
      userPool: {
        selfSignUpEnabled: false,
        standardAttributes: {
          address: { required: true },
          gender: { required: true },
          birthdate: { required: true },
          givenName: { required: true },
          familyName: { required: true }
        }
      }
    }
  });
  const cognitoDomain = auth.cdk.userPool.addDomain("cognitoDomain", {
    cognitoDomain: { domainPrefix: `alabama-cyber-range-${stack.stage}-client` }
  });
  stack.addOutputs({
    VITE_CLIENT_APP_USER_POOL_ID: auth.userPoolId,
    VITE_CLIENT_APP_IDENTITY_POOL_ID: auth.cognitoIdentityPoolId ?? "",
    VITE_CLIENT_APP_USER_POOL_CLIENT_ID: auth.userPoolClientId,
    VITE_CLIENT_APP_COGNITO_DOMAIN: `${cognitoDomain.domainName}.auth.${stack.region}.amazoncognito.com`
  });
  return;
}
__name(Client, "Client");

// sst.config.ts
var sst_config_default = {
  config(_input) {
    return {
      name: "admin-dashboard",
      region: "us-east-1"
    };
  },
  stacks(app) {
    app.stack(Client);
  }
};
export {
  sst_config_default as default
};
