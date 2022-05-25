import { useEffect, useState, Fragment } from "react";
import { Navbar, AuthSignUp, Alert, Loader } from "../../components";
import { useAlert } from "../../context";

export const SignUp = () => {
  const [route, setRoute] = useState();
  const [isLoading, setIsLoading] =  useState(true);
  const { alert } = useAlert();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 300);
  }, [])

  useEffect(() => {
    setRoute("signup");
  }, [route]);

  return (
    <Fragment>
      {isLoading ? <Loader /> : (
      <Fragment>
        {alert.open && <Alert />}
        <Navbar route={route}/>
        <AuthSignUp />
      </Fragment>)}
      
    </Fragment>
  );
};
