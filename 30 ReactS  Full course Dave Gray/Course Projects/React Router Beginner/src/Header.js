
// [main orientation map ] : {App} <- {Header}

/* The [Header] fixed component will include : 
  - [props] => {title} to be assigned inside the [App] main component         
  - [return] => dynamic value of  the title        
*/


import React from 'react'

const Header = ({ title }) => {
  return (
    <header className="Header"   >
      <h1> {title}   </h1> 
    </header>
  )
}

export default Header ; 



