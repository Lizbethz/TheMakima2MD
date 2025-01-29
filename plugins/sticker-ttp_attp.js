import fetch from 'node-fetch';
import {sticker, addExif} from '../lib/sticker.js';
import {Sticker} from 'wa-sticker-formatter';
const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  const datas = global
  const idioma = datas.db.data.users[m.sender].language
  const _translate = JSON.parse(fs.readFileSync(`./language/${idioma}.json`))
  const tradutor = _translate.plugins.sticker_ttp_attp
  if (!text) throw `${tradutor.texto1} ${usedPrefix + command} Mystic-Bot*`;
  const teks = encodeURI(text);
  try {
    if (command == 'attp') {
      const a1 = await (await fetch(`https://api.erdwpe.com/api/maker/attp?text=${teks}`)).buffer();
      const a2 = await createSticker(a1, false, global.packname, global.author);
      conn.sendFile(m.chat, a2, 'sticker.webp', '', m, {asSticker: true});
    }
    if (command == 'attp2') {
      conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
    }
    if (command == 'attp3') {
      conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/attp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
    }
    if (command == 'ttp5') {
      conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp6?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
    }
    if (command == 'ttp4') {
      conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp5?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
    }
    if (command == 'ttp3') {
      conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp3?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
    }
    if (command == 'ttp2') {
      conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp2?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
    }
    if (command == 'ttp') {
      conn.sendFile(m.chat, `https://api.lolhuman.xyz/api/ttp?apikey=${lolkeysapi}&text=${teks}`, 'sticker.webp', '', m, {asSticker: true});
    }
  } catch (error) {
    console.error('Error al procesar el archivo:', error);
    m.reply('Ocurrió un error al procesar el archivo. Por favor, inténtalo de nuevo.');
  }
};
handler.command = handler.help = ['ttp', 'ttp2', 'ttp3', 'ttp4', 'ttp5', 'attp', 'attp2', 'attp3'];
handler.tags = ['sticker'];
export default handler;

async function createSticker(img, url, packName, authorName, quality) {
  const stickerMetadata = {
    type: 'full',
    pack: packName,
    author: authorName,
    quality
  };
  return (new Sticker(img ? img : url, stickerMetadata)).toBuffer();
}

async function mp4ToWebp(file, stickerMetadata) {
  if (stickerMetadata) {
    if (!stickerMetadata.pack) stickerMetadata.pack = '‎';
    if (!stickerMetadata.author) stickerMetadata.author = '‎';
    if (!stickerMetadata.crop) stickerMetadata.crop = false;
  } else if (!stickerMetadata) {
    stickerMetadata = {
      pack: '‎',
      author: '‎',
      crop: false
    };
  }
  const getBase64 = file.toString('base64');
  const Format = {
    file: `data:video/mp4;base64,${getBase64}`,
    processOptions: {
      crop: stickerMetadata?.crop,
      startTime: '00:00:00.0',
      endTime: '00:00:7.0',
      loop: 0,
    },
    stickerMetadata: {...stickerMetadata},
    sessionInfo: {
      WA_VERSION
