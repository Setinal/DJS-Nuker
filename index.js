const Discord = require('discord.js');
const bot = new Discord.Client();
const fs = require('fs');
const settings = require('./settings.json');
const { token, prefix } = require('./settings.json');

bot.on('ready', () =>{
    console.log(`
    
                                                                                                                                                                                
                                                                                                                                                                                
    DDDDDDDDDDDDD                  JJJJJJJJJJJ   SSSSSSSSSSSSSSS                  NNNNNNNN        NNNNNNNN                  kkkkkkkk                                                
    D::::::::::::DDD               J:::::::::J SS:::::::::::::::S                 N:::::::N       N::::::N                  k::::::k                                                
    D:::::::::::::::DD             J:::::::::JS:::::SSSSSS::::::S                 N::::::::N      N::::::N                  k::::::k                                                
    DDD:::::DDDDD:::::D            JJ:::::::JJS:::::S     SSSSSSS                 N:::::::::N     N::::::N                  k::::::k                                                
      D:::::D    D:::::D             J:::::J  S:::::S                             N::::::::::N    N::::::Nuuuuuu    uuuuuu   k:::::k    kkkkkkk eeeeeeeeeeee    rrrrr   rrrrrrrrr   
      D:::::D     D:::::D            J:::::J  S:::::S                             N:::::::::::N   N::::::Nu::::u    u::::u   k:::::k   k:::::kee::::::::::::ee  r::::rrr:::::::::r  
      D:::::D     D:::::D            J:::::J   S::::SSSS                          N:::::::N::::N  N::::::Nu::::u    u::::u   k:::::k  k:::::ke::::::eeeee:::::eer:::::::::::::::::r 
      D:::::D     D:::::D            J:::::j    SS::::::SSSSS     --------------- N::::::N N::::N N::::::Nu::::u    u::::u   k:::::k k:::::ke::::::e     e:::::err::::::rrrrr::::::r
      D:::::D     D:::::D            J:::::J      SSS::::::::SS   -:::::::::::::- N::::::N  N::::N:::::::Nu::::u    u::::u   k::::::k:::::k e:::::::eeeee::::::e r:::::r     r:::::r
      D:::::D     D:::::DJJJJJJJ     J:::::J         SSSSSS::::S  --------------- N::::::N   N:::::::::::Nu::::u    u::::u   k:::::::::::k  e:::::::::::::::::e  r:::::r     rrrrrrr
      D:::::D     D:::::DJ:::::J     J:::::J              S:::::S                 N::::::N    N::::::::::Nu::::u    u::::u   k:::::::::::k  e::::::eeeeeeeeeee   r:::::r            
      D:::::D    D:::::D J::::::J   J::::::J              S:::::S                 N::::::N     N:::::::::Nu:::::uuuu:::::u   k::::::k:::::k e:::::::e            r:::::r            
    DDD:::::DDDDD:::::D  J:::::::JJJ:::::::J  SSSSSSS     S:::::S                 N::::::N      N::::::::Nu:::::::::::::::uuk::::::k k:::::ke::::::::e           r:::::r            
    D:::::::::::::::DD    JJ:::::::::::::JJ   S::::::SSSSSS:::::S                 N::::::N       N:::::::N u:::::::::::::::uk::::::k  k:::::ke::::::::eeeeeeee   r:::::r            
    D::::::::::::DDD        JJ:::::::::JJ     S:::::::::::::::SS                  N::::::N        N::::::N  uu::::::::uu:::uk::::::k   k:::::kee:::::::::::::e   r:::::r            
    DDDDDDDDDDDDD             JJJJJJJJJ        SSSSSSSSSSSSSSS                    NNNNNNNN         NNNNNNN    uuuuuuuu  uuuukkkkkkkk    kkkkkkk eeeeeeeeeeeeee   rrrrrrr            
                                                                                                                                                                                    
                                                                                                                                                                                    
                                                                                                                                                                                    
                                                                                                                                                                                    
                                                                DJS-Nuker V2 is Running | https://github.com/Setinal                                                                                                                    
                        
    
    
    
    
    
    
    
    `); // If the bot is ready, it logs this message
    
      bot.user.setActivity('WATCHING', { // This is the activity.
        type: 'nothing.'
      });
      
    }
)

bot.on('message', message => {
bot.commands = new Discord.Collection()
fs.readdir('./commands/', (err, files) => {
  if(err) return console.error(err)             // For Command Folder
  files.forEach(f => {
    let x = require(`./commands/${f}`);
    bot.commands.set(x.help, x);
  
  })
})


const args = message.content.slice(prefix.length).trim().split(/ +/g);

  const command = args.shift().toLowerCase();

  if(message.content.startsWith(prefix)){
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(bot, message, args);
  } catch (err) {
    
  }
}
})

bot.login(token); // Logs in into your bot, there is nothing to change.

