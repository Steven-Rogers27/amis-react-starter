# amis React 初始项目

## 说明

1. 在 amis [官网示例代码](https://github.com/aisuda/amis-react-starter)基础上对以下依赖做了升级：

amis ^2.0.1  -->  amis ^3.1.1

amis-ui ^2.0.1  -->  amis-ui ^3.1.1

axios ^0.26.1  -->  axios ^1.4.0

react ^17.0.2  -->  react ^18.2.0

react-dom ^17.0.2  -->  react-dom ^18.2.0

@vitejs/plugin-react ^1.1.0  -->  @vitejs/plugin-react ^4.0.1

vite ^2.6.14  -->  vite ^4.3.0

新增 @types/react ^18.2.13

2. 在原本 webpack-dev-middleware 基础上增加了以下依赖：

webpack-hot-middleware

react-refresh

react-refresh-typescript

@pmmmwh/react-refresh-webpack-plugin

使之可以达到HMR的效果

## 使用方法

```
pnpm i
pnpm start
```

要等几十秒

## vite

```
pnpm vite
```