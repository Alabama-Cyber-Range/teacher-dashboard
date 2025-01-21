import { Heading, View, Flex, Text, useTheme } from "@aws-amplify/ui-react";

const User = () => {
    const { tokens } = useTheme();
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
                                Clark Matthews
                            </Text>
                        </View>
                        <View
                            padding="1rem">
                            <Text variation="tertiary">
                                Email: clark.matthews@asdf.org
                            </Text>
                        </View>
                        <View
                            paddingLeft="1rem"
                            paddingBottom="1rem">
                            <Text variation="tertiary">
                                School: Calhoun Community College
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
