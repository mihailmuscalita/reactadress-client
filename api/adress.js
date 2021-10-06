import apiClient from "./client";

const adressEndpoint = "/adress"

const getAdress = () => apiClient.get(adressEndpoint);


export default {
    getAdress
}