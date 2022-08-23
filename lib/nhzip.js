const AdmZip = require('adm-zip');
    const axios = require('axios');
    const get = require('axios-retry');
    get(axios, { retries: 10 });

    module.exports = function (ID) {
        return new Promise(async (Resolve, Reject) => {
                    var zip = new AdmZip();
                    var promiseImages = [];
                    promiseImages.push(new Promise((resolve, reject) => {
  axios.get("https://janda.mod.land/nhentai/get?book=" + ID)
	  .then(async (data) => {
	let result = data.data.data
	let restjson = result.image
	let array_page = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
	})
  }));
                    Promise.all(promiseImages).then(images => {
                        for (const image of images) {
                            zip.addFile(image.array_page, Buffer.alloc(image.array_page.length, image.array_page));
                        }
                        var BufferFile = zip.toBuffer();
                        Resolve(BufferFile)
                    });
    };
