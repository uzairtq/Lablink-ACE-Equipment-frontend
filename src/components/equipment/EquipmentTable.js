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
import { makeStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles(theme => ({
  Pane_Paper_Left: {
    //padding: 20,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(1)
    //height: 500,
    //overflowY: "auto"
  },
  Pane_Paper_Right: {
    //padding: 20,
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(2)
    //height: 500
  },
  grow: {
    flexGrow: 1
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: "#FAFAFA",
    "&:hover": {
      backgroundColor: "#EAEAEA"
    },
    marginRight: theme.spacing(1),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "auto"
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch"
      }
    }
  },
  media: {
    height: 360,
    minWidth: 550
  }
}));

export default function EquipmentTable(props) {
  const classes = useStyles();
  const [selectedEquipment, setSelectedEquipment] = React.useState(
    props.equipmentList[0]
  );
  const OnSelectEquipment = equipment => {
    setSelectedEquipment(equipment);
  };
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
    >
      <Grid item sm>
        <Paper className={classes.Pane_Paper_Left}>
          <ToolBar>
            <Typography variant="h5" color="inherit" className={classes.grow}>
              Equipment Status
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
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
                  <b>Checked In</b>
                </TableCell>
                <TableCell>
                  <b>Expected return</b>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.equipmentList.map(equipment => (
                <TableRow
                  hover
                  key={equipment.id}
                  onClick={() => OnSelectEquipment(equipment)}
                >
                  <TableCell>{equipment.description}</TableCell>
                  <TableCell align="center">{equipment.id}</TableCell>
                  <TableCell align="center">
                    {equipment.hasOwnProperty("checkedIn")
                      ? equipment.checkedIn === true
                        ? "Yes"
                        : "No"
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
        <Paper className={classes.Pane_Paper_Right}>
          <Card>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={selectedEquipment.image}
                //title="TSI Mass Flowmeter"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {selectedEquipment.description}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Location:</b> {selectedEquipment.location}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Checked Out To:</b> {selectedEquipment.checkedOutTo}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>
                    This equipment is{" "}
                    {selectedEquipment.calibrated
                      ? "calibrated"
                      : "not calibrated"}
                  </b>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>
                    Calibration is due on {selectedEquipment.calibrationDue}
                  </b>
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <b>Notes:</b> {selectedEquipment.notes}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Paper>
      </Grid>
    </Grid>
  );
}
