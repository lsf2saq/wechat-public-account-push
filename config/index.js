export const config = {
    // 公众号配置
    // 公众号appId
    appId: "wx43a7a33baffe19e0",
    // 公众号appSecret
    appSecret: "55f0a126fb8bf4efbc9e86834c8f12be",
    // 模板消息id
    templateId: "sdUVjqgdZqOz9Gy2fHSZ_S3VvRYjPIKoxeBmnDA8Fh0",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    user: ["oWLNj6pzR-0Ieibxfq0gOPUxivdk","oWLNj6s0QAj474jtxLZlkd7u7zTo"],
     
    // 信息配置
    // 所在省份
    province: "四川",
    // 所在城市
    city: "南充",
    // 生日，修改名字为对应需要显示的名字，如果生日为农历， type为 r
    birthdays: [
      {"name": "安琪", "year": "2002", "date": "11-22", "type": 'new'},
      {"name": "硕烽", "year": "2002", "date": "10-02", "type": 'new'},
    ],
    // 在一起的日子，格式同上
    loveDate: "2022-04-20",
    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}
