

import { createBrowserHistory } from "history";
import { Route, Switch, Router } from "react-router-dom";
import AuthPage from './templates/Auth/Auth';
import UserProfile from "./pages/UserProfile";
import LoginForm from "./components/Forms/LoginForm";
import RegisterForm from "./components/Forms/RegisterForm";
import InvestorList from "./pages/InvestorList";
import EditPage from "./pages/EditPage";


export const history = createBrowserHistory();




function App() {


  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/user-profile/:id" component={UserProfile} />
        <Route exact path="/" component={UserProfile} />
        <AuthPage exact path="/auth/login" Component={LoginForm} />
        <AuthPage exact path="/auth/register" Component={RegisterForm} />
        <AuthPage exact path="/auth/register" Component={RegisterForm} />
        <Route exact path="/admin/investor-list" component={InvestorList} />
        <Route exact path="/admin/edit-page" component={EditPage} />

      </Switch>
    </Router>
  );
}

export default App;
