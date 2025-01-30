import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'

let espera = '⏳️ Procesando...'

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (!text) return conn.reply(m.chat, `__¿Qué texto deseas convertir a sticker?__\n\nEjemplo: *${usedPrefix + command}* Hola`, m, { contextInfo: { externalAdReply: { mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: imagen1, sourceUrl: redes.getRandom() } } } })

    let teks = encodeURI(text)
    conn.fakeReply(m.chat, `${espera}\n\n> *Esto puede demorar unos minutos*`, '0@s.whatsapp.net', `MistycBot`, 'status@broadcast', null)

    if (command == 'attp') {
      try {
        let stiker = await sticker(null, `https://api.erdwpe.com/api/maker/attp?text=${teks}`, global.packname, global.author)
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply: { showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: channel, thumbnail: imagen1 } } } }, { quoted: m })
      } catch (error) {
        console.error(error)
        conn.reply(m.chat, 'Error al obtener el sticker', m)
      }
    }

    if (command == 'ttp') {
      try {
        let stiker = await sticker(null, `https://api.erdwpe.com/api/maker/ttp?text=${teks}`, global.packname, global.author)
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply: { showAdAttribution: false, title: wm, body: `h`, mediaType: 2, sourceUrl: channel, thumbnail: imagen1 } } } }, { quoted: m })
      } catch (error) {
        console.error(error)
        conn.reply(m.chat, 'Error al obtener el sticker', m)
      }
    }
  } catch (error) {
    console.error(error)
  }
}

handler.help = ['attp']
handler.tags = ['sticker']
handler.command = /^(attp|ttp|ttp2|ttp3|ttp4|attp2)$/i
handler.estrellas = 3
handler.register = true

export default handler
