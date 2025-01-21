import { View, Flex, Text, useTheme } from "@aws-amplify/ui-react";
import { useParams } from 'react-router-dom';
import SchoolsTable from './SchoolsTable';
import LearningPathsTable from "./LearningPathsTable";
import { useLab } from "../../hooks/useLab";

const Module = () => {
    const { tokens } = useTheme();
    const { moduleId = '' } = useParams<{ moduleId: string }>()
    const lab = useLab(String(moduleId));
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
                        {lab?.lab?.name}
                    </Text>
                    <Text variation="tertiary">{lab?.lab?.description}</Text>
                    </div>
                </Flex>
                </View>
                <View paddingTop="1rem" paddingBottom="1rem">
                    <Text variation="primary" fontWeight={600} fontSize="18px">
                        Schools
                    </Text>
                    <SchoolsTable labId={Number(moduleId)} />
                </View>
                <View paddingTop="1rem" paddingBottom="1rem">
                    <Text variation="primary" fontWeight={600} fontSize="18px">
                        Learning Paths
                    </Text>
                    <LearningPathsTable labId={Number(moduleId)} />
                </View>
            </View>
        </>
    );
};

export default Module;
