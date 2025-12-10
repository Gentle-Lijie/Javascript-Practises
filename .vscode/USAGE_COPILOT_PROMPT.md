如何使用本自定义 Prompt（使用说明）

位置：`.vscode/copilot-check-homework.md`

可选使用方式：

1) Copilot Chat（手动粘贴）
   - 打开 GitHub Copilot Chat（在 VS Code 中安装并打开 Copilot Chat）。
   - 新建对话或使用 "Custom Prompt"（若插件支持），将 `copilot-check-homework.md` 的全部内容粘贴到输入框作为初始指令。
   - 在对话中给出上下文，例如："请帮我评审这个子目录 `Javascript-Practises/custom-video-player` 下的作业，仓库路径为 ..."，或直接把仓库结构摘要粘贴。

2) Copilot Labs / 自定义 Prompt 插件
   - 如果你使用 Copilot Labs（或类似可以保存 Prompt 的扩展），将本文件作为一个新 Prompt 保存并命名为 "Check JS Homework"。
   - 调用该 Prompt 并附带额外上下文（例如：学生提交的文件路径或特定的 `index.html`）。

3) 手动使用（无 Copilot 插件）
   - 将 Prompt 内容作为代码审查模板手工使用。把它粘贴进任何 ChatGPT 或代码审阅工具中，人工或半自动地完成评审。

运行/手动测试建议：
- 如果需要在本地运行页面来验证功能，请在项目根或该子项目目录下使用一个静态服务器，例如：

```bash
# 在子项目目录下
python3 -m http.server 3000
# 或者使用 npm 的 http-server（如已安装）
# npx http-server -p 3000
```

- 在浏览器打开 `http://localhost:3000` 并定位到该子项目的 `index.html` 进行手动测试。

注意事项：
- Copilot 无法直接在你的机器上执行代码（除非你把运行输出粘贴回会话）。如果你希望 Copilot 基于运行结果给出更精确的意见，请把控制台输出或浏览器行为记录粘贴进对话。

常见问题：
- 问：Prompt 太长会导致 Copilot 截断？
  答：尽量先使用简短描述让 Copilot 聚焦一个练习，再在需要时补充完整 Prompt。

- 问：如何让 Copilot 给出可应用的 patch？
  答：在会话中请求 "给出最小可用的修复补丁（diff）"，并指明你想要修改的文件路径和行号范围。

文件已保存为 `USAGE_COPILOT_PROMPT.md`，在需要时打开并按照上面步骤使用。