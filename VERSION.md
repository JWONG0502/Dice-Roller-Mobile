# Dice Roller Mobile

版本：0.2.0

## 本版内容

- 根据 PRD V2.3 和设计稿 V4 完成移动端 H5 骰子网站迭代。
- 支持 8 个玩法：普通摇点数、比大小、大小判定、单双判定、点数判定、真心话大冒险、喝酒游戏、快艇骰子。
- 默认英文，支持中英文切换并在本地浏览器保存语言偏好。
- 支持静音切换并在本地浏览器保存静音偏好。
- 摇骰后默认盖盅，支持上滑开盅、下滑盖盅；非触摸设备可点击骰盅开合。
- 支持摇盅动画、振动触发和音效容错。
- 比大小仅展示本机结果，不包含玩家管理、排行榜、电脑玩家或系统胜负判定。
- 喝酒游戏始终显示理性饮酒提示。
- 新增 About、Contact、Privacy Policy 静态页面，均支持双语。

## 文件结构

```text
dice-roller-mobile/
  index.html
  about.html
  contact.html
  privacy.html
  styles.css
  main.js
  static.js
  assets/
    dice-shake.mp3  可选，缺失时不影响功能
  VERSION.md
```
