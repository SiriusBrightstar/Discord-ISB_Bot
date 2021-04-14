module.exports = {
    name: 'welp',
    description: 'Returns all the functions of this bot.',
    execute(message, args, Discord) {
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#308143')
        .setTitle('Features')
        .addFields(
          { name: 'Prefix Symbol:', value: '$' },
          { name: 'reddit', value: 'link to ISB Reddit'},
          { name: 'youtube', value: 'link to ISB Youtube'},
          { name: 'insta', value: 'link to ISB Instagram'},
          { name: 'tweets', value: 'link to ISB Twitter'},
          { name: 'rwiki', value: 'link to ISB Reddit\'s Wiki'},
          { name: 'onlydd', value: 'link to ISB Reddit only DD subreddit mode'},
          { name: 'nifty', value: 'returns Nifty LTP'},
          { name: 'stk TICKER', value: 'returns LTP (India Only)'},
          { name: 'glostk TICKER', value: 'returns LTP (Global)'},
          { name: 'usdinr', value: 'returns USD/INR'},
          { name: 'imdb', value: 'returns Movie or TV information'},
        )
        message.reply(helpEmbed);
        console.log('Help');
  }
}