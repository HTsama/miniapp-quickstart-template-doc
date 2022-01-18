# app view 距离顶部距离

## 说明

### 用于实现吸顶动画效果，top 为需要距离顶部的距离，单位为 px

```ts
export const sticky = (that: any, top: number, then: (r: boolean) => void) => {
  let sticky: boolean = false;
  if (
    top - that.app.globalData.phoneInfo.headHeight <=
    that.app.globalData.phoneInfo.headHeight -
      that.app.globalData.phoneInfo.statusBarHeight
  ) {
    sticky = true;
  } else {
    sticky = false;
  }
  then(sticky);
};
```

## 调用

```ts
this.$util.$sticky(this, 0, () => {
  fun();
});
```
