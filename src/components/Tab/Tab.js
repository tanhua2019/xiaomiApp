import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tab.less'

export default class Tab extends Component {
  render() {
    return (
      <div className="tabbar">
        <NavLink to='/home'>
          <i className="iconfont iconzhuye" />
          <span>首页</span>
        </NavLink>
        <NavLink to='/category'>
          <i className="iconfont iconfenlei" />
          <span>分类</span>
        </NavLink>
        <NavLink to='/cart'>
          <i className="iconfont icongouwuche" />
          <span>购物车</span>
        </NavLink>
        <NavLink to='/user'>
          <i className="iconfont icongerenzhongxin" />
          <span>我的</span>
        </NavLink>
      </div>
    )
  }
}
