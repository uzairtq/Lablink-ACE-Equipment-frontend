import axios from '../axios-config';
import {samplesUrl, sampleUrl} from "../config/urls";

const sampleApi = {
    get(filters) {
        // let sampleData = [];
        return axios.get(samplesUrl)
            // .then(res => {
                // sampleData = res.data.data;
            // })
            // .catch(err => console.log(err))
        // return sampleData;
    },
    createNew(data) {
        console.log(data);
        return axios.post(sampleUrl, data)
    },
    edit(data) {
        console.log(data);
        return axios.put(sampleUrl + '/' + data.id, data)
    }

};

export default sampleApi;