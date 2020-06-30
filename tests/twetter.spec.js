import { twetter } from '../src/twetter'

import { config } from './fixtures/config'

import Twiter from 'twitter'

describe('twetter', () => {
	it('should return a Twitter client instance', () => {
		let twitterClient

		expect(() => {
			twitterClient = twetter(config, Twiter)
		}).not.toThrow()

		expect(twitterClient).not.toBeUndefined()

		expect(twitterClient.options.consumer_key).not.toBeNull()
		expect(twitterClient.options.consumer_secret).not.toBeNull()
		expect(twitterClient.options.access_token_key).not.toBeNull()
		expect(twitterClient.options.access_token_secret).not.toBeNull()
	})
})
