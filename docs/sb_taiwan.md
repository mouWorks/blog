# SB Taiwan

## Step 1 - Resume
## Step 2 - skype w/Teamlead
## Step 3 - Assignments (njs)
* for Reference
```
https://github.com/TesterRandolph/SEO_Sniffer
https://travis-ci.org/TesterRandolph/SEO_Sniffer
https://www.npmjs.com/package/seo_sniffer
```
## Step 4 - 面試問題
* 上半場 - 工程師面試：
    1. 以下輸出為何？
    ```javascript
    for (var i = 1; i < 10; ++i) {
        setTimeout(function () {
            console.log(i);
        }, 100);
    }
    ```

    2. 承 Q1. 如果要輸出 1~10，且不使用 let，該如何修改？
    3. (function(windows){ ... }(windows) 這樣寫的作用和好處是什麼？
    4. 知道什麼是 Promise？
    5. 說明 CORS
    6. 用白話說明 VM and container 的差異
        * VM -> 開一台虛擬機 (完整模擬但啟動停止都較慢, 較吃資源)
        * container -> 共用底層的虛擬化技術, 啟動停止都較快, 節省資源, 但較為複雜 
            * Fat-container 概念 (較不建議) 
    7. Restful定義
    8. 有用過板控嗎？
        * Git (github flow), SVN
    9. 承 Q8. 說明 Git 的 reset and reverse 差異
    10. 承 Q9. 說明一下 Git 的 rebase
    11. 有做過什麼 sideProject?
        * NodeJS+LineChatBot (Pepebot/WeddingHelper) -> njs+lambda
        * MouWorks (ansible+docker) -> Infra, 部署的練習
    12. 知道有哪些 design pattern
    13. 承 Q12. 常用的是哪幾種
    14. 承 Q13. 會針對回答的種類，做更細的詢問 ...
    15. 說明 SOLID
        * S: SingleResponsibility 單一原則, 功能單純化就做一件事就好
        * O: Open for extension, close for modify,開放擴充,不建議內部修改. 若有需要增加的修改, 應該已擴充為主,而不要去修改既有的部分
        * L: 里式替換. 繼承方面，當子類別替換替換掉父類別時，其功能不受影響
            ```
            在最前面圖片中企鵝的例子，雖然在生物學上企鵝屬於鳥類，
            但在鳥類中的飛行行為因為企鵝無法實做導致違反LSP，
            即使不實做飛行方法，也會有機會誤用，出現無法預測的行為
            ```
        * I: Inteface-segration 介面隔離: 拆分非常龐大臃腫的介面成為更小的和更具體的介面，這樣客戶將會只需要知道他們感興趣的方法
        * D: Dependency Injection 依賴反轉:     
            
    16. 請說明 CI/CD 為何
        * CI -> 持續整合 (基本上一個虛擬環境模擬你的環境, 可以跑測試等等)
            * 有用過 TravisCI, CircleCI, Codeship
        * CD -> 持續部署 (基本上是自動化部署的流程,讓上Code變比較輕鬆)
            * 有用過 CodeDeploy, 自身project 常常用簡易的 CD 加速開發
            * 實際上正規的CD應該包含多個流程, 如拿掉Deploy中的Instance之類的
    17. RESTful API - HTTP動詞 [文件](https://tw.twincl.com/programming/*641y)
        * GET : 讀取資源
        * PUT : 替換資源
        * DELETE : 刪除資源
        * POST : 新增資源
        * PATCH : 更新資源部分內容
        * HEAD : 類似GET 但只回傳 Http Header
    
    18. Http request status code 有哪幾類
        * 注意此為Api層狀態, 並非商業狀態
        * 2xx : 成功
            * 200 : ok
            * 201 : Created 資源新增成功
            * 202 : Accepted 請求已接受,尚在處理中
            * 204 : No Content 情求成功, 未回傳任何內容
        * 3xx : 重新導向
            * 301 : Move permanently (Post+301 -> GET)
            * 302 : Move temporarily    
            * 303 : See other
            * 304 : Not Modified
            * 306 : (Deprecated)
            * 307 : Temp Redirect (暫時重導向) -> 不允許Http方法變更
            * 308 : Permanent Redirect (永久重新導向) -> 不允許Http方法變更
        * 4xx : Client Side Error 用戶端錯誤 (Client 不應 retry)
            * 400 : bad request
            * 401 : unauthorized
            * 403 : Forbidden
            * 404 : Not Found
            * 405 : Method Not Allowed (不支援所請求的 Http方法)
            * 406 : Not Acceptable (不支援所要求的內容類型)
                * 用戶端要求「回傳」的Content-Type（也就是用戶端在Accept表頭裡所要求的），伺服器不支援
            * 415 : Unsupported Media Type 
                * 415是指用戶端送出的「請求」，其Content-Type（也就是用戶端HTTP request body的內容類型），伺服器不支援。
        * 5xx : Server Side Error (Client 可以合理 Retry)
            * 500 : Internal server Error (通常的Server掛了)
            * 501 : Not implemented : Cline請求尚未支援
            * 502 : Bad Gateway: 上游伺服器沒有回傳正確結果 (Gateway/proxy server才會回傳)
            * 503 : Service Unavailable : 暫停服務
            * 504 : Gateway timeout : 上游服務器timeout  
    
    19. 承 Q18. 說明 status code 中，4XX & 5XX 的差異是？
        * 4xx 為Client錯誤, 可能是呼叫方法錯, 或者是要求了不相關的資源, 應該調整呼叫內容, 再試
        * 5xx 為Server錯誤, Client應該不需要調整呼叫, 可以稍等之後再重試
        * 以後端來看, 4xx 是client用錯方法呼叫, 後端不需更動, 5xx就是server有問題該修了
    
    20. link list ＆ array list

* 下半場 - 主管面試：（白板題 & code review）
    1. 合併兩個已排序數列
    2. 費氏數列遞迴 & 非遞迴