const Koa = require('koa');
const schedule = require('node-schedule');
const _request = require('request');
const app = new Koa();

// 自定义
const sessionid = ''; // SessionID
const url = "" // 打卡接口

const options = {
    url: url,
    method:'post',
    headers: {
        'cookie': 'sessionid='+ sessionid,
    },
}
// 适配Koa
function request(url, options) {
    return new Promise(function (resolve, reject) {
        _request(url, options, function (error, response, body) {
            error && reject(error);
            resolve(response, body);
        })
    })
}

async function openPage(url){
    return new Promise(function (resolve, reject) {
        _request(url, options, function (error, response, body) {
            error && reject(error);
            resolve(response, body);
        })
    })
}

// 输出信息
async function start (ctx, next) {
    const res = await request(options);
    // 打卡后阅读文章，防止被ban
    const pageRes = await openPage('https://juejin.cn/post/7070395091558334471')
}
const rule = '30 10 8 * * *'; // 每天的凌晨0点10分30秒触发'
// 定时任务
const scheduleCronstyle = ()=>{
    schedule.scheduleJob(rule,()=>{
        start();
    });
}
app.listen(3000,()=>{
    console.log('服务启动成功！');
    scheduleCronstyle(); // 定时启动
    // start(); // 立即启动
})
