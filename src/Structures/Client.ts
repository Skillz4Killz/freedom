import EventEmitter from 'events'

export default class Client extends EventEmitter {
	/** The options that were used to create this client. */
	options: ClientOptions
	/** The timestamp in milliseconds when this client was created */
	startedAt: number

	constructor(options: ClientOptions) {
		super()

		this.options = options
		this.startedAt = Date.now()
	}

	/** The bot's token. */
	get token() {
		return this.options.token
	}

	/** Get the uptime for the bot in milliseconds. */
	get uptime() {
		return Date.now() - this.startedAt
	}
}

export interface ClientOptions {
	/** The bot token. */
	token: string
}
