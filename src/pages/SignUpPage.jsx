import { useState } from "react";
import { close } from "../assets";
import FormField from "../components/ui/FormField";
import AvatarUpload from "../components/ui/AvatarUpload";
import { signUp } from "../services/auth";

const SignUpPage = ({ setDisplaySignUp }) => {
  const [avatar, setAvatar] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const [isInvalid, setIsInvalid] = useState({
    username: true,
    email: true,
    password: true,
    password_confirmation: true,
  });
  const isFormInvalid = Object.values(isInvalid).some(Boolean);

  const handleDisplaySignUp = (e) => {
    if (e.target.className === "sign-up-page") {
      setDisplaySignUp(false);
    }
    if (e.target.className === "close-form") {
      setDisplaySignUp(false);
    }
  };

  const onSubmit = (data) => {
    if (isFormInvalid) {
      return;
    }
    const formData = new FormData();

    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation);
    if (avatar) {
      formData.append("avatar", avatar);
    }

    const createNewUser = async (data) => {
      try {
        const newUser = await signUp(data);

        if (!newUser.ok) {
          setErrorMessage(newUser.data);
          return;
        }
        setDisplaySignUp(false);
      } catch (error) {
        console.error(error);
      }
    };

    createNewUser(formData);
  };
  return (
    <div className="sign-up-page" onClick={handleDisplaySignUp}>
      <div className="sign-up-container">
        <div className="registration-header">
          <p>Sign Up</p>
          <img src={close} alt="" className="close-form" />
        </div>
        <p className="welcome-text">Welcome to Kino XII</p>
        <form id="sign-up-form" action="">
          <AvatarUpload avatar={avatar} setAvatar={setAvatar} />

          <div className="username-field">
            <FormField
              type={"text"}
              placeholder={"User"}
              name={"username"}
              formData={formData}
              setFormData={setFormData}
              errorMessage={errorMessage}
              setIsInvalid={setIsInvalid}
            />
          </div>
          <div className="email-field">
            <FormField
              type={"email"}
              placeholder={"example@gmail.com"}
              name={"email"}
              formData={formData}
              setFormData={setFormData}
              errorMessage={errorMessage}
              setIsInvalid={setIsInvalid}
            />
          </div>
          <div className="passwords-fields">
            <div className="password-field">
              <FormField
                type={"password"}
                placeholder={"••••••••"}
                name={"password"}
                formData={formData}
                setFormData={setFormData}
                errorMessage={errorMessage}
                setIsInvalid={setIsInvalid}
              />
            </div>
            <div className="password_confirmation">
              <FormField
                type={"password"}
                placeholder={"••••••••"}
                name={"password_confirmation"}
                formData={formData}
                setFormData={setFormData}
                errorMessage={errorMessage}
                setIsInvalid={setIsInvalid}
              />
            </div>
          </div>
        </form>
        <button
          type="button"
          className={
            isFormInvalid ||
            formData.password_confirmation === ""
              ? "submit-sign-up"
              : "valid-submit-sign-up submit-sign-up"
          }
          disabled={isFormInvalid}
          onClick={() => onSubmit(formData)}
        >
          Sign Up
        </button>
        <p className="registration-links">
          Already have an account?
          <span
            style={{
              color: "#EC3013",
              fontWeight: "800",
              cursor: "pointer",
              marginLeft: "5px",
            }}
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
