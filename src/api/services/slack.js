import slack from 'slack'

module.exports.postJobOpening = (channel, text) => slack.chat.postMessage({token: process.env.slack_app_token, channel, text})
