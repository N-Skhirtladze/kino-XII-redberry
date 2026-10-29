import { useEffect } from "react";
import { validateField } from "../../services/validation";
import { invalid, valid } from "../../assets";

const FormField = ({
  type,
  placeholder,
  name,
  formData,
  setFormData,
  errorMessage,
  setIsInvalid,
}) => {
  let isValid = validateField(name, formData[name], formData.password);
  let warning = formData[name].length > 0 && !isValid;
  const hasServerError = errorMessage[name]?.length > 0;
  const isInvalid = warning || hasServerError;
  const result = name.replaceAll("_", " ");
  const label = result.charAt(0).toUpperCase() + result.slice(1);

  useEffect(() => {
    setIsInvalid((prev) => ({
      ...prev,
      [name]: !isValid || hasServerError,
    }));
  }, [name, isInvalid, setIsInvalid, hasServerError]);

  const returnError = (name) => {
    if (!isValid && formData[name].length > 0) {
      switch (name) {
        case "username":
          return <p className="field-error">must be at least 3 characters.</p>;

        case "email":
          return <p className="field-error">must be a valid email address.</p>;

        case "password":
          return <p className="field-error">must be at least 3 characters.</p>;

        case "password_confirmation":
          return <p className="field-error">Passwords do not match</p>;

        default:
          return null;
      }
    }

    if (errorMessage[name]?.length > 0) {
      switch (name) {
        case "username":
        case "email":
        case "password":
          return <p className="field-error">{errorMessage[name][0]}</p>;

        default:
          return null;
      }
    }

    return null;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value.replace(/\s/g, ""),
    }));
  };

  return (
    <div className="form-field">
      <label htmlFor={name} style={{color: isInvalid ? "#ec3013" : "#ffffff"}}>{label}</label>
      <div
        className={isInvalid ? " field-input invalid-border" : "field-input"}
      >
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
            src={isInvalid ? invalid : valid}
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
