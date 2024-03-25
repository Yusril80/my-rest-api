const fs = require('fs')

global.creator = 'Zeeoneofc'// yourname
global.MONGO_DB_URI = "mongodb+srv://dedebani44: lWD7SiH5bKgHi6jv@cluster.engkhio.mongodb.net/?
retryWrites-true&w-majority&appName-Clustere" //database mongodb 
global.ACTIVATION_TOKEN_SECRET = "saripeh78@" //isi apa aja bebas
global.your_email = "bani12dede5@gmail.com" //email
global.email_password = "ubvt saea krsi ufcu" //application password email
global.limitCount = 10000
global.YUOR_PORT = 8000
global.loghandler = {
	noapikey:{
		status: 403,
        message: 'Input parameter apikey',
        creator: `${creator}`,
        result: "error"
    },
    error: {
        status: 503,
        message: 'Service Unavaible, Sedang dalam perbaikan',
        creator: `${creator}`
    },
    apikey: {
    	status: 403,
    	message: 'Forbiden, Invalid apikey',
    	creator: `${creator}`
    },
    noturl: {
    	status: 403,
    	message: 'Forbiden, Invlid url, masukkan parameter url',
    	creator: `${creator}`,
    }
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
	delete require.cache[file]
	require(file)
})
