import config from '../src/config'

describe('config', () => {
	it('should be defined', () => {
		expect(config.TWITTER_CONSUMER_SECRET).toBeDefined()
		expect(config.TWITTER_CONSUMER_KEY).toBeDefined()
		expect(config.TWITTER_ACCESS_TOKEN_KEY).toBeDefined()
		expect(config.TWITTER_ACCESS_TOKEN_SECRET).toBeDefined()
	})

	it('should be string', () => {
		expect(typeof config.TWITTER_CONSUMER_SECRET).toBe('string')
		expect(typeof config.TWITTER_CONSUMER_KEY).toBe('string')
		expect(typeof config.TWITTER_ACCESS_TOKEN_KEY).toBe('string')
		expect(typeof config.TWITTER_ACCESS_TOKEN_SECRET).toBe('string')
	})
})
