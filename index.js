client.on('messgae', message => {
  if(message.content.startswith(prefix + "help")){
    let embed = new DiscordMessageEmbed()
    .settitle(`Help Keevo`)
    .addField(prefix + "command", "description", true)
    .addField(prefix + "command", "description", true)
    .addField(prefix + "command", "description", true)
    .addField(prefix + "command", "description", true)
    .addField(prefix + "command", "description", true)
    .addField(prefix + "command", "description", true)
    message.channel.send(embed)
  }
});

//Keevo ==> KmCodes