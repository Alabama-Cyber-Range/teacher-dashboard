import { useState } from "react";
import { View, Flex, Heading, useTheme } from "@aws-amplify/ui-react";
import FormFields from "./FormFields";
import FormActions from "./FormActions";
// import { useAssociateUserWithSchool } from "../../../hooks/useAssociateUserWithSchool";
import { associate_user_with_school } from "../../../services/api";
import { useParams } from 'react-router-dom';
import { useEffect } from "react";

/// mock api request

interface FormData {
  school: string;
}

// const postForm = (data: FormData): Promise<FormData> =>
//   new Promise((resolve, reject) => {
//     if (!data.school) {
//       reject(new Error("Not all information provided"));
//     }
//     setTimeout(() => resolve(data), 750);
//   });

// const postForm = (data: FormData, userId: string): Promise<FormData> =>
//   new Promise((resolve, reject) => {
//     if (!data.school) {
//       reject(new Error("Not all information provided"));
//     }
//     setTimeout(() => resolve(data), 750);
//     useAssociateUserWithSchool(userId, data.school);
//   });

// const postForm = (userId: string, schoolId: string) => {
//   associate_user_with_school(Number(userId), Number(schoolId));
// };

const initialValues = {
  school: "select a school",
};

const UpdateUserSchoolForm = () => {
  const [values, setValues] = useState(initialValues);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isDisabled, setIsDisabled] = useState<boolean>(true);
  // const [isValid, setIsValid] = useState<boolean>(false);

  const { tokens } = useTheme();
  const { userId = '' } = useParams<{ userId: string }>()

  const saveData = () => {
    setIsLoading(true);

    const doPostForm = async (data: FormData): Promise<void> => {
      try {
        console.log(data.school);
        console.log(userId);
      const result = associate_user_with_school(Number(userId), Number(data.school));
      setIsLoading(false);
      } catch (error) {
      console.log(error);
      setIsLoading(false);
      }
    };

    doPostForm(values);
  };

  const formFieldChange = (school: string, value: string) => {
    setValues({
      ...values,
      [school]: value,
    });
  };

  const formFieldIsValid = (name: string, valid: boolean) => {
    setIsDisabled(!valid);
    // console.log(name);
  };

  return (
    <>
      <View padding="1rem">
          <Heading level={1}>Add School</Heading>
      </View>
      <Flex
        direction={{ base: "column", large: "row" }}
        alignItems="flex-start"
        gap={tokens.space.xl}
        minHeight="100vh"
      >
        <View
          backgroundColor="var(--amplify-colors-white)"
          borderRadius="6px"
          width={{ base: "100%", large: "70%" }}
          padding="1rem"
        >
          <br></br>
          <FormFields
            values={values}
            formFieldChange={formFieldChange}
            formFieldIsValid={formFieldIsValid}
          />
        </View>
        <View
          backgroundColor="var(--amplify-colors-white)"
          borderRadius="6px"
          width={{ base: "100%", large: "30%" }}
          padding="1rem"
          minHeight="40vh"
        >
          <FormActions
            formOnSubmit={saveData}
            isLoading={isLoading}
            isDisabled={isDisabled}
          />
        </View>
      </Flex>
    </>
  );
};

export default UpdateUserSchoolForm;
