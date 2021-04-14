module.exports = {
    name: 'glostk',
    description: 'Returns US Stock Price',
    execute(message, args, Discord){
        var tic = args[0];
        tic = tic.toUpperCase()
        var yahooFinance = require('yahoo-finance');
        yahooFinance.quote({
            symbol: tic,
            modules: ['price']
          }, function(err, quote) {
            if(quote){
              var ch = quote.price.regularMarketChangePercent.toFixed(4);
              var name = quote.price.shortName;
              var LTP = quote.price.currencySymbol + quote.price.regularMarketPrice;
              var Change = quote.price.regularMarketChange;
              var ChangeP = ch*100 + '%';
              if(Change >= 0){
                col = '#048019';
              }
              else if(Change < 0){
                col = '#D21A1A';
              }
              const GstkEmbed = new Discord.MessageEmbed()
              .setColor(col)
              .setTitle(name)
              .addFields(
                { name: 'LTP', value: LTP },
                { name: 'Change', value: Change, inline: true },
                { name: 'Percent', value: ChangeP, inline: true }
              )
              message.reply(GstkEmbed);
              console.log('Global Stock: '+name);
              }
            if(err)
            message.reply('**Error: Enter correct Ticker**');
          });      
    }
  }