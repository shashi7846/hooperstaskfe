import "./App.css";
import Header from "./Header";
import Login from "./Login";
import Bottom from "./Bottom";
import CollegeList from "./CollegeList";

import Share from "./Share";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <div className="header_top">
          <Header />
        </div>

        <Switch>
          {/* <div className="Main_content">
        <Collegeoptions/>
      </div> */}
          <Route path="/" component={Login} exact>
            {/* <Login /> */}
          </Route>

          <Route path="/collegelist/:id" component={CollegeList} exact>
            {/* <CollegeList /> */}
          </Route>
          {/* <Route path="/collegelists" component={Collegelists} exact>

          </Route> */}
        </Switch>
        <div className="Social_media">
          <Share />
        </div>

        <div className="Header_bottom">
          <Bottom />
        </div>
       
      </div>
    </Router>
  );
}

export default App;
