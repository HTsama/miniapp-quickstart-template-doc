# u-body

## 说明

### 通用视图组件，所有页面都需要调用

## 无 scroll-view

```html
<u-body />
```

## 有 scroll-view

### wxml

```html
<u-body
  scroll
  bg=" {{ bg }} "
  btn="{{ btn }}"
  load="{{ Boolean }}"
  reHeight="{{ reHeight }}"
  class="{{ ios ? 'ios' : 'android' }}"
  end="{{ end }}"
  more="{{ more }}"
  bind:onRefresh="onRefresh"
  bind:loadmore="loadMore"
></u-body>
```

### ts

```ts
  data = {
    //背景色
    bd: "#fff",
    //底部按钮高度
    btn: 120,
    // 视图距离顶部的距离
    reHeight: 0,
    //加载状态
    load: true,
    // 是否为ios
    ios: true,
    // 是否加载到底
    end: true,
    // 是否支持加载更多
    more: true
  }
  // 下拉刷新回调事件
  onRefresh(){

  }
  // 加载更多回调事件
  loadmore(){

  }
```
