const validateUsername = (value) => {
  if (value.length >= 3) return true;

  return false;
};

const validateEmail = (value) => {
  const atCount = [...value].filter((char) => char === "@").length;
  const firstAt = value.indexOf("@");
  const lastAt = value.lastIndexOf("@");

  if (atCount === 1 && firstAt !== 0 && lastAt !== value.length - 1)
    return true;

  return false;
};

const validatePassword = (value) => {
  if (value.length >= 3) return true;

  return false;
};

const passwordConfirmation = (password1, password2) => {
  if (password2.length > 0 && password1 === password2) return true;
  return false;
};

export const validateField = (name, value1, value2) => {
  switch (name) {
    case "username":
      return validateUsername(value1);

    case "email":
      return validateEmail(value1);

    case "password":
      return validatePassword(value1);

    case "password_confirmation":
      return passwordConfirmation(value1, value2);

    default:
      return false;
  }
};


