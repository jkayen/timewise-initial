const checkTime = () => {
  const t = new Date(Date.now())
  const h = t.getHours();
  const m = t.getMinutes();
  const s = t.getSeconds();
  const ap = h > 11 ? 'PM' : 'AM';
  return `${ap === 'PM' ? h - 12 : h}:${m}:${s} ${ap}`;
}

module.exports = checkTime;
