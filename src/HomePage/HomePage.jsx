import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../_actions";
import Pay from "./components/Artems_Pay_Component/Pay";

import Grid from "@material-ui/core/Grid";
import { ButtonGroup, Button } from "@material-ui/core";
import { PatientPage } from "../PatientPage";
import { InvoiceRender } from "../Rory_Component";
import { Link } from "react-router-dom";

import { RetrieveInfo } from "../_services";

function HomePage() {
  const users = useSelector((state) => state.users);
  const user = useSelector((state) => state.authentication.user);
  const dispatch = useDispatch();
  {
    /* useEffect(() => {
    dispatch(userActions.getAll());
  }, []);
*/
  }

  function handleDeleteUser(id) {
    dispatch(userActions.delete(id));
  }

  return (
    <Grid container direction="column" style={{ height: "89vh" }}>
      <Grid item style={{ height: "4vh" }}>
        <Link to="/patient">Your Patient History</Link>
      </Grid>
      <Grid item style={{ height: "75vh" }}>
        Content Home Page
        <Button onClick={() => {}}>Try to get</Button>
      </Grid>
      <Grid item style={{ height: "10vh" }}>
        {<Pay />}
      </Grid>
    </Grid>
  );
}

export { HomePage };
