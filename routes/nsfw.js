require('../settings')
__path = process.cwd()

const fss = require("fs-extra");
const axios = require('axios');
const topdf = require("image-to-pdf");
const request = require("request");

const {fetchText, fetchJson, runtime, getBuffer, readTxt, readJson } = require('../lib/myfunc')
const { DDlatest, DDdownload, DDsearch } = require("../lib/scrape/doudesu");
const nhzip = require("../lib/nhzip");

async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
//―――――――――――――――――――――――――――――――――――――――――― ┏  NSFW  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

//nhentai
async function nh_info(req, res, next) {
	var code = req.query.code;
	var apikey = req.query.apikey
	if (!code ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter code"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let nh = await axios.get(`https://janda.mod.land/nhentai/get?book=${code}`)
	
	res.json({
			status: true,
	        	creator: `${creator}`,
			result: nh.data.data
		})	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
async function nh_search(req, res, next) {
	var key = req.query.key;
	var sort = req.query.sort;
	var page = req.query.page;
	var apikey = req.query.apikey
	if (!key ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter key"})
	if (!sort ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter sort"})
	if (!page ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter page"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let nh = await axios.get(`https://janda.mod.land/nhentai/search/?key=${key}&sort=${sort}&page=${page}`)
	
	res.json({
			status: true,
	        	creator: `${creator}`,
			result: nh.data.data
		})	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
async function nh_random(req, res, next) {
	var apikey = req.query.apikey
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let nh = await axios.get(`https://janda.mod.land/nhentai/random`)
	
	res.json({
			status: true,
	        	creator: `${creator}`,
			result: nh.data.data
		})	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
async function nh_read(req, res, next) {
	var code = req.query.code;
	var apikey = req.query.apikey
	if (!code ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter code"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let data = await axios.get(`https://trash-apis.herokuapp.com/api/nsfw/nhentai-info?code=${code}&apikey=${apikey}`)
	let result = data.data.result
	let restjson = result.image
	let title = result.optional_title.english
	let duckJson = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
	let html = `<!DOCTYPE html>
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${title}</title>
	<style>
	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}
	body {
		background-color: #1a202c;
		background-color: rgba(26, 32, 44, 1);
	}
	@media (min-width: 576px) {
		img {
			width: auto;
			max-width: 100%;
			height: auto;
		}
	}
	</style>
	</head>
	<body>`
	for(let url of duckJson) html += `<img src=${url}>`
		res.send(html)	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
async function nh_pdf(req, res, next) {
	var code = req.query.code;
	var apikey = req.query.apikey
	if (!code ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter code"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let data = await axios.get(`https://trash-apis.herokuapp.com/api/nsfw/nhentai-info?code=${code}&apikey=${apikey}`)
	let result = data.data.result
	let restjson = result.image
	let array_page = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
	let count = 0;
	let ResultPdf = [];
	
	for (let i = 0; i < array_page.length; i++) {
		//if (!fs.existsSync("./tmp/nhentai")) fs.mkdirSync("./tmp/nhentai");
		let image_name = "./tmp/nhentai/" + code + i + ".jpg";
		await new Promise((resolve) =>
			request(array_page[i]).pipe(fss.createWriteStream(image_name)).on("finish", resolve)
		);
		console.log(array_page[i]);
		ResultPdf.push(image_name);
		count++;
	}

	await new Promise((resolve) =>
		topdf(ResultPdf, "A4")
			.pipe(fss.createWriteStream("./tmp/nhentai/" + code + ".pdf"))
			.on("finish", resolve)
	);

	for (let i = 0; i < array_page.length; i++) {
		fss.unlink("./tmp/nhentai/" + code + i + ".jpg");
	}
	await res.sendFile(__path + `/tmp/nhentai/${code}.pdf`)
    	await sleep(3000)
    	await fss.unlinkSync(__path + `/tmp/nhentai/${code}.pdf`)
	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
async function nh_zip(req, res, next) {
	var code = req.query.code;
	var apikey = req.query.apikey
	if (!code ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter code"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
		await nhzip(code).then(buffer => {
  fss.writeFileSync(__path + `/tmp/nhentai/${code}.zip`, buffer);
});
	await res.sendFile(__path + `/tmp/nhentai/${code}.zip`)
    	await sleep(3000)
    	await fss.unlinkSync(__path + `/tmp/nhentai/${code}.zip`)
	
} catch(err) {
       res.json({ error: err.message }) 
     }
}	
//pururin
async function prr_info(req, res, next) {
	var code = req.query.code;
	var apikey = req.query.apikey
	if (!code ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter code"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let prr = await axios.get(`https://janda.mod.land/pururin/get?book=${code}`)
	
	res.json({
			status: true,
	        	creator: `${creator}`,
			result: prr.data.data
		})	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
async function prr_search(req, res, next) {
	var key = req.query.key;
	var sort = req.query.sort;
	var page = req.query.page;
	var apikey = req.query.apikey
	if (!key ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter key"})
	if (!sort ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter sort"})
	if (!page ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter page"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let prr = await axios.get(`https://janda.mod.land/pururin/search/?key=${key}&sort=${sort}&page=${page}`)
	
	res.json({
			status: true,
	        	creator: `${creator}`,
			result: prr.data.data
		})	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
async function prr_random(req, res, next) {
	var apikey = req.query.apikey
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let prr = await axios.get(`https://janda.mod.land/pururin/random`)
	
	res.json({
			status: true,
	        	creator: `${creator}`,
			result: prr.data.data
		})	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
async function prr_read(req, res, next) {
	var code = req.query.code;
	var apikey = req.query.apikey
	if (!code ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter code"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let data = await axios.get(`https://trash-apis.herokuapp.com/api/nsfw/pururin-info?code=${code}&apikey=${apikey}`)
	let result = data.data.result
	let restjson = result.image
	let title = result.title
	let duckJson = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
	let html = `<!DOCTYPE html>
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${title}</title>
	<style>
	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}
	body {
		background-color: #1a202c;
		background-color: rgba(26, 32, 44, 1);
	}
	@media (min-width: 576px) {
		img {
			width: auto;
			max-width: 100%;
			height: auto;
		}
	}
	</style>
	</head>
	<body>`
	for(let url of duckJson) html += `<img src=${url}>`
		res.send(html)	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
async function prr_pdf(req, res, next) {
	var code = req.query.code;
	var apikey = req.query.apikey
	if (!code ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter code"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let data = await axios.get(`https://trash-apis.herokuapp.com/api/nsfw/pururin-info?code=${code}&apikey=${apikey}`)
	let result = data.data.result
	let restjson = result.image
	let array_page = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
	let count = 0;
	let ResultPdf = [];
	
	for (let i = 0; i < array_page.length; i++) {
		//if (!fs.existsSync("./tmp/nhentai")) fs.mkdirSync("./tmp/nhentai");
		let image_name = "./tmp/pururin/" + code + i + ".jpg";
		await new Promise((resolve) =>
			request(array_page[i]).pipe(fss.createWriteStream(image_name)).on("finish", resolve)
		);
		console.log(array_page[i]);
		ResultPdf.push(image_name);
		count++;
	}

	await new Promise((resolve) =>
		topdf(ResultPdf, "A4")
			.pipe(fss.createWriteStream("./tmp/pururin/" + code + ".pdf"))
			.on("finish", resolve)
	);

	for (let i = 0; i < array_page.length; i++) {
		fss.unlink("./tmp/pururin/" + code + i + ".jpg");
	}
	await res.sendFile(__path + `/tmp/pururin/${code}.pdf`)
    	await sleep(3000)
    	await fss.unlinkSync(__path + `/tmp/pururin/${code}.pdf`)
	
} catch(err) {
       res.json({ error: err.message }) 
     }
}

//doujindesu
async function dd_info(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	DDdownload(url)
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
async function dd_search(req, res, next) {
	var query = req.query.query;
	var apikey = req.query.apikey
	if (!query ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter query"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	DDsearch(query)
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
async function dd_latest(req, res, next) {
	var apikey = req.query.apikey
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	DDlatest()
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
async function dd_read(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let data = await axios.get(`https://trash-apis.herokuapp.com/api/nsfw/doujindesu-info?url=${url}&apikey=${apikey}`)
	let result = data.data.result
	let restjson = result.image
	let title = result.title
	let duckJson = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
	let html = `<!DOCTYPE html>
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${title}</title>
	<style>
	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}
	body {
		background-color: #1a202c;
		background-color: rgba(26, 32, 44, 1);
	}
	@media (min-width: 576px) {
		img {
			width: auto;
			max-width: 100%;
			height: auto;
		}
	}
	</style>
	</head>
	<body>`
	for(let url of duckJson) html += `<img src=${url}>`
		res.send(html)	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
async function dd_pdf(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let data = await axios.get(`https://trash-apis.herokuapp.com/api/nsfw/doujindesu-info?url=${url}&apikey=${apikey}`)
	let result = data.data.result
	let restjson = result.image
	let title = result.title
	let array_page = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
	let count = 0;
	let ResultPdf = [];
	
	for (let i = 0; i < array_page.length; i++) {
		//if (!fs.existsSync("./tmp/nhentai")) fs.mkdirSync("./tmp/nhentai");
		let image_name = "./tmp/doujindesu/dd" + i + ".jpg";
		await new Promise((resolve) =>
			request(array_page[i]).pipe(fss.createWriteStream(image_name)).on("finish", resolve)
		);
		console.log(array_page[i]);
		ResultPdf.push(image_name);
		count++;
	}

	await new Promise((resolve) =>
		topdf(ResultPdf, "A4")
			.pipe(fss.createWriteStream("./tmp/doujindesu/" + title + ".pdf"))
			.on("finish", resolve)
	);

	for (let i = 0; i < array_page.length; i++) {
		fss.unlink("./tmp/doujindesu/dd" + i + ".jpg");
	}
	await res.sendFile(__path + `/tmp/doujindesu/${title}.pdf`)
    	await sleep(3000)
    	await fss.unlinkSync(__path + `/tmp/doujindesu/${title}.pdf`)
	
} catch(err) {
       res.json({ error: err.message }) 
     }
}

// sekaikomik
async function sk_info(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	const { Download } = require("../lib/scrape/sekaikomik");
	Download(url)
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
async function sk_search(req, res, next) {
	var query = req.query.query;
	var apikey = req.query.apikey
	if (!query ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter query"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	const { Search } = require("../lib/scrape/sekaikomik");
	Search(query)
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
async function sk_latest(req, res, next) {
	var apikey = req.query.apikey
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	const { Latest } = require("../lib/scrape/sekaikomik");
	Latest()
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

async function sk_popular(req, res, next) {
	var apikey = req.query.apikey
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	const { Popular } = require("../lib/scrape/sekaikomik");
	Popular()
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

async function sk_read(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let data = await axios.get(`https://trash-apis.herokuapp.com/api/nsfw/sekaikomik-info?url=${url}&apikey=${apikey}`)
	let result = data.data.result
	let restjson = result.images
	let title = result.title
	let duckJson = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
	let html = `<!DOCTYPE html>
	<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>${title}</title>
	<style>
	img {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 100%;
	}
	body {
		background-color: #1a202c;
		background-color: rgba(26, 32, 44, 1);
	}
	@media (min-width: 576px) {
		img {
			width: auto;
			max-width: 100%;
			height: auto;
		}
	}
	</style>
	</head>
	<body>`
	for(let url of duckJson) html += `<img src=${url}>`
		res.send(html)	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
async function sk_pdf(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	let data = await axios.get(`https://trash-apis.herokuapp.com/api/nsfw/sekaikomik-info?url=${url}&apikey=${apikey}`)
	let result = data.data.result
	let restjson = result.images
	let title = result.title
	let array_page = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
	let count = 0;
	let ResultPdf = [];
	
	for (let i = 0; i < array_page.length; i++) {
		//if (!fs.existsSync("./tmp/nhentai")) fs.mkdirSync("./tmp/nhentai");
		let image_name = "./tmp/sekaikomik/dd" + i + ".jpg";
		await new Promise((resolve) =>
			request(array_page[i]).pipe(fss.createWriteStream(image_name)).on("finish", resolve)
		);
		console.log(array_page[i]);
		ResultPdf.push(image_name);
		count++;
	}

	await new Promise((resolve) =>
		topdf(ResultPdf, "A4")
			.pipe(fss.createWriteStream("./tmp/sekaikomik/" + title + ".pdf"))
			.on("finish", resolve)
	);

	for (let i = 0; i < array_page.length; i++) {
		fss.unlink("./tmp/sekaikomik/dd" + i + ".jpg");
	}
	await res.sendFile(__path + `/tmp/sekaikomik/${title}.pdf`)
    	await sleep(3000)
    	await fss.unlinkSync(__path + `/tmp/sekaikomik/${title}.pdf`)
	
} catch(err) {
       res.json({ error: err.message }) 
     }
}
module.exports = { nh_info, nh_search, nh_random, nh_read, nh_pdf, nh_zip, prr_info, prr_search, prr_random, prr_read, prr_pdf, dd_info, dd_latest, dd_search, dd_read, dd_pdf, sk_info, sk_latest, sk_popular, sk_search, sk_read, sk_pdf };
