import * as dotenv from 'dotenv'
import { Configuration } from '../types'

dotenv.config()

export const config: Configuration = {
	TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY ?? '',
	TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET ?? '',
	TWITTER_ACCESS_TOKEN_KEY: process.env.TWITTER_ACCESS_TOKEN_KEY ?? '',
	TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET ?? '',
}
