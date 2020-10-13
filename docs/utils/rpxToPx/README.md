# rpx 转换 px

## 说明

### rpx 转换为 px 单位

```ts
export const rpxToPx = (num: number) => {
  return num / (750 / wx.getSystemInfoSync().windowWidth);
};
```

## 调用

```ts
this.$util.$rpxToPx(Number);
```
