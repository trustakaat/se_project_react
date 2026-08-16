import { useState } from "react";

export function useForm(defaultValues) {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setValues({ ...values, [name]: value });

    setErrors({ ...errors, [name]: event.target.validationMessage });
    setIsValid(event.target.closest("form").checkValidity());
  };

  return { values, handleChange, setValues, setErrors, errors, isValid };
}
