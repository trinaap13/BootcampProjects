import React, { useState } from "react";
import { Route, Switch, Redirect, useHistory } from "react-router-dom";
import Colors from "./Colors";
import ColorDetails from "./ColorDetails";
import SubmitColor from "./SubmitColor";

function Routes() {
  const history = useHistory();
  const [colors, setColors] = useState(["red", "yellow", "blue"])

  function handleSubmit(e) {
    e.preventDefault();
    const newColor = e.target[0].value
    setColors(data => ([
      ...data,
      newColor
    ]))
    history.push('/')
}

  return (
    <Switch>
      <Route exact path="/colors"><Colors colors={colors}/></Route>
      <Route exact path="/colors/new"><SubmitColor handleSubmit={handleSubmit}/></Route>
      <Route exact path="/colors/:color"><ColorDetails /></Route>
      <Redirect to="/colors" />
    </Switch>
  );
}

export default Routes;
