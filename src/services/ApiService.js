import axios from 'axios'
import Service from './MainService'
import ApiContant from './../constants/ApiContants'

const ApiService = {}

ApiService.getHome = async function() {
    return await axios.get(ApiContant.home,
            Service.headers())
        .then((response) => {
            return Service.validateError(response);
        }).catch(function(error) {
            return Service.validateError(error.response);
        })
};

ApiService.getOrder = async function(body) {
    return await axios.post(ApiContant.order,
        body,
        Service.headers())
        .then((response) => {
            return Service.validateError(response);
        }).catch(function(error) {
            return Service.validateError(error.response);
        })
};

ApiService.getProduct = async function(productId) {
    return await axios.get(ApiContant.product + "/" + productId,
            Service.headers())
        .then((response) => {
            return Service.validateError(response);
        }).catch(function(error) {
            return Service.validateError(error.response);
        })
};

export default ApiService;