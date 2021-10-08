import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./sass/main.scss";
// import Dashboard from "./screens/dashoard";
 const Home = lazy(() => import("./screens/home"));
//  const Login = lazy(() => import("./screens/login"));
// const Signup = lazy(() => import("./screens/signup"));
// const Forget = lazy(() => import("./screens/forget"));
// const Dashboard = lazy(() => import("./screens/dashoard.js"));
// const Music = lazy(() => import("./screens/music"));



// const Member = lazy(() => import("./screens"));e


function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Router>
        <Switch>
           <Route exact path="/" component={Home} /> 
          {/* <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
            <Route exact path="/forget" component={Forget} /> 
           <Route exact path="/dashboard" component={Dashboard} />  */}
          {/*<Route exact path="/music" component={Music} />  */}



          
        </Switch>
      </Router>
    </Suspense>


  );
}

export default App;
