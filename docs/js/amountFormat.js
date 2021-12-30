// 用Number.prototype.toLocaleString()
const formatMoney = (money, decimals = 2) =>
  parseFloat(money.toFixed(decimals)).toLocaleString();

console.log(formatMoney(12341234.246)); // 12,341,234.25
console.log(formatMoney(12341234.246, 1)); // 12,341,234.2

// 正则匹配替换

const amountFormat = (
  val,
  decimalDigits = 2,
  addZero = true,
  showSeperation = true
) => {
  const value = val;

  let newVal =
    Math.round(Math.round(value * 10 ** ((decimalDigits || 0) + 1)) / 10) /
    10 ** (decimalDigits || 0);

  if (addZero === true) {
    newVal = newVal.toFixed(decimalDigits);
  }

  if (!showSeperation) {
    return newVal;
  }

  return newVal
    .toString()
    .replace(
      /^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,
      (all, pre, digits) => pre + digits.replace(/\d{3}/g, ',$&')
    );
};
