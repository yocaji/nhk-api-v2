// import fs from 'fs'
// import enquirer from 'enquirer'
// import NhkApiV2 from 'nhk-api-v2'
const fs = require('fs')
const enquirer = require('enquirer')
const NhkApiV2 = require('nhk-api-v2')

module.exports = class NhkSearch {

  async run () {
    const area = await NhkSearch.#selectArea()
    const service = await NhkSearch.#selectService()
    console.log(NhkApiV2)
    const client = new NhkApiV2.Client(process.env.API_KEY)
    client.getProgramsNowOnAir(area, service).then(function (data) {
      console.log(JSON.stringify(data))
    }, function (error) {
      console.error(error)
    })
  }

  static async #selectArea () {
    const areas = JSON.parse(fs.readFileSync('./areas.json', 'utf8'))
    const regions = Object.keys(areas)

    console.log('放送局を選んでください')
    const region = await enquirer.select({
      name: 'region',
      message: '地方',
      choices: regions
    })
    const prefectures = Object.keys(areas[region])
    const prefecture = await enquirer.select({
      name: 'prefecture',
      message: '放送局',
      choices: prefectures
    })
    return areas[region][prefecture]
  }

  static async #selectService () {
    return await enquirer.select({
      name: 'region',
      message: '地方',
      choices: ['tv', 'radio']
    })
  }
}