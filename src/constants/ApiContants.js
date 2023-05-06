const baseUrl = process.env.VUE_APP_BASE_URL
const v1 = '/v1/api/order'
const ApiContant = {
    home: baseUrl + v1 + '/home',
    order: baseUrl + v1 + '/order',
    product: baseUrl + v1 + '/product',
}

export default ApiContant;