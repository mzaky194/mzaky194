process.on('uncaughtException', function (err) {
console.log('Caught exception: ', err)
})

const premium = JSON.parse(fs.readFileSync("./data/premium.json"))
const antilink = JSON.parse(fs.readFileSync("./data/antilink.json"))
const welcome = JSON.parse(fs.readFileSync("./data/welcome.json"))
const bljpm = JSON.parse(fs.readFileSync("./data/bljpm.json"))
const ownplus = JSON.parse(fs.readFileSync("./data/owner.json"))
const setbot = JSON.parse(fs.readFileSync("./data/bot.json"))
let domains = JSON.parse(fs.readFileSync("./data/domain.json"))
const list = JSON.parse(fs.readFileSync("./data/list.json"))
const channel = JSON.parse(fs.readFileSync("./data/channel.json"))
const stokdo = JSON.parse(fs.readFileSync("./data/stokdo.json"))
const script = JSON.parse(fs.readFileSync("./data/script.json"))


module.exports = async (sock, m, chat) => {
try {
const body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') && m.message.imageMessage.caption ? m.message.imageMessage.caption : (m.mtype == 'documentMessage') && m.message.documentMessage.caption ? m.message.documentMessage.caption : (m.mtype == 'videoMessage') && m.message.videoMessage.caption ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') && m.message.extendedTextMessage.text ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage' && m.message.buttonsResponseMessage.selectedButtonId) ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype == 'templateButtonReplyMessage') && m.message.templateButtonReplyMessage.selectedId ? m.message.templateButtonReplyMessage.selectedId : ""

const prefix = '.'
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''
const chats = chat
const cmd = prefix + command
const args = body.trim().split(/ +/).slice(1)
const crypto = require("crypto")
const makeid = crypto.randomBytes(3).toString('hex')
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const text = q = args.join(" ")
const botNumber = await sock.decodeJid(sock.user.id)
const isOwner = m.sender.split("@")[0] == global.owner ? true : m.fromMe ? true : ownplus.includes(m.sender)
const isGrupReseller = premium.includes(m.chat)
const pushname = m.pushName || `${m.sender.split("@")[0]}`
const isBot = botNumber.includes(m.sender)
const func = require('../server/utils.js')

// >~~~~~~~ Metadata Groups ~~~~~~~~< //

try {
m.isGroup = m.chat.endsWith("g.us");
m.metadata = m.isGroup ? await sock.groupMetadata(m.chat).catch(_ => {}) : {};
const participants = m.metadata?.participants || [];
m.isAdmin = Boolean(participants.find(e => e.admin !== null && e.id === m.sender));
m.isBotAdmin = Boolean(participants.find(e => e.admin !== null && e.id === botNumber));
} catch (error) {
m.metadata = {};
m.isAdmin = false;
m.isBotAdmin = false;
}

// >~~~~~~~~~ Database ~~~~~~~~~~~< //

if (!isCmd) {
let check = list.find(e => e.cmd == m.text.toLowerCase())
if (check) {
await m.reply(check.respon)
}}

// >~~~~~~~~ Fake Quoted ~~~~~~~~~~< //

const qpay = {key: {remoteJid: '0@s.whatsapp.net', fromMe: false, id: `ownername`, participant: '0@s.whatsapp.net'}, message: {requestPaymentMessage: {currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: `${namaowner}`}}, expiryTimestamp: 999999999, amount: {value: 91929291929, offset: 1000, currencyCode: "USD"}}}}

const qtext = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `Powered By ${namaowner}`}}}

const qjasajpm = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `Jasa Jpm By ${namaowner}`}}}

const qcmd = {key: {remoteJid: "status@broadcast", participant: "0@s.whatsapp.net"}, message: {"extendedTextMessage": {"text": `${prefix+command}`}}}

// >~~~~~~~~~~ Function ~~~~~~~~~~~< //

const example = async (teks) => {
const commander = ` *Contoh Command :*\n*${cmd}* ${teks}`
return m.reply(commander)
}

if (isCmd) {
console.log(chalk.white.bgBlue.bold("[ Message Notification ]"), chalk.blue.bold(`\nSender : `), chalk.blue.bold(`${m.sender.split("@")[0]}`), chalk.blue.bold(`\nMessage :`), chalk.blue.bold(`${cmd}`), "\n")
}

if (m.isGroup && antilink.find(i => i.id == m.chat)) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(chats) && !isOwner && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await sock.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let room = antilink.find(i => i.id == m.chat)
let delet = m.key.participant
let bang = m.key.id
await sock.sendMessage(m.chat, {text: `
*🔍 Link Grup Terdeteksi!*

Maaf, ${room.kick == true ? "Kamu akan saya kik" : "pesan kamu saya hapus"}, karena admin/owner bot telah mengaktifkan fitur *Antilink Grup*!
`, mentions: [m.sender]}, {quoted: m})
await sock.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
if (room.kick == true) {
await func.sleep(1000)
await sock.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}
}}

// >~~~~~~~~~ Command ~~~~~~~~~~< //

