# 防抖

## 说明

### 防止接口短时间内重复调用

```ts
export const deBounce = (that: any, then: Function) => {
  return function() {
    clearTimeout(globalData.timeOut);
    globalData.timeOut = setTimeout(() => {
      const args = arguments;
      then.call(that, args);
    }, 1000);
  };
};
```

## 调用

```ts
this.$util.$deBounce(this, () => {
  fun();
});
```
