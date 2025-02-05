import DiscordJS , { Intents } from 'discord.js'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents : [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES
    ]
})

client.on('ready' , () => {
    console.log('Bot is online')
})

client.on("message" , msg => {
    if(msg.content === 'hello') {
      msg.reply("Hello World")
    }
  })

client.login(process.env.TOKEN)