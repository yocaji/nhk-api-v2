#!/usr/bin/env node

const enquirer = require('enquirer')
const format = require('date-fns/format')
const NhkApiV2 = require('nhk-api-v2')
const areas = require('./areas')

class NhkRadioNow {
  async run () {
    console.log('\x1b[1mNHKラジオで放送中の番組情報を取得します\x1b[0m\n')
    const area = await this.#selectArea()
    const service = 'radio'
    const programs = await this.#callApi(area, service)
    await this.#showPrograms(programs)
  }

  async #selectArea () {
    const regions = Object.keys(areas)

    console.log('\x1b[1m放送局を選んでください\x1b[0m')
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

  async #callApi (area, service) {
    const client = new NhkApiV2.Client(process.env.NHK_API_KEY)
    try {
      const data = await client.getProgramsNowOnAir(area, service)
      return data.nowonair_list
    } catch (error) {
      console.error(error)
    }
  }

  #showPrograms (programs) {
    Object.keys(programs).forEach((key) => {
      const presentProgram = programs[key].present
      const startTime = format(new Date(presentProgram.start_time), 'H時mm分')
      const endTime = format(new Date(presentProgram.end_time), 'H時mm分')
      console.log(
        `\n\x1b[35m${presentProgram.service.name}\x1b[39m ${startTime}～${endTime}\n`,
        `\x1b[1m${presentProgram.title}\x1b[0m\n`,
        presentProgram.subtitle
      )
    })
  }
}

new NhkRadioNow().run()
