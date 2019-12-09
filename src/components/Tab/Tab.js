import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Tab.less'

export default class Tab extends Component {
  render() {
    return (
      <div className="tabbar">
        <Link to='/home'>
          <i className="iconfont icon-home_light" />
          <span>首页</span>
        </Link>
        <Link to='/category'>
          <i className="iconfont icon-sortlight" />
          <span>分类</span>
        </Link>
        <Link to='/cart'>
          <i className="iconfont icon-cart" />
          <span>购物车</span>
        </Link>
        <Link to='/user'>
          <i className="iconfont icon-tubiaolunkuo-" />
          <span>我的</span>
        </Link>
      </div>
    )
  }
}
