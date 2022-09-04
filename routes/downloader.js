require('../settings')
__path = process.cwd()

const openApis = require("@phaticusthiccy/open-apis");
const {fetchText, fetchJson, runtime, getBuffer, readTxt, readJson } = require('../lib/myfunc')
const apis = require("../lib/listdl")
const apidl = require("../lib/scrape/downloader2")
const { ytPlay, ytMp3, ytMp4 } = require("../lib/youtube");
const { GDrive } = require("../lib/scrape/gdrive");
const { mediafire2 } = require("../lib/scrape/mediafire");
const { zippy } = require("../lib/scrape/zippy2");


//―――――――――――――――――――――――――――――――――――――――――― ┏  Dowloader  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

async function mp31(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
	if (!url.includes('youtu')) return res.json(loghandler.noturl)
try {
	let { yta, ytv } = require('../lib/y2mate')
	let mp3 = await yta(url, '320kbps')
	let mp4 = await ytv(url, '360p')
	if (!mp4.title ) return res.json(loghandler.noturl)
		res.json({
			status: true,
			creator: `${creator}`,
			result: {
				Title: mp4.title,
				thumb : mp4.thumb,
				Idvideo: mp4.id,
				mp3: mp3.dl_link,

	} })
	} catch (e) {
	res.json(loghandler.error)
}
}

async function mp41(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
	if (!url.includes('youtu')) return res.json(loghandler.noturl)
try {
	let { yta, ytv } = require('../lib/y2mate')
	let mp3 = await yta(url, '320kbps')
	let mp4 = await ytv(url, '360p')
	if (!mp4.title ) return res.json(loghandler.noturl)
		res.json({
			status: true,
			creator: `${creator}`,
			result: {
				Title: mp4.title,
				thumb : mp4.thumb,
				Idvideo: mp4.id,
				mp4: mp4.dl_link

	} })
	} catch (e) {
	res.json(loghandler.error)
}
}

async function mp32(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
	if (!url.includes('youtu')) return res.json(loghandler.noturl)
try {
	ytMp3(url)
	.then(data => {
		res.json({
			status: true,
			creator: `${creator}`,
			result: data
		})
		})
	} catch (e) {
	res.json(loghandler.error)
}
}
async function mp42(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
	if (!url.includes('youtu')) return res.json(loghandler.noturl)
try {
	ytMp4(url)
	.then(data => {
		res.json({
			status: true,
			creator: `${creator}`,
			result: data
		})
		})
	} catch (e) {
	res.json(loghandler.error)
}
}
async function play1(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
try {
	let yts = require("yt-search")
	let search = await yts(text1)
	let anu = search.videos[Math.floor(Math.random() * search.videos.length)]

	let { yta, ytv } = require('../lib/y2mate')
	let mp3 = await yta(anu.url, '320kbps')
	let mp4 = await ytv(anu.url, '360p')
	
		res.json({
			status: true,
			creator: `${creator}`,
			result: {
				Link: anu.url,
				Title: anu.title,
				Description : anu.description,
				Idvideo: anu.videoId,
				Duration: anu.timestamp,
				Viewer: anu.views,
				UploadedOn : anu.ago,
				Author : anu.author.name,
				Channel : anu.author.url,
				linldowloader: {
					mp3: mp3.dl_link,
					mp4:{ 
						link: mp4.dl_link,
						filesize: mp4.filesizeF
					}
				}

	} })
	} catch (e) {
	res.json(loghandler.error)
}
}

async function play2(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
try {
	ytPlay(text1)
	.then(data => {
		res.json({
			status: true,
			creator: `${creator}`,
			result: data
		})
		})
	} catch (e) {
	res.json(loghandler.error)
}
}

async function gdrivedl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
	if (!url.includes('drive.google')) return res.json(loghandler.noturl)
try {
	GDrive(url)
	.then(data => {
		res.json({
			status: true,
			creator: `${creator}`,
			result: data
		})
		})
	} catch (e) {
	res.json(loghandler.error)
}
}

async function mediafiredl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
	if (!url.includes('mediafire.com')) return res.json(loghandler.noturl)
try {
	mediafire2(url)
	.then(data => {
		res.json({
			status: true,
			creator: `${creator}`,
			result: data
		})
		})
	} catch (e) {
	res.json(loghandler.error)
}
}

async function zippydl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
	if (!url.includes('zippyshare.com')) return res.json(loghandler.noturl)
try {
	zippy(url)
	.then(data => {
		res.json({
			status: true,
			creator: `${creator}`,
			result: data
		})
		})
	} catch (e) {
	res.json(loghandler.error)
}
}

