import * as dotenv from 'dotenv'

dotenv.config()

export default {
	TWITTER_CONSUMER_SECRET: process.env.TWITTER_CONSUMER_SECRET ?? '',
	TWITTER_CONSUMER_KEY: process.env.TWITTER_CONSUMER_KEY ?? '',
	TWITTER_ACCESS_TOKEN_KEY: process.env.TWITTER_ACCESS_TOKEN_KEY ?? '',
	TWITTER_ACCESS_TOKEN_SECRET: process.env.TWITTER_ACCESS_TOKEN_SECRET ?? '',
}