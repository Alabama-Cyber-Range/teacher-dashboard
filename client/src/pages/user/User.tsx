import { View, Flex, Text, useTheme } from "@aws-amplify/ui-react";
import { useParams } from 'react-router-dom';
import { useTargetUser } from "../../hooks/useTargetUser";

const User = () => {
    const { tokens } = useTheme();
    const { userId = '' } = useParams<{ userId: string }>()
    const user = useTargetUser(userId);
    return (
        <>
            <View maxWidth="100%" padding="0rem" minHeight="100vh">
                <View paddingTop="1rem" paddingBottom="1rem">
                    <Flex
                        direction={{ base: "column", large: "row" }}
                        alignItems="flex-start"
                        backgroundColor={tokens.colors.background.primary.value}
                    >
                        <div>
                        <View
                            padding="1rem">
                            <Text variation="primary" fontWeight={600} fontSize="18px">
                                {user?.user?.first_name} {user?.user?.last_name}
                            </Text>
                        </View>
                        <View
                            padding="1rem">
                            <Text variation="tertiary">
                                Email: {user?.user?.email}
                            </Text>
                        </View>
                        <View
                            paddingLeft="1rem"
                            paddingBottom="1rem">
                            <Text variation="tertiary">
                                School: N/A
                            </Text>
                        </View>
                        </div>
                    </Flex>
                </View>
            </View>
        </>
    );
};

export default User;
