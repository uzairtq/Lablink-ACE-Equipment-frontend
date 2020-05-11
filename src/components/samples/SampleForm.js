import React from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";

const NewSample = props => {
  // let initialValue = {
  //     alias:'',
  //     description:'',
  //     owner:'',
  //     assignee:'',
  //     siteCode:'IK',
  //
  // };
  let title = "New Sample";
  let confirmText = "Save";

  let [sampleData, setSampleData] = React.useState({ ...props.sampleData });
  if (props.edit) {
    // initialValue = props.sampleData;
    title = "Edit " + props.sampleData.id;
    confirmText = "Update";
  }

  const handleChange = inputName => event => {
    setSampleData({
      ...sampleData,
      [inputName]: event.target.value
    });
  };

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <TextField
              id="alias"
              label="Alias"
              defaultValue={props.sampleData.alias}
              onChange={handleChange("alias")}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="description"
              label="Description"
              multiline
              rowsMax={4}
              defaultValue={props.sampleData.description}
              onChange={handleChange("description")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="requester"
              label="requester"
              type="email"
              defaultValue={props.sampleData.owner}
              onChange={handleChange("owner")}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="assignee"
              label="Assignee"
              defaultValue={props.sampleData.assignee}
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
          onClick={() => props.onSubmit(sampleData)}
          color="primary"
          variant="contained"
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default NewSample;
