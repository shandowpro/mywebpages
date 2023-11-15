
//  This page includes a functional compomoents to construct [Layout] of unified [JSX elements sections] to be imported/included in all project inner pages , these (2) main parts are as follwoing : 

// 1-  Unified [Navabar] section => to icluded in all inner page as {Header}  
// 2-  The [customized section] of the impopted functional component


import MainNavigation from './MainNavigation' ;
import classes from './Layout.module.css' ;

function Layout(props) {
    return (
        <div> 
            {/* This unified compopnent [NavBar] Section => is defined in another file and imported in this functinoal component  to be auto incliuded in all inner pages */}
            <MainNavigation/>    
            

            {/* This the custom section of the imported inner page => as the passed through props to be sent to this from the used functiopnal component    */}
            <main  className={classes.main}>
                {props.children}
            </main>
        </div>
        
    ) ;

}

export default Layout ;
    