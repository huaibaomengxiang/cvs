<template>
  <div>
    <Container>
      <div id="container" style="width:100%;height:500px"></div>
    </Container>
  </div>
</template>
<script>
import { Circle, Track, Scene } from '#'
import Container from '../Container'
export default {
  components: {
    Container
  },
  data() {
    return {}
  },
  mounted() {
    let scene = new Scene({
      containerId: 'container'
    })
    let layer = scene.layer()
    this.layer = layer
    const dotSpeed = 1
    const dotCount = 60
    for (let i = 0; i < dotCount; i++) {
      let r = Math.random() * 30 + 10
      let ele = new Circle({
        zIndex: Math.random() * dotCount,
        r: r,
        x: Math.random() * (layer.width - 2 * r) + r,
        y: Math.random() * (layer.height - 2 * r) + r,
        fill: `rgba(${Math.random() * 255}, ${Math.random() *
          255}, ${Math.random() * 255}, ${Math.random()})`,
        cache: true
      })
      ele.addTrack(
        new Track({
          xa: (Math.random() * 2 - 1) * dotSpeed,
          ya: (Math.random() * 2 - 1) * dotSpeed,
          duration: Infinity,
          loop: function (p) {
            const x = this.$ele.attr('x') + this.xa
            const y = this.$ele.attr('y') + this.ya
            const radii = this.$ele.attr('r')
            this.xa *= x > layer.width - radii || x < radii ? -1 : 1
            this.ya *= y > layer.height - radii || y < radii ? -1 : 1
            this.$ele.attr({ x: x, y: y })
          }
        })
      )
      layer.append(ele)
    }
    layer.animate()
  },
  destroyed() {
    this.layer.cancelAnimate()
  },
}
</script>
