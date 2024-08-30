const { Client, GatewayIntentBits } = require('discord.js') ;
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageReactions ,],
     });

client.on("messageCreate",(message)=>{
    if(message.author.bot)return;
message.reply(`hii ${message.author}`)
})

client.login("MTI3OTE0MTk2NDAyNDkwNTc5MA.GYR2n_.ZpEcGOLJ_IovaDYeQgFHBue4Oe4wMpFHqNu5sQ");
