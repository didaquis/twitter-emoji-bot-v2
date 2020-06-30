import { createJob } from '../src/schedule'

import { CronJob } from 'cron'

describe('schedule', () => {
	it('should return a job instance', () => {
		const cronTime = '*/20 * * * *'
		const onTick = jest.fn()
		let job

		expect(() => {
			job = createJob(cronTime, onTick, CronJob)
		}).not.toThrow()

		expect(job).not.toBeUndefined()
	})
})
