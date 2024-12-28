import React from "react";
import CardWrapper from "./CardWrapper";

const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel={"Welcom Back!"}
      backButtonLabel="Don't Have an Account!"
      backButtonHref="/auth/register"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};

export default LoginForm;
