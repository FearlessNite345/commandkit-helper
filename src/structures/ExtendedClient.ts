import { Client, ClientOptions } from "discord.js"
import { CustomClientOptions } from "../interfaces/ExtendedClientInterfaces"

export class ExtendedClient extends Client {
    public customOptions

    constructor(options: ClientOptions, customOptions: CustomClientOptions) {
        super(options)
        this.customOptions = customOptions
    }
}