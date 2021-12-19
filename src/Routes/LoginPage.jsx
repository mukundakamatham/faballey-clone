
import React from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Login1 } from "../components/login/Loger";
import { loginUser } from "../Redux/auth/action";

function LoginPage() {
  const dispatch = useDispatch();
  const { isAuth, isLoading,  isError } = useSelector(
    (state) => state.auth,
    shallowEqual
  );
 
  const handleLogin = ({ email, password }) => {
    dispatch(loginUser({ email, password }));
  };
  if (isAuth) {
    return <Redirect to="/" />;
  }
  if (isLoading) {
    return <div>...loading</div>;
  }
  return (
    <div>
      <Login1 handleLogin={handleLogin}  />
      {isError && <div> something went wrong </div>}
    </div>
  );
}

export { LoginPage };
