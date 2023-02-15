import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../header";

export const PublicRoute = ({ component: Component, ...props }) => {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <Header />
      {user && props.restricted ? (
        <Navigate
          to={{ pathname: "/", state: { from: props.location } }}
          replace
        />
      ) : (
        <Component {...props} />
      )}
    </>
  );
};
