const LogIn = ({ setDisplayLogIn}) => {

  const handleDisplayLogIn = () => {
    setDisplayLogIn(true);
  }

  return (
    <p className="log-in-button" onClick={handleDisplayLogIn}>Log In</p>
  );
};

export default LogIn;