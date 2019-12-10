import React from "react";
import sampleApi from '../../resources/sampleApi';
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
        this.setState({newSample: true});
    };
    handleEditSample = sampleData => {
      this.setState({editSample: true, editData:sampleData})
    };

    fetchSampleList = () => {
        sampleApi.get()
            .then(res => {
                this.setState({sampleData: res.data.data});
                console.log(res.data.data);
            })
            .catch(err => console.log(err))
    };

    handleSampleInputClose = () => this.setState({newSample: false, editSample:false});

    handleSampleSubmit = sampleData => {
        this.setState({newSample: false, editSample: false});
        if (sampleData.hasOwnProperty('id')) {
            sampleApi.edit(sampleData)
                .then(res => {
                    console.log(res.data);
                    this.fetchSampleList();
                })
                .catch(err => console.log(err));
        } else {
            sampleApi.createNew(sampleData)
                .then( res => {
                    let samplesList = this.state.sampleData;
                    samplesList.push(res.data.data);
                    this.setState({sampleData: samplesList});
                })
                .catch(err => console.log(err));
        }
    };

    render() {

        const newSampleData = {
            alias:'',
            description:'',
            owner:'',
            assignee:'',
            siteCode:'IK',
        };

        let samples = <h1>Samples</h1>;
        if (this.state.sampleData.length > 0) {
            // samples = this.state.sampleData.map(s => (<h1>{s.id}</h1>))
            samples = <SampleTable sampleList={this.state.sampleData} onNewSample={this.handleNewSample} onEditSample={this.handleEditSample}/>
        }
        let sampleForm = null;
        if (this.state.newSample || this.state.editSample) {
            sampleForm = <SampleForm
                open={this.state.newSample || this.state.editSample}
                sampleData={this.state.editSample ? this.state.editData : newSampleData}
                edit={this.state.editSample}
                handleClose={this.handleSampleInputClose}
                onSubmit={this.handleSampleSubmit}/>
        }

        return (
            <React.Fragment>
                <div>
                    {samples}
                </div>
                {sampleForm}
            </React.Fragment>
        )
    }
}

export default Samples;