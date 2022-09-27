# 1.git连接github仓库

​	# 初始化本地仓库 前提是要下载git版本管理工具

​	git init     



​	# 提交本地所有文件到本地仓库

​	git add  .



​	#  提交记录信息

​	git commit -m "first commit"

​	

​	# 连接github仓库

​	git remote add origin  git@github.com:ZZY080/CreativePay.git

​	

​	# 创建主分支 目前已经创建好 可跳过

​	git  branch -M master

​	

​	#  推送到github仓库中

​	git push -u origin  master