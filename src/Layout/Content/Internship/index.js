import React from 'react'
import './internship.css'

const Internship = () => (
    <div className="internship">
      <div className="title">实习经历</div>
      <div className="first">
        <div className="date"><span>2015-08</span> 至 <span>2015-09</span></div>
        <div className="company">锐腾体育 互联网业务部</div>
        <div className="work">参与开发 微讯足球平台</div>
      </div>
      <div className="second">
        <div className="date"><span>2016-07</span> 至 <span>2016-09</span></div>
        <div className="company">六滴科技 研发部</div>
        <div className="work">开发并部署 <span className="en">Reactivesw</span> 电商平台</div>
      </div>
      <div className="third">
        <div className="date"><span>2016-11</span> 至今</div>
        <div className="company">百度地图 地图客户端部</div>
        <div className="work">参与开发 车主聚合页 在线加油 车主许愿节（已下线） 等项目 </div>
      </div>
    </div>
)

export default Internship
