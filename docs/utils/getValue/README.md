# 获取 key 对应的 value

## 说明

### 获取对象指定 key 对应的 value 值

```ts
export const getValue = (data: any, target: string): any => {
  for (const key of Object.keys(data)) {
    if (key === target) {
      return data[key];
    }
    if (globalData.isObject(data[key])) {
      const result = getValue(data[key], target);
      if (typeof result !== "undefined") {
        return result;
      }
    }
  }
};
```

## 调用

```ts
this.$util.$getValue(obj, "key1");
```
