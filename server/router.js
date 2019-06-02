const express = require("express");
const router = express.Router();
const axios = require("axios");
const path = require("path");

let headers={
    "Accept": "application/json",
    "Content-Type": "application/json"
}

router.get("/a",(req,res)=>{
    res.send("hello");
});

router.get('/countryCode',(req, res)=>{
    axios({
        url: "https://restcountries.eu/rest/v2/alpha/"+req.query.code,
        method: "GET",
        headers: headers,
    }).then(function(response){
        console.log(response.data);
        if(response && response.status === 200 && response.data){
            res.send(response.data);
        } 
    }).catch(function(error){
       res.status("500").send("Something went wrong please try after sometime");
    });
});

router.get('/allCountryCodes',(req, res)=>{
    axios({
        url: "https://restcountries.eu/rest/v2/all",
        method: "GET",
        headers: headers,
    }).then(function(response){
        if(response && response.status === 200 && response.data){
            res.send(response.data);
        } 
    }).catch(function(error){
       res.status("500").send("Something went wrong please try after sometime");
    });
});

router.get('/countryDetails',(req, res)=>{
    console.log(req.query);
    axios({
        url: "https://restcountries.eu/rest/v2/alpha?codes="+req.query.codes,
        method: "GET",
        headers: headers,
    }).then(function(response){
        if(response && response.status === 200 && response.data){
            res.send(response.data);
        } 
    }).catch(function(error){
       res.status("500").send("Something went wrong please try after sometime");
    });
});

router.get('/getDetails',(req, res)=>{
    console.log(req.query);
    axios({
        url: "https://restcountries.eu/rest/v2/alpha/"+req.query.codes,
        method: "GET",
        headers: headers,
    }).then(function(response){
        if(response && response.status === 200 && response.data){
            res.send(response.data);
        } 
    }).catch(function(error){
       res.status("500").send("Something went wrong please try after sometime");
    });
});

router.get("*", (req,res)=>{
    res.sendFile(path.join(__dirname, '../dist/deque-task/index.html')); 
});

module.exports = router;
