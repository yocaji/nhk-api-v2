require('dotenv').config()

const NhkApiV2 = require('nhk-api-v2')

const client = new NhkApiV2.Client(process.env.API_KEY)

const area = '020' // {Number} ID of broadcast area
const service = 'tv' // {String} ID of channel or channel group
const date = '2022-06-24' // {String} Date in YYYY-MM-DD format
const genre = '0000' // {String} Genre code defined by ARIB STD-B10
const id = '2022062532788' // {String} ID of channel

client.getPrograms(area, service, date).then(function (data) {
  console.log(`${date} にEテレ1で放送される21番目の番組のジャンルコード: ` + data.list.e1[20].genres)
  // 2022-06-24 にEテレ1で放送される21番目の番組のジャンルコード: 1008,0300
}, function (error) {
  console.error(error)
})
client.getProgramsByGenre(area, service, date, genre).then(function (data) {
  console.log(`${date} にBS1で放送される「定時・総合」ジャンルのうち7番目の番組のサブタイトル: ` + data.list.s1[6].subtitle)
  // 2022-06-24 にBS1で放送される「定時・総合」ジャンルのうち7番目の番組のサブタイトル:
  // ▽国内外のニュースや気象情報をお伝えします。　※スポーツ中継がある場合は、放送時間や内容が変更になります。
}, function (error) {
  console.error(error)
})
client.getProgramInfo(area, service, id).then(function (data) {
  console.log(`番組ID ${id} の開始時刻: ` + data.list.g1[0].start_time)
  // 番組ID 2022062532788 の開始時刻: 2022-06-25T05:00:00+09:00
}, function (error) {
  console.error(error)
})
client.getProgramsNowOnAir(area, service).then(function (data) {
  console.log('総合1で放送中の番組タイトル: ' + data.nowonair_list.g1.present.title)
  // 総合1で放送中の番組タイトル: ニュース６４５
}, function (error) {
  console.error(error)
})
