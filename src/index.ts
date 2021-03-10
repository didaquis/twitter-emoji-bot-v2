'use strict'

import { CronJob } from 'cron'
import Twitter from 'twitter'

import { createJob } from './schedule'
import { twetter } from './twetter'
import { config, isProduction } from './config'
import { EmojiService } from './services/EmojiService'
import { shuffle } from './utils'
import { Environments } from './types'

const twitterClient: Twitter = twetter(config, Twitter)

const cronTime = '*/20 * * * *'

const onTick = (): void => {
	const emojis: EmojiService = new EmojiService()
	const emojiListSortedRandomly: string[] = shuffle(emojis.getEmojis())
	const firstEmoji: string = emojiListSortedRandomly[0]

	if (isProduction()) {
		twitterClient
			.post('statuses/update', { status: `${firstEmoji}` })
			.then((tweet) => {
				const baseURL = 'https://twitter.com/_emoji_bot_/status/'
				console.log(`The emoji ${firstEmoji} has been posted. URL: ${baseURL}${tweet.id_str}`) // eslint-disable-line no-console
			})
			.catch((error) => {
				console.error(`Error: ${error}`) // eslint-disable-line no-console
			})
	} else {
		// eslint-disable-next-line no-console
		console.log(
			`The emoji ${firstEmoji} would have been posted, but the application is not running in ${Environments.PRODUCTION} mode.`,
		)
	}
}

const job: CronJob = createJob(cronTime, onTick, CronJob)

job.start()
