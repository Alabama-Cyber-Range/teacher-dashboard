import { View, Flex, Heading, useTheme } from "@aws-amplify/ui-react";
import ProfileHeader from "./ProfileHeader";
import "./Profile.css";

const Profile = () => {
  const { tokens } = useTheme();
  return (
    <>
      <View padding="1rem">
        <Heading level={2}>Profile</Heading>
      </View>
      <View maxWidth="100%" padding="0rem" minHeight="100vh">
        <Flex
          direction={{ base: "column", large: "row" }}
          alignItems="flex-start"
          gap={tokens.space.xl}
          marginBottom="30px"
        >
          <View
            backgroundColor="var(--amplify-colors-white)"
            borderRadius="6px"
            width={{ base: "100%", large: "100%" }}
            padding="1rem"
          >
            <ProfileHeader />
          </View>
        </Flex>

        <Flex
          direction={{ base: "column", large: "row" }}
          gap={tokens.space.xl}
          alignItems="flex-start"
        >
        </Flex>
      </View>
    </>
  );
};

export default Profile;
