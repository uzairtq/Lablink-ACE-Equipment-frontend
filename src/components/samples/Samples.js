import React from "react";
import sampleApi from "../../resources/sampleApi";
import SampleTable from "./SampleTable";
import SampleForm from "./SampleForm";

class Samples extends React.Component {
  state = {
    sampleData: [],
    editData: null,
    newSample: false,
    editSample: false
  };

  componentDidMount() {
    this.fetchSampleList();
  }

  handleNewSample = () => {
    this.setState({ newSample: true });
  };
  handleEditSample = sampleData => {
    this.setState({ editSample: true, editData: sampleData });
  };

  fetchSampleList = () => {
    //    sampleApi
    //      .getHomepage()
    //      .then(res => {
    this.setState({
      status: "success",
      data: [
        {
          serialNumber: null,
          description: "sample",
          submittedDate: "2020-05-07T14:01:10.292000",
          siteCode: "IK",
          _links: {
            self: "/api/samples/IK20_00002"
          },
          testRequests: [],
          productNumber: null,
          owner: "tom.jones@example.com",
          id: "IK20_00002",
          image: null,
          softwareVersion: null,
          assignee: "tom.jones@example.com",
          alias: "sample 1"
        },
        {
          serialNumber: null,
          description: "sample",
          submittedDate: "2020-05-07T14:01:24.665000",
          siteCode: "IK",
          _links: {
            self: "/api/samples/IK20_00003"
          },
          testRequests: [],
          productNumber: null,
          owner: "tom.jones@example.com",
          id: "IK20_00003",
          image: null,
          softwareVersion: null,
          assignee: "tom.jones@example.com",
          alias: "sample 2"
        },
        {
          serialNumber: null,
          description: "sample",
          submittedDate: "2020-05-07T14:01:28.376000",
          siteCode: "IK",
          _links: {
            self: "/api/samples/IK20_00004"
          },
          testRequests: [],
          productNumber: null,
          owner: "tom.jones@example.com",
          id: "IK20_00004",
          image: null,
          softwareVersion: null,
          assignee: "tom.jones@example.com",
          alias: "sample 3"
        },
        {
          serialNumber: null,
          description: "sample",
          submittedDate: "2020-05-07T14:01:32.087000",
          siteCode: "IK",
          _links: {
            self: "/api/samples/IK20_00005"
          },
          testRequests: [],
          productNumber: null,
          owner: "tom.jones@example.com",
          id: "IK20_00005",
          image: null,
          softwareVersion: null,
          assignee: "tom.jones@example.com",
          alias: "sample 4"
        },
        {
          serialNumber: null,
          description: "sample",
          submittedDate: "2020-05-07T14:01:37.607000",
          siteCode: "IK",
          _links: {
            self: "/api/samples/IK20_00006"
          },
          testRequests: [],
          productNumber: null,
          owner: "tom.jones@example.com",
          id: "IK20_00006",
          image: null,
          softwareVersion: null,
          assignee: "tom.jones@example.com",
          alias: "sample 5"
        }
      ]
    });
    //    console.log(this.sampleData);
    //        console.log(res.data.data);
    //      })
    //      .catch(err => console.log(err));
  };

  handleSampleInputClose = () =>
    this.setState({ newSample: false, editSample: false });

  handleSampleSubmit = sampleData => {
    this.setState({ newSample: false, editSample: false });
    if (sampleData.hasOwnProperty("id")) {
      sampleApi
        .edit(sampleData)
        .then(res => {
          console.log(res.data);
          this.fetchSampleList();
        })
        .catch(err => console.log(err));
    } else {
      ////      sampleApi
      //       .createNew(sampleData)
      //        .then(res => {
      let samplesList = this.state.sampleData;
      samplesList.push(sampleData);
      this.setState({ sampleData: samplesList });
      //        })
      //       .catch(err => console.log(err));
    }
  };

  render() {
    const newSampleData = {
      alias: "",
      description: "",
      owner: "",
      assignee: "",
      siteCode: "IK"
    };

    let samples = <h1>Samples</h1>;
    //    if (this.state.sampleData.size > 0) {
    // samples = this.state.sampleData.map(s => (<h1>{s.id}</h1>))
    samples = (
      <SampleTable
        sampleList={this.state.sampleData}
        onNewSample={this.handleNewSample}
        onEditSample={this.handleEditSample}
      />
    );
    //    }
    let sampleForm = null;
    if (this.state.newSample || this.state.editSample) {
      sampleForm = (
        <SampleForm
          open={this.state.newSample || this.state.editSample}
          sampleData={
            this.state.editSample ? this.state.editData : newSampleData
          }
          edit={this.state.editSample}
          handleClose={this.handleSampleInputClose}
          onSubmit={this.handleSampleSubmit}
        />
      );
    }

    return (
      <React.Fragment>
        <div>{samples}</div>
        {sampleForm}
      </React.Fragment>
    );
  }
}

export default Samples;
