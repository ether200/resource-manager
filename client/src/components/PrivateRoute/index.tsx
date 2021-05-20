import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";
import { RootStore } from "../../redux/store";

// Action creators
import { getUser } from "../../redux/actions/userActions";

const PrivateRoute: React.FC<RouteProps> = ({
  component: Component,
  ...props
}) => {
  const dispatch = useDispatch();
  const { authError, authorized } = useSelector(
    (state: RootStore) => state.userState
  );

  useEffect(() => {
    if (!authorized) {
      dispatch(getUser);
    }
  }, [authorized, dispatch]);

  // If there's an authError like being not authorized redirect to login page
  return (
    <Route
      {...props}
      render={(props: RouteComponentProps) =>
        authError ? <Redirect to="/" /> : Component && <Component {...props} />
      }
    />
  );
};

export default PrivateRoute;
