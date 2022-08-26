require('../settings')
__path = process.cwd()


const apis = require("../lib/listdl")


//―――――――――――――――――――――――――――――――――――――――――― ┏  Text Pro  ┓ ―――――――――――――――――――――――――――――――――――――――――― \\

//text1 
async function custom1(req, res, next) {
    var url = req.query.url;
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)  

    try {
	apis.textpro(url, [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
} catch (e) {
	res.json(loghandler.error)
}
}

async function typo(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)  

	apis.textpro("https://textpro.me/create-artistic-typography-online-1086.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
}

async function minion(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)  

	apis.textpro("https://textpro.me/minion-text-effect-3d-online-978.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
}

async function transformer(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)  

	apis.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
}

 async function pencil(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)  

	apis.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
	})
}


 async function glitch(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
}


 async function blackpink(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}


 async function berry(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-berry-text-effect-online-free-1033.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}


 async function neon(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}



 async function logobear(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}


 async function christmas(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/3d-christmas-text-effect-by-name-1055.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}


 async function thunder(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}


 async function boxtext(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}

 async function greenhorror(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-green-horror-style-text-effect-online-1036.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}

 async function magma(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}

 async function neonlight(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}

 async function orangejuice(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-a-3d-orange-juice-text-effect-online-1084.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}

 async function chocolatecake(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/chocolate-cake-text-effect-890.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}

 async function strawberry(req, res, next) {
	var text1 = req.query.text;
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/strawberry-text-effect-online-889.html", [text1])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}
async function joker(req, res, next) {
   var text1 = req.query.text;
   var apikey = req.query.apikey
   if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text"})
   if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
   if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

   apis.textpro("https://textpro.me/create-logo-joker-online-934.htmll", [text1])
.then((data) =>{ 
   res.set({'Content-Type': 'image/png'})
   res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
}
//text1 text2
async function custom2(req, res, next) {
    var url = req.query.url;
	var text1 = req.query.text1
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!url ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter url"})
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text1"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

    try {
	apis.textpro(url, [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
} catch (e) {
	res.json(loghandler.error)
}
}
async function pornhub(req, res, next) {
   var text1 = req.query.text1
   var text2 = req.query.text2
   var apikey = req.query.apikey
   if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text1"})   
   if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
   if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
   if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

   apis.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [text1,text2])
.then((data) =>{ 
   res.set({'Content-Type': 'image/png'})
   res.send(data)
})
.catch((err) =>{
res.json(loghandler.error)
})
}

async function ninjalogo(req, res, next) {
	var text1 = req.query.text1
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text1"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-ninja-logo-online-935.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}
async function glitch2(req, res, next) {
	var text1 = req.query.text1
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text1"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}

 async function glitchtiktok(req, res, next) {
	var text1 = req.query.text1
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text1"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}

 async function classic(req, res, next) {
	var text1 = req.query.text1
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text1"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}

 async function marvel(req, res, next) {
	var text1 = req.query.text1
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text1"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-logo-style-marvel-studios-online-971.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}
async function space3d(req, res, next) {
	var text1 = req.query.text1
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text1"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}
async function avengers(req, res, next) {
	var text1 = req.query.text1
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text1"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}
async function wolf1(req, res, next) {
	var text1 = req.query.text1
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text1"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-wolf-logo-black-white-937.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}
async function wolf2(req, res, next) {
	var text1 = req.query.text1
	var text2 = req.query.text2
	var apikey = req.query.apikey
	if (!text1 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text1"})   
	if (!text2 ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter text2"}) 
	if (!apikey ) return res.json({ status : false, creator : `${creator}`, message : "[!] masukan parameter apikey"})
	if (apikey != `${keyapi}`) return res.json(loghandler.notapikey)

	apis.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [text1,text2])
.then((data) =>{ 
	res.set({'Content-Type': 'image/png'})
	res.send(data)
})
.catch((err) =>{
 res.json(loghandler.error)
})
}


moldule.exports = {
    custom1,
    custom2,
    typo,
    minion,
    transformer,
    pencil,
    glitch,
    glitch2,
    glitchtiktok,
    blackpink,
    berry,
    neon,
    neonlight,
    logobear,
    christmas,
    thunder,
    boxtext,
    classic,
    marvel,
    ninjalogo,
    greenhorror,
    magma,
    orangejuice,
    chocolatecake,
    strawberry,
    pornhub,
    space3d,
    avengers,
    wolf1,
    wolf2,
    joker
}
