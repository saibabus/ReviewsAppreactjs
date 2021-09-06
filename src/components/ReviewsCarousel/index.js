// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {reviewno: 0}

  onleftArrowclick = () => {
    const {reviewno} = this.state
    if (reviewno > 0) {
      this.setState(prevstate => ({reviewno: prevstate.reviewno - 1}))
    }
  }

  onrightArrowclick = () => {
    const {reviewno} = this.state
    const {reviewsData} = this.props
    if (reviewno < reviewsData.length - 1) {
      this.setState(prevstate => ({reviewno: prevstate.reviewno + 1}))
    }
  }

  render() {
    const {reviewsData} = this.props
    const {reviewno} = this.state
    const nois = reviewno
    console.log(nois)
    return (
      <div className="reviews-main-bg">
        <div className="reviews-container">
          <h1 className="heading">Reviews</h1>
          <img
            className="imageis"
            src={reviewsData[nois].imgUrl}
            alt={`${reviewsData[nois].username}-avatar`}
          />
          <div className="buttonscontainer">
            <button
              type="button"
              className="button"
              onClick={this.onleftArrowclick}
              testid="leftArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                className="buttonimg"
                alt="right-arrow"
              />
            </button>
            <p className="personName">{reviewsData[nois].username}</p>
            <button
              type="button"
              className="button"
              onClick={this.onrightArrowclick}
              testid="rightArrow"
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                className="buttonimg"
                alt="right-arrow"
              />
            </button>
          </div>
          <p className="companyname">{reviewsData[nois].companyName}</p>
          <p className="reviewdescription">{reviewsData[nois].description}</p>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
