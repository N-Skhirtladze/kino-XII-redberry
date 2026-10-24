import { useState } from "react";
import { validateField } from "../../services/validation";
import { invalid, valid } from "../../assets";

const FormField = ({
  type,
  placeholder,
  name,
  formData,
  setFormData,
  errorMessage,
}) => {
  let isValid = validateField(name,formData[name], formData.password, )
  let warning = formData[name].length > 0 && !isValid;
  const result = name.replaceAll("_", " ");
  const label = result.charAt(0).toUpperCase() + result.slice(1);

  const returnError = (name) => {
 
    if (!isValid && formData[name].length > 0) {
      switch (name) {
        case "username":
          return (
            <p className="field-error">
              must be at least 3 characters.
            </p>
          );

        case "email":
          return (
            <p className="field-error">
              must be a valid email address.
            </p>
          );

        case "password":
          return (
            <p className="field-error">
              must be at least 3 characters.
            </p>
          );

        case "password_confirmation":
          return (
            <p className="field-error">
              Passwords do not match
            </p>
          );

        default:
          return null;
      }
    }

    if (errorMessage[name]?.length > 0) {
      switch (name) {
        case "username":
        case "email":
          return <p className="field-error">{errorMessage[name][0]}</p>;

        default:
          return null;
      }
    }

    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((perv) => ({
      ...perv,
      [name]: value,
    }));
  };

  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <div className={warning ? " field-input invalid-border" : "field-input"}>
        <input
          type={type}
          placeholder={placeholder}
          id={name}
          name={name}
          value={formData[name]}
          onChange={handleChange}
        />
        {formData[name].length > 0 ? (
          <img
            src={warning ? invalid : valid}
            className="search-icon"
            alt="Search"
          />
        ) : null}
      </div>
      {returnError(name)}
    </div>
  );
};

export default FormField;
