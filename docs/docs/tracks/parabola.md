### Parabola

定义一段平抛运动，顶点是元素现在的位置

```js
let parabola = new Parabola(options);
```

### options

| options.key    | value   | description                                                                 | default  |
| -------------- | ------- | --------------------------------------------------------------------------- | -------- |
| delay          | Number  | 规定运动延迟时间                                                            | --       |
| duration       | Number  | 规定运动持续时间                                                            | --       |
| retrace        | Boolean | 规定运动是否折返                                                            | `false`  |
| iterationCount | Number  | 规定运动重复次数                                                            | `1`      |
| relativeX      | Number  | 元素本身运动中心相对于元素左上角(元素为圆的话是相对于圆心)在 X 轴上的偏移量 | `0`      |
| relativeY      | Number  | 元素本身运动中心相对于元素左上角(元素为圆的话是相对于圆心)在 Y 轴上的偏移量 | `0`      |
| endX           | Number  | 规定平抛运动终点的 X 轴的位置                                               | --       |
| endY           | Number  | 规定平抛运动终点的 Y 轴的位置                                               | --       |
| easing         | String  | 规定缓动效果（[可选值](/docs/track.html#easing)）                           | `linear` |

::: tip
`relativeX` : 假设元素为一个宽高都为 20 正方形，不设置`relativeX`时，是正方形的左上角(0,0)做圆周运动，设置`relativeX`的值为 10，就是元素身上(10，0)这个点做圆周运动，`relativeY`同理  
:::

### example

```js
import { Scene, Circle, Parabola } from "cvs";
let scene = new Scene({
  containerId: 'container'
})
let layer = scene.layer()
let dot = new Circle({
  x: 0,
  y: 0,
  r: 10,
  cache: true,
  fill: "pink"
});
let parabola = new Parabola({
  delay: 0,
  duration: 2000,
  retrace: false, // 是否折返
  iterationCount: 30, // 重复次数
  endX: layer.width - 10,
  endY: layer.height - 10
});
dot.addTrack(parabola);

layer.append(dot);
layer.animate();
```

<ClientOnly><c-parabola></c-parabola></ClientOnly>
