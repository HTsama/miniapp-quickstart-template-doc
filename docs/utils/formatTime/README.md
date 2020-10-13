# 获取时间戳

## 说明

### 获取当前时间戳并格式化

```ts
export const formatTime = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hour = date.getHours();
  const minute = date.getMinutes();
  const second = date.getSeconds();
  return (
    [year, month, day].map(globalData.formatNumber).join("/") +
    " " +
    [hour, minute, second].map(globalData.formatNumber).join(":")
  );
};
```

## 调用

```ts
this.$util.$formatTime(new Date());
```
