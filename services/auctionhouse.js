const axios = require('axios')

const getToken = () => {
    return axios.post('https://us.battle.net/oauth/token', {}, {
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        auth: {
            username: process.env.CLIENT_ID,
            password: process.env.CLIENT_SECRET,
        },
        params: {
            grant_type:'client_credentials'
        }
    })
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            console.log(error);
        });
}
const getAHSnapshot = (tokenData) => {
    return axios.get('https://eu.api.blizzard.com', {
        
    }, {

    })
}
module.exports = {
    getToken,
}