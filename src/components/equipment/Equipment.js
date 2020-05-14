import React from "react";
import EquipmentTable from "./EquipmentTable";
import EquipmentForm from "./EquipmentForm";
import { equipment_list_data } from "../datastore.js";

class Equipment extends React.Component {
  state = {
    equipmentData: [],
    editData: null,
    newEquipment: false,
    editEquipment: false
  };

  componentDidMount() {
    this.fetchEquipmentList();
  }

  handleNewEquipment = () => {
    this.setState({ newEquipment: true });
  };
  handleEditEquipment = equipmentData => {
    this.setState({ editEquipment: true, editData: equipmentData });
  };

  fetchEquipmentList = () => {
    this.setState({ equipmentData: equipment_list_data.data });
  };

  handleEquipmentInputClose = () =>
    this.setState({ newEquipment: false, editEquipment: false });

  handleEquipmentSubmit = equipmentData => {
    this.setState({ newEquipment: false, editEquipment: false });
    if (equipmentData.hasOwnProperty("id")) {
      let equipmentList = this.state.equipmentData;
      equipmentList[
        equipmentList.indexOf(
          equipmentList.find(eq => eq.id === equipmentData.id)
        )
      ] = equipmentData;
      this.setState({ equipmentData: equipmentList });
    } else {
      //CREATE ID FOR NEW ENTRY
      let equipmentList = this.state.equipmentData;
      equipmentList.push(equipmentData);
      this.setState({ equipmentData: equipmentList });
    }
  };

  render() {
    const newEquipmentData = {
      alias: "",
      description: "",
      owner: "",
      assignee: "",
      siteCode: "IK"
    };

    let equipment = <h1>Equipment Tracking</h1>;
    if (this.state.equipmentData.length > 0) {
      // equipment = this.state.equipmentData.map(s => (<h1>{s.id}</h1>))
      equipment = (
        <EquipmentTable
          equipmentList={this.state.equipmentData}
          onNewEquipment={this.handleNewEquipment}
          onEditEquipment={this.handleEditEquipment}
        />
      );
    }
    let equipmentForm = null;
    if (this.state.newEquipment || this.state.editEquipment) {
      equipmentForm = (
        <EquipmentForm
          open={this.state.newEquipment || this.state.editEquipment}
          equipmentData={
            this.state.editEquipment ? this.state.editData : newEquipmentData
          }
          edit={this.state.editEquipment}
          handleClose={this.handleEquipmentInputClose}
          onSubmit={this.handleEquipmentSubmit}
        />
      );
    }

    return (
      <React.Fragment>
        <div>{equipment}</div>
        {equipmentForm}
      </React.Fragment>
    );
  }
}

export default Equipment;
