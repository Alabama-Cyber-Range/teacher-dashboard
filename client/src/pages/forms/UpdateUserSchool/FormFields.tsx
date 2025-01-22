import React from "react";
import {
  Flex,
  SelectField,
} from "@aws-amplify/ui-react";

interface Fields {
  school: string;
}

interface FormFieldProps {
  formFieldChange: (school: string, value: string) => void;
  formFieldIsValid: (school: string, valid: boolean) => void;
  values: Fields;
}

const FormFields = (props: FormFieldProps) => {
  const [titleHasError, setTitleHasError] = React.useState(true);
  const { values, formFieldChange, formFieldIsValid } = props;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    formFieldChange(e.target.name, e.target.value);
  };

  const validateTitle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const isEmpty = /^\s*$/.test(e.target.value);
    setTitleHasError(isEmpty);
    formFieldIsValid(e.target.name, !isEmpty);
  };
  return (
    <>
      <Flex direction="column" width="100%">
      <SelectField
        placeholder="Please select a school"
        value={values.school}
        onChange={(e) => {
          handleInputChange(e);
          validateTitle(e);
        }}
        name='school'
        hasError={titleHasError}
        label="Schools"
        errorMessage="Please select a school"
        descriptiveText="Select school"
        >
          <option value="apple">Apple</option>
          <option value="banana">Banana</option>
          <option value="orange">Orange</option>
          <option value="pineapple">Pineapple</option>
          <option value="kiwi">Kiwi</option>
          <option value="tangerine">Tangerine</option>
      </SelectField>

      </Flex>
    </>
  );
};

export default FormFields;
