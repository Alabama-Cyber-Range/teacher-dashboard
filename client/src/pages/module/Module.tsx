import { View, Flex, Text, useTheme } from "@aws-amplify/ui-react";
import { useParams } from 'react-router-dom';
import SchoolsTable from './SchoolsTable';

const Module = () => {
    const { tokens } = useTheme();
    const { moduleId = '' } = useParams<{ moduleId: string }>()
    const labId = Number(moduleId);
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
                        Example Module
                    </Text>
                    <Text variation="tertiary">Example module description goes here.</Text>
                    </div>
                </Flex>
                </View>
                <View>
                    <SchoolsTable labId={labId} />
                </View>
            </View>
        </>
    );
};

export default Module;
