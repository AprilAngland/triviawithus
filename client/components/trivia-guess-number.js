import React from 'react'

import {connect} from 'react-redux'

export const TriviaGuessNumber = props => {
  return (
    <div className="wrapped">
      <h3>TriviaGuessNumber</h3>
    </div>
  )
}
const mapState = state => ({})

export default connect(mapState)(TriviaGuessNumber)
