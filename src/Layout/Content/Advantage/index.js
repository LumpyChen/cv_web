import React from 'react'
import './advantage.css'

const Advantage = () => (
    <div className="advantage">
      <div className="title">技术特长</div>
      <div className="compare-head">相较与自己其它方面，更擅长</div>
      <div className="compare">开发基于<span className="en">React</span>的单页面应用及其组件</div>
      <div className="compare-head">与</div>
      <div className="compare"><span className="en">Javscript</span>异步操作</div>
      <div className="know-head">同时对</div>
      <div className="know"><span className="en">Nodejs</span>后端编程</div>
      <div className="know">移动端适配/兼容性调整</div>
      <div className="know"><span className="en">ESNext</span>，<span className="en">Webpack</span>模块化配置，<span className="en">Git</span>版本管理等</div>
      <div className="know-bottom">有一定程度上的了解</div>
    </div>
)

export default Advantage
