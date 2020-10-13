# 获取网络状态

## 说明

### 获取当前网络状态

```ts
export const networkStatus = async () => {
  return new Promise((resolve, reject) => {
    wx.getNetworkType({
      success(res) {
        resolve(res);
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
this.$util.$networkStatus();
```

## 无网络效果

![An image](./images/pic.png)
