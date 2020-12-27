## 常用命令

1. git add . 提交到暂存区
2. git commit -m'' 提交到本地仓库
3. git push origin master 提交到远程仓库 master 分支
4. git branch 当前分支
5. git checkout xxx 还原文件或者切换分支
6. git status
7. git diff 查看不同
8. git pull origin master 已有仓库，下载下来后同步到自己的本地
9. git checkout -b xxx 新建分支并切换到分支 b
10. git merge dev 在 master 分支下合并 dev 然后再
11. git log --pretty=oneline 查看提交记录
12. git reflog 查看 git 提交历史 比如撤销过的版本号
13. pwd //显示当前目录
14. ls -ah //显示当前目录下的明细
15. cat readme.txt//查看修改内容

[常用命令 by 阮一峰](http://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)

## 在本地创建代码仓库并关联到远程

笔记、课程地址(https://coding.imooc.com/learn/list/330.html)

1. github 上创建远程仓库

GitHub 上创建一个 repo，填好 repo 名称，以及写一下 README，对项目先做个简单的描述。

2. 创建本地代码仓库

在命令行中，输入“git init”，使文件夹加入 git 管理

3. 关联远程分支
   首先在命令行中运行命令查看远程分支：`git remote -v`

这里我们不会得到任何输出，因为我们还没有关联远程分支，我们先去 GitHub 上找到我们仓库的地址，在命令行运行：`git remote add origin 仓库地址`

关联后，远程库的名字就是 `origin`，这是 `Git` 默认的叫法，也可以改成别的，但是 `origin` 这个名字一看就知道是远程库。

接着你就可以继续运行 `git remote -v` 查看关联结果了。

4. 拉取代码

运行如下命令从远程仓库拉取 master 分支代码并合并：`git pull origin master`

这个时候会报错：

```bash
error: The following untracked working tree files would be overwritten by merge:
	README.md
Please move or remove them before you merge.
Aborting
```

因为我们在初始化代码的时候也创建了 `README.md`，和远程仓库的 `README.md` 冲突了。我们把 `README.md` 文件删除，再次运行：`git pull origin master`

这次代码就拉取成功了，并且在本地也创建了一个 `master` 分支。

5. 提交代码

最后我们来提交代码，首先运行：

```bash
git add .
git commit -m"提交注释"
git push origin master
```

接着我们去 GitHub 仓库中就可以看到刚才这条提交记录了。

## 多分支

master 上为可以发布的代码，需要在分支上写自己负责的部分，ok 后合并到 master 上

- git branch 查看当前分支
- git checkout -b dev 创建新的分支 dev 并切换到 dev
- 提交到 dev 分支 - git add . - git commit -m"备注" - git push origin dev(分支名)
- 合并到 master 上

      	（非提交的人合并时：

      	- git fetch 把所有分支拉下来
      	- git checkout dev
      	- git pull origin dev
      	)
      	- git checkout master(切换到master分支)
      	- git pull origin master
      	- git merge dev
      	- git push origin master

* 拉取远程分支并建立联系
git checkout —-track origin/develop  别名：git track origin/develop

## gitignore

- \*\*/foo: 忽略/foo, a/foo, a/b/foo 等

## 撤销修改

- git checkout --file//工作区时
- git reset HEAD <file>//暂存区时，已经 add 了，先撤销提交，重新放回工作区

## 版本回退

用 HEAD 表示当前版本，上一个版本就是 HEAD^，上上一个版本就是 HEAD^^，当然往上 100 个版本写成 HEAD~100

### 本地远程都回退

- git reset --hard 1094a（版本号的前 5 位）

此时 git status 提示本地落后远程一个版本

- git push origin 分支名 --force

### 远程回退，保留本地的修改，即撤销 push

- git reset --soft 1094a（版本号的前 5 位）
- git add,commit
- git push origin 分支名 --force

## 删除本地和远程分支

- 删除本地分支 git branch -D dev
- 删除远程分支 git push origin :dev

## 删除远程仓库文件

- git pull origin master    # 将远程仓库里面的项目拉下来
- dir                       # 查看有哪些文件夹
- git rm -r --cached .idea  # 删除.idea 文件
- git commit -m '删除.idea'  # 提交,添加操作说明
- git push # 提交修改记录

## 合并其他分支上的代码

- git checkout master
- git pull origin master
- git checkout dev
- git merge master

## 将修改内容放到别的分支上

master 为当前分支做了修改 dev 为应该被修改的分支

- git stash 将修改内容先暂存一边，让当前分支干净
- git checkout -b dev
- git stash pop 暂存一边的修改拉过来
- git add . ……

## 修改远程仓库名

- 查看当前文件夹关联的远程仓库 git remote -v
- 解除当前文件夹与远程仓库的关联 git remote rm origin
- 修改 Github 仓库名称和本地文件夹名称
- 关联新的远程仓库 git remote add origin 仓库的地址

## 上传项目时的一些问题

```js
git push origin master
To github.com:YaseminLi/react.git
 ! [rejected]        master -> master (non-fast-forward)
error: failed to push some refs to 'git@github.com:YaseminLi/react.git'
hint: Updates were rejected because the tip of your current branch is behind
hint: its remote counterpart. Integrate the remote changes (e.g.
hint: 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.
```

可以尝试强行上传：

\$ git push -u origin +master

[其它问题](https://blog.csdn.net/crazydony/article/details/51983343)
