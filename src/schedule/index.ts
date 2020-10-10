import { CronJob } from 'cron'
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/no-explicit-any */

export const createJob = (cronTime: string, onTick: () => void, cronLibrary: any): CronJob => {
	return new cronLibrary(cronTime, onTick, null, true, 'Europe/Madrid', null, true)
}
