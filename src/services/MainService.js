const MainService = {}

MainService.headers = function() {
    let header = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    return header;
}

MainService.validateError = function(data) {
    if(data && data.status === 500) {
        let error = {
            response:{ 
                data : data 
            },
            message: {
                description: data.data.error
            }
        }
        return error
    }
    if(data && data.status === 401) {
        MainService.logout();
    }
    return data.data;
};

export default MainService;