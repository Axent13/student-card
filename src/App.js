import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Mainpage from "./layouts/mainpage";
import CardEditorPage from "./layouts/cardEditorPage";

function App() {
  return (
    <div className="m-5">
      <Switch>
        <Route path="/cardEditor" component={CardEditorPage} />
        <Route path="/" component={Mainpage} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
