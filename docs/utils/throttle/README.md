# 节流

## 说明

### 防止短时间内方法触发多次

```ts
export const throttle = (that: any, then: Function) => {
  if (globalData.gapTime == null) {
    globalData.gapTime = 500;
  }
  function t(): void {
    let nowTime = +new Date();
    if (
      nowTime - globalData.lastTime > globalData.gapTime ||
      !globalData.lastTime
    ) {
      wx.vibrateShort();
      then.call(that, arguments);
      globalData.lastTime = nowTime;
    }
  }
  return t();
};
```

## 调用

```ts
this.$util.$throttle(this, () => {
  fun();
});
```
