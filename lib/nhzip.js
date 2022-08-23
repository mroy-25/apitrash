const AdmZip = require('adm-zip');
    const axios = require('axios');
    const get = require('axios-retry');
    get(axios, { retries: 10 });

    module.exports = function (ID) {
        return new Promise(async (Resolve, Reject) => {
                    var zip = new AdmZip();
                    var promiseImages = [];
  axios.get("https://janda.mod.land/nhentai/get?book=" + ID)
	  .then(async (data) => {
	let result = data.data.data
	let array_page = result.image
	//let array_page = await restjson.map(a => 'https://external-content.duckduckgo.com/iu/?u=' + a)
	for (let i = 1; i < array_page.length; i++) {
	promiseImages.push(new Promise((resolve, reject) => {
		axios.get(`https://external-content.duckduckgo.com/iu/?u=${i + 1}`, {
                                responseType: 'arraybuffer'
                            }).then(raw_image => resolve({
                                raw_image: Buffer.from(raw_image.data, 'binary'),
                                id: i + 1
                                })).catch(err => console.error(err));
                                console.log(array_page[i])
                        }));
	}})
                    Promise.all(promiseImages).then(images => {
                        for (const image of images) {
                            zip.addFile(image.array_page + image.id, Buffer.alloc(image.raw_image.length, image.raw_image));
                        }
			    console.log(images)
                        var BufferFile = zip.toBuffer();
			    
                        Resolve(BufferFile)
                    });
                    });
    };
