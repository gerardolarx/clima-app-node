const axios = require("axios");

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://community-open-weather-map.p.rapidapi.com/weather?lat=${ lat }&lon=${ lng }&appid=32b1a78e92msh1e37025b094607ap10720cjsn55b3f98e0d77&units=metric`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}