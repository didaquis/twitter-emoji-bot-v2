import { CronJob } from 'cron'

export const createJob = (cronTime: string, onTick: () => void, cronLibrary: typeof CronJob): CronJob => {
	return new cronLibrary(cronTime, onTick, null, true, 'Europe/Madrid', null, true)
}
