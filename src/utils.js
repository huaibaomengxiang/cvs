// 获取相对于容器的坐标
export function getLocation (container, event) {
  let hastouch = 'ontouchstart' in window
  let e = event || window.event
  let x = hastouch ? e.targetTouches[0].pageX : e.clientX
  let y = hastouch ? e.targetTouches[0].pageY : e.clientY
  return {
    x: x - container.getBoundingClientRect().left,
    y: y - container.getBoundingClientRect().top
  }
}
/**
 * 删除 arr 中的某项
 */
export function remove (arr, item) {
  const idx = arr.findIndex(ele => {
    return ele.id === item.id
  })
  if (idx > -1) arr.splice(idx, 1)
}

// 报错提示
export function error (message) {
  throw Error('cvs: ' + message)
}

// 四舍五入取整（将目标数字加上 0.5，然后对结果执行逐位运算以消除小数部分）
export function int (num) {
  let rounded
  // With a bitwise or.
  rounded = (0.5 + num) | 0
  // A double bitwise not.
  rounded = ~~(0.5 + num)
  // Finally, a left bitwise shift.
  rounded = (0.5 + num) << 0
  return rounded
}

/**
 * 去除字符串两侧的空格，内含的多个空格转化为一个空格
 * @param {需要处理的字符串} str
 */
export function delBlank (str) {
  let regEx = /\s+/g
  return str.trim().replace(regEx, ' ')
}

/**
 * 根据 key 获取对象中的值
 * @param {取值对象} obj
 * @param {描述键的字符串，支持链式键，如 a.b.c} key
 */
export function getValInObj (obj, key) {
  return key.split('.').reduce((obj, name) => obj[name], obj)
}

/**
 * 对数组进行排序
 * @param {需要处理的数组} arr
 * @param {处理对象数组时需要传入的每项的标记属性} key
 * @param {是否是降序，默认升序} isDescend
 */
export function arrSort (arr, key, isDescend = false) {
  if (!arr.length) return arr
  arr.sort(function (a, b) {
    if (isDescend) return getValInObj(b, key) - getValInObj(a, key)
    else return getValInObj(a, key) - getValInObj(b, key)
  })
  return arr
}

// 全局动画循环周期
export const period = 16
// 折返动画容错毫秒
export const tolerance = 50

// 开启动画循环
export const animFrame = (function () {
  return (
    requestAnimationFrame ||
    webkitRequestAnimationFrame ||
    mozRequestAnimationFrame ||
    oRequestAnimationFrame ||
    msRequestAnimationFrame ||
    function (callback) {
      setTimeout(callback, period)
    }
  )
})()

// 取消动画循环
export const cancelAnim = (function () {
  return (
    cancelAnimationFrame ||
    webkitCancelAnimationFrame ||
    mozCancelAnimationFrame ||
    msCancelAnimationFrame ||
    function (id) {
      clearTimeout(id)
    }
  )
})()

// 判断是否是移动端
export const isMobile = (() => {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return true
  } else {
    return false
  }
})()

export function createNowTime (syncLocker = true) {
  let nowtime = null
  if (Date.now) {
    nowtime = Date.now
  } else {
    nowtime = () => new Date().getTime()
  }
  return nowtime
}

/*
  delay = 100 -> delay = {delay: 100}
  delay = {entropy: 100} -> delay = {delay: 100, isEntropy: true}
 */
export function formatDelay (delay) {
  if (typeof delay === 'number') {
    delay = { delay }
  } else if ('entropy' in delay) {
    delay = { delay: delay.entropy, isEntropy: true }
  }
  return delay
}

// 缓存画布
export function cacheCtx (ctx, w, h) {
  let canvas = ctx.canvas.cloneNode()
  if (w && h) {
    canvas.width = w
    canvas.height = h
  }
  return canvas.getContext('2d')
}

export function getRelativePos (x, y, rx, ry) {
  return { x: x - rx, y: y - ry }
}

export function getFloatNum (str) {
  return str.split('%')[0] / 100
}
