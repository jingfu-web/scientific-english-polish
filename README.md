# Scientific English Polish

独立 npm 包 `@gaoyee/scientific-english-polish`，为 Codex 安装英文科技论文润色技能。支持中文解释、轻度校对、深度润色、字数压缩和 LaTeX 内容保护。

## 安装

需要 Node.js 18+。可执行：

```sh
npm install -g @gaoyee/scientific-english-polish
scientific-english-polish install
```

或用一条 npm 命令完成：

```sh
npm exec --yes --package=@gaoyee/scientific-english-polish -- scientific-english-polish install
```

也支持 `npx @gaoyee/scientific-english-polish install`。安装器零运行时依赖，不调用模型或上传论文；实际润色在 Codex 对话中进行。

npm 安装会提供专用命令，运行 install 子命令后才写入技能目录，无隐式 postinstall 行为。

## 下载 tgz 后安装

```sh
npm install -g ./gaoyee-scientific-english-polish-1.0.1.tgz
scientific-english-polish install
```

Windows PowerShell 如果拦截 ps1，可使用 npm.cmd、npx.cmd 和 scientific-english-polish.cmd。

## 安装目录与更新

默认写入 `~/.agents/skills/scientific-english-polish`。

```sh
scientific-english-polish path
scientific-english-polish install --project
scientific-english-polish install --dir "C:/Users/你的用户名/.codex/skills"
scientific-english-polish install --force
```

--project 安装到当前项目的 .agents/skills；--dir 指定技能父目录，适合更新已有的旧版 .codex/skills 安装，避免在多个目录重复注册。

相同内容重复安装不会修改文件；不同内容默认拒绝覆盖。--force 会把旧版本备份到技能父目录旁的 skill-backups 文件夹后再更新，并显示备份路径。拒绝覆盖符号链接。

卸载时用 path 确认技能位置，自行移除该技能目录。npm uninstall -g @gaoyee/scientific-english-polish 只卸载命令行工具。

## 使用

在 Codex 中输入：

> 请使用 $scientific-english-polish 润色以下英文，保留技术含义、公式和引用，并用中文说明重要修改。

技能未显示时可重新打开 Codex。参考 [OpenAI 技能说明](https://learn.chatgpt.com/docs/build-skills)。

## 开发与发布

仓库目标为 jingfu-web/scientific-english-polish。发布状态以 GitHub/npm 实际页面为准。

```sh
node --test test/install.test.js
npm pack
npm login --registry=https://registry.npmjs.org
npm publish --access public --registry=https://registry.npmjs.org
```

发布需 npm 账户 gaoyee；GitHub 登录和 npm 终端登录互相独立。包内不附带原始讲义、图片、分析缓存或个人路径。来源说明位于 skills/scientific-english-polish/references/source-map.md。尚未指定开源许可证（UNLICENSED）。

