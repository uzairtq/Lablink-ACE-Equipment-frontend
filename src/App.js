import React, { Fragment } from "react";
import Layout from "./components/Layouts/Layout";
import Tabs from "./components/Layouts/Tabs";
import "./App.css";
import Equipment from "./components/equipment/Equipment";

function App() {
  ////////////////////////////////////
  const user = {
    first_name: "Uzair",
    last_name: "Tariq"
  };
  ////////////////////////////////////
  return (
    <Fragment>
      <Layout isAuthenticated={true} user={user} />
      <Tabs />
      <Equipment />
    </Fragment>
  );
}

export default App;
