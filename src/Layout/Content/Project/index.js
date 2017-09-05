import React from 'react'
import './project.css'

const isWeixin = () => {
  return /micromessenger/.test(navigator.userAgent.toLowerCase())
}

const isPC = () => {
    var userAgentInfo = navigator.userAgent
    var Agents = ["Android", "iPhone",
                "SymbianOS", "Windows Phone",
                "iPad", "iPod"]
    var flag = true
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false
            break
        }
    }
    return flag
}

const getHintText = () => {
  if (isPC()) {
    return "如果您想预览项目，请扫描尾页的二维码，在移动端打开我的简历"
  } else if (isWeixin()) {
    return "如果您想预览项目，请在手机浏览器中打开简历，并安装最新版百度地图手机应用"
  }
  return "点击图标即可浏览项目（请安装最新版本百度地图手机应用）"
}

const Project = () => (
    <div className="project">
      <div className="title">项目经历</div>
      <div className="container">
        <div className="first">
          <div className="name">
            <span className="en">
            Reactsw</span>电商平台
            <div className="icon">
              <a className="fa fa-suitcase" aria-hidden="true" />
            </div>
          </div>
          <div className="work">使用<span className="en">React</span>，<span className="en">React-Saga</span>进行异步操作的管理，实现项目代码的<span className="en">code-split</span>和本地数据<span className="en">Mock。</span></div>
        </div>
        <div className="second">
          <div className="name">
            豆瓣电影匹配爬虫
            <div className="icon">
              <a href="https://github.com/LumpyChen/douban-movie-crawler" className="fa fa-file-movie-o" aria-hidden="true" />
            </div>
          </div>
          <div className="work">爬取代理<span className="en">Ip</span>存入<span className="en">MongoDB</span>，爬取<span className="en">cbooo.cn</span>的数据，对<span className="en">api.douban.com</span>爬取并匹配，进行回归分析分析。</div>
        </div>
        <div className="fifth">
          <div className="name">
            百度地图车主聚合页
            <div className="icon">
              <a className="fa fa-car" aria-hidden="true" />
            </div>
          </div>
          <div className="work">移动端交互页面的开发，进行<span className="en">React</span>组件的封装与扩展。</div>
        </div>
        <div className="third">
          <div className="name">
            百度地图车主许愿节
            <div className="icon">
              <a className="fa fa-star" aria-hidden="true" />
            </div>
          </div>
          <div className="work">运营项目（已下线，无法跳转），封装新的<span className="en">React</span>组件，运用<span className="en">Redux</span>管理从服务器端获取到的数据进行显示。</div>
        </div>
        <div className="fourth">
          <div className="name">
            百度地图在线加油
            <div className="icon">
              <a className="fa fa-tachometer" aria-hidden="true" />
            </div>
          </div>
          <div className="work">开发基于<span className="en">React</span>与<span className="en">Redux</span>的<span className="en">Hybrid</span>单页面应用，管理其与服务器端和<span className="en">Native</span>端进行异步、频繁的交互。</div>
        </div>
        <div className="sixth">
          <div className="name">
            百度地图交通早晚报
            <div className="icon">
              <a className="fa fa-bar-chart" aria-hidden="true" />
            </div>
          </div>
          <div className="work">开发封装<span className="en">Echarts</span>图表为<span className="en">React</span>组件的<span className="en">Hybrid</span>单页面应用。</div>
        </div>
      </div>
      <div className="more">{getHintText()}</div>
    </div>
)

export default Project
