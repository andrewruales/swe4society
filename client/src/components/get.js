// const express = require('express')
// const router = express.Router();
// const foodpost = require('../modles/modelpost');
import fetch from 'node-fetch';//require("node-fetch");
//import App from './app.jsx'

console.log('Hello')

const params = {
	api_key: 'adGOkaniwDcX5OGdQwBKtAG4NnaCknGEsJrpcCX5',
	query: 'Provolone Cheese',
	//dataType: ["Survey (FNDDS)"],
	pagesize: 5,
}

//const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${encodeURIComponent(params.api_key)}&query=${encodeURIComponent(params.query)}&dataType=${encodeURIComponent(params.dateType)}&pageSize=${encodeURIComponent(params.pagesize)}`
//const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=apple&pageSize=2&api_key=adGOkaniwDcX5OGdQwBKtAG4NnaCknGEsJrpcCX5`
const api_url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${encodeURIComponent(params.query)}&pageSize=${encodeURIComponent(params.pagesize)}&api_key=${encodeURIComponent(params.api_key)}`

export async function getData() {
	let info =  await fetch(api_url).then(response => response.json())
	return info
}
var info = await getData().then(data => {return (data).foods} )
var nutritionInfo = await getData().then(data => {return (data).foods} )
//console.log(nutritionInfo[0].foodNutrients)

var resultsMap = new Map()

//console.log(Object.keys(info).length)
//console.log(typeof nutritionInfo[0])
/*
for(let i = 0; i < Object.keys(info).length; i++)
{
	var nutritionDict = []
	var nutrients = nutritionInfo[i].foodNutrients
	//console.log(nutrients)
	for(let j = 0; j < 10; j++)
	{
		//console.log(nutrients[j])
		nutritionDict.push({Nutrient : nutrients[j].nutrientName, Grams :  nutrients[j].value})
	}

	resultsMap.set(info[i].brandName +', '+ info[i].description,nutritionDict)
	
}

console.log(resultsMap)
*/
