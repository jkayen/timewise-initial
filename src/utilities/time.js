const checkTime = () => {
  const t = new Date(Date.now())
  const h = t.getHours();
  const m = t.getMinutes();
  const s = t.getSeconds();
  const ap = h > 11 ? 'PM' : 'AM';
  return `${ap === 'PM' ? h - 12 : h}:${m}:${s} ${ap}`;
}

const timeDiff = (then, now = Date.now()) => {
  let diff = (now - then) / 1000;
  let s, m, h;
  if (diff > 3599) {
    h = Math.floor(diff / 3600);
    diff = diff % 3600;
  } if (diff > 59) {
    m = Math.floor(diff / 60);
    diff = diff % 60;
  } if (diff > 1) {
    s = Math.floor(diff);
  }
  s = s ? `${s} seconds` : ``;
  m = m ? `${m} minutes ` : ``;
  h = h ? `${h} hours ` : ``;
  return `${h}${m}${s}`
}

module.exports = {checkTime, timeDiff};
