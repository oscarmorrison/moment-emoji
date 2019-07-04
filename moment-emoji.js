moment.prototype.emoji = function() {
  const rounded = Math.round(moment(this).minute() / 30) * 30;
  const nearestTime = moment(this).set('minute', rounded).format('hhmm');
  const LOOKUP = {
    '0100': '🕐',
    '0130': '🕜',
    '0200': '🕑',
    '0230': '🕝',
    '0300': '🕒',
    '0330': '🕞',
    '0400': '🕓',
    '0430': '🕟',
    '0500': '🕔',
    '0530': '🕠',
    '0600': '🕕',
    '0630': '🕡',
    '0700': '🕖',
    '0730': '🕢',
    '0800': '🕗',
    '0830': '🕣',
    '0900': '🕘',
    '0930': '🕤',
    '1000': '🕙',
    '1030': '🕥',
    '1100': '🕚',
    '1130': '🕦',
    '1200': '🕛',
    '1230': '🕧',
  };
  return LOOKUP[nearestTime] || '🕰';
}
