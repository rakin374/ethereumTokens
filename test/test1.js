console.log("Starting test1.js");
var Web3 = require('web3'); // needs to be removed when added to html file
var web3 = new Web3('ws://localhost:7545');
var Contract = web3.eth.Contract;

var jsonDataRaki = require('./build/contracts/ERC20.json');
//console.log(jsonDataRaki);
var abi = jsonDataRaki.abi;
var addy = "0x1653d26Afb38b588F7430bB0D0987A9d01f7d394";
var erc20 = new Contract(abi,addy);
erc20.methods.name().call().then(console.log);