async function fbdl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
try {
apis.fbDown2(url)
.then(data => {
	if (!data.links ) return res.json(loghandler.noturl)
	res.json({
	status: true,
	creator: `${creator}`,
	result:	data
	})
	})
	 .catch(e => {
		res.json(loghandler.error)
})
	} catch (e) {
	res.json(loghandler.error)
}
}

async function fbdl2(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
try {
apidl.facebook(url)
.then(data => {
	res.json({
	status: true,
	creator: `${creator}`,
	result:	data
	})
	})
	 .catch(e => {
		res.json(loghandler.error)
})
	} catch (e) {
	res.json(loghandler.error)
}
}

async function twitterdl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})   
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	try {
apis.twitter(url)
.then(data => {
	if (!data.thumb ) res.json(loghandler.noturl)
var result = data
res.json({
status: true,
creator: `${creator}`,
result
})
})
.catch(e => {
res.json(loghandler.error)
})
		} catch (e) {
	res.json(loghandler.error)
}
}

async function twitterdl2(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})   
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	try {
apidl.twitter(url)
.then(data => {
var result = data
res.json({
status: true,
creator: `${creator}`,
result
})
})
} catch (e) {
	res.json(loghandler.error)
}
}

async function tiktokdl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
try {
apidl.tiktok(url)
.then(data => {
	var result = data
	res.json({
	status: true,
	creator: `${creator}`,
		result
	})
	})
} catch (e) {
	res.json(loghandler.error)
}
}

async function tiktokdl2(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
try {
apidl.tiktok2(url)
.then(data => {
	var result = data
	res.json({
	status: true,
	creator: `${creator}`,
		result
	})
	})
} catch (e) {
	res.json(loghandler.error)
}
}

async function igstorydl(req, res, next) {
	var username = req.query.username;
	var apikey = req.query.apikey
	if (!username ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter username"})  
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
	
	openApis.insta_story(username)
	.then(data => {
		if (!data ) return res.json(loghandler.notfound)
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {  
			 res.json(loghandler.error)
})
}

async function igdl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)  
	
	try {
	if (url.includes('reel')) {
		 openApis.insta_reel(url)
	.then(data => {
		if (!data ) return res.json(loghandler.noturl)
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
	} else {
	 openApis.insta_post(url)
	.then(data => {
		if (!data ) return res.json(loghandler.noturl)
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
	}
} catch (e) {
	res.json(loghandler.error)
}
}

async function igdl2(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)  

	apidl.instagram(url)
	.then(data => {
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
		result
		})
		})
         .catch(e => {     
			 res.json(loghandler.error)	
})
}

async function scdl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})  
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
	
	apis.soundcloud(url)
	.then(data => {
		if (!data.download ) return res.json(loghandler.noturl)
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {
         
			 res.json(loghandler.error)
})
}

async function scdl2(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})  
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey) 
	
	apidl.soundcloud(url)
	.then(data => {
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {
         
			 res.json(loghandler.error)
})
}

async function teledl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})   
	if (!url.match(/(https:\/\/t.me\/addstickers\/)/gi)) return res.json(loghandler.noturl)
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	apis.telesticker(url)
	.then(data => {
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {
	 res.json(loghandler.error)
})
}
async function linedl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})  
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	apidl.linesticker(url)
	.then(data => {
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {
	 res.json(loghandler.error)
})
}
async function likedl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})  
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	apidl.like(url)
	.then(data => {
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {
	 res.json(loghandler.error)
})
}
async function cocofundl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})   
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	apidl.cocofun(url)
	.then(data => {
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {
	 res.json(loghandler.error)
})
}
async function imdb(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})  
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	apidl.imdb(url)
	.then(data => {
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {
	 res.json(loghandler.error)
})
}
async function pindl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})   
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	apidl.pinterestdl(url)
	.then(data => {
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {
	 res.json(loghandler.error)
})
}
async function imgur(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})   
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	apidl.imgur(url)
	.then(data => {
		var result = data
		res.json({
			status: true,
	        creator: `${creator}`,
			result
		})
		})
         .catch(e => {
	 res.json(loghandler.error)
})
}
module.exports = { 
	 mp31,
	 mp32, 
	 mp41, 
	 mp42, 
	 play1, 
	 play2, 
	 gdrivedl, 
	 zippydl, 
	 mediafiredl, 
	 fbdl, 
	 fbdl2, 
	 twitterdl, 
	 twitterdl2, 
	 tiktokdl, 
	 tiktokdl2, 
	 igdl, 
	 igdl2,
	 scdl,
	 scdl2,
	 igstorydl, 
	 teledl,
	 linedl, 
	 likedl,
	 imdb,
	 cocofundl,
	 pindl, 
	 imgur
	};
