module.exports.extractEmail = text => text.match(/<mailto:.*>/) ? text.match(/<mailto:.*>/)[0] : null
