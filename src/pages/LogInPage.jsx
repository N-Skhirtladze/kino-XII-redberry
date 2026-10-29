import { useState } from "react";
import { close } from "../assets";
import FormField from "../components/ui/FormField";
import { logIn } from "../services/auth";

const LogInPage = ({ setDisplayLogIn }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState({});
  const [isInvalid, setIsInvalid] = useState({
    email: true,
    password: true,
  });
  const isFormInvalid = Object.values(isInvalid).some(Boolean);

  const handleDisplayLogIn = (e) => {
    if (e.target.className === "log-in-page") {
      setDisplayLogIn(false);
    }
    if (e.target.className === "close-form") {
      setDisplayLogIn(false);
    }
  };

  const onSubmit = (data) => {
    if (isFormInvalid) {
      return;
    }
    const formData = new FormData();

    formData.append("email", data.email);
    formData.append("password", data.password);

    const createNewUser = async (data) => {
      try {
        const newUser = await logIn(data);

        if (!newUser.ok) {
          setErrorMessage(newUser.data);
          return;
        }
        setDisplayLogIn(false);
      } catch (error) {
        console.error(error);
      }
    };

    createNewUser(formData);
  };
  return (
    <div className="log-in-page" onClick={handleDisplayLogIn}>
      <div className="log-in-container">
        <div className="registration-header">
          <p>Log In</p>
          <img src={close} alt="" className="close-form" />
        </div>
        <p className="welcome-text">Welcome back to Kino XII</p>
        <form id="log-in-form" action="">
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
          <div className="password-field" style={{ marginTop: "24px" }}>
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
        </form>
        <button
          type="button"
          className={
            isFormInvalid
              ? "submit-log-in"
              : "valid-submit-log-in submit-log-in"
          }
          disabled={isFormInvalid}
          onClick={() => onSubmit(formData)}
        >
          Log In
        </button>
        <p className="registration-links">
          Don't have an account?
          <span
            style={{
              color: "#EC3013",
              fontWeight: "800",
              cursor: "pointer",
              marginLeft: "5px",
            }}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default LogInPage;
