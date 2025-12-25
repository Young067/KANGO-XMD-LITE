//-------------------[ BOT SETTINGS ]------------------// 

// @project_name : KANGO-XMD 
// @author : Hector 
// @telegram : http://t.me/official_kango
// @github : OfficialKango
// @whatsapp : +233509977126

//----------------------[ KANGO-XMD ]----------------------//

const fs = require('fs')
const { color } = require('./kango/color')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//--------------------[ SESSION ID ]----------------------//

global.SESSION_ID = process.env.SESSION_ID || 'KANGO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUpIYzI3bWdJaXhyZi9BZTNGWENGL212SjlDS0ZIYnpHZHJ6amluR2xGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickN5Z1ZMeStPcXlRa3k1Z2JqcGthQ3RRZEt1a000ejRpREdzcmFZNzZIQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxUGJ4YmpFeHA2VVBJZjZUVTZBc2ZOUFJONXVZZ0RvbDRXcjRCWVBGdDFrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFR2E1T1hmVlJkdXlraW1NWjljdmhuRVNzVVpzWXdscEszaStmOUg3YkZ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkdManpwUEw3WWdKODRBSW5wNm5rWitPZmEwOCtudHdUbnFMc0h5Yk9KMUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdxMHM0VDZwMGErZlllSlpsRTRlcGpXT1RLTjNTQ1FGNnhtb24xV3hhMnM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUF2YnpJeTVobkNWUm1FT1pSWFNLVWFoUFZ6NnNjZG1Tc0dhTW1MZ29FZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGRjRGhoanRDZkxIV3MrZHYrQnFreVRwZS94dThOSU03R2l6K0F4TU1UMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImhrdmpUQ2lHTnZpQ1B4Z0p4UmxjclI3TFFXK0U4YVQ4NnViWWUrTDBVdC9mWUZzVTYrV2cxS3d1aTd5MWpkSXU3VEFJVU5zNjQyRzJyWmJPRXdIVmpBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6Ik1OUVp0TDBwd2lJenViZDkraE4vRWY1aWo1aTBqbzFTR2orc3RKdVpacFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjo4MTMsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjo4MTMsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiUVpaWkEzM1ciLCJtZSI6eyJpZCI6IjI1NDcxNTQ3Njk5MDo0M0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjE2NjQ3NTI4MTM2ODY1OjQzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS3o2aTM4UTVhcTB5Z1lZQVNBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRTNhZlYybG9QeGlXeVIvcEVLcUYwb2NXUm0ycFNEbXQzazkzZXh3djFITT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSGRSRGNiKzQzK0djbUNrRVVqbEo5dnJWSmRRWUkrTW0rZ0k3NkpYMlJyNi9CWkNmRnJvcTBHMHREbklITys1dFpuL1ZWTWpWaUxaNXNDRERWU0huQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6InoyRytRbGNCYXpNOTh3RUYrTjdqbkc3T0k2czBUSjVYUGxXaTF5NHphaDR6SWliNWxrbGpBeVViZzEvWTh5S0hETkZHUmY3cFFkWWJCNEs4ZDFJRGhBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTY2NDc1MjgxMzY4NjU6NDNAbGlkIiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJOMm4xZHBhRDhZbHNrZjZSQ3FoZEtIRmtadHFVZzVyZDVQZDNzY0w5UnoifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBZ0lFZ2dOIn0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2NjY1OTQ0MiwibGFzdFByb3BIYXNoIjoiMlY3N3FVIn0='
//Enter your KANGO-XMD session id here; must start with KANGO~

//--------------------[ BOT NAME ]----------------------//

global.botname = process.env.BOT_NAME || 'KANGO-XMD' 

//-----------------[ OWNER NUMBER ]------------------//

global.ownernumber = process.env.OWNER_NUMBER || '233509977126' 

//--------------------[ SUDO ]--------------------------//

global.sudo = process.env.SUDO ? process.env.SUDO.split(',') : ['233509977126', '233577860202'];
// Type additional allowed users here
//NB: They'll be able to use every functions of the bot without restrictions.

//-----------------[ OWNER NAME ]------------------//

global.ownername = process.env.OWNER_NAME || 'Hector Manuel' 

//------------[ STICKER PACKNAME ]-----------------//

global.packname = process.env.STICKER_PACK_NAME || "KANGO-XMD" 

//--------------[ COUNTRY TIMEZONE ]------------//


global.timezones = 'Africa/Accra';  // Set this to you timezone



//--------------[ STICKER AUTHOR NAME ]------------//

global.author = process.env.STICKER_AUTHOR_NAME || "Hector" 

//----------------[ GITHUB DATABASE ]-----------------//

global.dbToken = process.env.GITHUB_TOKEN || "";


//-----------------[ CONTEXT LINK ]--------------------//

global.plink = process.env.PLINK || "https://youtube.com/@official_manuel"

//------------------[ WATERMARK ]--------------------//

global.wm = process.env.GL_WM || "> ©KANGO-XMD"

//---------------------[ REPLIES ]-----------------------//

global.mess = { 
  done: '*Done*', 
  success: '©kango-xmd', 
  owner: `*You don't have permission to use this command!*`, 
  group: '*This feature becomes available when you use it in a group!*', 
  admin: '*You’ll unlock this feature with me as an admin!*', 
  notadmin: '*This feature will work once you become an admin. A way of ensuring order!*' 
}

//--------------------[ WATCHER ]-----------------------//

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(color(`Updated '${__filename}'`, 'red'))
  delete require.cache[file]
  require(file)
})

//----------------------[ KANGO-XMD ]----------------------//
