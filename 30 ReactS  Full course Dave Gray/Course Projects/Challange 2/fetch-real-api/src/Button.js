
//  Button reusable component : 

import React from 'react'

const Button = ({ buttonText, reqType, setReqType }) => {
  return (
    <button
      // by cliciking on the  button the [reqType] state will be set by the value of the buytton text  :  
      onClick={() => setReqType(buttonText)}
      className={ buttonText === reqType ? "selected" : null}
      type='button'
    >
      {buttonText}
    </button>
  )
}

export default Button ;