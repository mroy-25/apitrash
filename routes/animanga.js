require('../settings')
__path = process.cwd()


const {fetchText, fetchJson, runtime, getBuffer, readTxt, readJson } = require('../lib/myfunc')
const { kuso, kuso2 } = require("../lib/scrape/kusonime");
const { anoboys, anoboydl } = require("../lib/scrape/anoboy");

async function meganebuk_(req, res, next) {
	var query = req.query.query;
	var apikey = req.query.apikey
	if (!query ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter query"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	let megane = await fetchJson(encodeURI(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${query}`))
	
	res.json({
			status: true,
	        	creator: `${creator}`,
			result: megane
		})
}
async function kusobyquery(req, res, next) {
	var query = req.query.query;
	var apikey = req.query.apikey
	if (!query ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter query"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	kuso(query)
	.then((data) =>{
	res.json({
			status: true,
	        	creator: `${creator}`,
			result: data
		})
	})
	      .catch((err) =>{
 res.json(loghandler.error)
})
}
async function kusobyurl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	kuso2(url)
	.then((data) =>{
	res.json({
			status: true,
	        	creator: `${creator}`,
			result: data
		})
	})
	      .catch((err) =>{
 res.json(loghandler.error)
})
}
async function anoboys_(req, res, next) {
	var query = req.query.query;
	var apikey = req.query.apikey
	if (!query ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter query"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	anoboys(query)
	.then((data) =>{
	res.json({
			status: true,
	        	creator: `${creator}`,
			result: data
		})
    })
}
async function anoboydl_(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	anoboydl(url)
	.then((data) =>{
	res.json({
			status: true,
	        	creator: `${creator}`,
			result: data
		})
    })
}
module.exports = { meganebuk_, kusobyquery, kusobyurl, anoboys_, anoboydl_ };
