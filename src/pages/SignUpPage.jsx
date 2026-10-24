import { useState } from "react";
import { close } from "../assets";
import FormField from "../components/ui/FormField";

const SignUpPage = ({ setDisplaySignUp }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleDisplaySignUp = (e) => {
    if (e.target.className === "sign-up-page") {
      setDisplaySignUp(false);
    }
    if (e.target.className === "close-form") {
      setDisplaySignUp(false);
    }
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
          {/* upload avatar */}
          {/* <div className="sign-up-avatar">
            <label htmlFor=""></label>
          </div> */}

          <div className="username-field">
            <FormField
              type={"text"}
              placeholder={"User"}
              name={"username"}
              formData={formData}
              setFormData={setFormData}
              errorMessage={{}}
            />
          </div>
          <div className="email-field">
            <FormField
              type={"email"}
              placeholder={"example@gmail.com"}
              name={"email"}
              formData={formData}
              setFormData={setFormData}
              errorMessage={{}}
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
                errorMessage={[]}
              />
            </div>
            <div className="password_confirmation">
              <FormField
                type={"password"}
                placeholder={"••••••••"}
                name={"password_confirmation"}
                formData={formData}
                setFormData={setFormData}
                errorMessage={{}}
              />
            </div>
          </div>
        </form>
        <button className="submit-sign-up">Sign Up</button>
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
