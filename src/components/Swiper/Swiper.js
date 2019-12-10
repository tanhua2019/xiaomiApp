import React, { Component } from 'react'
import ReactSwipe from 'react-swipe';
import { getSwiper } from '@/api'

export default class Swiper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  UNSAFE_componentWillMount() {
    getSwiper(this.props.type).then(res => {
      this.setState({
        list: res.data
      })
    })
  }
  render() {
    return (
      <div>
        <ReactSwipe
          className="carousel"
          key={this.state.list.length}>
          {
            this.state.list.map((item, index) => {
              return (
                <div key={index}>
                  <img src={item} alt="" />
                </div>
              )
            })
          }
        </ReactSwipe>
      </div>
    )
  }
}
