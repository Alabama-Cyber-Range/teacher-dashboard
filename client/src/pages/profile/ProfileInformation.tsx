import { Flex, Text } from "@aws-amplify/ui-react";
import { useUser } from "../../hooks/useUser";
import { useEffect } from "react";


const ProfileInformation = () => {
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
// const ProfileInformation = () => {
//   return (
//     <div className="profile-card-content">
//       <Text fontWeight="600" fontSize="18px" marginBottom="14px">
//         Profile Information
//       </Text>
//       <Flex>
//         <Text variation="tertiary" fontWeight="600">
//           Full Name:
//         </Text>
//         <Text variation="tertiary">{user.first_name} Mathews</Text>
//       </Flex>
//       <Flex>
//         <Text variation="tertiary" fontWeight="600">
//           Phone:
//         </Text>
//         <Text variation="tertiary">(44) 123 1234 123</Text>
//       </Flex>
//       <Flex>
//         <Text variation="tertiary" fontWeight="600">
//           Email:
//         </Text>
//         <Text variation="tertiary">clarkmathews@gmail.com</Text>
//       </Flex>
//     </div>
//   );
// };

export default ProfileInformation;
