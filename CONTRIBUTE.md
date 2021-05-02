# Abandon List Contribute

## 技术栈

- TypeScript
- ReactNative
- Mobx

## 代码格式规范

下载 Vscode 插件 `Prettier`

1. 右键代码
2. `format document with`
3. 选择 `Prettier`

## 提交代码

```
yarn commit
```

## 代码检查(还未确定方案)

```
yarn test
```

## 缓存处理

```linux
# 清除 watchman 缓存
watchman watch-del-all
# npm 缓存
rm -rf node_modules && yarn
# 重新启动 Metro 命令行
yarn start --reset-cache
```
