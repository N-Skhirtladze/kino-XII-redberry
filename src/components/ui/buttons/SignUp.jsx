const SignUp = ({ setDisplaySignUp }) => {
  const handleDisplaySignUp = () => {
    setDisplaySignUp(true);
  };
  return (
    <p className="sign-up-button" onClick={handleDisplaySignUp}>
      Sign Up
    </p>
  );
};

export default SignUp;
