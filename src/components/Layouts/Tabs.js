import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Tabs, Tab } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  TabBar: {
    backgroundColor: "#ffb300"
  }
}));

export default function CenteredTabs() {
  const classes = useStyles();
  const [index, setIndex] = React.useState(0);

  const handleChange = (event, newIndex) => {
    setIndex(newIndex);
  };
  return (
    <Paper className={classes.root}>
      <Tabs
        className={classes.TabBar}
        value={index}
        onChange={handleChange}
        variant="scrollable"
        indicatorColor="primary"
        textColor="inherit"
      >
        <Tab label="All" />
        <Tab label="Flow meter" />
        <Tab label="Multimeter" />
      </Tabs>
    </Paper>
  );
}
