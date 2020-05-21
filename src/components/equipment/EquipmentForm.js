import React from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const NewEquipment = props => {
  // let initialValue = {
  //     alias:'',
  //     description:'',
  //     owner:'',
  //     assignee:'',
  //     siteCode:'IK',
  //
  // };
  let title = "Add an equipment";
  let confirmText = "Save";

  let [equipmentData, setEquipmentData] = React.useState({
    ...props.equipmentData
  });
  if (props.edit) {
    // initialValue = props.equipmentData;
    title = "Edit Item " + props.equipmentData.id;
    confirmText = "Update";
  }

  const handleChange = inputName => event => {
    setEquipmentData({
      ...equipmentData,
      [inputName]: event.target.value
        ? event.target.value
        : event.target.checked
    });
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TextField
              id="id"
              label="ID No."
              defaultValue={props.equipmentData.id}
              onChange={handleChange("id")}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="description"
              label="Description"
              defaultValue={props.equipmentData.description}
              onChange={handleChange("description")}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="location"
              label="Location"
              defaultValue={props.equipmentData.location}
              onChange={handleChange("location")}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={equipmentData.checkedIn}
                  onChange={handleChange("checkedIn")}
                  name="checkedIn"
                  color="primary"
                />
              }
              label={<label style={{ fontSize: "0.9em" }}>Checked In</label>}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="returnDate"
              label="Expected Return"
              defaultValue={props.equipmentData.returnDate}
              onChange={handleChange("returnDate")}
            />
          </Grid>
          <Grid item xs={5}>
            <TextField
              id="checkedOutTo"
              label="Checked Out To"
              defaultValue={props.equipmentData.checkedOutTo}
              onChange={handleChange("checkedOutTo")}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={equipmentData.calibrated}
                  onChange={handleChange("calibrated")}
                  name="calibrated"
                  color="primary"
                />
              }
              label={<label style={{ fontSize: "0.9em" }}>Calibrated</label>}
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              id="calibrationDue"
              label="Calibration Due Date"
              defaultValue={props.equipmentData.calibrationDue}
              onChange={handleChange("calibrationDue")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="notes"
              label="Notes"
              multiline
              rows={4}
              defaultValue={props.equipmentData.notes}
              onChange={handleChange("notes")}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancel
        </Button>
        <Button
          onClick={() => props.onSubmit(equipmentData)}
          color="primary"
          variant="contained"
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewEquipment;
