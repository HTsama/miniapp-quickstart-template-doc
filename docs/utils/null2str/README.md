# null 一键替换空字符串，并返回开发及字段信息

## 说明 对象中的 null 一键替换为空字符串，并且抛出异常

###

```ts
export const null2str = (data: any, list: Array<any>, programmer: string) => {
  if (typeof data != "object" || data === null || data === "null") {
    return data;
  } else {
    for (let b = 0; b < list.length; b++) {
      for (let x in data) {
        if ((data[x] === null || data[x] === "null") && x == list[b]) {
          wx.showToast({
            title: `开发者：${programmer} \r\n 错误：${x}值为null`,
            icon: "none",
          });
          data[x] = "";
          console.log(data[x]);
        } else {
          if (Array.isArray(data[x])) {
            data[x] = data[x].map((z: any) => {
              return null2str(z, list, programmer);
            });
          }
          if (typeof data[x] === "object") {
            data[x] = null2str(data[x], list, programmer);
          }
        }
      }
    }
    return data;
  }
};
```

## 调用

```ts
this.$util.$null2str(obj, ["name"], "陈子东");
```
