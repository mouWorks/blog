# Git

### [面試問題](https://gitbook.tw/interview)

## 說明一些差異

* `git clone` : 從遠端整個 Repo 複製下來
* `git fetch` : 下載遠端 `origin` 有的, 但我沒有的
    * 只做下載, 並不合併
* `git pull` : `git fetch + merge指令`
* `git diff SHA1 SHA2` : 列出差異
* `git checkout SHA1` : 把 HEAD 移到那個地方
* `git reset SHA1` : 會將 HEAD 和分支都移到同一個地方
    * `--mixed` : 檔案留在工作目錄
    * `--soft` : 檔案和目錄都在暫存區
    * `--hard` : 變動都丟掉
* `git revert SHA1` : 建立一個反向 commit, 等於多一次commit 做 revert 的事情    