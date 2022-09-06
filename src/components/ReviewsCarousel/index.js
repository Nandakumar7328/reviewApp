import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {lengthOfList: 0}

  onDecrese = () => {
    const {lengthOfList} = this.state

    if (lengthOfList > 0) {
      this.setState(prevState => ({lengthOfList: prevState.lengthOfList - 1}))
    }
  }

  onIncres = () => {
    const {lengthOfList} = this.state
    const {reviewsList} = this.props
    console.log(reviewsList.length)

    if (lengthOfList < reviewsList.length - 1) {
      this.setState(prevState => ({lengthOfList: prevState.lengthOfList + 1}))
    }
  }

  render() {
    const {lengthOfList} = this.state
    const {reviewsList} = this.props
    const {imgUrl, username, companyName, description} = reviewsList[
      lengthOfList
    ]

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="main-heading">Reviews</h1>
          <img src={imgUrl} alt={username} />
          <div className="btn-container">
            <button
              className="btn"
              testid="leftArrow"
              type="button"
              onClick={this.onDecrese}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
                alt="left arrow"
              />
            </button>
            <p className="name-para">{username}</p>
            <button
              className="btn"
              type="button"
              testid="rightArrow"
              onClick={this.onIncres}
            >
              <img
                src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
                alt="right arrow"
              />
            </button>
          </div>
          <p className="company-para">{companyName}</p>
          <p className="company-para">{description}</p>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
