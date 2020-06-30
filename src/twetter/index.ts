/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/ban-types */
export const twetter = (config: object, tweeterLibrary: any): any => {
	return new tweeterLibrary({
		consumer_key: config.TWITTER_CONSUMER_KEY,
		consumer_secret: config.TWITTER_CONSUMER_SECRET,
		access_token_key: config.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: config.TWITTER_ACCESS_TOKEN_SECRET,
	})
}
