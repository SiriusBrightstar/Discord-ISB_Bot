module.exports = {
    name: 'kick',
    description: "Kick a user",
    execute(message, args){
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Invalid Permissions")
        let User = message.guild.member(message.mentions.users.first()) || message.guild.members.cache.get(args[0])
        if (!User) return message.channel.send("Invalid User")
        if (User.hasPermission("BAN_MEMBERS")) return message.reply("Can't ban that one, he also can ban")
        let banReason = args.join(" ").slice(22);
        if (!banReason) {
            banReason = "None"
        }
        console.log(`USER = ${User}`)
        User.kick({reason: banReason})
        var UserID = User.id
        console.log(`USER ID = ${UserID}`)
    }
}