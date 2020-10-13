# 获取数组中对象值为传入 string 的对象

## 说明 获取与 string 对应的数组中的对象

###

```ts
export const getObj = (arr: Array<any>, title: string, name: string) => {
  let d = null;
  for (let k = 0; k < arr.length; k++) {
    if (arr[k][title] == name) {
      d = arr[k];
    }
  }
  return d;
};
```

## 调用

```ts
、this.$util.$getObj(array, "index", 1)
```
