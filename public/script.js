console.log(`Script is loaded`);

// const response = fetch('/cryptoname');
// // const data = response.json();
// // let dinoName = data['id'];
// console.log(response);

getCryptoDetails();
 
async function getCryptoDetails(){
    console.log("genereated");
    const response = await fetch('/cryptoname');
    const data = await response.json();
    console.log(data);
    // let dinoName = data[0].join(' ');

    let coin = data['coins'];
    console.log(data);
    for(let i=0;i<coin.length;i++)
    {
        let coinName = coin[i].id;
        let coinPrice = coin[i].price;
        let coinURL = coin[i].websiteUrl;
        // console.log(coinName);

        let crytoNameDiv = document.createElement('a');
        // let crytoNameDiv = document.createElement('p');
        crytoNameDiv.className = 'coinName';
        crytoNameDiv.id = ""+coinName;
        let textToEnter = coinName + "\n₹"+coinPrice;
        // console.log(textToEnter);
        crytoNameDiv.textContent= textToEnter;
        crytoNameDiv.href= coinURL;
        crytoNameDiv.target="_blank" ;
        // `${coinName} ₹${coinPrice}`;
        // crytoNameDiv.href = `/+${coinName}`;

        crytoNameDiv.style.padding = "0.6rem";
        document.querySelector('.names').appendChild(crytoNameDiv);

    }

    // setInterval(getCryptoDetails(),600000);
    
}




function search_coin(){
    var element = document.getElementById("search-box");
    var icon = document.getElementById("search-icon-atag");
    let input = element.value;
    var href_link = `#${input}`;
    icon.href = href_link;
    document.getElementById(input).style.background = "lightblue";
    document.getElementById(input).style.color = "black";
    setTimeout( () => {
        document.getElementById(input).style.background = "#102538"
        document.getElementById(input).style.color = "white"
    }, 5000);

    // console.log(input);
}
