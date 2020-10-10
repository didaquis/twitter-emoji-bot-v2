import { Configuration } from '../types'
import Twiter from 'twitter'
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const twetter = (config: Configuration, tweeterLibrary: any): Twiter => {
	return new tweeterLibrary({
		consumer_key: config.TWITTER_CONSUMER_KEY,
		consumer_secret: config.TWITTER_CONSUMER_SECRET,
		access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET,
	})
}
