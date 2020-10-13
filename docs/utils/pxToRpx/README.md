# px 转换 rpx

## 说明

### px 转换为 rpx 单位

```ts
export const pxToRpx = (num: number) => {
  return num * (750 / wx.getSystemInfoSync().windowWidth);
};
```

## 调用

```ts
this.$util.$pxToRpx(Number);
```
