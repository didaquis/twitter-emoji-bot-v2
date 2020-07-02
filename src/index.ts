'use strict'

import { CronJob } from 'cron'
import Twiter from 'twitter'

import { createJob } from './schedule'
import { twetter } from './twetter'
import { config } from './config'
import { EmojiService } from './services/EmojiService'
import { shuffle } from './utils'

const twitterClient: Twiter = twetter(config, Twiter)

const cronTime = '*/20 * * * *'

const onTick = (): void => {
	const emojis: EmojiService = new EmojiService()
	const emojiListSortedRandomly: string[] = shuffle(emojis.getEmojis())
	const firstEmoji: string = emojiListSortedRandomly[0]
	twitterClient
		.post('statuses/update', { status: `${firstEmoji}` })
		.then((tweet) => {
			const baseURL = 'https://twitter.com/_emoji_bot_/status/'
			console.log(`The emoji ${firstEmoji} has been posted. URL: ${baseURL}${tweet.id_str}`) // eslint-disable-line no-console
		})
		.catch((error) => {
			console.error(`Error: ${error}`) // eslint-disable-line no-console
		})
}

const job = createJob(cronTime, onTick, CronJob)

job.start()
