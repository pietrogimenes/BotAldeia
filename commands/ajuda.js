const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('#08ddf5')
    .setDescription(` Minha lista de comandos ${message.author}`)
    .setTimestamp()
    .setFooter(` Comando feito pelo usuario: ${message.author.username} `)
    .addFields(
        {
            name: '!avatar',
            value: `Utilize para ver o avatar de alguém.`,
  
        },
        {
            name: '!clear',
            value: `Utilize para apagar mensagens. (somente adms e mods)`,
          
        },
      {
            name: '!kiss',
            value: `Utilize para beijar alguém.`,
  
        },
      {
            name: '!ideia',
            value: `Use se quiser dar uma sugestão para nosso servidor!`,
  
        },
      {
            name: '!uptime',
            value: `Use para ver a quanto tempo nosso BOT está online!`,
  
        },
     
    )
    message.channel.send(embed);
}