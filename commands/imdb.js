module.exports = {
    name: 'imdb',
    description: 'Returns IMDB Details.',
    execute(message, args, Discord) {
        var imdb = require('imdb');
        var nameToImdb = require("name-to-imdb");
        var name = args.join(' ');
        nameToImdb(name, function(err, res, inf){
            if(res){
                imdb(res, function(err, data) {
                    if(data)
                    var imdbEmbed = new Discord.MessageEmbed()
                    .setColor('#7F0EF0')
                    .setTitle(data.title)
                    .addFields(
                        { name: 'Year:', value: data.year },
                        { name: 'IMDB Rating:', value: data.rating },
                    )
                    .setDescription(data.description)
                    .setImage(data.poster)
                    message.reply(imdbEmbed);
                    if(err)
                    message.reply('**Error: Enter correct Ticker**');
                  });
            }
            if(err){
                message.reply('**Error**');
            }
        });
  }
}