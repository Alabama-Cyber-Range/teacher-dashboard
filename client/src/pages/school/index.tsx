import { View, Flex, Text, useTheme } from "@aws-amplify/ui-react";
import { useParams } from 'react-router-dom';
import ModulesTable from './ModulesTable';
import UsersTable from "./UsersTable";
import { useSchool } from "../../hooks/useSchool";

const Module = () => {
    const { tokens } = useTheme();
    const { schoolId = '' } = useParams<{ schoolId: string }>()
    const school = useSchool(String(schoolId));
    return (
        <>
            <View maxWidth="100%" padding="0rem" minHeight="100vh">
                <View paddingTop="1rem" paddingBottom="1rem">
                <Flex
                    direction={{ base: "column", large: "row" }}
                    alignItems="flex-start"
                    backgroundColor={tokens.colors.background.primary.value}
                >
                    <div className="profile-header-text">
                    <Text variation="primary" fontWeight={600} fontSize="18px">
                        {school?.school?.name}
                    </Text>
                    </div>
                </Flex>
                </View>
                <View paddingTop="1rem" paddingBottom="1rem">
                    <Text variation="primary" fontWeight={600} fontSize="18px">
                        Modules
                    </Text>
                    <ModulesTable schoolId={Number(schoolId)} />
                </View>
                <View paddingTop="1rem" paddingBottom="1rem">
                    <Text variation="primary" fontWeight={600} fontSize="18px">
                        Users
                    </Text>
                    <UsersTable schoolId={Number(schoolId)} />
                </View>
            </View>
        </>
    );
};

export default Module;
