

// importing ReactJS the required libraires : 
    import React from 'react';
    import { Fragment } from 'react';
    import { ReactDOM } from 'react-dom';

// importing the css private files : 
    import '../src/css/bootstrapComps.css' ;

// importing the reactJs Bootstrap components : 
    import {Button } from 'react-bootstrap' ;


const BootstrapComps = () => {
  return (
    <Fragment>
     
        <h1 className='header'> This is section about Bootstrap Templates  </h1> 
        
        <div className='container'>
            <h2 className='subHeader'> This is section about 'Buttons' Bootstrap component   </h2>  
             
            <Button variant="primary">Primary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="success">Success</Button>{' '}
            <Button variant="warning">Warning</Button>{' '}
            <Button variant="danger">Danger</Button>{' '}
            <Button variant="info">Info</Button>{' '}
            <Button variant="light">Light</Button>{' '}
            <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>
        </div>
          
        
        <div className='container'>
            <h2 className='subHeader'> This is section about 'Badges' Bootstrap component   </h2>  
             
          

            
        </div>
         

        <div className='container'>
            <h2 className='subHeader'> This is section about 'Accordions' Bootstrap component   </h2>  
             
          


        </div>
         

        <div className='container'>
            <h2 className='subHeader'> This is section about 'alerts' Bootstrap component   </h2>  
             
          


        </div>
         



    </Fragment>
     
  )
}

export default BootstrapComps ;