import apiClient from "./client";

const adressEndpoint = "/adressdetails";


const getAdressDetail = (id) => apiClient.get(adressEndpoint+"/" + id);


export default {
    getAdressDetail
}
