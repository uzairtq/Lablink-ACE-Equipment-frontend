import React from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

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
    title = "Edit " + props.equipmentData.id;
    confirmText = "Update";
  }

  const handleChange = inputName => event => {
    setEquipmentData({
      ...equipmentData,
      [inputName]: event.target.value
    });
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField
              id="alias"
              label="Alias"
              defaultValue={props.equipmentData.alias}
              onChange={handleChange("alias")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="requester"
              label="requester"
              type="email"
              defaultValue={props.equipmentData.owner}
              onChange={handleChange("owner")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="description"
              label="Description"
              multiline
              rows={4}
              defaultValue={props.equipmentData.description}
              onChange={handleChange("description")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="assignee"
              label="Assignee"
              defaultValue={props.equipmentData.assignee}
              onChange={handleChange("assignee")}
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
