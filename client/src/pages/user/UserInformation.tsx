import { Flex, Text } from "@aws-amplify/ui-react";

const UserInformation = () => {
  return (
    <div className="profile-card-content">
      {/* <Text fontWeight="600" fontSize="18px" marginBottom="14px">
        User Information
      </Text> */}
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Full Name:
        </Text>
        <Text variation="tertiary">Clark Matthews</Text>
      </Flex>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Phone:
        </Text>
        <Text variation="tertiary">(44) 123 1234 123</Text>
      </Flex>
      <Flex>
        <Text variation="tertiary" fontWeight="600">
          Email:
        </Text>
        <Text variation="tertiary">clarkmathews@gmail.com</Text>
      </Flex>
    </div>
  );
};

export default UserInformation;
