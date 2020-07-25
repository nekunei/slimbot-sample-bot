const Slimbot = require('slimbot'); //Must Install slimbot Module

const slimbot = new Slimbot(process.env.TELEGRAM_BOT_TOKEN); //Create .env File and fill out TELEGRAM_BOT_TOKEN=<YOUT-TOKEN>

 

function callback(err, obj) {

  if (err) {

    // handle error

    console.log(obj);

  }

  // handle returned object

  console.log(obj);

};

 

slimbot.on('message', message => {
if (message.text === "/start") { //When someone Send Message /start
  slimbot.sendMessage(message.chat.id, 'Heyyo', callback);
}
});

 

slimbot.startPolling(callback);
