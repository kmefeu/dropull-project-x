import React from "react";
import Home from "pages/Home";
import AssetDetails from "pages/AssetDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route
          path={"/asset/:assetContractAddress/:tokenId"}
          exact
          component={AssetDetails}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
