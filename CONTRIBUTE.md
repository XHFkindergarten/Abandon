# Abandon List Contribute

## 技术栈

- TypeScript
- ReactNative
- Mobx

## 依赖仓库

- 日历能力 [react-native-calendar-events](https://github.com/wmcmahan/react-native-calendar-events#Calendar-options)
- 手势处理 [react-native-gesture-handler](https://github.com/software-mansion/react-native-gesture-handler#readme)

## 快速上手

1. 安装依赖

```
yarn
```

2. 安装 IOS 依赖

参考 [ReactNative 官网](https://reactnative.cn/docs/environment-setup) 进行环境搭建

3. 启动 debugger

```
yarn start
```

4. 启动模拟器 & 打包

```
# 另起一个命令行
yarn ios
或者
yarn android
```

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
