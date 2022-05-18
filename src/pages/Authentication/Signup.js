import { useEffect, useState, Fragment } from "react";
import { Navbar, AuthSignUp, Alert } from "../../components";
import { useAlert } from "../../context";

export const SignUp = () => {
  const [route, setRoute] = useState();
  const { alert } = useAlert();

  useEffect(() => {
    setRoute("signup");
  }, [route]);
  return (
    <Fragment>
      {alert.open && <Alert />}
      <Navbar />
      <AuthSignUp />
    </Fragment>
  );
};
