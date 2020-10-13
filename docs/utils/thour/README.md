# 千位符格式化

## 说明

### 数字千位符格式化

```ts
export const thour = (data: string) => {
  const re = /([0-9]+\.[0-9]{2})[0-9]*/;
  data = data.toString().replace(re, "$1");
  let xs: string = ".00";
  let f: string = "";
  if (data.toString().indexOf("-") != -1) {
    f = "-";
    data = data.toString().slice(1, data.toString().length);
  }
  if (data.toString().indexOf(".") != -1) {
    xs = data.slice(data.toString().length - 3, data.length);
    data = data.toString().slice(0, data.toString().length - 3);
  }
  let newst = data.toString().split("");
  let s = "";
  let n = 0;
  for (let k = newst.length - 1; k >= 0; k--) {
    if (n % 3 === 0 && n != 0) {
      s = newst[k] + "," + s;
    } else {
      s = newst[k] + s;
    }
    n++;
  }
  s = f + s + xs;
  return s;
};
```

## 调用

```ts
this.$util.$thour(Number);
```
