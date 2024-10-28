const tgBotApi = require('node-telegram-bot-api');
const token = '7466046604:AAHYOi6nSGc3BISh9Wl6GOzKWGR2-iH16-8';

const bot = new tgBotApi(token, {polling:true});

const myCommands = [
  {
    command: '/start',
    description: 'Начальное приветствие'
  },
  {
    command: '/vsekroham',
    description: 'vsekroham mini app start'
  },
];

const reply_markup = {
  inline_keyboard: [
    [
      {
        text: 'vsekroham',
        web_app: {
          url: 'https://dzen.ru/'
        }
      }
    ]
  ],
}

bot.setMyCommands(myCommands);

bot.on('message', onMessage);

async function onMessage(msg) {
  const text  = msg.text;
  let answer = 'Я тебя не понимаю';
  let answerOpts = undefined;
  const chatId = msg.chat.id;

  if (text === '/start') {
    answer = `Привет ${msg.from.first_name} ${msg.from.last_name}! Добро пожаловать в тестовый телеграм бот Mhz_dev`;
    answerOpts = {
      reply_markup
    }
  }

  return bot.sendMessage(chatId, answer, answerOpts);
}