import React from 'react'
import AsyncStorage from 'react-native'



const URL = "https://benedikteeva.dk/jwtBackend%2D1.0%2DSNAPSHOT";

function handleHttpErrors(res) {
    if (!res.ok) {
        throw { message: res.statusText, status: res.status };
    }
    return res.json();
}

class AppFacade {

    fetchData = () => {
        const options = this.makeFetchOptions("GET");
        return fetch(URL + "/api/info/user", options).then(handleHttpErrors);
    }

    setToken = async (token) => {
        try {
            await AsyncStorage.setItem('jwtToken', token)
        } catch(error){
            alert("in setToken  "+error)
        }
    }

    getToken =async () => {
        try {
          await AsyncStorage.getItem('jwtToken');
        } catch(error){
            alert("getToken  "+error)
        }
    }

    loggedIn = () => {
        const loggedIn = this.getToken() != null;
        return loggedIn;
    }
    logout = async () => {
        try {
            await AsyncStorage.removeItem('jwtToken');
        } catch(error){
            alert("logout "+error)
        }
    }

    login = (user, pass) => {

        const options = this.makeFetchOptions("POST", { username: user, password: pass });
        return fetch(URL + "/api/login", options, true)
            .then(handleHttpErrors)
            .then(res => { this.setToken(res.token) })


    }

    makeFetchOptions = (type, b) => {
        let headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
        if (this.loggedIn()) {
            headers["x-access-token"] = this.getToken();
        }
        return {
            method: type,
            headers,
            body: JSON.stringify(b)
        }
    }
}
const facade = new AppFacade();

export default facade;


