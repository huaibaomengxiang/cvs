import Track from './track'
import Timeline from './timeline'
import { remove, error } from './utils'
// import event from './event'

let id = 0
// @event
class Element {
  constructor (opt) {
    this.id = id++
    this.execArr = []
    this.opt = {
      cache: false,
      visible: true,
      zIndex: 0
    }
    this.noHover = {}
    this.attr(opt)
    if (this.opt.cache) {
      // 记录线条宽度，离屏渲染需要遇到
      this.lw = 0
      if (this.opt.stroke && this.opt.lineWidth) {
        this.lw = this.opt.lineWidth / 2
      }
    }
    this.finished = false
    this.tracks = []
    this.trackIndex = 0
    this.timeline = null
  }
  get origin () {
    if (this.attr('cache')) {
      return {
        x: this.lw,
        y: this.lw
      }
    } else {
      return {
        x: this.attr('x'),
        y: this.attr('y')
      }
    }
  }
  // 设置上下文属性
  setAttr (ctx) {
    for (let key in this.opt) {
      if (key === 'opacity') ctx.globalAlpha = this.opt[key]
      else if (key === 'stroke') ctx.strokeStyle = this.opt[key]
      else if (key === 'fill') ctx.fillStyle = this.opt[key]
      else if (
        /(shadowColor|shadowBlur|shadowOffsetX|shadowOffsetY|lineCap|lineJoin|lineWidth|miterLimit|font|textAlign|textBaseline|globalCompositeOperation)/.test(
          key
        )
      ) {
        ctx[key] = this.opt[key]
      } else if (key === 'transform') {
        this.execArr.forEach(item => {
          let k = Object.keys(item)[0]
          let val = item[k]
          if (/(scale|translate|transform|setTransform)/.test(k)) {
            ctx[k](...val)
          }
          if (k === 'rotate') ctx[k]((val * Math.PI) / 180)
        })
      }
    }
  }
  // 填充或描边
  dye (ctx) {
    if (this.opt.stroke) ctx.stroke()
    else ctx.fill()
  }
  // 绘制单元
  drawUnit (cacheCtx) {
    let ctx = cacheCtx || this.ctx
    this.setAttr(ctx)
    this.drawPath(ctx)
    this.dye(ctx)
  }
  // 设置/获取绘制属性
  attr (opt, isHover) {
    if (typeof opt === 'string') {
      return this.opt[opt]
    }
    for (let key in opt) {
      let val = opt[key]
      if (val instanceof Function) {
        // 支持函数设置
        let value = val(this.opt[key])
        this.opt[kay] = value
      } else {
        // 设置转换函数
        if (key === 'transform') {
          this.execArr = []
          opt.transform.forEach(item => {
            this.execArr.push(item)
          })
        } else {
          this.opt[key] = val
        }
      }
    }
    // 由 hover 引起的属性变化，不更新 noHover
    // if (isHover) return
    // if (this.opt.hover) {
    //   for (let key in this.opt.hover) {
    //     this.noHover[key] = this.opt[key]
    //   }
    // }
  }
  // 是否点击在元素上
  isCollision (location) {
    this.drawPath(this.ctx)
    return this.ctx.isPointInPath(location.x, location.y)
  }
  on (eventType, callback) {
    this[eventType] = callback
  }
  off (eventType) {
    this[eventType] = null
  }
  getCurTrack (animateTime) {
    let res = {}
    let a = 0
    let b = 0
    this.tracks.some((item, index) => {
      a = a + item.delay
      b = a + item.duration * item.iterationCount
      if (animateTime < a) {
        res.index = index
        res.cycle = -1
        return true
      } else if (animateTime >= a && animateTime <= b) {
        res.index = index
        if (item.duration === Infinity) {
          res.cycle = 0
          res.time = animateTime - a
        } else {
          res.cycle = Math.floor((animateTime - a) / item.duration)
          res.time = animateTime - a - res.cycle * item.duration
        }
        return true
      }
      a = b
    })
    return res
  }
  runTrack (animateTime) {
    if (!this.timeline) this.timeline = new Timeline({ playbackRate: 1 })
    let res = this.getCurTrack(this.timeline.currentTime)
    // let res = this.getCurTrack(animateTime)
    // 已执行完所有轨迹
    if (res.index === undefined) {
      this.finished = true
      return
    }
    // 轨迹处于延迟状态
    if (res.cycle === -1) return
    // 执行当前轨迹循环体，并传入已经运行的事件
    this.tracks[res.index].loop(res.time)
  }
  _addTrackUnit (track) {
    if (track instanceof Track) {
      track.$ele = this
      this.tracks.push(track)
    } else {
      error('Function addTrack only accept the instance of Track.')
    }
  }
  addTrack (...tracks) {
    tracks.forEach(item => {
      this._addTrackUnit(item)
    })
  }
  removeTrack (...tracks) {
    if (tracks.length) {
      tracks.forEach(item => {
        remove(this.children, item)
      })
    } else {
      this.tracks = []
    }
  }
}

export default Element
