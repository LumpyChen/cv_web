import React from 'react'
import './project.css'

const Project = () => (
    <div className="project">
      <div className="title">项目经历</div>
      <div className="container">
        <div className="first">
          <div className="name">
            微讯足球平台
            <div className="icon">
              <a className="fa fa-futbol-o" aria-hidden="true" />
            </div>
          </div>
          <div className="work">负责前端页面重构和行为层效果实现，使用<span className="en">Bootstrap</span>和<span className="en">JQuery</span>。</div>
        </div>
        <div className="second">
          <div className="name">
            金融计算工具集
            <div className="icon">
              <a href="https://github.com/LumpyChen/Finance-Tools-by-React" className="fa fa-money" aria-hidden="true" />
            </div>
          </div>
          <div className="work">基于<span className="en">React</span>和<span className="en">Bootstrap</span>之上的各种金融计算小工具。</div>
        </div>
        <div className="fifth">
          <div className="name">
            <span className="en">
            Reactsw</span>电商平台
            <div className="icon">
              <a className="fa fa-suitcase" aria-hidden="true" />
            </div>
          </div>
          <div className="work">使用<span className="en">React</span>系列框架，<span className="en">React-Saga</span>进行异步操作的管理，实现项目代码的<span className="en">code-spliting</span>，懒加载和<span className="en">mock</span>。</div>
        </div>
        <div className="third">
          <div className="name">
            电影爬虫分析
            <div className="icon">
              <a href="https://github.com/LumpyChen/douban-movie-crawler" className="fa fa-file-movie-o" aria-hidden="true" />
            </div>
          </div>
          <div className="work">爬取代理<span className="en">Ip</span>存入<span className="en">MongoDB</span>，爬取<span className="en">piaofang168</span>的数据，并对<span className="en">api.douban.com</span>进行搜索，进行回归分析与数据可视化。</div>
        </div>
        <div className="fourth">
          <div className="name">
            车主线下加油
            <div className="icon">
              <a className="fa fa-car" aria-hidden="true" />
            </div>
          </div>
          <div className="work">开发基于<span className="en">React</span>与<span className="en">Redux</span>的<span className="en">Hybrid</span>单页面应用，与服务器端和<span className="en">NA</span>端进行大量交互。</div>
        </div>
        <div className="sixth">
          <div className="name">
            车主智能交通
            <div className="icon">
              <a className="fa fa-truck" aria-hidden="true" />
            </div>
          </div>
          <div className="work">开发大量使用<span className="en">Canvas</span>的移动端应用，项目目前仍未结束</div>
        </div>
      </div>
      <div className="more">更多精彩，请移步我的<a href="http://github.com/lumpychen" className="en">GitHub</a></div>
    </div>
)

export default Project
