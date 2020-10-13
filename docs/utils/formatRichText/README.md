# 富文本内容格式化

## 说明

### 富文本内容格式化，包含图片最大宽度

```ts
export const formatRichText = (html: string) => {
  let newContent = html.replace(/<img[^>]*>/gi, function(match: any) {
    match = match.replace(/style="[^"]+"/gi, "").replace(/style='[^']+'/gi, "");
    match = match.replace(/width="[^"]+"/gi, "").replace(/width='[^']+'/gi, "");
    match = match
      .replace(/height="[^"]+"/gi, "")
      .replace(/height='[^']+'/gi, "");
    return match;
  });
  newContent = newContent.replace(/style="[^"]+"/gi, function(match: any) {
    match = match
      .replace(/width:[^;]+;/gi, "max-width:100%;")
      .replace(/width:[^;]+;/gi, "max-width:100%;");
    return match;
  });
  newContent = newContent.replace(/<br[^>]*\/>/gi, "");
  newContent = newContent.replace(
    /\<img/gi,
    '<img style="max-width:100%;height:auto;display:block;margin-top:0;margin-bottom:0;"'
  );
  return newContent;
};
```

## 调用

```ts
this.$util.$formatRichText(info);
```
