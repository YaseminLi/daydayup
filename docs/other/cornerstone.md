cornerstone在安装破解版后加载log日志时无法加载：

mac cornerstone could not contact repository to read the latest log entries

解决方法：
1. 退出cornerstone
2. 在terminal中执行：defaults delete com.zennaware.cornerstone3 HistoryCacheUsage
3. 进入下面路径： ~/Library/Containers/com.zennaware.cornerstone3/Data/Library/Caches
4. 找到store文件夹，删除即可