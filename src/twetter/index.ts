import { Configuration } from '../types'
import Twitter from 'twitter'

export const twetter = (config: Configuration, tweeterLibrary: typeof Twitter): Twitter => {
	return new tweeterLibrary({
		consumer_key: config.TWITTER_CONSUMER_KEY,
		consumer_secret: config.TWITTER_CONSUMER_SECRET,
		access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET,
	})
}
