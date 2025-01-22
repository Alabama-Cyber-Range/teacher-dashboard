import React from "react";
import {
  Flex,
  SelectField,
} from "@aws-amplify/ui-react";
import { useSchools } from "../../../hooks/useSchools";
import { useEffect } from "react";
import { School } from '@admin-dashboard/contracts/School';

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
  const data = useSchools();
    useEffect(() => {}
    , [data]);

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
        {data?.schools?.schools?.sort((a, b) => a.name.localeCompare(b.name))?.map((item: School) => {
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
