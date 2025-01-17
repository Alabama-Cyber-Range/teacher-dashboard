import { Flex, Text } from "@aws-amplify/ui-react";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";

// interface ProfileHeaderProps {
//   name?: string;
//   email?: string;
//   imageSrc?: string;
// }

const ProfileHeader = () => {
  const user = useUser();
  useEffect(() => {}
  , [user]);
  return (
    <>
      <Flex
        direction={{ base: "column", large: "row" }}
        alignItems="flex-start"
      >
        <div className="profile-header-image">
        </div>
        <div className="profile-header-text">
          <Text variation="primary" fontWeight={600} fontSize="18px">
            {user?.user?.first_name} {user?.user?.last_name}
          </Text>
          <Text variation="tertiary">{user?.user?.email}</Text>
        </div>
      </Flex>
    </>
  );

};

export default ProfileHeader;
