import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Components
import Login from "./pages/Login";
import Register from "./pages/Register";
import Subjects from "./pages/Subjects";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          {/* High order component */}
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
