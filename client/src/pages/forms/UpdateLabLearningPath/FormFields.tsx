import React from "react";
import {
  Flex,
  SelectField,
} from "@aws-amplify/ui-react";
import { useLearningPaths } from "../../../hooks/useLearningPaths";
import { useEffect } from "react";
import { LearningPath } from '@admin-dashboard/contracts/LearningPath';

interface Fields {
  learningPath: string;
}

interface FormFieldProps {
  formFieldChange: (learningPath: string, value: string) => void;
  formFieldIsValid: (valid: boolean) => void;
  values: Fields;
}

const FormFields = (props: FormFieldProps) => {
  const [titleHasError, setTitleHasError] = React.useState(true);
  const { values, formFieldChange, formFieldIsValid } = props;
  const data = useLearningPaths();
    useEffect(() => {}
    , [data]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    formFieldChange(e.target.name, e.target.value);
  };

  const validateTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const isEmpty = /^\s*$/.test(e.target.value);
    setTitleHasError(isEmpty);
    formFieldIsValid(!isEmpty);
  };

  return (
    <>
      <Flex direction="column" width="100%">
      <SelectField
        placeholder="Please select a learning path"
        value={values.learningPath}
        onChange={(e) => {
          handleInputChange(e);
          validateTitle(e);
        }}
        name='learningPath'
        hasError={titleHasError}
        label="Learning Paths"
        errorMessage="Please select a learning path"
        descriptiveText="Select learning path"
        >
        {data?.learningPaths?.learningPaths?.sort((a, b) => a.name.localeCompare(b.name))?.map((item: LearningPath) => {
          return (
            <option key={item.id} value={item.id}>{item.name}</option>
          );
        }
        )}
      </SelectField>

      </Flex>
    </>
  );
};

export default FormFields;
