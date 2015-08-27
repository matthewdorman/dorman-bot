var ack = require('ac-koa').require('hipchat');
var pkg = require('./package.json');
var app = ack(pkg);

var addon = app.addon()
  .hipchat()
  .allowRoom(true)
  .scopes('send_notification');

addon.webhook('room_message', /@[Dd]orman/, function *() {
  var phrases = [
    "Meet me at Prontos 8/27/2015 at 5:00 PM Eastern sharp.",
    "I left the company to pursue my dreams. If you need to reach me, I'll be sitting on my couch drinking whiskey and yelling at my TV.",
    "Let me google that for you.",
    "WordWhat?",
    "I love Druuuu-pall!"
  ];

  yield this.roomClient.sendNotification(phrases[Math.floor(Math.random() * phrases.length)]);
});

app.listen();
