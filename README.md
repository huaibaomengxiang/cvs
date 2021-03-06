# cvs

Cvs (a short name from 'canvas') is a basic canvas framework for 2d drawing, it's designed to make canvas's drawing easier.

## Features

- 无依赖，API 简练，学习成本低
- 引入轨迹的概念，并提供辅助工具，使路径动画的实现更加简单直观
- 支持高度自由的自定义元素和轨迹，应用灵活
- 画布针对运动进行了拓展，更强的动画控制能力
- 元素支持基础事件绑定，增强画布的交互性
- 鼠标移入具有点击事件的元素，光标变化
- 利用 Canvas 离屏渲染，实现缓存机制

## Install

```bash
npm install cvs
```

## Usage

```js
import { Scene, Circle } from "cvs";

let scene = new Scene({
  containerId: 'container'
})
let layer = scene.layer()

cvs.append(
  new Circle({
    x: 100,
    y: 100,
    r: 59
  })
);

cvs.draw();
```

## Document

[文档地址](https://hamger.github.io/cvs/)

## Future

- 实现基于关键帧的动画
- 支持多个元素的复合
- 添加锚点属性，优化矩阵变换
- 基于时间线的细粒度动画控制
- 支持伪 3D 效果
- 提高单元测试覆盖率

## CommitRule

提交信息需遵循以下格式：

```bash
commitType: description
```

`commitType`应为以下五种类型之一：

- feat: 增加新特性
- fix: 问题修复
- docs: 文档修改
- test: 测试用例修改
- opti: 代码优化，包括重构，格式、配置修改等

## Reference

- [SpriteJS](https://github.com/spritejs/spritejs)
- [antvis/g](https://github.com/antvis/g)

## Changelog

### 2018.12.10

> v0.4.1 支持椭圆运动的倾斜角配置

### 2018.12.5

> v0.4.0 引入 Shape 和 Group 构造器，Element 构造器作为二者的基类

### 2018.11.17

> v0.3.0 引入 Scene 和 Layer 构造器

### 2018.11.16

> v0.2.11 添加 Element 实例方法 clone

> v0.2.10 Circle 构造器支持绘制扇形

> v0.2.9 Rect 构造器支持圆角设置

> v0.2.8 去除 Poly 和 Arc 构造器

### 2018.11.15

> v0.2.7 优化贝尔曲线运动计算

### 2018.11.5

> v0.2.6 添加 pauseAnimate 暂停动画函数

> v0.2.5 添加 preload 资源预加载函数

### 2018.10.30

> v0.2.4 添加圆周运动、椭圆运动

### 2018.10.18

> v0.2.3 支持自定义元素

### 2018.10.17

> v0.2.2 修复 hover 事件重复绘制元素

### 2018.10.16

> v0.2.1 考虑到 duration 是 Infinity 的情况，loop 函数接受的参数改为当前轨迹下已运行的时间

> v0.2.0 重新设计元素动画的实现，添加贝塞尔曲线运动，添加动画重置

### 2018.10.11

> v0.1.11 cvs 支持多项添加和删除元素

### 2018.10.9

> v0.1.10 添加开启和关闭动画

### 2018.9.18

> v0.1.8 优化配置项赋值操作

### 2018.9.17

> v0.1.7 添加 hover 效果

### 2018.9.14

> v0.1.6 添加离屏 canvas 缓存

### 2018.9.12

> v0.1.5 添加 click 事件监听

### 2018.9.11

> v0.1.4 添加 Path，Image，Text 构造器

### 2018.9.5

> v0.1.0 项目初始化
