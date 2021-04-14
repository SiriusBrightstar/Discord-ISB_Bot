const Discord = require('discord.js');
var yahooFinance = require('yahoo-finance');
var imdb = require('imdb');
var nameToImdb = require("name-to-imdb");

const client = new Discord.Client();
const prefix = '$';

const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('ISB_Bot is Active!');
})

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command == 'reddit'){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('Reddit')
        .setDescription('Link to r/IndianStreetBets')
        .setThumbnail('http://www.vectorico.com/download/social_media/Reddit-Icon.png')
        .setURL('https://www.reddit.com/r/IndianStreetBets')
        message.channel.send(helpEmbed);
        console.log('reddit');
    }
    else if(command == 'yt'){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('YouTube')
        .setDescription('Link to IndianStreetBets YouTube')
        .setThumbnail('https://maxcdn.icons8.com/Share/icon/Media_Controls/youtube_play1600.png')
        .setURL('https://www.youtube.com/c/IndianStreetBets')
        message.channel.send(helpEmbed);
        console.log('yt');
    }
    else if(command == 'insta'){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('Instagram')
        .setDescription('Link to IndianStreetBets Instagram')
        .setThumbnail('http://pngimg.com/uploads/instagram/instagram_PNG11.png')
        .setURL('https://www.instagram.com/IndianStreetBets')
        message.channel.send(helpEmbed);
        console.log('insta');
    }
    else if(command == 'tweets'){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('Twitter')
        .setDescription('Link to IndianStreetBets Twitter')
        .setThumbnail('http://pngimg.com/uploads/twitter/twitter_PNG95259.png')
        .setURL('https://www.twitter.com/ISB_Reddit')
        message.channel.send(helpEmbed);
        console.log('tweets');
    }
    else if(command == 'onlydd'){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('Reddit: DDs Only Mode')
        .setDescription('Link to r/IndianStreetBets & Shows only DDs')
        .setThumbnail('http://www.vectorico.com/download/social_media/Reddit-Icon.png')
        .setURL('https://reddit.com/r/IndianStreetBets/search?q=flair%3Add&restrict_sr=on&sort=new&t=all')
        message.channel.send(helpEmbed);
        console.log('onlydd');
    }
    else if(command == 'rwiki'){
        const helpEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle('Reddit: r/IndianStreetBets Wiki')
        .setDescription('Link to r/IndianStreetBets Wiki')
        .setThumbnail('http://www.vectorico.com/download/social_media/Reddit-Icon.png')
        .setURL('https://www.reddit.com/r/IndianStreetBets/wiki/index')
        message.channel.send(helpEmbed);
        console.log('rwiki');
    }
    else if(command == 'nifty'){
        client.commands.get('nifty').execute(message, args, Discord);
    }
    else if(command == 'stk'){
        client.commands.get('stk').execute(message, args, Discord);
    }
    else if(command == 'glostk'){
        client.commands.get('glostk').execute(message, args, Discord);
    }
    else if(command == 'welp'){
        client.commands.get('welp').execute(message, args, Discord);
    }
    else if(command == 'imdb'){
        client.commands.get('imdb').execute(message, args, Discord);
    }
    else if(command == 'usdinr'){
        client.commands.get('usdinr').execute(message, args, Discord);
    }
    else if(command == 'clear'){
        client.commands.get('clear').execute(message, args);
    }
    else if(command == 'kick'){
        client.commands.get('kick').execute(message, args);
    }
    else if(command == 'ban'){
        client.commands.get('ban').execute(message, args);
    }
})

client.login('ODE2MjIxMjA5MTMzODQyNDMz.YD3zPA.h-BTyN_oqtxh96tyxCsCvJM16jA');