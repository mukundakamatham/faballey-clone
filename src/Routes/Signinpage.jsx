
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { SignIn } from "../components/login/Signin";
import { signinUser } from "../Redux/auth/action";

function SigninPage() {
  const dispatch = useDispatch();
  const { isAuth, isLoading, token, isError } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
  const handleSignin = ({ email, password }) => {
    dispatch(signinUser({ email, password }));
  };
  
  if (isAuth) {
    return <Redirect to="/" />;
  }
  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <SignIn handleSignin={handleSignin} />
      {isError && <div> something went wrong </div>}
    </div>
  );
}

export { SigninPage };
