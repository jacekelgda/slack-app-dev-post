import slack from 'slack'

module.exports.postJobOpening = (channel, text) => slack.chat.postMessage({token: process.env.slack_app_token, channel, text})
module.exports.pinPostedMessage = postMessageResponse => slack.pins.add({token: process.env.slack_app_token, channel: postMessageResponse.channel, timestamp: postMessageResponse.ts})
module.exports.findMessageByTs = (ts, channel) => slack.channels.history({token: process.env.slack_app_token, channel, count: 1, latest: ts, inclusive: true})
