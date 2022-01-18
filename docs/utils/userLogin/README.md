# 静默登录

## 说明

### app 静默登录

```ts
export const userLogin = (): Promise<any> => {
  return new Promise((resolve) => {
    wx.login({
      success(r) {
        const code = r.code;
        API.user
          .login({ code: code, billType: 1 })
          .then((res) => {
            resolve(res);
          })
          .catch((err) => {
            resolve(err);
          });
      },
    });
  });
};
```

## 调用

```ts
//此方法为异步方法
this.$util.userLogin();
```

## 案例

```ts
this.$util.$userLogin().then((res) => {
  if (res.authStatus != -1) {
    wx.setStorageSync('token', res.token);
    if (res.identity == 1) {
      wx.navigateTo({ url: '/views/index/views/login/index' });
      return;
    }
    fun();
    return;
  } else {
    wx.navigateTo({ url: '/views/index/views/login/index' });
  }
});
```
