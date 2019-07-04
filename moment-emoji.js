const EMOJIS = [
  ['🕛', '🕧'],
  ['🕐', '🕜'],
  ['🕑', '🕝'],
  ['🕒', '🕞'],
  ['🕓', '🕟'],
  ['🕔', '🕠'],
  ['🕕', '🕡'],
  ['🕖', '🕢'],
  ['🕗', '🕣'],
  ['🕘', '🕤'],
  ['🕙', '🕥'],
  ['🕚', '🕦']
]

const roundTime = date => {
  const hour = date.getHours() % 12
  const isHalf = date.getMinutes() >= 30
  return [hour, isHalf]
}
const toEmoji = date => {
  const [hour, isHalf] = roundTime(date)
  return EMOJIS[hour][Number(isHalf)]
}

Date.prototype.toEmoji = function () {
  return toEmoji(this)
}
