## 百分比转换成小数
```js
function percentToPoint(val) {
      if (val) {
        if (val === '0%') {
          return 0
        }
        // return (`${val}`).replace(/[^\d]/g, '') / 100
        let num = val.replace('%', '')
        const leftNum = num.split('.')[0]
        const pointLen = leftNum.length
        const pointIndex = num.indexOf('.')
        // 将num去除原有小数点
        if (num < 1) {
          [, num] = num.split('.')
        } else {
          num = num.replace('.', '')
        }
        let index // 小数点插入的位置
        if (pointIndex === -1) {
          index = pointLen - 2
        } else if (leftNum < 1) {
          index = pointIndex - 3
        } else {
          index = pointIndex - 2
        }

        if (index > 0) {
          const numArr = num.split('')
          numArr.splice(index, 0, '.')
          num = numArr.join('')
        } else {
          const numArr = num.split('.')
          for (let i = 0; i < (0 - index); i += 1) {
            numArr.unshift('0')
          }
          num = `0.${numArr.join('')}`
        }
        return Number(num)
      }
      return ''
    },
```