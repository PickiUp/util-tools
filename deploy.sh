#!/usr/bin/env sh
# deploy.sh
# 错误时停止
set -e
# --------推送项目------------
git push -f origin main
# --------推送dist------------
# 打包构建
npm run build
# 进入目标文件夹
cd dist
# 提交到本地仓库
git init
git add -A
git commit -m 'deploy'
# 将当前 dist 仓库的 main 分支 提交到 git@github.com:PickiUp/util-tools.git 项目的 gh-pages 分支
git push -f git@github.com:PickiUp/util-tools.git main:gh-pages
cd -