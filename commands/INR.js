module.exports = {
    name: 'usdinr',
    description: 'Returns USD/INR',
    execute(message, args, Discord){
        //const stkEmbed = new Discord.MessageEmbed();
        var yahooFinance = require('yahoo-finance');
        yahooFinance.quote({
            symbol: 'INR=X',
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
              const stkEmbed = new Discord.MessageEmbed()
              .setColor(col)
              .setTitle(name)
              .addFields(
                { name: 'LTP', value: LTP },
                { name: 'Change', value: Change, inline: true },
                { name: 'Percent', value: ChangeP, inline: true }
              )
              .setFooter('From Yahoo Finance');
              message.reply(stkEmbed);
              console.log('USD/INR');
              }
          });      
    }
  }