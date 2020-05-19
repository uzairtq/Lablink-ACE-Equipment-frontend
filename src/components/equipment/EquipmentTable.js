import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import ToolBar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
//import MoreIcon from "@material-ui/icons/MoreVert";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  Pane_Paper_Left: {
    //padding: 20,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    //height: 500,
    minWidth: 200
    //overflowY: "auto"
  },
  Pane_Paper_Right: {
    //padding: 20,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2)
    //height: 500
  },
  grow: {
    flexGrow: 1
  }
});

const equipmentTable = props => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item sm>
        <Paper className={props.classes.Pane_Paper_Left}>
          <ToolBar>
            <Typography
              variant="h5"
              color="inherit"
              className={props.classes.grow}
            >
              Equipment Status
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={props.onNewEquipment}
            >
              Add
            </Button>
          </ToolBar>
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell>
                  <b>Equipment</b>
                </TableCell>
                <TableCell align="center" style={{ minWidth: 90 }}>
                  <b>ID No.</b>
                </TableCell>
                <TableCell align="center" style={{ minWidth: 120 }}>
                  <b>Checked in</b>
                </TableCell>
                <TableCell>
                  <b>Expected return</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.equipmentList.map(equipment => (
                <TableRow hover key={equipment.id}>
                  <TableCell>{equipment.description}</TableCell>
                  <TableCell align="center">{equipment.id}</TableCell>
                  <TableCell align="center">
                    {equipment.hasOwnProperty("checkedIn")
                      ? equipment.checkedIn
                      : ""}
                  </TableCell>
                  <TableCell>
                    {equipment.hasOwnProperty("returnDate")
                      ? equipment.returnDate
                      : ""}
                  </TableCell>
                  <TableCell align="right" style={{ minWidth: 110 }}>
                    <IconButton
                      size="small"
                      onClick={() => props.onEditEquipment(equipment)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton size="small" style={{ marginLeft: 10 }}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper className={props.classes.Pane_Paper_Right}>
          <Typography variant="h4">Equipment</Typography>
          <Typography variant="subtitle1" style={{ marginTop: 20 }}>
            Notes:
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(equipmentTable);
