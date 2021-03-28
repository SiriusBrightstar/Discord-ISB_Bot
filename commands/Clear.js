module.exports = {
    name: 'clear',
    description: 'Clears Messages.',
    execute(message, args) {
        if(!args[0]) return message.reply('Error: Specify the number of messages to be removed');
        if(isNaN(args[0])) return message.reply('Error: Enter a number');

        if(args[0] > 100) return message.reply('Error: Number should be less than 100');
        if(args[0] < 1) return message.reply('Error: Enter a Positive Number');
  }
}