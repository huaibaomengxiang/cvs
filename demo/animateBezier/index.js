import { Scene, Circle, Rect, Bezier, Track, easing } from '#'
let scene = new Scene({
  containerId: 'container'
})
let layer = scene.layer()
let stopBtn = document.querySelector('.stop')
let againBtn = document.querySelector('.again')
let flag = true

let dot = new Circle({
  zIndex: 1,
  r: 10,
  // x: 169,
  // y: 225,
  cache: true,
  fill: 'pink'
})

let bezier = new Bezier({
  delay: 0,
  duration: 6000,
  retrace: true, // 是否折返
  // iterationCount: 1, // 重复次数
  // points: [{ x: 100, y: 100 }, { x: 416, y: 207 }]
  // points: [{ x: 10, y: 10 }, { x: 0, y: 200 }, { x: 210, y: 210 }]
  points: [
    { x: 188, y: 289 },
    { x: 225, y: 475 },
    { x: 466, y: 454 },
    { x: 484, y: 261 },
    { x: 517, y: 538 },
    { x: 538, y: 289 }
  ]
  // points: [
  //   { x: 169, y: 225 },
  //   { x: 178, y: 442 },
  //   { x: 379, y: 119 },
  //   { x: 398, y: 430 },
  //   { x: 555, y: 160 },
  //   { x: 264, y: 312 },
  //   { x: 293, y: 508 },
  //   { x: 545, y: 513 }
  // ]
})
dot.addTrack(bezier)

let rect = new Rect({
  h: 20,
  w: 20,
  cache: true
})

// let customTrack = new Track({
//   delay: 0,
//   duration: 2000,
//   loop: function (t) {
//     let p = t / this.duration
//     this.$ele.attr({
//       // 这里的 400 为运动总路程，10 为初始位置
//       x: 400 * easing.easeOutQuad(p),
//       y: 100 // 此行不能省略，因为动画重置时需要获取到y轴坐标
//     })
//   }
// })

// let customTrack2 = new Bezier({
//   delay: 0,
//   duration: 3500,
//   retrace: true, // 是否折返
//   iterationCount: 2, // 重复次数
//   points: [
//     {
//       x: 400,
//       y: 100
//     },
//     {
//       x: 400,
//       y: 500
//     }
//   ]
// })

// rect.addTrack(customTrack, customTrack2)

layer.append(dot, rect)

layer.animate()

stopBtn.onclick = function () {
  if (flag) {
    // 关闭动画
    layer.cancelAnimate()
    flag = false
  } else {
    // 开启动画
    layer.animate()
    flag = true
  }
}

againBtn.onclick = function () {
  // 重置动画
  layer.resetAnimate()
  // 开启动画
  layer.animate()
}