switch (command) {
case "menu": case "p": {
const textnya = ` 
 Hii @${m.sender.split("@")[0]} 👋
 Selamat ${func.ucapan()}
 
 *━ Information Bot*
  ▢ Botname : *${namabot}*
  ▢ Mode : *${sock.public ? "Public" : "Self"}*
  ▢ Version : *v7.0.0*

  ╭─▧ *Mainmenu*
  │ • .qc
  │ • .ai
  │ • .gpt
  │ • .sticker
  │ • .swm
  │ • .readqr
  │ • .tourl
  │ • .ttstalk
  │ • .igstalk
  │ • .removebg
  │ • .remini
  ╰ • .tohd

  ╭─▧ *Shoopmenu*
  │ • .buypanel
  │ • .buyadp
  │ • .buyreseller
  │ • .buyscript
  │ • .buydigitalocean
  │ • .buyvps
  │ • .buypulsa
  │ • .buykuota
  │ • .buysaldo
  │ • .topupml
  │ • .topupff
  ╰ • .topuppubg

  ╭─▧ *Downloadmenu*
  │ • .tiktok
  │ • .ytplay
  │ • .ytmp3
  │ • .ytmp4
  │ • .gitclone
  │ • .instagram
  │ • .xnxx
  │ • .videy
  ╰ • .facebook

  ╭─▧ *Searchmenu*
  │ • .pinterest
  │ • .yts
  │ • .gimage
  │ • .xnxxs
  │ • .tiktoks
  ╰ • .npm

  ╭─▧ *Groupmenu*
  │ • .antilink
  │ • .bljpm
  │ • .welcome
  │ • .buatgc
  │ • .kick
  │ • .promote
  │ • .demote
  │ • .hidetag
  │ • .close/open
  │ • .resetlink
  │ • .leave
  ╰ • .tagall

  ╭─▧ *Channelmenu*
  │ • .cekidch
  │ • .reactch
  │ • .addidch
  │ • .listidch
  │ • .delidch
  │ • .jpmch
  ╰ • .joinch

  ╭─▧ *Storemenu*
  │ • .pushkontak
  │ • .pushkontak2
  │ • .listgc
  │ • .addrespon
  │ • .delrespon
  │ • .listrespon
  │ • .done
  │ • .proses
  │ • .jpmtesti
  │ • .jpm
  │ • .jpmht
  │ • .gantipwvps
  │ • .installpanel
  │ • .startwings
  ╰ • .subdomain

  ╭─▧ *Panelmenu*
  │ • .addakses
  │ • .delakses
  │ • .listakses
  │ • .1gb - unlimited
  │ • .cadmin
  │ • .listpanel
  │ • .listadmin
  │ • .delpanel
  │ • .deladmin
  ╰ • .clearserver
  
  ╭─▧ *Cloudflaremenu*
  │ • .adddomaincf
  │ • .listdomaincf
  │ • .deldomaincf
  ╰ • .clearallsubdo

  ╭─▧ *Ownermenu*
  │ • .addstokdo
  │ • .delstokdo
  │ • .liststokdo
  │ • .addscript
  │ • .delscript
  │ • .getscript
  │ • .listscript
  │ • .adddomain
  │ • .deldomain
  │ • .listdomain
  │ • .addowner
  │ • .delowner
  │ • .listowner
  │ • .setppbot
  │ • .delppbot
  │ • .restart
  │ • .delsampah
  │ • .getcase
  │ • .getip
  ╰ • .backupsc
  
  ╭─▧ *Setbotmenu*
  │ • .autoread
  │ • .autoreadsw
  │ • .autotyping
  │ • .autorecording
  ╰ • .anticall

`
await sock.sendMessage(m.chat, {text: textnya, contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idsaluran,
   newsletterName: global.namasaluran
   }, 
externalAdReply: {
title: `© ${namabot} - v7.0.0`, 
body: `Powered by ${namaowner}.`, 
thumbnail: fs.readFileSync("./media/menu.jpg"),
renderLargerThumbnail: true,
sourceUrl: global.linksaluran,
mediaType: 1
}
}
}, {quoted: null})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "buatgc": {
if (!isOwner) return m.reply(msg.owner)
if (!q) return example("nama grup")
let res = await sock.groupCreate(q, [])
const urlGrup = "https://chat.whatsapp.com/" + await sock.groupInviteCode(res.id)
let teks = `
*Grup WhatsApp Berhasil Dibuat ✅*
${urlGrup}
`
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addakses": case "addaksesgc": {
if (!isOwner) return m.reply(msg.owner)
if (!m.isGroup) return m.reply(msg.group)
const input = m.chat
if (premium.includes(input)) return m.reply(`Grup ini sudah di beri akses reseller panel!`)
premium.push(input)
await fs.writeFileSync("./data/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah grup reseller panel ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delakses": case "delaksesgc": {
if (!isOwner) return m.reply(msg.owner)
if (premium.length < 1) return m.reply("Tidak ada grup reseller panel")
if (!m.isGroup) return m.reply(msg.group)
let input = text ? text : m.chat
if (input == "all") {
premium.length = 0
await fs.writeFileSync("./data/premium.json", JSON.stringify(premium, null, 2))
return m.reply(`Berhasil menghapus semua grup reseller panel ✅`)
}
if (!premium.includes(input)) return m.reply(`Grup ini bukan grup reseller panel!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./data/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus grup reseller panel ✅`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listakses": {
if (!isOwner) return m.reply(msg.owner)
if (premium.length < 1) return m.reply("Tidak ada grup reseller panel")
const datagc = await sock.groupFetchAllParticipating()
let teks = ""
for (let i of premium) {
let nama = datagc[i].subject || "Grup tidak ditemukan"
teks += `\n* ${i}
* ${nama}\n`
}
return m.reply(teks)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "welcome": case "welcom": {
if (!isOwner) return m.reply(msg.owner)
if (!m.isGroup) return m.reply(msg.group)
if (!text || !/on|off/.test(text)) return example("on/off")
const input = text.toLowerCase()
if (/on/.test(input)) {
if (welcome.includes(m.chat)) return m.reply(`Welcome di grup ini sudah aktif!`)
welcome.push(m.chat)
await fs.writeFileSync("./data/welcome.json", JSON.stringify(welcome, null, 2))
return m.reply(`Berhasil menghidupkan Welcome di grup ini ✅`)
} 
if (/off/.test(input)) {
if (!welcome.includes(m.chat)) return m.reply(`Welcome di grup ini sudah tidak aktif!`)
let posi = welcome.indexOf(m.chat)
await welcome.splice(posi, 1)
await fs.writeFileSync("./data/welcome.json", JSON.stringify(welcome, null, 2))
return m.reply(`Berhasil mematikan welcome di grup ini ✅`)
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "autoread": case "autoreadsw": case "anticall": case "autotyping": case "autorecording": {
if (!isOwner) return m.reply(msg.owner)
const getStatus = () => {
let teks = ""
for (let i of Object.keys(setbot)) {
teks += `* *${func.capital(i)} :* ${setbot[i] ? "aktif ✅" : "tidak aktif ❌"}
`
}
return teks
}
if (!text || !/on|off/.test(text)) return m.reply(`\nContoh : *${cmd}* on/off\n\n${getStatus()}`)
const input = text.toLowerCase()
if (/on/.test(input)) {
if (setbot[command.toLowerCase()] == true) return m.reply(`*${func.capital(command)}* sudah aktif!`)
if (command == "autotyping" && setbot.autorecording == true) setbot.autorecording = false
if (command == "autorecording" && setbot.autotyping == true) setbot.autotyping = false
setbot[command.toLowerCase()] = true
await fs.writeFileSync("./data/bot.json", JSON.stringify(setbot, null, 2))
return m.reply(`
Berhasil menyalakan *${func.capital(command)}* ✅

${getStatus()}`)
} 
if (/off/.test(input)) {
if (setbot[command.toLowerCase()] == false) return m.reply(`${func.capital(command)} sudah tidak aktif!`)
setbot[command.toLowerCase()] = false
await fs.writeFileSync("./data/bot.json", JSON.stringify(setbot, null, 2))
return m.reply(`
Berhasil mematikan *${func.capital(command)}* ✅

${getStatus()}`)
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "bljpm": case "blgcjpm": {
if (!isOwner) return m.reply(msg.owner)
if (!m.isGroup) return m.reply(msg.group)
if (!text || !/on|off/.test(text)) return example("on/off")
const input = text.toLowerCase()
if (/on/.test(input)) {
if (bljpm.includes(m.chat)) return m.reply(`Blacklist jpm di grup ini sudah aktif!`)
bljpm.push(m.chat)
await fs.writeFileSync("./data/bljpm.json", JSON.stringify(bljpm, null, 2))
return m.reply(`Berhasil menghidupkan blacklist jpm di grup ini ✅`)
} 
if (/off/.test(input)) {
if (!bljpm.includes(m.chat)) return m.reply(`Blacklist jpm di grup ini sudah tidak aktif!`)
let posi = bljpm.indexOf(m.chat)
await bljpm.splice(posi, 1)
await fs.writeFileSync("./data/bljpm.json", JSON.stringify(bljpm, null, 2))
return m.reply(`Berhasil mematikan blacklist jpm di grup ini ✅`)
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "idgc": {
if (!m.isGroup) return m.reply(msg.group)
return m.reply(m.chat)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "leave": {
if (!isOwner) return m.reply(msg.owner)
if (!m.isGroup) return m.reply(msg.group)
await func.sleep(4000)
await sock.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetlinkgc": case "resetlink": {
if (!isOwner) return m.reply(msg.owner)
if (!m.isGroup) return m.reply(msg.group)
if (!m.isBotAdmin) return m.reply(msg.botadmin)
await sock.groupRevokeInvite(m.chat)
m.reply("Sukses mereset ling grup ini ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "readqr": {
if (!/image/.test(mime)) return example("dengan reply qris")
const Jimp = require("jimp");
const QrCode = require("qrcode-reader");
async function readQRISFromBuffer(buffer) {
    return new Promise(async (resolve, reject) => {
        try {
            const image = await Jimp.read(buffer);
            const qr = new QrCode();
            qr.callback = (err, value) => {
                if (err) return reject(err);
                resolve(value ? value.result : null);
            };
            qr.decode(image.bitmap);
        } catch (error) {
            return m.reply("error : " + error)
        }
    });
}

let aa = m.quoted ? await m.quoted.download() : await m.download()
let dd = await readQRISFromBuffer(aa)
await sock.sendMessage(m.chat, {text: `${dd}`}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "enchard": case "encrypthard": {
if (!/javascript/g.test(mime)) return example("dengan kirim file .js")
let media = m.quoted ? await m.quoted.download() : await m.download()
let filename = m.quoted ? m.quoted.fakeObj.message.documentMessage.fileName : m.fakeObj.message.documentMessage.fileName
await m.reply("Memproses encrypt hard code . . .")
await JsConfuser.obfuscate(media.toString(), {
  target: "node",
    preset: "high",
    compact: true,
    minify: true,
    flatten: true,

    identifierGenerator: function() {
        const originalString = `素晴座素晴Skyzopedia`

        function hapusKarakterTidakDiinginkan(input) {
            return input.replace(
                /[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, ''
            );
        }

        function stringAcak(panjang) {
            let hasil = '';
            const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            const panjangKarakter = karakter.length;

            for (let i = 0; i < panjang; i++) {
                hasil += karakter.charAt(
                    Math.floor(Math.random() * panjangKarakter)
                );
            }
            return hasil;
        }

        return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2);
    },

    renameVariables: true,
    renameGlobals: true,

    // Kurangi encoding dan pemisahan string untuk mengoptimalkan ukuran
    stringEncoding: 0.01, 
    stringSplitting: 0.1, 
    stringConcealing: true,
    stringCompression: true,
    duplicateLiteralsRemoval: true,

    shuffle: {
        hash: false,
        true: false
    },
    controlFlowFlattening: false, 
    opaquePredicates: false, 
    deadCode: false, 
    dispatcher: false,
    rgf: false,
    calculator: false,
    hexadecimalNumbers: false,
    movedDeclarations: true,
    objectExtraction: true,
    globalConcealing: true
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./@hardenc${filename}`, obfuscated.code)
  await sock.sendMessage(m.chat, {document: await fs.readFileSync(`./@hardenc${filename}`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt File JS Sukses! Type:\nString"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
await fs.unlinkSync(`./@hardenc${filename}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getcase": {
if (!isOwner) return
if (!text) return example("menu")
const getcase = (cases) => {
return "case "+`\"${cases}\"`+fs.readFileSync('./skyzo.js').toString().split('case \"'+cases+'\"')[1].split("break")[0]+"break"
}
try {
m.reply(`${getcase(q)}`)
} catch (e) {
return m.reply(`Case *${text}* tidak ditemukan`)
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak2": {
if (!isOwner) return m.reply(msg.owner)
if (!m.isGroup) return m.reply(msg.group)
if (!text) return example("pesannya")
const teks = text
const jidawal = m.chat
const data = await sock.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses pushkontak ke *${halls.length}* member grup`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await sock.sendMessage(mem, {text: teks}, {quoted: qtext})
await func.sleep(4000)
}}

await sock.sendMessage(jidawal, {text: `*Pushkontak Berhasil ✅*\nTotal member : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("pesannya")
const meta = await sock.groupFetchAllParticipating()
let dom = await Object.keys(meta)
global.textpushkontak = text
let list = []
for (let i of dom) {
await list.push({
title: meta[i].subject, 
id: `.respushkontak ${i}`, 
description: `${meta[i].participants.length} Member`
})
}
return sock.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Grup',
          sections: [
            {
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "\nPilih Target Grup Pushkontak\n",
  contextInfo: {
   mentionedJid: [m.sender], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "respushkontak": {
if (!isOwner) return 
if (!text) return 
if (!global.textpushkontak) return
const idgc = text
const teks = global.textpushkontak
const jidawal = m.chat
const data = await sock.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await sock.sendMessage(mem, {text: teks}, {quoted: qtext})
await func.sleep(4000)
}}

delete global.textpushkontak
await sock.sendMessage(jidawal, {text: `*Pushkontak Berhasil ✅*\nTotal member : ${halls.length}`}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "addown": case "addowner": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return example("6285XX atau @tag")
let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
if (!input) return example("6285XX atau @tag")
if (ownplus.includes(input)) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai owner!`)
if (input == botNumber) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai owner!`)
if (input.split("@")[0] == global.owner) return m.reply(`Nomor ${input.split("@")[0]} sudah terdaftar sebagai owner!`)
await ownplus.push(input)
await fs.writeFileSync("./data/owner.json", JSON.stringify(ownplus, null, 2))
return m.reply(`Sukses menjadikan ${input.split("@")[0]} sebagai *owner*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "delown": case "delowner": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return example("6285XX atau @tag")
if (text == "all") {
ownplus.length = 0
await fs.writeFileSync("./data/owner.json", JSON.stringify(ownplus, null, 2))
return m.reply("Berhasil menghapus semua owner ✅")
}
let input = m.quoted ? m.quoted.sender : m.mentionedJid ? m.mentionedJid[0] : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
if (!input) return example("6285XX atau @tag")
if (!ownplus.includes(input)) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai owner!`)
if (input == botNumber) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai owner!`)
if (input.split("@")[0] == global.owner) return m.reply(`Nomor ${input.split("@")[0]} tidak terdaftar sebagai owner!`)
const posi = ownplus.indexOf(input)
await ownplus.splice(posi, 1)
await fs.writeFileSync("./data/owner.json", JSON.stringify(ownplus, null, 2))
return m.reply(`Sukses menghapus ${input.split("@")[0]} sebagai *owner*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "delppbot": case "delpp": {
if (!isOwner) return m.reply(msg.owner)
await sock.removeProfilePicture(botNumber)
m.reply("Berhasil menghapus profile bot ✅")
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "unblok": {
if (!isOwner) return
if (m.isGroup && !m.quoted && !text) return example("@tag/nomornya")
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await sock.updateBlockStatus(mem, "unblock");
if (m.isGroup) sock.sendMessage(m.chat, {text: `Berhasil membuka blokiran @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "block": case "blok": {
if (!isOwner) return
if (m.isGroup && !m.quoted && !text) return example("@tag/nomornya")
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await sock.updateBlockStatus(mem, "block")
if (m.isGroup) sock.sendMessage(m.chat, {text: `Berhasil memblokir @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "boost": case "delsampah": {
if (!isOwner) return m.reply(msg.owner)
let sampah = await fs.readdirSync('./server/tmp').filter(e => e !== "akses.txt")
if (sampah.length < 1) return m.reply("Tidak ada sampah")
const total = sampah.length
sampah.forEach((i) => {
fs.unlinkSync('./server/tmp/' + i)
})
m.reply(`Berhasil membersihkan ${total} sampah tmp`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "setppbot": case "setpp": {
if (!isOwner) return m.reply(msg.owner)
if (!/image/.test(mime)) return example("dengan mengirim foto")
const { S_WHATSAPP_NET } = require("baileys");

const buffer = await sock.downloadAndSaveMediaMessage(qmsg)
var { img } = await func.generateProfilePicture(buffer)
await sock.query({
tag: 'iq',
attrs: {
to: S_WHATSAPP_NET,
type: 'set',
xmlns: 'w:profile:picture'
},
content: [
{
tag: 'picture',
attrs: { type: 'image' },
content: img
}
]
})
m.reply("Berhasil mengganti profile bot ✅")
fs.unlinkSync(buffer)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "joinch": case "joinchannel": {
if (!isOwner) return m.reply(msg.owner)
if (!text && !m.quoted) return example("linkchnya")
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await sock.newsletterMetadata("invite", result)
await sock.newsletterFollow(res.id)
m.reply(`*Berhasil join channel whatsapp ✅*

* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "reactch": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("linkpesan 😂")
if (!args[0] || !args[1]) return example("linkpesan 😂")
if (!args[0].includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = args[0].split('/')[4]
let serverId = args[0].split('/')[5]
let res = await sock.newsletterMetadata("invite", result)
await sock.newsletterReactMessage(res.id, serverId, args[1])
m.reply(`Berhasil mengirim reaction ${args[1]} ke dalam channel ${res.name}`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "cekidch": case "idch": {
if (!text) return example("linkchnya")
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await sock.newsletterMetadata("invite", result)
let teks = `${res.id}

* ${res.name}
* ${res.subscribers} Pengikut`
return m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sendtesti": case "testi": case "uptesti": case "jpmtesti": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("teks dengan mengirim foto")
if (!/image/.test(mime)) return example("teks dengan mengirim foto")
const allgrup = await sock.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await sock.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses jpm testimoni ke dalam saluran & ${res.length} grup chat`)
try {
await sock.sendMessage(global.idsaluran, {image: await fs.readFileSync(rest), caption: teks})
} catch {}
for (let i of res) {
if (bljpm.includes(i)) continue
try {
await sock.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: {
isForwarded: true, mentionedJid: [m.sender], 
forwardedNewsletterMessageInfo: {
newsletterJid: global.idsaluran, newsletterName: global.namasaluran
}}}, {quoted: m})
count += 1
} catch {}
await func.sleep(4000)
}
await fs.unlinkSync(rest)
await sock.sendMessage(jid, {text: `Testimoni berhasil dikirim ke dalam channel & ${count} grup`}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "jpm": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("teksnya & foto (opsional)")
let rest
if (/image/.test(mime)) {
rest = await sock.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = await sock.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = text
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const jid = m.chat
await m.reply(`Memproses ${rest !== undefined ? "jpm teks & foto" : "jpm teks"} ke ${res.length} grup chat`)

for (let i of res) {
if (bljpm.includes(i)) continue
try {
await sock.sendMessage(i, pesancoy, {quoted: qtext})
count += 1
} catch {}
await func.sleep(8000)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await sock.sendMessage(jid, {text: `Jpm ${rest !== undefined ? "teks & foto" : "teks"} berhasil dikirim ke ${count} grup`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmht": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("teksnya & foto (opsional)")
let rest
if (/image/.test(mime)) {
rest = await sock.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = await sock.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = text
const opsijpm = rest !== undefined ? "teks & foto ht" : "teks ht"
const jid = m.chat
await m.reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
let ments = allgrup[i].participants.map(e => e.id)
let pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks, mentions: ments } : { text: ttks, mentions: ments }
await sock.sendMessage(i, pesancoy, {quoted: qtext})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await sock.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${count} grup chat`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmch": {
if (!isOwner) return m.reply(msg.owner)
if (channel.length < 1) return m.reply("Tidak ada id ch didalam database idch")
if (!text) return example("teksnya & foto (opsional)")
let rest
if (/image/.test(mime)) {
rest = await sock.downloadAndSaveMediaMessage(qmsg)
}
const res = channel
let count = 0
const ttks = text
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const jid = m.chat
await m.reply(`Memproses ${rest !== undefined ? "jpm teks & foto" : "jpm teks"} ke ${res.length} Channel WhatsApp`)

for (let i of res) {
try {
await sock.sendMessage(i, pesancoy)
count += 1
} catch {}
await func.sleep(8000)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await sock.sendMessage(jid, {text: `Jpm ${rest !== undefined ? "teks & foto" : "teks"} berhasil dikirim ke ${count} Channel WhatsApp`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addidch":
case "addid": {
    if (!isOwner) return m.reply(msg.owner)
    let ids
    if (text.includes("https://whatsapp.com/channel")) {
    let result = text.split('https://whatsapp.com/channel/')[1]
    let res = await sock.newsletterMetadata("invite", result)
    ids = [res.id]
    } else if (text.includes("@newsletter")) {
    ids = text.split(",").map(i => i.trim()) 
    if (ids.some(id => !id.endsWith("@newsletter"))) {
        return example("idch1,idch2 (bisa berapapun)")
    }
    } else {
    return example("idch1, idch2 (bisa berapapun) bisa pake linkchnya juga)")
    }

    let newIds = ids.filter(id => !channel.includes(id)) // Hindari duplikasi

    if (newIds.length === 0) {
        return m.reply("Semua ID yang dimasukkan sudah ada dalam daftar ❌")
    }

    channel.push(...newIds) // Tambahkan ID baru

    try {
        await fs.writeFileSync("./data/channel.json", JSON.stringify(channel, null, 2))
        m.reply(`Berhasil menambah ${newIds.length} ID channel ✅`)
    } catch (err) {
        console.error("Error menyimpan file:", err)
        m.reply("Terjadi kesalahan saat menyimpan data ❌")
    }
    }
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listidch": case "listid": {
if (channel.length < 1) return m.reply("Tidak ada id ch didalam database idch")
let teks = `\n *Total ID Channel :* ${channel.length}\n`
for (let i of channel) {
let res = await sock.newsletterMetadata("jid", i)
teks += `\n* ${i}
* ${res.name}\n`
}
sock.sendMessage(m.chat, {text: teks, mentions: []}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delidch": case "delid": {
if (!isOwner) return m.reply(msg.owner)
if (channel.length < 1) return m.reply("Tidak ada id ch didalam database idch")
if (!text) return example("idchnya")
let input = text
if (text == "all") {
channel.length = 0
await fs.writeFileSync("./data/channel.json", JSON.stringify(channel, null, 2))
return m.reply(`Berhasil menghapus semua ID Channel ✅`)
}
if (!channel.includes(input)) return m.reply(`ID Channel tidak ditemukan!`)
let posi = channel.indexOf(input)
await channel.splice(posi, 1)
await fs.writeFileSync("./data/channel.json", JSON.stringify(channel, null, 2))
m.reply(`Berhasil menghapus ID Channel ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "subdo": case "subdomain": case "domain": {
if (!isOwner) return m.reply(msg.owner)
if (!text) {
const obj = Object.keys(domains)
let count = 0
let teks = `\n`
for (let i of obj) {
count++
teks += `* ${count}. ${i}\n`
}
teks += `\n Contoh Penggunaan :\n *.domain* 2 host|ipvps\n`
return m.reply(teks)
}
if (!args[0]) return m.reply("Domain tidak ditemukan!")
if (isNaN(args[0])) return m.reply("Domain tidak ditemukan!")
const dom = Object.keys(domains)
if (Number(args[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
if (!args[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
let tldnya = dom[args[0] - 1]
const [host, ip] = args[1].split("|")
async function subDomain1(host, ip) {
return new Promise((resolve) => {
axios.post(
`https://api.cloudflare.com/client/v4/zones/${domains[tldnya].zone}/dns_records`,
{ type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
{
headers: {
Authorization: "Bearer " + domains[tldnya].apitoken,
"Content-Type": "application/json",
},
}).then((e) => {
let res = e.data
if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
}).catch((e) => {
let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
let err1Str = String(err1)
resolve({ success: false, error: err1Str })
})
})}
let teks = `*Berhasil membuat subdomain ✅*\n\n*🚀 IP Address :* ${ip}\n`
const domnode = `node${func.getRandom("")}.${host}`
for (let i = 0; i < 2; i++) {
await subDomain1(i == 0 ? host.toLowerCase() : domnode, ip).then(async (e) => {
if (e['success']) {
teks += `*🌐 ${e['name']}*\n`
} else {
return m.reply(`${e['error']}`)
}
}).catch (err => m.reply("Error: " + err))
}
await m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "adddomain": case "adddom": {
if (!isOwner) return m.reply(msg.owner)
let [dom, zone, api] = text.split("|")
if (!dom || !zone || !api) return example("domain|zoneid|apitoken")
dom = dom.toLowerCase()
if (domains[dom]) return m.reply(`Domain ${dom} sudah terdaftar di dalam database subdomain`)
domains[dom] = {
zone: zone, 
apitoken: api
}
await fs.writeFileSync("./data/domain.json", JSON.stringify(domains, null, 2))
m.reply(`Berhasil menambahkan domain ${dom} ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "deldomain": case "deldom": {
if (!isOwner) return m.reply(msg.owner)
if (Object.keys(domains).length < 1) return m.reply("Tidak ada domain di dalam database subdomain")
let dom = text.toLowerCase()
if (dom == "all") {
domains = {}
await fs.writeFileSync("./data/domain.json", JSON.stringify(domains, null, 2))
return m.reply(`Berhasil menghapus semua domain ✅`)
}
if (!domains[dom]) return m.reply(`Domain ${dom} tidak terdaftar di dalam database subdomain`)
delete domains[dom]
await fs.writeFileSync("./data/domain.json", JSON.stringify(domains, null, 2))
m.reply(`Berhasil menghapus domain ${dom} ✅`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listdomain": case "listdom": {
if (!isOwner) return m.reply(msg.owner)
if (Object.keys(domains).length < 1) return m.reply("Tidak ada domain di database subdomain")
let teks = "\n"
for (let i of Object.keys(domains)) {
teks += `* ${i}\n`
}
teks += `\n Contoh Penggunaan :\n *.domain* 2 host|ipvps\n`
return m.reply(teks)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "addscript": case "addsc": {
if (!isOwner) return m.reply(msg.owner)
if (!text || !m.quoted) return example("namasc|harga(contoh 30000) dengan reply scriptnya")
if (!/zip/.test(mime)) return example("namasc|harga(contoh 30000) dengan reply scriptnya")
let [namasc, harga] = text.split("|")
if (!namasc || !harga || isNaN(harga)) return example("namasc|harga(contoh 30000) dengan reply scriptnya")
harga = Number(harga)
script.push({
nama: namasc, 
path: "./data/script/" + namasc + '.zip', 
harga: harga.toString()
})
await fs.writeFileSync("./data/script.json", JSON.stringify(script, null, 2))
let ff = await m.quoted.download()
await fs.writeFileSync("./data/script/"+namasc+".zip", ff)
return m.reply(`Berhasil menambah script *${namasc}*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listscript": case "listsc": {
if (!isOwner) return m.reply(msg.owner)
if (script.length < 1) return m.reply("Tidak ada Script Bot.")
let teks = ""
let id = 0
for (let i of script) {
id += 1
teks += `
* *ID :* ${id}
* *Nama :* ${i.nama}
* *Harga :* Rp${func.toRupiah(i.harga)}
`
}
return m.reply(teks)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "delscript": case "delsc": {
if (!isOwner) return m.reply(msg.owner)
if (script.length < 1) return m.reply("Tidak ada Script Bot.")
if (text === "all") {
await fs.readdirSync("./data/script").filter(i => i !== "akses.txt").forEach(async (path) => {
try {
await fs.unlinkSync("./data/script/"+path)
} catch {}
})
script.length = 0; 
await fs.writeFileSync("./data/script.json", JSON.stringify(script, null, 2))
return m.reply(`Berhasil menghapus semua Script ✅`);
}
if (!text || isNaN(text)) return example("idscript")
let number = Number(text)
if (number > script.length) return m.reply("ID Script tidak ditemukan.")
let sc = script[number - 1]
const namasc = sc.nama
try {
await fs.unlinkSync(sc.path)
} catch {}
script.splice((number - 1), 1)
await fs.writeFileSync("./data/script.json", JSON.stringify(script, null, 2))
return m.reply(`Berhasil menghapus script *${namasc}*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "getscript": case "getsc": {
if (!isOwner) return m.reply(msg.owner)
if (script.length < 1) return m.reply("Tidak ada Script Bot.")
if (!text || isNaN(text)) return example("idscript")
let number = Number(text)
if (number > script.length) return m.reply("ID Script tidak ditemukan.")
let sc = script[number - 1]
await sock.sendMessage(m.chat, {document: await fs.readFileSync(sc.path), mimetype: "application/zip", fileName: sc.nama+".zip"}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "adddo":
case "addstokdo": {
    if (!isOwner) return m.reply(msg.owner)
    if (!text) return example("skyzo@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)")
    
    const cek = text.split("|");
    if (cek.length !== 6) return example("skyzo@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)")

    let [email, pw, kode2fa, reff, droplet, harga] = cek;
    
    if (isNaN(harga)) return m.reply("Harga harus berupa angka!");

    stokdo.push({
        email: email.trim(), 
        password: pw.trim(), 
        kode2fa: kode2fa.trim(), 
        referall: reff.trim(), 
        droplet: droplet.trim(), 
        harga: Number(harga.trim())
    });

    await fs.writeFileSync("./data/stokdo.json", JSON.stringify(stokdo, null, 2));
    await m.reply("Berhasil menambah data stok digitalocean ✅");
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delstokdo":
case "deldo": {
    if (!isOwner) return m.reply(msg.owner)
    if (stokdo.length < 1) return m.reply("Tidak ada stok digitalocean.");


    if (text === "all") {
        stokdo.length = 0; // Menghapus semua data
        await fs.writeFileSync("./data/stokdo.json", JSON.stringify(stokdo, null, 2));
        return m.reply(`Berhasil menghapus semua stok data akun DigitalOcean ✅`);
    }

    if (!text || isNaN(text)) return example("ID Stok yang ingin dihapus\n\nKetik *.liststok* untuk melihat daftar stok.")
    
    let inx = Number(text) - 1;
    if (inx < 0 || inx >= stokdo.length) return m.reply("ID stok tidak ditemukan.");

    stokdo.splice(inx, 1);
    await fs.writeFileSync("./data/stokdo.json", JSON.stringify(stokdo, null, 2));
    await m.reply("Berhasil menghapus data stok DigitalOcean ✅");
}
break;

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "liststokdo":
case "listdo": {
    if (!isOwner) return m.reply(msg.owner)
    if (m.isGroup) return m.reply(msg.private)
    if (stokdo.length < 1) return m.reply("Tidak ada stok digitalocean.");

    let messageText = "";
    stokdo.forEach((res, index) => {
        messageText += `\n* *ID Stok :* ${index + 1}\n`;
        messageText += `* *Email :* ${res.email}\n`;
        messageText += `* *Password :* ${res.password}\n`;
        messageText += `* *Kode 2FA :* ${res.kode2fa}\n`;
        messageText += `* *Referall :* ${res.referall}\n`;
        messageText += `* *Harga :* Rp${func.toRupiah(res.harga.toString())}\n`;
        messageText += `* *Droplet :* ${res.droplet}\n`;
    });

    return m.reply(messageText);
}
break;


// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "installpanel": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*")
let vii = text.split("|")
if (vii.length < 5) return example("ipvps|pwvps|panel.com|node.com|ramserver *(contoh 100000)*")
let sukses = false

const ress = new ssh2.Client();
const connSettings = {
 host: vii[0],
 port: '22',
 username: 'root',
 password: vii[1]
}

const pass = "admin1"
let passwordPanel = pass
const domainpanel = vii[2]
const domainnode = vii[3]
const ramserver = vii[4]
const deletemysql = `\n`
const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`

async function instalWings() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
let teks = `
*Install Panel Telah Berhasil ✅*

*Berikut Detail Akun Panel Kamu 📦*

*👤 Username :* admin
*🔐 Password :* ${passwordPanel}
*🌐 ${domainpanel}*

Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Command Menjalankan Wings*
*.startwings* ipvps|pwvps|tokenwings
`
await sock.sendMessage(m.chat, {text: teks}, {quoted: m})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes("Masukkan nama lokasi: ")) {
stream.write('Singapore\n');
}
if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan domain: ")) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes("Masukkan nama node: ")) {
stream.write('Node By Skyzo\n');
}
if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
stream.write(`${ramserver}\n`);
}
if (data.toString().includes("Masukkan Locid: ")) {
stream.write('1\n');
}
}).stderr.on('data', async (data) => {
console.log('Stderr : ' + data);
});
});
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('1\n');
}
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Enter the panel address (blank for any address)')) {
stream.write(`${domainpanel}\n`);
}
if (data.toString().includes('Database host username (pterodactyluser)')) {
stream.write('admin\n');
}
if (data.toString().includes('Database host password')) {
stream.write(`admin\n`);
}
if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
stream.write(`${domainnode}\n`);
}
if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
stream.write('admin@gmail.com\n');
}
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
m.reply(`Error Terjadi kesalahan :\n${data}`)
console.log('STDERR: ' + data);
});
})
}

async function instalPanel() {
ress.exec(commandPanel, (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalWings()
}).on('data', async (data) => {
if (data.toString().includes('Input 0-6')) {
stream.write('0\n');
} 
if (data.toString().includes('(y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Database name (panel)')) {
stream.write('\n');
}
if (data.toString().includes('Database username (pterodactyl)')) {
stream.write('admin\n');
}
if (data.toString().includes('Password (press enter to use randomly generated password)')) {
stream.write('admin\n');
} 
if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
stream.write('Asia/Jakarta\n');
} 
if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Email address for the initial admin account')) {
stream.write('admin@gmail.com\n');
} 
if (data.toString().includes('Username for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('First name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Last name for the initial admin account')) {
stream.write('admin\n');
} 
if (data.toString().includes('Password for the initial admin account')) {
stream.write(`${passwordPanel}\n`);
} 
if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
stream.write(`${domainpanel}\n`);
} 
if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
stream.write('y\n')
} 
if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
stream.write('1\n');
} 
if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
stream.write('y\n');
}
if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('(yes/no)')) {
stream.write('y\n');
} 
if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Still assume SSL? (y/N)')) {
stream.write('y\n');
} 
if (data.toString().includes('Please read the Terms of Service')) {
stream.write('y\n');
}
if (data.toString().includes('(A)gree/(C)ancel:')) {
stream.write('A\n');
} 
console.log('Logger: ' + data.toString())
}).stderr.on('data', (data) => {
m.reply(`Error Terjadi kesalahan :\n${data}`)
console.log('STDERR: ' + data);
});
});
}

ress.on('ready', async () => {
await m.reply(`*Memproses install server panel 🚀*

* *Ip Address :* ${vii[0]}
* *Domain :* ${vii[2]}

Mohon tunggu 1 - 10 menit hingga proses install selsai`)
ress.exec(deletemysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await instalPanel();
}).on('data', async (data) => {
await stream.write('\t')
await stream.write('\n')
await console.log(data.toString())
}).stderr.on('data', async (data) => {
m.reply(`Error Terjadi kesalahan :\n${data}`)
console.log('Stderr : ' + data);
});
});
}).connect(connSettings);
}
break  

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "startwings": case "configurewings": {
if (!isOwner) return m.reply(msg.owner)
let t = text.split('|')
if (t.length < 3) return example("ipvps|pwvps|token_node")

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new ssh2.Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "gantipw": case "gantipwvps": {
if (!isOwner) return m.reply(msg.owner)
let t = text.split('|')
if (t.length < 3) return example("ipvps|pwvps|pwbaru")

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `passwd`
const ress = new ssh2.Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write(`${token}\n`)
stream.write(`${token}\n`)
if (data.includes("password updated successfully")) return m.reply(`
*Berhasil mengubah password Vps ✅*

* *Password lama :* ${passwd}
* *Password baru :* ${token}
`)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listgc": case "listgrup": {
if (!isOwner) return
let teks = `\n`
let a = await sock.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "done": case "proses": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("jasa install panel")
let teks = `*Transaksi Telah Selesai Next Order✅*
* ${text}
* ${func.tanggal(Date.now())}

*Testimoni :*
* https://whatsapp.com/channel/0029Vax5meu35fLpVh5oUi2x
`
await sock.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, "0@s.whatsapp.net", global.owner+"@s.whatsapp.net"], 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idsaluran,
   newsletterName: global.namasaluran
   }
  },}, {quoted: null})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "dana": {
let tekspay = `
*Dana :* ${global.dana}
`
return sock.sendText(m.chat, tekspay, qtext)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "ovo": {
let tekspay = `
*Ovo :* ${global.ovo}
`
return sock.sendText(m.chat, tekspay, qtext)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "gopay": {
let tekspay = `
*Gopay :* ${global.gopay}
`
return sock.sendText(m.chat, tekspay, qtext)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "qris": {
return sock.sendMessage(m.chat, {image: {url: global.qris}}, {quoted: qtext})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listown": case "listowner": {
if (ownplus.length < 1) return m.reply("Tidak ada owner tambahan!")
var teks = ""
teks += `\n @${global.owner}\n`
for (let i of ownplus) {
teks += `\n * @${i.split("@")[0]}\n`
}
await sock.sendMessage(m.chat, {text: teks, mentions: ownplus}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case 'plays': case 'playspotify': {
  if (!text) return m.reply('Masukkan judul lagu!\nContoh: plays Jakarta Hari Ini');
  const res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
  if (!res.ok) return m.reply('Gagal mengambil data lagu.');
  const data = await res.json();
  if (!data.status) return m.reply('Lagu tidak ditemukan!');
  const { title, artist, duration, imageUrl, link } = data.result.metadata;
  const downloadUrl = data.result.downloadUrl;
  await sock.sendMessage(m.chat, {
    audio: { url: downloadUrl },
    mimetype: 'audio/mpeg',
    fileName: `${title}.mp3`,
    ptt: true, // true kalau mau dikirim sebagai VN
    contextInfo: {
      externalAdReply: {
        title: title,
        body: `${artist} • ${duration}`,
        mediaType: 2, 
        thumbnailUrl: imageUrl,
        renderLargerThumbnail: true,
        sourceUrl: link, 
        showAdAttribution: true
      }
    }
  }, { quoted: m });
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case 'plays':
case 'play': 
case 'ytplay': {
if (!text) return m.reply(`Example: ${prefix + command} Lagu sad`);
try {		
let search = await yts(`${text}`);
if (!search || search.all.length === 0) return m.reply(`*Lagu tidak ditemukan!* ☹️`);
let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📝 Description : ${description}`;
sock.sendMessage(m.chat,{
image: { url: image },
caption: caption,
footer: `${global.namaOwner}`,
buttons: [
{
buttonId: `${prefix}ytmp3 ${url}`,
buttonText: {
displayText: "YouTube Music"
}
},
{
buttonId: `${prefix}ytmp4 ${url}`,
buttonText: {
displayText: "YouTube Video"
}
},
{
buttonId: `${prefix}ytmp4-v2 ${url}`,
buttonText: {
displayText: "YouTube Video V2"
}
}
],
viewOnce: true,
}, {
quoted: m
});
} catch (err) {
console.error(err);
m.reply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "yts": {
if (!q) return example("lagu tiktok viral")
let data = await yts(q)
if (data.all.length < 1) return m.reply("Result tidak ditemukan!")
let anuan = data.all
let teks = ""
for (let res of anuan) {
teks += `\n* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${await func.toRupiah(res.views) || "Unknown"}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n`
}
await m.reply(teks)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "xnxxs": case "xnxxsearch": {
if (!q) return example("step sister")
let data = await func.fetchJson(`https://restapi.simplebot.my.id/search/xnxx?apikey=${global.ApikeyRestApi}&q=${q}`)
if (data.result.length < 1) return m.reply("Result tidak ditemukan!")
let anuan = data.result
let teks = ""
for (let res of anuan) {
teks += `\n* *Title :* ${res.title}
* *Info :* ${res.info.trim()}
* *Link :* ${res.link}\n`
}
await m.reply(teks)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "npm": case "npmsearch": {
if (!q) return example("axios")
let data = await func.fetchJson(`https://restapi.simplebot.my.id/search/npm?apikey=${global.ApikeyRestApi}&q=${q}`)
if (data.result.length < 1) return m.reply("Result tidak ditemukan!")
let anuan = data.result
let teks = ""
for (let res of anuan) {
teks += `\n* *${res.title}*
* *Update :* ${res.update.split("T").join(" ").split("Z")[0]}
* *Link :* ${res.links.npm}
* *Github :* ${res.links.repository}\n`
}
await m.reply(teks)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "tiktoksearch": case "tiktoks": {
if (!q) return example("axios")
let data = await func.fetchJson(`https://restapi.simplebot.my.id/search/tiktok?apikey=${global.ApikeyRestApi}&q=${q}`)
if (data.result.length < 1) return m.reply("Result tidak ditemukan!")
let anuan = data.result
let teks = ""
for (let res of anuan) {
teks += `
* *Title :* ${res.title}
* *Views :* ${await func.toRupiah(res.play_count)}
* *Author :* ${res.author.nickname}
* *Upload :* ${func.tanggal(res.create_time)}
* *Vidio :* ${res.play}
* *Audio :* ${res.music_info.play}
`
}
await m.reply(teks)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "xnxx": case "xnxxdl": {
if (!q) return example("linknya")
let data = await func.fetchJson(`https://restapi.simplebot.my.id/download/xnxx?apikey=${global.ApikeyRestApi}&url=${q}`)
if (!data.result) return m.reply("Result tidak ditemukan!")
await sock.sendMessage(m.chat, {video: {url: data.result.files.high || data.result.files.low}, caption: "XNXX Download Done ✅", mimetype: "video/mp4"}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "ytmp4-v2":
case "ytvideo-v2": {
 if (!q) return m.reply(`Example: ${prefix + command} https://youtube.com/watch?v=CVLeZpg6Kzk 144/240/360/480/720/1080`);
 const args = q.split(' ');
 const url = args[0];
 const availableResolutions = ['144', '240', '360', '480', '720', '1080'];
 let quality = args[1] && availableResolutions.includes(args[1]) ? args[1] : '480';
 if (!url.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)) {
 return m.reply(`Please provide a valid YouTube URL\n\nAvailable resolutions: ${availableResolutions.join(', ')}`);
 }
 m.reply(mess.wait);
 try {
 const apiUrl = `https://api.hiuraa.my.id/downloader/savetube?url=${encodeURIComponent(url)}&format=${quality}`;
 const response = await fetch(apiUrl);
 const data = await response.json();
 if (!data.status || !data.result) {
 return m.reply('Failed to download the video');
 }
 const { title, duration, thumbnail, download } = data.result;
 await sock.sendMessage(m.chat, {
 image: { url: thumbnail },
 caption: `*${title}*\n*${quality}p* | *${duration}*`
 }, { quoted: m });
 
 await sock.sendMessage(m.chat, {
 video: { url: download },
 mimetype: 'video/mp4'
 }, { quoted: m });
 
 } catch (error) {
 console.error('Error downloading YouTube video:', error);
 m.reply('An error occurred while downloading the video');
 }
 }
 break
 
// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

 
case 'ytmp4': 
case 'ytvideo': 
case 'ytv': {
 if (!text) return m.reply(`Gunakan: ${prefix + command} <url> [resolusi]`); 
 let url = args[0]; 
 let resolution = args[1] && !isNaN(args[1]) ? args[1] : "720"; 
 try { 
 await sock.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
 let info = await getVideoInfo(url);
 if (!info || !info.status) return m.reply('❌ Gagal mendapatkan informasi video.');
 await sock.sendMessage(m.chat, { react: { text: '📥', key: m.key } });
 let video = await downloadVideo(url, resolution);
 if (!video.status || !video.downloadUrl) return m.reply('❌ Gagal mendapatkan file video.');
 let captionInfo = `📹 *${info.title}*\n👤 *Creator:* ${info.creator}\n⏳ *Durasi:* ${info.duration} detik\n📡 *Sumber:* ${video.source}\n🎥 *Resolusi:* ${resolution}p\n🔗 *URL:* ${info.url}`;
 await sock.sendMessage(m.chat, {
 image: { url: info.thumbnail },
 caption: captionInfo
 }, { quoted: m });
 await sock.sendMessage(m.chat, { react: { text: '📤', key: m.key } });
 let fileSize = await getFileSizeFromUrl(video.downloadUrl);
 let captionMedia = `📹 *${info.title}*\n👤 *${info.creator}*\n📡 *Sumber:* ${video.source}`;
 if (fileSize > 15 * 1024 * 1024) {
 await sock.sendMessage(m.chat, { 
 document: { url: video.downloadUrl },
 mimetype: 'video/mp4',
 fileName: `${info.title}.mp4`,
 caption: captionMedia
 }, { quoted: m });
 } else {
 await sock.sendMessage(m.chat, { 
 video: { url: video.downloadUrl },
 caption: captionMedia,
 fileName: `${info.title}.mp4`
 }, { quoted: m });
 }
 await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } catch (err) { 
 console.error(err); 
 m.reply('❌ Terjadi kesalahan.'); 
 } 
} 
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //


case 'ytmp3': case 'ytaudio':
 if (!text) return m.reply('Masukkan judul lagu yang ingin dicari!');
 try {
 const axios = require('axios');
 const fs = require('fs');
 const path = require('path');
 await sock.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
 let apiUrl = `https://api.alvianuxio.eu.org/api/play?query=${encodeURIComponent(text)}&apikey=kayzuMD&format=mp3`;
 let { data } = await axios.get(apiUrl, { timeout: 15000 });
 if (!data || !data.data || !data.data.response) {
 return m.reply('Gagal menemukan lagu.');
 }
 let song = data.data.response;
 let caption = `🎵 *Judul:* ${song.title}\n`
 + `⏳ *Durasi:* ${song.duration}\n`
 + `📅 *Upload:* ${song.uploadDate}\n`
 + `👀 *Views:* ${song.views?.toLocaleString() || 'N/A'}\n`
 + `🎤 *Channel:* ${song.channel?.name || 'Unknown'}\n`
 + `🔗 *Video:* ${song.videoUrl}\n`
 + `🎧 *Download:* ${song.download}`;
 const videoId = song.videoUrl.includes('v=') ? song.videoUrl.split('v=')[1].split('&')[0] : null;
 const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
 await sock.sendMessage(m.chat, {
 text: caption,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: song.title,
 body: `Music Player`,
 mediaType: 1,
 thumbnailUrl: thumbnailUrl,
 sourceUrl: song.videoUrl
 }
 }
 }, { quoted: m });
 const sanitizedTitle = song.title.replace(/[^\w\s-]/gi, '_').substring(0, 50);
 let audioPath = path.join(__dirname, `temp_${Date.now()}_${sanitizedTitle}.mp3`);
 try {
 const response = await axios({
 method: 'get',
 url: song.download,
 responseType: 'arraybuffer',
 timeout: 60000,
 headers: {
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
 }
 });
 if (!response.data || response.data.length === 0) {
 throw new Error('Empty response data');
 }
 fs.writeFileSync(audioPath, Buffer.from(response.data));
 try {
 await sock.sendMessage(m.chat, {
 audio: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });
 } catch (audioSendError) {
 await sock.sendMessage(m.chat, {
 document: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });
 }
 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
 } catch (downloadError) {
 try {
 const alternativeUrl = `https://api.akuari.my.id/downloader/youtube?link=${song.videoUrl}`;
 const altResponse = await axios.get(alternativeUrl);
 if (altResponse.data && altResponse.data.mp3) {
 const audioResponse = await axios({
 method: 'get',
 url: altResponse.data.mp3,
 responseType: 'arraybuffer',
 timeout: 60000
 });
 audioPath = path.join(__dirname, `temp_alt_${Date.now()}_${sanitizedTitle}.mp3`);
 fs.writeFileSync(audioPath, Buffer.from(audioResponse.data));
 await sock.sendMessage(m.chat, {
 document: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });

 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 await sock.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
 } else {
 throw new Error('Alternative API failed');
 }
 } catch (altError) {
 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 m.reply('Gagal mengunduh audio. Coba lagi nanti.');
 await sock.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
 }
 }
 } catch (error) {
 m.reply('Terjadi kesalahan saat mencari atau memproses lagu.');
 await sock.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
 }
 break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "tiktok": case "tt": {
if (!text) return example("linknya")
m.reply("📥 Memproses tiktok downloader . .")
var anu = await func.fetchJson(`https://restapi.simplebot.my.id/download/tiktok?apikey=${global.ApikeyRestApi}&url=${text}`)
if (anu.status) {
if (anu.result.slides.length > 1) {
for (let i of anu.result.slides) {
await sock.sendFileUrl(m.chat, i.url, "Tiktok Download Done ✅", m)
}
} else {
await sock.sendMessage(m.chat, {video: {url: anu.result.video_nowm}, caption: "Tiktok Download Done ✅", mimetype: "video/mp4"}, {quoted: m})
}
await sock.sendMessage(m.chat, {audio: {url: anu.result.audio_url}, mimetype: "audio/mpeg"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gitclone": {
if (!text) return example("https://github.com/Skyzodev/Simplebot")
try {
let res = await await func.fetchJson(`https://restapi.simplebot.my.id/download/github?apikey=${global.ApikeyRestApi}&url=${text}`)
let filename = res.result.filename
let url = res.result.download
await sock.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! repositori tidak ditemukan`)
}}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "instagram": case "ig": {
if (!text) return example("linknya")
m.reply("📥 Memproses instagram downloader . .")
var anu = await func.fetchJson(`https://restapi.simplebot.my.id/download/instagram?apikey=${global.ApikeyRestApi}&url=${text}`)
if (anu.status) {
for (let i of anu.result.downloadUrls) {
await sock.sendFileUrl(m.chat, i, "Instagram Download Done ✅", m)
}
} else {
return m.reply("Error! Result Not Found")
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "facebook": case "fb": {
if (!text) return example("linknya")
m.reply("📥 Memproses facebook downloader . .")
var anu = await func.fetchJson(`https://restapi.simplebot.my.id/download/facebook?apikey=${global.ApikeyRestApi}&url=${text}`)
if (anu.status) {
await sock.sendMessage(m.chat, {video: {url: anu.result.media}, caption: "Facebook Download Done ✅"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "videy": {
if (!text) return example("linknya")
m.reply("📥 Memproses videy downloader . .")
var anu = await func.fetchJson(`https://restapi.simplebot.my.id/download/videy?apikey=${global.ApikeyRestApi}&url=${text}`)
if (anu.status) {
await sock.sendMessage(m.chat, {video: {url: anu.result}, caption: "Videy Download Done ✅"}, {quoted: m})
} else {
return m.reply("Error! Result Not Found")
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "videy": {
if (!text) return example("linknya")
m.reply("📥 Memproses videy downloader . .")
try {
let res = await fetch(`https://videy.co/api/download?url=${encodeURIComponent(text)}`)
let json = await res.json()
        
if (!json.success) return m.reply("Error! Video tidak ditemukan")
        
let videoUrl = json.result.video_url
let videoTitle = json.result.title || "Video"
        
await sock.sendMessage(m.chat, {video: {url: videoUrl}, caption: `🎥 *${videoTitle}*`}, {quoted: m})
await sock.sendMessage(m.chat, {react: {text: '', key: m.key}})
} catch (e) {
return m.reply("Error! Result Not Found")
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case 'ytmp4': 
case 'ytvideo': 
case 'ytv': {
 if (!text) return m.reply(`Gunakan: ${prefix + command} <url> [resolusi]`); 
 let url = args[0]; 
 let resolution = args[1] && !isNaN(args[1]) ? args[1] : "720"; 
 try { 
 await sock.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
 let info = await getVideoInfo(url);
 if (!info || !info.status) return m.reply('❌ Gagal mendapatkan informasi video.');
 await sock.sendMessage(m.chat, { react: { text: '📥', key: m.key } });
 let video = await downloadVideo(url, resolution);
 if (!video.status || !video.downloadUrl) return m.reply('❌ Gagal mendapatkan file video.');
 let captionInfo = `📹 *${info.title}*\n👤 *Creator:* ${info.creator}\n⏳ *Durasi:* ${info.duration} detik\n📡 *Sumber:* ${video.source}\n🎥 *Resolusi:* ${resolution}p\n🔗 *URL:* ${info.url}`;
 await sock.sendMessage(m.chat, {
 image: { url: info.thumbnail },
 caption: captionInfo
 }, { quoted: m });
 await sock.sendMessage(m.chat, { react: { text: '📤', key: m.key } });
 let fileSize = await getFileSizeFromUrl(video.downloadUrl);
 let captionMedia = `📹 *${info.title}*\n👤 *${info.creator}*\n📡 *Sumber:* ${video.source}`;
 if (fileSize > 15 * 1024 * 1024) {
 await sock.sendMessage(m.chat, { 
 document: { url: video.downloadUrl },
 mimetype: 'video/mp4',
 fileName: `${info.title}.mp4`,
 caption: captionMedia
 }, { quoted: m });
 } else {
 await sock.sendMessage(m.chat, { 
 video: { url: video.downloadUrl },
 caption: captionMedia,
 fileName: `${info.title}.mp4`
 }, { quoted: m });
 }
 await sock.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } catch (err) { 
 console.error(err); 
 m.reply('❌ Terjadi kesalahan.'); 
 } 
} 
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "tourl": {
if (!/image|video/.test(mime)) return example("dengan kirim/reply foto")
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
async function getUrls (buffer) {
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}
let media = await sock.downloadAndSaveMediaMessage(qmsg)
let teks = await getUrls(fs.readFileSync(media))
await sock.sendMessage(m.chat, {text: teks}, {quoted: m})
await fs.unlinkSync(media)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tiktokstalk": case "ttstalk": {
if (!text) return example("username")
try {
const res = await func.fetchJson(`https://restapi.simplebot.my.id/stalk/tiktok?apikey=${global.ApikeyRestApi}&user=${text}`)
if (!res.status) return m.reply("Error nama pengguna tidak ditemukan")
const teks = `
* *Nama :* ${res.result.nickname}
* *Username :* ${res.result.uniqueId}
* *Bio :* ${res?.result?.signature || ""}
* *Followers :* ${res.result.followerCount}
* *Following :* ${res.result.followingCount}
* *Private :* ${res.result.privateAccount == true ? "Ya" : "Tidak"}
`
await sock.sendMessage(m.chat, {image: {url: res.result.avatarMedium}, caption: teks}, {quoted: m})
} catch (err) {
return m.reply("Error : "+err)
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "igstalk": {
if (!text) return example("username")
try {
let res = await func.fetchJson(`https://restapi.simplebot.my.id/stalk/instagram?apikey=${global.ApikeyRestApi}&user=${q}`)
const teks = `
* *Nama :* ${res.result.name}
* *Username :* ${res.result.username}
* *Bio :* ${res.result.bio}
* *Total Postingan :* ${res.result.posts}
* *Followers :* ${res.result.followers}
* *Following :* ${res.result.following}
`
await sock.sendMessage(m.chat, {image: {url: res.result.avatar}, caption: teks}, {quoted: m})
} catch (err) {
return m.reply("Error : "+err)
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "remini": case "tohd": case "hd": {
if (!/image/.test(mime)) return example("dengan kirim/reply foto")
m.reply(`🚀 Memproses ${command.toLowerCase()} foto . . `)
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
async function getUrls (buffer) {
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}
let media = await sock.downloadAndSaveMediaMessage(qmsg)
let directLink = await getUrls(fs.readFileSync(media))
try {
const apa = await func.fetchJson(`https://restapi.simplebot.my.id/imagecreator/remini?apikey=${global.ApikeyRestApi}&url=${directLink}`)
await sock.sendMessage(m.chat, {image: {url: apa.result}, caption: "Berhasil ✅"}, {quoted: m})
} catch (err) {
await m.reply("Error: " + err)
}
await fs.unlinkSync(media)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "removebg": case "rbg": {
if (!/image/.test(mime)) return example("dengan kirim/reply foto")
const FormData = require('form-data');
const { fromBuffer } = require('file-type');
async function getUrls (buffer) {
  let { ext } = await fromBuffer(buffer);
  let bodyForm = new FormData();
  bodyForm.append("fileToUpload", buffer, "file." + ext);
  bodyForm.append("reqtype", "fileupload");
  let res = await fetch("https://catbox.moe/user/api.php", {
    method: "POST",
    body: bodyForm,
  });
  let data = await res.text();
  return data;
}
let media = await sock.downloadAndSaveMediaMessage(qmsg)
let directLink = await getUrls(fs.readFileSync(media))
try {
const apa = await func.fetchJson(`https://restapi.simplebot.my.id/imagecreator/removebg?apikey=${global.ApikeyRestApi}&url=${directLink}`)
await sock.sendMessage(m.chat, {image: {url: apa.result}, caption: "Berhasil ✅"}, {quoted: m})
} catch (err) {
await m.reply("Error: " + err)
}
await fs.unlinkSync(media)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "qc": {
if (!text) return example('teksnya')
let warna = ["#000000", "#ff2414", "#22b4f2", "#eb13f2"]
let ppuser
try {
ppuser = await sock.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/gqs7oz.jpg'
}
let reswarna = await warna[Math.floor(Math.random()*warna.length)]
const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": reswarna,
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.pushName,
            "photo": {
               "url": ppuser
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   try {
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
sock.sendStimg(m.chat, buffer, m, { packname: global.packname })
   } catch (error) {
   m.reply(error.toString())
   }
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "ai": case "openai": case "gpt": case "chatgpt": {
if (!text) return example("kamu siapa")
await func.fetchJson(`https://restapi.simplebot.my.id/ai/openai?apikey=${global.ApikeyRestApi}&text=${text}`).then((e) => {
if (!e.status) return m.reply(JSON.stringify(e, null, 2))
var teks = `${e.result}`
sock.sendMessage(m.chat, {text: teks, ai: true}, {quoted: m})
})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "closegc": case "close": 
case "opengc": case "open": {
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner && !m.isAdmin) return m.reply(msg.admin)
if (!m.isBotAdmin) return m.reply(msg.botadmin)
if (/open|opengc/.test(command)) {
if (m.metadata.announce == false) return 
await sock.groupSettingUpdate(m.chat, 'not_announcement')
} else if (/closegc|close/.test(command)) {
if (m.metadata.announce == true) return 
await sock.groupSettingUpdate(m.chat, 'announcement')
} else {}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "kick": case "kik": {
if (!isOwner) return m.reply(msg.admin)
if (!m.isGroup) return m.reply(msg.group)
if (!m.isBotAdmin) return m.reply(msg.botadmin)
if (text || m.quoted) {
const input = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await sock.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await sock.groupParticipantsUpdate(m.chat, [input], 'remove')
} else {
return example("@tag/reply")
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "demote":
case "promote": {
if (!isOwner) return m.reply(msg.admin)
if (!m.isGroup) return m.reply(msg.group)
if (!m.isBotAdmin) return m.reply(msg.botadmin)
if (m.quoted || text) {
var action
let target = m.mentionedJid ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await sock.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await sock.sendMessage(m.chat, {text: `Berhasil ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return example("@tag/6285###")
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "ht": case "hidetag": {
if (!m.isGroup) return m.reply(msg.group)
if (!isOwner && !m.isAdmin) return m.reply(msg.admin)
if (!text) return example("pesannya")
let member = m.metadata.participants.map(v => v.id)
await sock.sendMessage(m.chat, {text: text, mentions: [...member]}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "sticker": case "stiker": case "sgif": case "s": {
if (!/image|video/.test(mime)) return example("dengan mengirim foto/vidio")
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
var media = await sock.downloadAndSaveMediaMessage(qmsg)
await sock.sendStimg(m.chat, media, m, {packname: "Whatsapp Bot 2024"})
await fs.unlinkSync(media)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "stickerwm": case "swn": case "wm": {
if (!text) return example("namamu & mengirim foto/vidio")
if (!/image|video/.test(mime)) return example("namamu & mengirim foto/vidio")
if (/video/.test(mime)) {
if ((qmsg).seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
}
var media = await sock.downloadAndSaveMediaMessage(qmsg)
await sock.sendStimg(m.chat, media, m, {packname: text})
await fs.unlinkSync(media)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "brat": {
if (!text) return example("Hello World!")
await sock.sendStimg(m.chat, `https://restapi.simplebot.my.id/imagecreator/brat?apikey=${global.ApikeyRestApi}&text=${text}`, m, {packname: global.namaowner})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "public": {
if (!isOwner) return m.reply(msg.owner)
sock.public = true
m.reply("Berhasil mengganti mode bot menjadi *Public*")
}
break

case "self": {
if (!isOwner) return m.reply(msg.owner)
sock.public = false
m.reply("Berhasil mengganti mode bot menjadi *Self*")
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "get": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return m.reply("linknya")
try {
const data = await axios.get(text, { responseType: 'arraybuffer' });
const mime = data.headers['content-type'] || (await FileType.fromBuffer(data.data)).mime
if (/gif|image|video|audio|pdf/i.test(mime)) {
return m.reply(text)
}
var check = await func.fetchJson(text)
return m.reply(JSON.stringify(check, null, 2))
} catch {
return m.reply(`${e}`)
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "antilink": {
  if (!isOwner) return m.reply(msg.owner);
  if (!m.isGroup) return m.reply(msg.group);

  let room = antilink.find((i) => i.id == m.chat);

  if (!args[0] || !args[1]) return example("nokick/kick on/off");

  let mode = args[0].toLowerCase();
  let state = args[1].toLowerCase();
  let isOn = /on/g.test(state);
  let isOff = /off/g.test(state);

  if (!["kick", "nokick", "kik", "nokik"].includes(mode))
    return example("nokick/kick on/off");

  if (!isOn && !isOff) return example("nokick/kick on/off");

  let shouldKick = mode === "kick" || mode === "kik";

  if (isOn) {
    if (room && room.kick === shouldKick)
      return m.reply(
        `*Antilink grup ${shouldKick ? "kick" : "no kick"}* di grup ini sudah aktif!`
      );

    if (room) {
      let ind = antilink.indexOf(room);
      antilink.splice(ind, 1);
    }

    antilink.push({ id: m.chat, kick: shouldKick });
    fs.writeFileSync("./data/antilink.json", JSON.stringify(antilink, null, 2));
    return m.reply(
      `*Antilink grup ${shouldKick ? "kick" : "no kick"}* berhasil diaktifkan ✅`
    );
  } else if (isOff) {
    if (!room || room.kick !== shouldKick)
      return m.reply(
        `*Antilink grup ${shouldKick ? "kick" : "no kick"}* di grup ini sudah tidak aktif!`
      );

    let ind = antilink.indexOf(room);
    antilink.splice(ind, 1);
    fs.writeFileSync("./data/antilink.json", JSON.stringify(antilink, null, 2));
    return m.reply(
      `*Antilink grup ${shouldKick ? "kick" : "no kick"}* berhasil dimatikan ✅`
    );
  }
}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "developerbot": case "owner": case "creator": {
await sock.sendContact(m.chat, [global.owner], m)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "backupsc": case "bck": case "backup": {
if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return m.reply("Fitur ini hanya untuk owner pemilik bot!")
let dir = await fs.readdirSync("./server/tmp")
if (dir.length >= 2) {
let res = await dir.filter(e => !e.endsWith(".txt"))
for (let i of res) {
await fs.unlinkSync(`./server/tmp/${i}`)
}}
await m.reply("Processing Backup Script . .")
const tgl = func.getTime().split("T")[0]
let jam = func.getTime().split("T")[1].split("+")[0].split(":")
jam = jam.slice(0, 2).join(":")
const name = `Backup-${tgl}#${jam}`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await sock.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": 
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": 
case "unlimited": case "unli": {
    if (!isOwner && !isGrupReseller) {
        return m.reply(`Fitur ini hanya untuk dalam grup *reseller panel*!\nJoin grup *reseller panel* langsung chat ${global.owner}`);
    }
    if (!text) return example("username,628XXX");

    let nomor, usernem;
    let tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = tek.map(t => t.trim());
        if (!users || !nom) return example("username,628XXX");
        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat
    }

    try {
        var onWa = await sock.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di WhatsApp!");
    } catch (err) {
        return m.reply("Terjadi kesalahan saat mengecek nomor WhatsApp: " + err.message);
    }

    // Mapping RAM, Disk, dan CPU
    const resourceMap = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };
    
    let { ram, disk, cpu } = resourceMap[command] || { ram: "0", disk: "0", cpu: "0" };

    let username = usernem.toLowerCase();
    let email = username + "@gmail.com";
    let name = func.capital(username) + " Server";
    let password = username + "001";

    try {
        let f = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({ email, username, first_name: name, last_name: "Server", language: "en", password })
        });
        let data = await f.json();
        if (data.errors) return m.reply("Error: " + JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;

        let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
            method: "GET",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey }
        });
        let data2 = await f1.json();
        let startup_cmd = data2.attributes.startup;

        let f2 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({
                name,
                description: func.tanggal(Date.now()),
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: startup_cmd,
                environment: { INST: "npm", USER_UPLOAD: "0", AUTO_UPDATE: "0", CMD_RUN: "npm start" },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] },
            })
        });
        let result = await f2.json();
        if (result.errors) return m.reply("Error: " + JSON.stringify(result.errors[0], null, 2));
        
        let server = result.attributes;
        var orang = nomor
        if (m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${nomor == m.sender ? "private chat" : nomor.split("@")[0]}`)
        }        
        if (nomor !== m.sender && !m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${nomor.split("@")[0]}`)
        }
        
        let teks = `
*Berikut Detail Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ ${func.tanggal(Date.now())}*

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram / 1000 + "GB"}*
* Disk : *${disk == "0" ? "Unlimited" : disk / 1000 + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu + "%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`;

        await sock.sendMessage(orang, { text: teks }, { quoted: m });
    } catch (err) {
        return m.reply("Terjadi kesalahan: " + err.message);
    }
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listpanel": case "listp": case "listserver": {
if (!isOwner && !isGrupReseller) return m.reply(`Fitur ini hanya untuk dalam grup *reseller panel*!\nJoin grup *reseller panel* langsung chat ${global.owner}`)
let f = await fetch(domain + "/api/application/servers", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
});
let res = await f.json();
let servers = res.data;
if (servers.length < 1) return m.reply("Tidak ada server panel!")
let messageText = ""
for (let server of servers) {
let s = server.attributes
let f3 = await fetch(domain + "/api/client/servers/" + s.uuid.split`-`[0] + "/resources", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + capikey
}
})
let data = await f3.json();
let status = data.attributes ? data.attributes.current_state : s.status;
messageText += `\n 📡 *${s.id} [ ${s.name} ]*
 *• Ram :* ${s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().split("").slice(0,2).join("") + "GB" : s.limits.memory.toString().length < 4 ? s.limits.memory.toString().charAt(1) + "GB" : s.limits.memory.toString().charAt(0) + "GB"}
 *• CPU :* ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}
 *• Disk :* ${s.limits.disk == 0 ? "Unlimited" : s.limits.disk.length > 3 ? s.limits.disk.toString().charAt(1) + "GB" : s.limits.disk.toString().charAt(0) + "GB"}
 *• Created :* ${s.created_at.split("T")[0]}\n`
}
await sock.sendMessage(m.chat, {text: messageText}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "delpanel": {
if (!isOwner && !isGrupReseller) return m.reply(`Fitur ini hanya untuk dalam grup *reseller panel*!\nJoin grup *reseller panel* langsung chat ${global.owner}`)
if (!text) return example("idnya")
let f = await fetch(domain + "/api/application/servers", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let result = await f.json()
let servers = result.data
let sections
let nameSrv
for (let server of servers) {
let s = server.attributes
if (Number(text) == s.id) {
sections = s.name.toLowerCase()
nameSrv = s.name
let f = await fetch(domain + `/api/application/servers/${s.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
}}
let cek = await fetch(domain + "/api/application/users", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
for (let user of users) {
let u = user.attributes
if (u.first_name.toLowerCase() == sections) {
let delusr = await fetch(domain + `/api/application/users/${u.id}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}}
if (sections == undefined) return m.reply("Gagal menghapus server!\nID server tidak ditemukan")
await m.reply(`Sukses menghapus server panel *${func.capital(nameSrv)}*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "cadmin": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("username,628XXX")
let nomor
let usernem
let tek = text.split(",")
if (tek.length > 1) {
let [users, nom] = text.split(",")
if (!users || !nom) return example("username,628XXX")
nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
usernem = users.toLowerCase()
} else {
usernem = text.toLowerCase()
nomor = m.isGroup ? m.sender : m.chat
}
var onWa = await sock.onWhatsApp(nomor.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di whatsapp!")
let username = usernem.toLowerCase()
let email = username+"@gmail.com"
let name = func.capital(args[0])
let password = username+"001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang = nomor
if (m.isGroup) {
await m.reply(`Berhasil membuat akun admin panel ✅\ndata akun sudah di kirim ke ${nomor == m.sender ? "private chat" : nomor.split("@")[0]}`)
}        
if (nomor !== m.sender && !m.isGroup) {
await m.reply(`Berhasil membuat akun admin panel ✅\ndata akun sudah di kirim ke ${nomor.split("@")[0]}`)
}
var teks = `
*Berikut Detail Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ ${func.tanggal(Date.now())}*

*🌐* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await sock.sendMessage(orang, {text: teks}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "listadmin": {
if (!isOwner) return m.reply(msg.owner)
let cek = await fetch(domain + "/api/application/users", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
if (users.length < 1 ) return m.reply("Tidak ada admin panel")
var teks = ""
await users.forEach((i) => {
if (i.attributes.root_admin !== true) return
teks += `\n 📡 *${i.attributes.id} [ ${i.attributes.first_name} ]*
 *• Nama :* ${i.attributes.first_name}
 *• Created :* ${i.attributes.created_at.split("T")[0]}\n`
})
await sock.sendMessage(m.chat, {text: teks}, {quoted: m})
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "deladmin": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("idnya")
let cek = await fetch(domain + "/api/application/users", {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res2 = await cek.json();
let users = res2.data;
let getid = null
let idadmin = null
await users.forEach(async (e) => {
if (e.attributes.id == args[0] && e.attributes.root_admin == true) {
getid = e.attributes.username
idadmin = e.attributes.id
let delusr = await fetch(domain + `/api/application/users/${idadmin}`, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = delusr.ok ? {
errors: null
} : await delusr.json()
}
})
if (idadmin == null) return m.reply("Gagal menghapus akun!\nID user tidak ditemukan")
await m.reply(`Sukses menghapus akun admin panel *${func.capital(getid)}*`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "clearserver": {
if (!isOwner) return m.reply(msg.owner)
await m.reply(`Memproses penghapusan semua user & server panel yang bukan admin`)
try {
const PTERO_URL = global.domain
// Ganti dengan URL panel Pterodactyl
const API_KEY = global.apikey// API Key dengan akses admin

// Konfigurasi headers
const headers = {
  "Authorization": "Bearer " + API_KEY,
  "Content-Type": "application/json",
  "Accept": "application/json",
};

// Fungsi untuk mendapatkan semua user
async function getUsers() {
  try {
    const res = await axios.get(`${PTERO_URL}/api/application/users`, { headers });
    return res.data.data;
  } catch (error) {
    m.reply(JSON.stringify(error.response?.data || error.message, null, 2))
    
    return [];
  }
}

// Fungsi untuk mendapatkan semua server
async function getServers() {
  try {
    const res = await axios.get(`${PTERO_URL}/api/application/servers`, { headers });
    return res.data.data;
  } catch (error) {
    m.reply(JSON.stringify(error.response?.data || error.message, null, 2))
    return [];
  }
}

// Fungsi untuk menghapus server berdasarkan UUID
async function deleteServer(serverUUID) {
  try {
    await axios.delete(`${PTERO_URL}/api/application/servers/${serverUUID}`, { headers });
    console.log(`Server ${serverUUID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus server ${serverUUID}:`, error.response?.data || error.message);
  }
}

// Fungsi untuk menghapus user berdasarkan ID
async function deleteUser(userID) {
  try {
    await axios.delete(`${PTERO_URL}/api/application/users/${userID}`, { headers });
    console.log(`User ${userID} berhasil dihapus.`);
  } catch (error) {
    console.error(`Gagal menghapus user ${userID}:`, error.response?.data || error.message);
  }
}

// Fungsi utama untuk menghapus semua user & server yang bukan admin
async function deleteNonAdminUsersAndServers() {
  const users = await getUsers();
  const servers = await getServers();
  let totalSrv = 0

  for (const user of users) {
    if (user.attributes.root_admin) {
      console.log(`Lewati admin: ${user.attributes.username}`);
      continue; // Lewati admin
    }

    const userID = user.attributes.id;
    const userEmail = user.attributes.email;

    console.log(`Menghapus user: ${user.attributes.username} (${userEmail})`);

    // Cari server yang dimiliki user ini
    const userServers = servers.filter(srv => srv.attributes.user === userID);

    // Hapus semua server user ini
    for (const server of userServers) {
      await deleteServer(server.attributes.id);
      totalSrv += 1
    }

    // Hapus user setelah semua servernya terhapus
    await deleteUser(userID);
  }
await m.reply(`Berhasil menghapus ${totalSrv} user & server panel yang bukan admin.`)
}

// Jalankan fungsi
return deleteNonAdminUsersAndServers();
} catch (err) {
return m.reply(`${JSON.stringify(err, null, 2)}`)
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addrespon": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return example("cmd|responnya")
if (!text.split("|")) return example("cmd|responnya")
let result = text.split("|")
if (result.length < 2) return example("cmd|responnya")
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./data/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delrespon": {
if (!isOwner) return m.reply(msg.owner)
if (!text) return ("cmd\n\n ketik *.listrespon* untuk melihat semua cmd")
const cmd = text.toLowerCase()
if (cmd == "all") {
list.splice(0, list.length)
await fs.writeFileSync("./data/list.json", JSON.stringify(list, null, 2))
return m.reply("Berhasil menghapus semua respon ✅")
}
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./data/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listrespon": {
if (!isOwner) return m.reply(msg.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = ""
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "batalbeli": {
if (m.isGroup) return
if (!sock[m.sender]) return 
await sock.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: sock[m.sender].msg})
await sock.sendMessage(m.chat, { delete: sock[m.sender].msg.key })
await clearTimeout(sock[m.sender].exp)
delete sock[m.sender];
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //


case "buysaldo": {
  if (m.isGroup)
    return m.reply(
      "Pembelian Saldo hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);
if (!text || !args[0]) return example("nomor/id")
  if (!text.includes("|")) {
    let nodana = text.trim()
    const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /DOMPET DIGITAL/i.test(item.kategori) && item.harga > 0)
        let sections = await dana.map((item) => {
            return {
                title: `${item.keterangan}`,
                header: `${item.produk} ✅`, 
                description: `Rp${item.harga}`, 
                id: `.buysaldo ${nodana}|${item.kode}|${item.harga}|${item.keterangan}`
            };
})
    return sock.sendMessage(
      m.chat,
      {
        buttons: [
          {
            buttonId: "action",
            buttonText: { displayText: "ini pesan interactiveMeta" },
            type: 4,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify({
                title: "Pilih Ewallet",
                sections: [
                  {
                    rows: sections, 
                  },
                ],
              }),
            },
          },
        ],
        headerType: 1,
        viewOnce: true,
        text: "\n *Pilih Jumlah & Ewallet 🛍️*\n",
        contextInfo: {
          isForwarded: true, 
          mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
        },
      },
      { quoted: null }
    );
  }

  let Obj = {};
  Obj.harga = text.split("|")[2]
  Obj.nominal = text.split("|")[3]
  Obj.kode = text.split("|")[1]
  Obj.nodana = text.split("|")[0]
  
  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250)

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* ${Obj.nominal}
 *• Nomor Tujuan :* ${Obj.nodana}
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* ${Obj.nominal}
`,
        }, { quoted: sock[m.sender].msg });
 const idtrx = "sock" + `${Date.now()}`
await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await sock.sendMessage(sock[m.sender].chat, {text: `
*Transaksi Telah Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Barang : ${Obj.nominal}
 *• Status :* Sukses
`, contextInfo: { isForwarded: true }}, {quoted: null})
statuse = false
break
}
await func.sleep(5000)
}
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });

        delete sock[m.sender];
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break

case "topupml": {
  if (m.isGroup)
    return m.reply(
      "Pembelian Diamond Mobile Legends hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);
if (!text) return example("id dan sambungkan dengan serverid")
let idgame = text.split("|")
if (isNaN(idgame[0])) return example("id dan sambungkan dengan serverid")
  if (!args[0] || !args[0].includes("|")) {
    let nodana = idgame[0].replace(/[^0-9]/g, "").trim()
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /TPG Diamond Mobile Legends/i.test(item.produk) && item.harga > 0)
        let sections = await dana.map((item) => {
            return {
                title: `${item.keterangan}`,
                header: `${item.produk} ✅`, 
                description: `Rp${item.harga}`, 
                id: `.topupml ${nodana}|${item.kode}|${item.harga}|${item.keterangan}`
            };
})
    return sock.sendMessage(
      m.chat,
      {
        buttons: [
          {
            buttonId: "action",
            buttonText: { displayText: "ini pesan interactiveMeta" },
            type: 4,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify({
                title: "Pilih Diamond",
                sections: [
                  {
                    rows: sections, 
                  },
                ],
              }),
            },
          },
        ],
        headerType: 1,
        viewOnce: true,
        text: "\n *Pilih Jumlah Diamond 🛍️*\n",
        contextInfo: {
          isForwarded: true, 
          mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
        },
      },
      { quoted: null }
    );
  }

  let Obj = {};
  Obj.harga = text.split("|")[2]
  Obj.nominal = text.split("|")[3]
  Obj.kode = text.split("|")[1]
  Obj.nodana = text.split("|")[0]
  
  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250)

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* ${Obj.nominal}
 *• ID Game :* ${Obj.nodana}
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* ${Obj.nominal}
`,
        }, { quoted: sock[m.sender].msg });
 const idtrx = "sock" + `${Date.now()}`
await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await sock.sendMessage(sock[m.sender].chat, {text: `
*Transaksi Telah Berhasil ✅*

 *• ID Game :* ${Obj.nodana}
 *• Barang : ${Obj.nominal}
 *• Status :* Sukses
`, contextInfo: { isForwarded: true }}, {quoted: null})
statuse = false
break
}
await func.sleep(5000)
}
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });

        delete sock[m.sender];
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break

case "topupff": {
  if (m.isGroup)
    return m.reply(
      "Pembelian Diamond Mobile Legends hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);
if (!text) return example("idnya")
let idgame = text.split("|")
if (isNaN(idgame[0])) return example("id dan sambungkan dengan serverid")
  if (!args[0] || !args[0].includes("|")) {
    let nodana = idgame[0].replace(/[^0-9]/g, "").trim()
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /TPG Diamond Free Fire/i.test(item.produk) && item.harga > 0)
        let sections = await dana.map((item) => {
            return {
                title: `${item.keterangan}`,
                header: `${item.produk} ✅`, 
                description: `Rp${item.harga}`, 
                id: `.topupff ${nodana}|${item.kode}|${item.harga}|${item.keterangan}`
            };
})
    return sock.sendMessage(
      m.chat,
      {
        buttons: [
          {
            buttonId: "action",
            buttonText: { displayText: "ini pesan interactiveMeta" },
            type: 4,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify({
                title: "Pilih Diamond",
                sections: [
                  {
                    rows: sections, 
                  },
                ],
              }),
            },
          },
        ],
        headerType: 1,
        viewOnce: true,
        text: "\n *Pilih Jumlah Diamond 🛍️*\n",
        contextInfo: {
          isForwarded: true, 
          mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
        },
      },
      { quoted: null }
    );
  }

  let Obj = {};
  Obj.harga = text.split("|")[2]
  Obj.nominal = text.split("|")[3]
  Obj.kode = text.split("|")[1]
  Obj.nodana = text.split("|")[0]
  
  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250)

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* ${Obj.nominal}
 *• ID Game :* ${Obj.nodana}
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* ${Obj.nominal}
`,
        }, { quoted: sock[m.sender].msg });
 const idtrx = "sock" + `${Date.now()}`
await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await sock.sendMessage(sock[m.sender].chat, {text: `
*Transaksi Telah Berhasil ✅*

 *• ID Game :* ${Obj.nodana}
 *• Barang : ${Obj.nominal}
 *• Status :* Sukses
`, contextInfo: { isForwarded: true }}, {quoted: null})
statuse = false
break
}
await func.sleep(5000)
}
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });

        delete sock[m.sender];
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break

case "topuppubg": case "topuppapji": {
  if (m.isGroup)
    return m.reply(
      "Pembelian Diamond Mobile Legends hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);
if (!text) return example("idnya")
let idgame = text.split("|")
if (isNaN(idgame[0])) return example("id dan sambungkan dengan serverid")
  if (!args[0] || !args[0].includes("|")) {
    let nodana = idgame[0].replace(/[^0-9]/g, "").trim()
        const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /TPG Game Mobile PUBG/i.test(item.produk) && item.harga > 0)
        let sections = await dana.map((item) => {
            return {
                title: `${item.keterangan}`,
                header: `${item.produk} ✅`, 
                description: `Rp${item.harga}`, 
                id: `.topuppubg ${nodana}|${item.kode}|${item.harga}|${item.keterangan}`
            };
})
    return sock.sendMessage(
      m.chat,
      {
        buttons: [
          {
            buttonId: "action",
            buttonText: { displayText: "ini pesan interactiveMeta" },
            type: 4,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify({
                title: "Pilih UC",
                sections: [
                  {
                    rows: sections, 
                  },
                ],
              }),
            },
          },
        ],
        headerType: 1,
        viewOnce: true,
        text: "\n *Pilih Jumlah UC 🛍️*\n",
        contextInfo: {
          isForwarded: true, 
          mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
        },
      },
      { quoted: null }
    );
  }

  let Obj = {};
  Obj.harga = text.split("|")[2]
  Obj.nominal = text.split("|")[3]
  Obj.kode = text.split("|")[1]
  Obj.nodana = text.split("|")[0]
  
  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250)

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* ${Obj.nominal}
 *• ID Game :* ${Obj.nodana}
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* ${Obj.nominal}
`,
        }, { quoted: sock[m.sender].msg });
 const idtrx = "sock" + `${Date.now()}`
await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await sock.sendMessage(sock[m.sender].chat, {text: `
*Transaksi Telah Berhasil ✅*

 *• ID Game :* ${Obj.nodana}
 *• Barang : ${Obj.nominal}
 *• Status :* Sukses
`, contextInfo: { isForwarded: true }}, {quoted: null})
statuse = false
break
}
await func.sleep(5000)
}
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });

        delete sock[m.sender];
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break

case "buypulsa": {
  if (m.isGroup)
    return m.reply(
      "Pembelian Pulsa hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);
if (!text || !args[0].startsWith("08")) return example("nomornya(contoh 0838XXX)")
  if (!text.includes("|")) {
    let nodana = text.replace(/[^0-9]/g, "").trim()
    const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /PULSA/i.test(item.kategori) && item.harga > 0)
        let sections = await dana.map((item) => {
            return {
                title: `${item.keterangan}`,
                header: `${item.produk} ✅`, 
                description: `Rp${item.harga}`, 
                id: `.buypulsa ${nodana}|${item.kode}|${item.harga}|${item.keterangan}`
            };
})
    return sock.sendMessage(
      m.chat,
      {
        buttons: [
          {
            buttonId: "action",
            buttonText: { displayText: "ini pesan interactiveMeta" },
            type: 4,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify({
                title: "Pilih Pulsa",
                sections: [
                  {
                    rows: sections, 
                  },
                ],
              }),
            },
          },
        ],
        headerType: 1,
        viewOnce: true,
        text: "\n *Pilih Jumlah & Operator 🛍️*\n",
        contextInfo: {
          isForwarded: true, 
          mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
        },
      },
      { quoted: null }
    );
  }

  let Obj = {};
  Obj.harga = text.split("|")[2]
  Obj.nominal = text.split("|")[3]
  Obj.kode = text.split("|")[1]
  Obj.nodana = text.split("|")[0]
  
  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250)

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* ${Obj.nominal}
 *• Nomor Tujuan :* ${Obj.nodana}
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* ${Obj.nominal}
`,
        }, { quoted: sock[m.sender].msg });
 const idtrx = "sock" + `${Date.now()}`
await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await sock.sendMessage(sock[m.sender].chat, {text: `
*Transaksi Telah Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Barang : ${Obj.nominal}
 *• Status :* Sukses
`, contextInfo: { isForwarded: true }}, {quoted: null})
statuse = false
break
}
await func.sleep(5000)
}
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });

        delete sock[m.sender];
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break

case "buykuota": {
  if (m.isGroup)
    return m.reply(
      "Pembelian Pulsa hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);
if (!text || !args[0].startsWith("08")) return example("nomornya(contoh 0838XXX)")
  if (!text.includes("|")) {
    let nodana = text.replace(/[^0-9]/g, "").trim()
    const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /KUOTA/i.test(item.kategori) && !item.keterangan.includes("Vcr") && !item.keterangan.includes("Voucher") && item.harga > 0)
        let sections = await dana.map((item) => {
            return {
                title: `${item.keterangan}`,
                header: `${item.produk} ✅`, 
                description: `Rp${item.harga}`, 
                id: `.buykuota ${nodana}|${item.kode}|${item.harga}|${item.keterangan}`
            };
})
    return sock.sendMessage(
      m.chat,
      {
        buttons: [
          {
            buttonId: "action",
            buttonText: { displayText: "ini pesan interactiveMeta" },
            type: 4,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify({
                title: "Pilih Kuota",
                sections: [
                  {
                    rows: sections, 
                  },
                ],
              }),
            },
          },
        ],
        headerType: 1,
        viewOnce: true,
        text: "\n *Pilih Kuota & Operator 🛍️*\n",
        contextInfo: {
          isForwarded: true, 
          mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
        },
      },
      { quoted: null }
    );
  }

  let Obj = {};
  Obj.harga = text.split("|")[2]
  Obj.nominal = text.split("|")[3]
  Obj.kode = text.split("|")[1]
  Obj.nodana = text.split("|")[0]
  
  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250)

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* ${Obj.nominal}
 *• Nomor Tujuan :* ${Obj.nodana}
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* ${Obj.nominal}
`,
        }, { quoted: sock[m.sender].msg });
 const idtrx = "sock" + `${Date.now()}`
await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await func.fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.IdMerchant}&product=${Obj.kode}&dest=${Obj.nodana}&refID=${idtrx}&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await sock.sendMessage(sock[m.sender].chat, {text: `
*Transaksi Telah Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Barang : ${Obj.nominal}
 *• Status :* Sukses
`, contextInfo: { isForwarded: true }}, {quoted: null})
statuse = false
break
}
await func.sleep(5000)
}
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });

        delete sock[m.sender];
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break

case "buypanel": {
  if (m.isGroup)
    return m.reply(
      "Pembelian Panel Pterodactyl hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);
if (!text) return example("username")
if (args.length > 1) return m.reply("Username dilarang menggunakan spasi.")
  if (!text.includes("|")) {
    let usn = text.toLowerCase()
    return sock.sendMessage(
      m.chat,
      {
        buttons: [
          {
            buttonId: "action",
            buttonText: { displayText: "ini pesan interactiveMeta" },
            type: 4,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify({
                title: "Pilih Ram Server",
                sections: [
                  {
                    highlight_label: "Hight Quality",
                    rows: [
    { title: "Ram Unlimited ✅", description: "Rp11.000", id: `.buypanel unlimited|${usn}` },
    { title: "Ram 1GB ✅", description: "Rp1000", id: `.buypanel 1gb|${usn}` },
    { title: "Ram 2GB ✅", description: "Rp2000", id: `.buypanel 2gb|${usn}` },
    { title: "Ram 3GB ✅", description: "Rp3000", id: `.buypanel 3gb|${usn}` },
    { title: "Ram 4GB ✅", description: "Rp4000", id: `.buypanel 4gb|${usn}` },
    { title: "Ram 5GB ✅", description: "Rp5000", id: `.buypanel 5gb|${usn}` },
    { title: "Ram 6GB ✅", description: "Rp6000", id: `.buypanel 6gb|${usn}` },
    { title: "Ram 7GB ✅", description: "Rp7000", id: `.buypanel 7gb|${usn}` },
    { title: "Ram 8GB ✅", description: "Rp8000", id: `.buypanel 8gb|${usn}` },
    { title: "Ram 9GB ✅", description: "Rp9000", id: `.buypanel 9gb|${usn}` },
    { title: "Ram 10GB ✅", description: "Rp10.000", id: `.buypanel 10gb|${usn}` },
],
                  },
                ],
              }),
            },
          },
        ],
        headerType: 1,
        viewOnce: true,
        text: "\n *Pilih Ram Server Panel 🛍️*\n",
        contextInfo: {
          isForwarded: true, 
          mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
        },
      },
      { quoted: null }
    );
  }

  let Obj = {};
  let cmd = text.split("|")[0].toLowerCase()
  const ramOptions = {
    "1gb": { ram: "1000", disk: "1000", cpu: "40", harga: "1000" },
    "2gb": { ram: "2000", disk: "1000", cpu: "60", harga: "2000" },
    "3gb": { ram: "3000", disk: "2000", cpu: "80", harga: "3000" },
    "4gb": { ram: "4000", disk: "2000", cpu: "100", harga: "4000" },
    "5gb": { ram: "5000", disk: "3000", cpu: "120", harga: "5000" },
    "6gb": { ram: "6000", disk: "3000", cpu: "140", harga: "6000" },
    "7gb": { ram: "7000", disk: "4000", cpu: "160", harga: "7000" },
    "8gb": { ram: "8000", disk: "4000", cpu: "180", harga: "8000" },
    "9gb": { ram: "9000", disk: "5000", cpu: "200", harga: "9000" },
    "10gb": { ram: "10000", disk: "5000", cpu: "220", harga: "10000" },
    "unli": { ram: "0", disk: "0", cpu: "0", harga: "11000" },
    "unlimited": { ram: "0", disk: "0", cpu: "0", harga: "11000" },
  };

  if (!ramOptions[cmd]) return m.reply("Pilihan RAM tidak valid!");
  dts = ramOptions[cmd];
  Obj.username = text.split("|")[1]
  Obj.harga = dts.harga
  Obj.ram = dts.ram
  Obj.disk = dts.disk
  Obj.cpu = dts.cpu
  
  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250);

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* Panel Pterodactyl
`,
        }, { quoted: sock[m.sender].msg });

        let username = Obj.username
        let email = username + "@gmail.com";
        let name = func.capital(username) + " Server";
        let password = username + "001"
        let f = await fetch(domain + "/api/application/users", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            email: email,
            username: username.toLowerCase(),
            first_name: name,
            last_name: "Server",
            language: "en",
            password: password.toString(),
          }),
        });
        let data = await f.json();
        if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;
        let desc = func.tanggal(Date.now());
        let usr_id = user.id;
        let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
        });
        let data2 = await f1.json();
        let startup_cmd = data2.attributes.startup;
        let f2 = await fetch(domain + "/api/application/servers", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "Bearer " + apikey,
          },
          body: JSON.stringify({
            name: name,
            description: desc,
            user: usr_id,
            egg: parseInt(egg),
            docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
            startup: startup_cmd,
            environment: {
              INST: "npm",
              USER_UPLOAD: "0",
              AUTO_UPDATE: "0",
              CMD_RUN: "npm start",
            },
            limits: {
              memory: Obj.ram,
              swap: 0,
              disk: Obj.disk,
              io: 500,
              cpu: Obj.cpu,
            },
            feature_limits: {
              databases: 5,
              backups: 5,
              allocations: 5,
            },
            deploy: {
              locations: [parseInt(loc)],
              dedicated_ip: false,
              port_range: [],
            },
          }),
        });
        let result = await f2.json();
        if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2));
        let server = result.attributes;
        var orang = sock[m.sender].chat;
        var tekspanel = `
*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})*
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ Created :* ${user.created_at.split("T")[0]}

*🌐 Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0, 2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0, 2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu + "%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`;

        await sock.sendMessage(
          orang,
          {
            text: tekspanel,
            contextInfo: {
            isForwarded: true
            }
          },
          { quoted: null }
        );
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });

        delete sock[m.sender];
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break

case "buyadp": case "buyadminpanel": {
  if (m.isGroup)
    return m.reply(
      "Pembelian admin panel Pterodactyl hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);
if (!text) return example("username")
if (args.length > 1) return m.reply("Username dilarang menggunakan spasi.")
  let Obj = {}
  Obj.harga = 20000 //harga
  Obj.username = text.toLowerCase()

  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250);

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* Admin Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* Admin Panel Pterodactyl
`,
        }, { quoted: sock[m.sender].msg });
let username = Obj.username
let email = username+"@gmail.com"
let name = func.capital(args[0])
let password = username+"001"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var orang = sock[m.sender].chat
var teks = `
*Berikut Detail Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
*🗓️ ${func.tanggal(Date.now())}*

*🌐* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`

        await sock.sendMessage(
          orang,
          {
            text: teks,
            contextInfo: {
            isForwarded: true
            }
          },
          { quoted: null }
        );
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });
        delete sock[m.sender]
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break

case "buyreseller": case "buyresellerpanel": {
if (global.linkgrupresellerpanel.length == 0) return m.reply("Maaf grup reseller panel tidak sedang tidak tersedia")
  if (m.isGroup)
    return m.reply(
      "Pembelian Reseller Panel Pterodactyl hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);
  let Obj = {}
  Obj.harga = 20000 // harga

  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250);

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* Reseller Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* Reseller Panel Pterodactyl
`,
        }, { quoted: sock[m.sender].msg });
       
 
let teks = `
*Join Grup Reseller Panel :*
`
teks += `* ${global.linkgrupresellerpanel}\n`


        await sock.sendMessage(
          sock[m.sender].chat,
          {
            text: teks,
            contextInfo: {
            isForwarded: true
            }
          },
          { quoted: null }
        );
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });
        delete sock[m.sender]
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break

case "buyjasajpm": case "buyjasashare": {
  if (m.isGroup)
    return m.reply(
      "Pembelian Jasa Jpm hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);
const groups = await sock.groupFetchAllParticipating()
if (!text) return m.reply(`Contoh : *${cmd}* pesannya & bisa dengan foto juga\n\nTotal grup : ${(Object.keys(groups)).length}`)
  let Obj = {}
if (/image/i.test(mime)) {
Obj.image = m.quoted ? await m.quoted.download() : await m.download()
}
  Obj.teksjpm = text
  Obj.grup = await Object.keys(groups)
  Obj.harga = 1 // harga

  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250);

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* Jasa Jpm
 *• Target :* ${Obj.grup.length} Grup
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* Jasa Jpm
 *• Target : ${Obj.grup.length} Grup
`,
        }, { quoted: sock[m.sender].msg });

await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });
const gcnya = Obj.grup
await sock.sendMessage(sock[m.sender].chat,
{text: `Memproses Jpm pesan *${Obj.image !== undefined ? "teks & foto" : "teks"}* ke ${gcnya.length} grup`, contextInfo: {isForwarded: true}}, { quoted: null });
let messages = Obj.image !== undefined ? { image: Obj.image, caption: Obj.teksjpm } : { text: Obj.teksjpm }
for (let id of gcnya) {
if (bljpm.includes(id)) continue
try {
await sock.sendMessage(id, messages, { quoted: qjasajpm })
await func.sleep(4000)
} catch {}
}
await sock.sendMessage(sock[m.sender].chat,
{text: `Berhasil Jpm pesan *${Obj.image !== undefined ? "teks & foto" : "teks"}* ke ${gcnya.length} grup`, contextInfo: {isForwarded: true}}, { quoted: null })
delete sock[m.sender]
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break


case "buyvps": {
if (global.apidigitalocean.length < 1) return m.reply("Maaf vps sedang tidak tersedia.")
  if (m.isGroup)
    return m.reply(
      "Pembelian Reseller Panel Pterodactyl hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);

if (args.length < 4) return sock.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Vps',
                sections: [
                  {
                    rows: [
                {
                    header: "RAM 1GB & 1 CPU ✅",
                    title: "Sgp Ubuntu 20.04",
                    description: "Rp20.000",
                    id: ".buyvps vps1g1c ubuntu 20-04 sgp1 20000"
                },
                {
                    header: "RAM 2GB & 1 CPU ✅",
                    title: "Sgp Ubuntu 20.04",
                    description: "Rp25.000",
                    id: ".buyvps vps2g1c ubuntu 20-04 sgp1 25000"
                },
                {
                    header: "RAM 2GB & 2 CPU ✅",
                    title: "Sgp Ubuntu 20.04",
                    description: "Rp30.000",
                    id: ".buyvps vps2g2c ubuntu 20-04 sgp1 30000"
                },
                {
                    header: "RAM 4GB & 2 CPU ✅",
                    title: "Sgp Ubuntu 20.04",
                    description: "Rp35.000",
                    id: ".buyvps vps4g2c ubuntu 20-04 sgp1 35000"
                },
                {
                    header: "RAM 8GB & 4 CPU ✅",
                    title: "Sgp Ubuntu 20.04",
                    description: "Rp50.000",
                    id: ".buyvps vps8g4c ubuntu 20-04 sgp1 50000"
                },
                {
                    header: "RAM 16GB & 4 CPU ✅",
                    title: "Sgp Ubuntu 20.04",
                    description: "Rp60.000",
                    id: `.buyvps vps16g4c ubuntu 20-04 sgp1 60000`
                }
            ]
                  },
                ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "\n Pilih Spesifikasi Vps 🛍️\n",
  contextInfo: {
   isForwarded: true
  },
}, {quoted: null})

let Obj = {}
Obj.hostname = `skyzopedia${func.generateRandomNumber(1, 10)}` // Nama host
Obj.sizeOption = args[0]; // Ukuran VPS
Obj.osOption = args[1] || "ubuntu"; // Default: Ubuntu
Obj.osVersionOption = args[2] || "20-04"; // Default: Ubuntu 20.04
Obj.regionOption = args[3] || "sgp1"; // Default: Singapore
Obj.harga = args[4]
const passwd = crypto.randomBytes(10).toString("base64").replace(/[^a-zA-Z0-9]/g, "").slice(0, 10);
Obj.password = passwd

  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250);

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* Virtual Private Server (Vps)
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* Virtual Private Server (Vps)
`,
        }, { quoted: sock[m.sender].msg });

  // Peta OS dan Versi
  const osMap = {
    ubuntu: { '20-04': 'ubuntu-20-04-x64', '22-04': 'ubuntu-22-04-x64' },
    debian: { '10': 'debian-10-x64', '11': 'debian-11-x64' },
    centos: { '8': 'centos-8-x64', '7': 'centos-7-x64' },
    fedora: { '34': 'fedora-34-x64', '35': 'fedora-35-x64' },
  };

  if (!osMap[osOption]) {
    return m.reply(`*OS tidak valid!*\nOS yang tersedia: ubuntu, debian, centos, fedora.`);
  }
  if (!osMap[osOption][osVersionOption]) {
    return m.reply(
      `*Versi OS tidak valid!*\nVersi yang tersedia untuk ${osOption}: ${Object.keys(osMap[osOption]).join(', ')}`
    );
  }

  // Peta Ukuran
  const sizeMap = {
    vps1g1c: 's-1vcpu-1gb',
    vps2g1c: 's-1vcpu-2gb',
    vps2g2c: 's-2vcpu-2gb',
    vps4g2c: 's-2vcpu-4gb',
    vps8g4c: 's-4vcpu-8gb',
    vps16g4c: 's-4vcpu-16gb-amd',
  };

  if (!sizeMap[sizeOption]) {
    return m.reply(`*Ukuran VPS tidak valid!*\nUkuran yang tersedia: ${Object.keys(sizeMap).join(', ')}`);
  }

  // Peta Region
  const regionMap = {
    sgp1: 'Singapore (SGP1)',
    nyc3: 'New York (NYC3)',
    ams3: 'Amsterdam (AMS3)',
    lon1: 'London (LON1)',
    fra1: 'Frankfurt (FRA1)',
    sfo1: 'San Francisco (SFO1)',
    blr1: 'Bangalore (BLR1)',
    tor1: 'Toronto (TOR1)',
  };

  if (!regionMap[regionOption]) {
    return m.reply(`*Region tidak valid!*\nRegion yang tersedia: ${Object.keys(regionMap).join(', ')}`);
  }

  try {
    // Data untuk membuat droplet
    let dropletData = {
      name: hostname.toLowerCase(),
      region: regionOption,
      size: sizeMap[sizeOption],
      image: osMap[osOption][osVersionOption],
      ssh_keys: null,
      backups: false,
      ipv6: true,
      user_data: null,
      private_networking: null,
      volumes: null,
      tags: ['T'],
    };
    let password = Obj.password
    dropletData.user_data = `#cloud-config\npassword: ${password}\nchpasswd: { expire: False }`;

    let response = await fetch('https://api.digitalocean.com/v2/droplets', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + global.apidigitalocean,
      },
      body: JSON.stringify(dropletData),
    });

    let responseData = await response.json();

    if (response.ok) {
      let dropletConfig = responseData.droplet;
      let dropletId = dropletConfig.id;
      await new Promise(resolve => setTimeout(resolve, 60000));

      // Mengambil informasi VPS
      let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + global.apidigitalocean,
        },
      });

      let dropletDetails = await dropletResponse.json();
      let ipVPS =
        dropletDetails.droplet.networks.v4 && dropletDetails.droplet.networks.v4.length > 0
          ? dropletDetails.droplet.networks.v4[0].ip_address
          : 'Tidak ada alamat IP yang tersedia';

 let messageText = `
*Berhasil membuat Vps ✅*
      
* *ID :* ${dropletId}
* *IP Vps :* ${ipVPS}
* *Username :* root
* *Password :* ${password}
`

      await sock.sendMessage(
          sock[m.sender].chat,
          {
            text: messageText,
            contextInfo: {
            isForwarded: true
            }
          },
          { quoted: null }
        );
    } else {
      throw new Error(`Gagal membuat VPS: ${responseData.message}`);
    }
    
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });
        delete sock[m.sender]
  } catch (err) {
    console.error(err);
    m.reply(`Terjadi kesalahan saat membuat VPS: ${err.message}`);
  }
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break


case "buydo": case "buydigitalocean": {
if (stokdo.length < 1) return m.reply("Maaf stok akun Digital Ocean sedang tidak tersedia.")
  if (m.isGroup)
    return m.reply(
      "Pembelian Digital Ocean hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);

  if (!text) {
    let butnya = []
    let urutt = 0
    for (let gg of stokdo) {
    butnya.push({
    title: `${gg.droplet} Droplet ✅`, 
    description: `Rp${await func.toRupiah(gg.harga)}`, 
    id: `.buydo ${urutt += 1}`
    })
    }
    return sock.sendMessage(
      m.chat,
      {
        buttons: [
          {
            buttonId: "action",
            buttonText: { displayText: "ini pesan interactiveMeta" },
            type: 4,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify({
                title: "Pilih Droplet",
                sections: [
                  {
                    highlight_label: "Hight Quality",
                    rows: butnya, 
                    }
                 ], 
              }),
            },
          },
        ],
        headerType: 1,
        viewOnce: true,
        text: "\n *Pilih Droplet Digital Ocean 🛍️*\n",
        contextInfo: {
          isForwarded: true, 
          mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
        },
      },
      { quoted: qpay }
    );
  }
 const donya = stokdo[Number(text) - 1]
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = donya.harga
Obj.akun = donya
  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250);

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* Akun Digital Ocean
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* Akun Digital Ocean
`,
        }, { quoted: sock[m.sender].msg });

var teks = `
*Data Akun Digitalocean 📦*

*💌 Email :* ${Obj.akun.email}
*🔐 Password :* ${Obj.akun.password}
*Kode 2FA :* ${Obj.akun.kode2fa}
*Droplet :* ${Obj.akun.droplet}

*Syarat & Ketentuan :*
* Simpan data ini sebaik mungkin
* Seller hanya mengirim 1 kali!
* Garansi akun aktif 30 day
`
await sock.sendMessage(sock[m.sender].chat, {text: teks, contextInfo: { isForwarded: true }}, {quoted: null})
const position = stokdo.indexOf(Obj.akun)
stokdo.splice(position, 1)
await fs.writeFileSync("./data/stokdo.json", JSON.stringify(stokdo, null, 2))
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });

        delete sock[m.sender];
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break

case "buysc": case "buyscript": {
if (script.length < 1) return m.reply("Maaf Script Bot sedang tidak tersedia.")
  if (m.isGroup)
    return m.reply(
      "Pembelian Script Bot hanya bisa di dalam private chat."
    );
  if (sock[m.sender])
return m.reply(
`Masih ada transaksi yang belum diselesaikan.
      
ketik *.batalbeli* untuk membatalkan transaksi sebelumnya`
);

  if (!text) {
    let butnya = []
    let urutt = 0
    for (let gg of script) {
    butnya.push({
    title: `${gg.nama} ✅`, 
    description: `Rp${await func.toRupiah(gg.harga)}`, 
    id: `.buyscript ${urutt += 1}`
    })
    }
    return sock.sendMessage(
      m.chat,
      {
        buttons: [
          {
            buttonId: "action",
            buttonText: { displayText: "ini pesan interactiveMeta" },
            type: 4,
            nativeFlowInfo: {
              name: "single_select",
              paramsJson: JSON.stringify({
                title: "Pilih Script",
                sections: [
                  {
                    rows: butnya, 
                    }
                 ], 
              }),
            },
          },
        ],
        headerType: 1,
        viewOnce: true,
        text: "\n *Pilih Script Bot WhatsApp 🛍️*\n",
        contextInfo: {
          isForwarded: true, 
          mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"]
        },
      },
      { quoted: null }
    );
  }
 const scnya = script[Number(text) - 1]
let Obj = {}
Obj.harga = scnya.harga
Obj.namasc = scnya.nama
Obj.path = scnya.path
  const amount = Number(Obj.harga) + func.generateRandomNumber(110, 250);

  try {
    const get = await axios.get(
      `https://restapi.simplebot.my.id/orderkuota/createpayment?apikey=${global.ApikeyRestApi}&amount=${amount}&codeqr=${global.QrisOrderKuota}`
    );

    const teks3 = `
 *── INFORMASI PEMBAYARAN ──*
  
 *• ID :* ${get.data.result.idtransaksi}
 *• Total Pembayaran :* Rp${await func.toRupiah(get.data.result.jumlah)}
 *• Barang :* Script ${Obj.namasc}
 *• Expired :* 5 menit

*Note :* 
_Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!_
`

    let msgQr = await sock.sendMessage(m.chat, {
  buttons: [
    {
      buttonId: `.batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.imageqris.url}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender], 
   isForwarded: true
  },
})

    sock[m.sender] = {
      msg: msgQr,
      chat: m.sender,
      idDeposit: get.data.result.idtransaksi,
      amount: get.data.result.jumlah.toString(),
      status: true,
      exp: setTimeout(async () => {
        if (sock[m.sender] && sock[m.sender].status) {
          await sock.sendMessage(sock[m.sender].chat, { text: "QRIS Pembayaran Telah Expired." }, { quoted: sock[m.sender].msg });
          await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key })
          delete sock[m.sender];
        }
      }, 250000)
    };
    

    while (sock[m.sender] && sock[m.sender].status && sock[m.sender].amount) {
      await func.sleep(5000);
      const resultcek = await axios.get(
        `https://restapi.simplebot.my.id/orderkuota/cekstatus?apikey=${global.ApikeyRestApi}&merchant=${global.IdMerchant}&keyorkut=${global.ApikeyOrderKuota}`
      );
      const req = resultcek.data;

      if (sock[m.sender] && req?.result?.amount == sock[m.sender].amount) {
        sock[m.sender].status = false;
        clearTimeout(sock[m.sender].exp);

        await sock.sendMessage(sock[m.sender].chat, {
          text: `
*PEMBAYARAN BERHASIL ✅*

 *• ID :* ${sock[m.sender].idDeposit}
 *• Total Pembayaran :* Rp${await func.toRupiah(sock[m.sender].amount)}
 *• Barang :* Script ${Obj.namasc}
`,
        }, { quoted: sock[m.sender].msg });
await sock.sendMessage(sock[m.sender].chat, {document: await fs.readFileSync(Obj.path), mimetype: "application/zip", fileName: Obj.namasc + ".zip", contextInfo: { isForwarded: true }}, {quoted: null})
        await sock.sendMessage(sock[m.sender].chat, { delete: sock[m.sender].msg.key });

        delete sock[m.sender];
      }
    }
  } catch (err) {
    console.error("Terjadi kesalahan:", err);
 }
 }
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "deldomaincf": case "deldomcf": {
if (!isOwner) return m.reply(msg.owner)
if (!text || !text.includes(".")) return example("domainmu.com")
const CLOUDFLARE_API_TOKEN = global.apitoken_cloudflare // Ganti dengan API Token
const CLOUDFLARE_EMAIL = global.email_cloudflare // Jika pakai API Key


async function deleteDomain(domain) {
    try {
        // Ambil Zone ID berdasarkan nama domain
        const zoneResponse = await axios.get(
            `https://api.cloudflare.com/client/v4/zones?name=${domain}`,
            {
                headers: {
                    Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`, // Jika pakai API Token
                    "X-Auth-Email": CLOUDFLARE_EMAIL, // Jika pakai API Key
                    "Content-Type": "application/json",
                },
            }
        );

        if (!zoneResponse.data.success || zoneResponse.data.result.length === 0) {
            return m.reply(`Domain ${domain} tidak ditemukan di Cloudflare.`);
        }

        const zoneId = zoneResponse.data.result[0].id;

        // Hapus domain berdasarkan Zone ID
        const deleteResponse = await axios.delete(
            `https://api.cloudflare.com/client/v4/zones/${zoneId}`,
            {
                headers: {
                    Authorization: `Bearer ${CLOUDFLARE_API_TOKEN}`, // Jika pakai API Token
                    "X-Auth-Email": CLOUDFLARE_EMAIL, // Jika pakai API Key
                    "Content-Type": "application/json",
                },
            }
        );

        if (deleteResponse.data.success) {
           return m.reply(`Berhasil menghapus domain ${domain} dari Cloudflare ✅`)
        } else {
           return m.reply(`Gagal menghapus domain ${domain}: ` + deleteResponse.data.errors)
        }
    } catch (error) {
        console.error("Error:", error.response ? error.response.data : error.message);
    }
}

return deleteDomain(text.toLowerCase())
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "adddomaincf": case "adddomcf": {
if (!isOwner) return m.reply(msg.owner)
if (!text || !text.includes(".")) return example("domainmu.com")
const CLOUDFLARE_TOKEN = global.apitoken_cloudflare
const CLOUDFLARE_EMAIL = global.email_cloudflare
const cloudflare = axios.create({
    baseURL: 'https://api.cloudflare.com/client/v4',
    headers: {
        'Authorization': `Bearer ${CLOUDFLARE_TOKEN}`,
        'Content-Type': 'application/json'
    }
});
async function addNewDomainToCloudflare(domainName) {
    try {
        const response = await cloudflare.post('/zones', {
            name: domainName,
            account: {
                id: global.accountid_cloudflare
            },
            plan: {
                id: 'free'
            },
            type: 'full',
            jump_start: true
        });
        return response.data
    } catch (error) {
        return 'Gagal menambahkan domain:' + JSON.stringify(error.response ? error.response.data : error.message, null, 2)
    }
}
let res = await addNewDomainToCloudflare(text.toLowerCase())
if (res?.result?.name_servers) {
let respon = `
Domain ${text.toLowerCase()} Berhasil Ditambahkan Kedalam Cloudflare ✅

*Name Server :*
* ns1 ${res.result.name_servers[0]}
* ns2 ${res.result.name_servers[1]}
`
return m.reply(respon)
} else {
return m.reply(JSON.stringify(res, null, 2))
}
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "clearsubdo": case "clearallsubdo": case "clsubdo": case "clearsubdomain": {
if (!text || !text.includes("|")) return example('zoneid|apikey')
let [apizone, apitoken] = text.split("|")
const CLOUDFLARE_API_KEY = apitoken;  // Ganti dengan API key
const CLOUDFLARE_ZONE_ID = apizone;  // Ganti dengan Zone ID

async function getAllDNSRecords() {
    let allRecords = [];
    let page = 1;
    let totalPages = 1;

    try {
        while (page <= totalPages) {
            const response = await axios.get(`https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/dns_records`, {
                params: { page, per_page: 100 },
                headers: {
                    'Authorization': `Bearer ${CLOUDFLARE_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            });

            if (!response.data.success) {
                console.error("Gagal mengambil DNS records:", response.data.errors);
                return [];
            }

            allRecords.push(...response.data.result);
            totalPages = response.data.result_info.total_pages;
            page++;
        }
    } catch (error) {
        console.error("Terjadi kesalahan saat mengambil DNS records:", error.message);
    }
    return allRecords;
}

// Fungsi untuk menghapus semua DNS record
async function deleteAllDNSRecords() {
    try {
        const records = await getAllDNSRecords();
        const totalDns = records.length

        if (records.length === 0) {
            await m.reply("Tidak ada Subdomain yang ditemukan.");
            return;
        }

        m.reply(`${totalDns} Subdomain ditemukan. Memproses penghapusan...`);

        for (const record of records) {
            try {
                const deleteResponse = await axios.delete(`https://api.cloudflare.com/client/v4/zones/${CLOUDFLARE_ZONE_ID}/dns_records/${record.id}`, {
                    headers: {
                        'Authorization': `Bearer ${CLOUDFLARE_API_KEY}`,
                        'Content-Type': 'application/json'
                    }
                });

                if (deleteResponse.data.success) {
                    console.log(`✅ Berhasil menghapus record: ${record.name} (ID: ${record.id})`);
                } else {
                    console.error(`❌ Gagal menghapus record ${record.name}:`, deleteResponse.data.errors);
                }
            } catch (error) {
                console.error(`❌ Terjadi kesalahan saat menghapus record ${record.name}:`, error.message);
            }
        }

        await m.reply(`Berhasil menghapus ${totalDns} Subdomain ✅`);
    } catch (error) {
        console.error("Terjadi kesalahan:", error.message);
    }
}

// Jalankan fungsi
return deleteAllDNSRecords();
}
break

case "listdomaincf": case "listdomcf": {
if (!isOwner) return m.reply(msg.owner)
const CLOUDFLARE_API_KEY = global.apitoken_cloudflare // Ganti dengan API Key atau API Token
const CLOUDFLARE_EMAIL = global.email_cloudflare // Email akun Cloudflare (jika pakai API Key)

async function getAllDomains() {
    let page = 1;
    let domains = [];
    let hasMore = true;

    while (hasMore) {
        const url = `https://api.cloudflare.com/client/v4/zones?page=${page}&per_page=50`; // Maksimal 50 per halaman

        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${CLOUDFLARE_API_KEY}`, // Jika pakai API Token
                // 'X-Auth-Email': CLOUDFLARE_EMAIL, // Jika pakai API Key
                // 'X-Auth-Key': CLOUDFLARE_API_KEY  // Jika pakai API Key
            }
        });

        const data = await response.json();
        
        if (data.success) {
            domains = domains.concat(data.result.map(zone => ({
                id: zone.id,
                name: zone.name,
                status: zone.status
            })));

            // Cek apakah masih ada halaman berikutnya
            hasMore = data.result_info.page < data.result_info.total_pages;
            page++;
        } else {
            console.error('Gagal mengambil daftar domain:', data.errors);
            return [];
        }
    }

    console.log('Total Domain:', domains.length);
    console.log('Daftar Domain:', domains);
    return domains;
}


// Jalankan function
let res = await getAllDomains();
if (res.length < 1) return m.reply("Tidak ada domain di cloudflare")
let teks = `\n*Total Domain Cloudflare :* ${res.length}\n`
for (let i of res) {
teks += `
* ${i.name}
* *Status :* ${i.status == "active" ? i.status + " ✅" : i.status == "pending" ? i.status + " 🕞" : i.status + " ❌"}
`
}
return m.reply(teks)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "cpaste": case "pastebin": {
if (!text) return example("teksnya")
let { PasteClient, Publicity, ExpireDate } = require("pastebin-api")
const client = new PasteClient("XRP7K6sqg-cafuC5J509m0fFMUiLFxi5");
const url = await client.createPaste({
  code: text,
  expireDate: ExpireDate.Never,
  format: "javascript",
  name: "something.js",
  publicity: Publicity.Public,
});
let links = `https://pastebin.com/raw/${url.split("/")[3]}`
return m.reply(links)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "ip": case "getip": {
if (!isOwner) return
let t = await func.fetchJson('https://api64.ipify.org?format=json')
m.reply(`IP Panel : ${t.ip}`)
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

case "rst": case "restart": {
if (!isOwner) return
const { spawn } = require("child_process");

function restartServer() {
  // Spawn proses baru untuk menjalankan ulang server
  const newProcess = spawn(process.argv[0], process.argv.slice(1), {
    detached: true,
    stdio: "inherit",
  });

  // Keluar dari proses lama
  process.exit(0);
}

await m.reply("Restarting bot . . .")
// Contoh penggunaan: Restart setelah 5 detik
await setTimeout(() => {
  restartServer();
}, 5000);
}
break

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

default:
if ((m.text).startsWith('$')) {
if (!isOwner) return
exec(chats.slice(2), (err, stdout) => {
if(err) return sock.sendMessage(m.chat, {text: err.toString()}, {quoted: m})
if (stdout) return sock.sendMessage(m.chat, {text: util.format(stdout)}, {quoted: m})
})}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith("=>")) {
if (!isOwner) return
try {
const evaling = await eval(`;(async () => { ${text} })();`);
return sock.sendMessage(m.chat, {text: util.format(evaling)}, {quoted: m})
} catch (e) {
return sock.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

if ((m.text).startsWith(">")) {
if (!isOwner) return
try {
let evaled = await eval(text)
if (typeof evaled !== 'string') evaled = util.inspect(evaled)
sock.sendMessage(m.chat, {text: util.format(evaled)}, {quoted: m})
} catch (e) {
sock.sendMessage(m.chat, {text: util.format(e)}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //

}} catch (e) {
console.log(e)
sock.sendMessage(`${owner}@s.whatsapp.net`, {text:`${util.format(e)}`}, {quoted: m})
}}

// >~~~~~~~~~~~~~~~~~~~~~~~~~~~~< //


let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.cyan("File Update => "),
chalk.cyan.bgBlue.bold(`${__filename}`))
delete require.cache[file]
require(file)
})