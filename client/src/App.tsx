import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";
import PrivateRoute from "./components/PrivateRoute";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Subjects from "./pages/Subjects";

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute
            exact={true}
            path="/subjects/:id?"
            component={Subjects}
          />
        </Switch>
      </Router>
    </>
  );
};

export default App;
