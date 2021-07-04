const express = require('express');
const port = 3000;
const fetch = require('node-fetch');

const app = express();

app.use(express.static('public'));

app.listen(port,() => {
    console.log(`App listening at http://localhost:${port}`)
});


app.get('/cryptoname', async(request, response) => {
    // run code stuff
    console.log("get is generated");
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
    const fetchApi = await fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit>0&currency=INR", requestOptions);

    const bitcoinResponse = await fetchApi.json();
    // console.log(bitcoinResponse);
    response.json(bitcoinResponse);

});




//  API ---->   https://api.coinstats.app/public/v1/coins?skip=0&limit>0
