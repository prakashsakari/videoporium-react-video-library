import { Navbar, AuthLogin } from "../../components";
import { useState, useEffect } from "react";

export const Login = () => {
  const [route, setRoute] = useState();

  useEffect(() => {
    setRoute("login");
  }, [route]);
  return (
    <>
      <Navbar />
      <AuthLogin />
    </>
  );
};
