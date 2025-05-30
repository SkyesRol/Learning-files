
-当前是项目目录

-成为一个代码仓库，管理文件的不同版本


- git init

- git status   当有文件还没有添加到仓库，就可以利用这个命令显现出来


- git add .   // git add filename
存入暂存区  storage 


- git commit -m "提交信息"


可以 add 很多次 ，commit 一次

- git remote add origin https://github.com/xxx/xxx.git

初始化时用


- git push -u origin master


- git pull

仓库里存的是文件的快照，也就是文件的版本，而不是文件本身。


- git log --oneline 查看文件历史 

- git diff index.html  查看文件修改内容 在 git add 之前用，可以查看修改保存后文件与提交到仓库文件的差异。


如果添加仓库中没有的文件，利用 git status，则显示为未跟踪文件
则我们将其添加到暂存区，会变为暂存区的新文件


