# 获取授权状态

## 说明

### 获取当前小程序授权状态

```ts
export const authSetting = async () => {
  return new Promise((resolve, reject) => {
    wx.getSetting({
      success(res) {
        resolve(res.authSetting);
      },
      fail(error) {
        reject(error);
      },
    });
  });
};
```

## 调用

```ts
//此方法为异步方法
this.$util.$authSetting();
```
