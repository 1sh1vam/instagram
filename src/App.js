import React, { lazy, Suspense } from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import UserContext from "./context/user"
import useAuthListener from "./hooks/use-auth-listener"
import * as ROUTES from "./constants/routes"
import ProtectedRoute from "./helpers/protected-route";
import IsUserLoggedIn from "./helpers/is-user-logged-in";

const Login = lazy(() => import("./pages/login"));
const SignUp = lazy(() => import("./pages/signup"));
const Profile = lazy(() => import("./pages/profile"));
const NotFound = lazy(() => import("./pages/not-found"));
const Dashboard = lazy(() => import("./pages/dashboard"));

function App() {
  const { user } = useAuthListener()
  return (
    <UserContext.Provider value={{ user }}>
      <Router>
        <Suspense fallback={<p>Loading...</p>}>
          <Switch>
            <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD} >
              <Login />
            </IsUserLoggedIn>
            <IsUserLoggedIn user={user} loggedInPath={ROUTES.DASHBOARD}>
              <SignUp />
            </IsUserLoggedIn>
            <Route path={ROUTES.PROFILE} component={Profile} />
            <ProtectedRoute user={user}>
              <Dashboard />
            </ProtectedRoute>
            <Route path={ROUTES.DASHBOARD} component={Dashboard} exact />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
