/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const createJob = (cronTime: string, onTick: () => void, cronLibrary: any): any => {
	return new cronLibrary(cronTime, onTick, null, true, 'Europe/Madrid', null, true)
}
