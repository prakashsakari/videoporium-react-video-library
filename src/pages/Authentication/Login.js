import { Navbar, AuthLogin, Alert, Loader } from "../../components";
import { useState, useEffect, Fragment } from "react";
import { useAlert } from "../../context";

export const Login = () => {
  const [route, setRoute] = useState();
  const [isLoading, setIsLoading] =  useState(true);
  const { alert } = useAlert();

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 300);
  }, [])

  useEffect(() => {
    setRoute("login");
  }, [route]);

  return (
    <Fragment>
      {isLoading ? <Loader /> : (
        <Fragment>
          {alert.open && <Alert />}
          <Navbar route={route}/>
          <AuthLogin />
        </Fragment>
      )}
      </Fragment>
    
  );
};
