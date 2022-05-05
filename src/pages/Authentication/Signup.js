import { Navbar, AuthSignUp } from "../../components";
import { useEffect, useState } from "react";

export const SignUp = () => {
  const [route, setRoute] = useState();

  useEffect(() => {
    setRoute("signup");
  }, [route]);
  return (
    <>
      <Navbar />
      <AuthSignUp />
    </>
  );
};
