const fs = require('fs')
const chalk = require('chalk')

global.wlcm = []
global.ntnsfw = []
global.ntnsfww = []
global.autorecording = false //status auto merekam ( auto record )
global.autoketik = false //status auto mengetik (auto typing)
global.available = false //status online (online)
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
//=================================================//
//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/c/'
global.ig = 'https://www.instagram.com/'
global.mygc = 'wa.me/6282399255216'
global.myweb = 'https://eclass.iainsalatiga.ac.id/app/upload/users/1/10892/my_files/XhiroMhonshine.html'
global.linkgrupss = "https://chat.whatsapp.com/EQ0TGTlsmzG8Zt2VQTJufm"
global.linkpro = 'mailto:support@whatsapp.com?subject=Deactivate%20My%20Account%20Number&body=Please%20Deactivate%20The%20My%20Account%20Number%20%2B62XXXXXXXX%20Immediately%20Because%20The%20Number%20Has%20Been%20Lost'
global.email = 'cybermodzid@gmail.com'
global.region = 'indonesia'
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'CYBER MODZ ID' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'CYBER THE DARKNESS' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'CYBER THE DARKNESS' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
// Other
global.owner = ['6282399255216','628989223282']
global.premium = ['6282399255216','628989223282']
global.packname = 'CYBER THE DARKNESS'
global.ownerr = ['Cyber Modz ID']
global.author = 'CYBER THE DARKNESS'
global.sessionName = './sessionye/cybersession'
global.prefa = ['','!','.',',','🐤','🗿']
global.sp = '⭔'
global.mess = {
    nsfw: '*Fitur NSFW tidak diaktifkan, chat admin grup supaya diaktifkan*_',
    wait: '*Loading... Sabar Wibu*_',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
//=================================================//
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
//=================================================//
global.limitawal = {
    premium: "Infinity",
    free: 100
}
   global.rpg = {
   darahawal: 100,
   besiawal: 5,
   goldawal: 1,
   emeraldawal: 1,
   umpanawal: 1,
   potionawal: 1
}
//=================================================//
global.thumb = fs.readFileSync("./basedek/image/hw.jpg")
global.visoka = fs.readFileSync("./basedek/video/hikal.gif")
global.log0 = fs.readFileSync("./basedek/image/haikal.jpg")
global.menuimg = 'https://i.top4top.io/p_23942dhg00.jpg'
global.ggikal = fs.readFileSync("./basedek/video/haikal.mp4")
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
