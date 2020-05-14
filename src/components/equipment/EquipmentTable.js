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

const equipmentTable = props => {
  return (
    <Paper className={props.classes.root}>
      <ToolBar>
        <Typography variant="h6" color="inherit" className={props.classes.grow}>
          Equipment Tracking
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          onClick={props.onNewEquipment}
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
          {props.equipmentList.map(equipment => (
            <TableRow hover key={equipment.id}>
              <TableCell>{equipment.id}</TableCell>
              <TableCell>{equipment.alias}</TableCell>
              <TableCell>
                {equipment.hasOwnProperty("owner") ? equipment.owner : ""}
              </TableCell>
              <TableCell>
                {equipment.hasOwnProperty("owner") ? equipment.assignee : ""}
              </TableCell>
              <TableCell align="right">
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => props.onEditEquipment(equipment)}
                >
                  Edit
                </Button>
                <IconButton
                  color="inherit"
                  onClick={() => console.log("lots more about " + equipment.id)}
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

export default withStyles(styles)(equipmentTable);
