import axios from '../axios-config';
import {searchUrl, getAndSetUrl, homeUrl} from "../config/urls";

const sampleApi = {
    getHomepage() {
        return axios.get(homeUrl)
    },
    search(filters) {
        return axios.get(searchUrl);
    },
    createNew(data) {
        console.log(data);
        return axios.post(getAndSetUrl, data)
    },
    edit(data) {
        console.log(data);
        return axios.put(getAndSetUrl + '/' + data.id, data)
    }

};

export default sampleApi;