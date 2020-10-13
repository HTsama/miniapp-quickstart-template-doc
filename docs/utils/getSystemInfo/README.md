# 获取手机信息

## 说明

### 获取当前手机信息（用于判断 ios,android 以及 iphone x）

```ts
export const getSystemInfo = async () => {
  return new Promise((resolve, reject) => {
    wx.getSystemInfo({
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
this.$util.$getSystemInfo();
```

## 案例

```ts
this.$util.$getSystemInfo().then((res)=>{
  this.globalData.systemInfo = res;
  const isIos = this.globalData.systemInfo.model.indexOf('iPhone') !== -1;
  const isX = (this.globalData.systemInfo.model.indexOf('iPhone X') !== -1 || this.globalData.systemInfo.model.indexOf('iPhone11') !== -1 || this.globalData.systemInfo.model.indexOf('iPhone12') !== -1) || this.globalData.systemInfo.model.indexOf('iPhone13') !== -1;
  this.globalData.phoneInfo = {
    // 是否ios
    isIos: isIos,
    // 是否iphonex以上
    isIpx: isX ? true : false,
    // 屏幕高度
    screenHeight: this.globalData.systemInfo.screenHeight - (((menuButtonObject.top - this.globalData.systemInfo.statusBarHeight) * 2 + menuButtonObject.height) + this.globalData.systemInfo.statusBarHeight) - (isIos ? 4 : 0),
    // 状态栏高度
    statusBarHeight: this.globalData.systemInfo.statusBarHeight,
    // 头部高度
    headHeight: this.globalData.systemInfo.statusBarHeight + menuButtonObject.height + (menuButtonObject.top - this.globalData.systemInfo.statusBarHeight) * 2 + (isIos ? 4 : 0)
  })
}
```
