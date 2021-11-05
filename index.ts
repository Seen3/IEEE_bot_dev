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

client.on("messageCreate" , msg => {
    let data=msg.content.split(' ');
    if(data[0] === '/help') {
      msg.reply(`${data[3]} with id ${data[1]} asked for help at ${data[2]}`)
    }
  })

client.login(process.env.TOKEN)
