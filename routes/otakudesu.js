require('../settings')
__path = process.cwd()

const { OtakudesuInstance } = require('otakudesu-scraper');

const otaku = new OtakudesuInstance();

//otaku.listHomeUpdate().then(console.log);   //latest-update
//otaku.listGenre().then(console.log);   //list-Genre
//otaku.getAnime('Boruto').then(console.log);  //search
//otaku.getDownloadsByUrl('https://otakudesu.watch/episode/isekai-harem-episode-8-sub-indo/').then(console.log);

async function otaku_home(req, res, next) {
	var apikey = req.query.apikey
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	otaku.listHomeUpdate()
	.then((data) =>{
	
	res.json({
			status: true,
	        creator: `${creator}`,
			result: data
		})
	})
		} catch(err) {
       res.json(loghandler.error) 
     }
}
async function otaku_genre(req, res, next) {
	var apikey = req.query.apikey
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	otaku.listGenre()
	.then((data) =>{
	
	res.json({
			status: true,
	        creator: `${creator}`,
			result: data
		})
	})
		} catch(err) {
       res.json(loghandler.error) 
     }
}
async function otaku_search(req, res, next) {
	var query = req.query.query;
	var apikey = req.query.apikey
	if (!query ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter query"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	
	try {
	otaku.getAnime(query)
	.then((data) =>{
	
	res.json({
			status: true,
	        creator: `${creator}`,
			result: data
		})
	})
		} catch(err) {
       res.json(loghandler.error) 
     }
}
async function otaku_dl(req, res, next) {
	var url = req.query.url;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)
	if (!url.includes('otakudesu')) return res.json(loghandler.noturl)
	
	try {
	otaku.getDownloadsByUrl(url)
	.then((data) =>{
	
	res.json({
			status: true,
	        creator: `${creator}`,
			result: data
		})
	})
		} catch(err) {
       res.json(loghandler.error) 
     }
}
module.exports = { otaku_home, otaku_genre, otaku_search, otaku_dl };
