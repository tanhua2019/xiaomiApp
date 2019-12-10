import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Htab.less'

export default class Htab extends Component {
  render() {
    return (
      <div className="Htab">
        <NavLink to="/home/refer">
          <span>推荐</span>
        </NavLink>
        <NavLink to="/home/smart">
          <span>智能</span>
        </NavLink>
        <NavLink to="/home/tv">
          <span>电视</span>
        </NavLink>
        <NavLink to="/home/computer">
          <span>电脑</span>
        </NavLink>
        <NavLink to="/home/phone">
          <span>全面屏</span>
        </NavLink>
        <NavLink to="/home/living">
          <span>生活周边</span>
        </NavLink>
      </div>
    )
  }
}
