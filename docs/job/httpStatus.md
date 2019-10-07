# Http request status code 有哪幾類

### 注意此為Api層狀態, 並非商業狀態
## 2xx : 成功
* 200 : ok
* 201 : Created 資源新增成功
* 202 : Accepted 請求已接受,尚在處理中
* 204 : No Content 情求成功, 未回傳任何內容
## 3xx : 重新導向
* 301 : Move permanently (Post+301 -> GET)
* 302 : Move temporarily    
* 303 : See other
* 304 : Not Modified
* 306 : (Deprecated)
* 307 : Temp Redirect (暫時重導向) -> 不允許Http方法變更
* 308 : Permanent Redirect (永久重新導向) -> 不允許Http方法變更
## 4xx : Client Side Error 用戶端錯誤 (Client 不應 retry)
* 400 : bad request
* 401 : unauthorized
* 403 : Forbidden
* 404 : Not Found
* 405 : Method Not Allowed (不支援所請求的 Http方法)
* 406 : Not Acceptable (不支援所要求的內容類型)
    * 用戶端要求「回傳」的Content-Type（也就是用戶端在Accept表頭裡所要求的），伺服器不支援
* 415 : Unsupported Media Type 
    * 415是指用戶端送出的「請求」，其Content-Type（也就是用戶端HTTP request body的內容類型），伺服器不支援。
## 5xx : Server Side Error (Client 可以合理 Retry)
* 500 : Internal server Error (通常的Server掛了)
* 501 : Not implemented : Cline請求尚未支援
* 502 : Bad Gateway: 上游伺服器沒有回傳正確結果 (Gateway/proxy server才會回傳)
* 503 : Service Unavailable : 暫停服務
* 504 : Gateway timeout : 上游服務器timeout  