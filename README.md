# 掘金自动签到

### 配置

修改```index.js```中的 ```sessionid``` 和 ```url```

sessionid 请从 控制台 -> Application -> Cookies 中获取

url 请点击打卡签到后获取url,例：
```"https://api.juejin.cn/growth_api/v1/check_in?aid=1&uuid=1234&_signature=12345qwer.QWERTYUIUYUI.D2xZX-gwkoeb8CvusXxKBNUk1wfPAaV-hedkHMXsh8qKmM9x0ZlKVclMwOb0PiP3TE.xnlwPL97HK6xczE41UO72"```


#### 配置后即可在服务器上启动,配合```pm2```效果更佳。

注意：sessionid有效期大概2-3个月，过期请及时更换。
