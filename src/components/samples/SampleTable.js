import React from "react";

import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MoreIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "auto",
    marginTop: theme.spacing(5),
    marginLeft: theme.spacing(5),
    marginRight: theme.spacing(5)
    // overFlowX: 'auto',
  },
  grow: {
    flexGrow: 1
  }
});

const sampleTable = props => {
  return (
    <Paper className={props.classes.root}>
      <ToolBar>
        <Typography variant="h6" color="inherit" className={props.classes.grow}>
          Samples
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={props.onNewSample}
        >
          New
        </Button>
      </ToolBar>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Alias</TableCell>
            <TableCell>Requestor</TableCell>
            <TableCell colSpan={2}>Assignee</TableCell>
            {/* <TableCell>Role</TableCell> */}
            {/* <TableCell>Last Active</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {props.sampleList.map(sample => (
            <TableRow hover key={sample.id}>
              <TableCell>{sample.id}</TableCell>
              <TableCell>{sample.alias}</TableCell>
              <TableCell>
                {sample.hasOwnProperty("owner") ? sample.owner : ""}
              </TableCell>
              <TableCell>
                {sample.hasOwnProperty("owner") ? sample.assignee : ""}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => props.onEditSample(sample)}
                >
                  Edit
                </Button>
                <IconButton
                  color="inherit"
                  onClick={() => console.log("lots more about " + sample.id)}
                >
                  <MoreIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default withStyles(styles)(sampleTable);
