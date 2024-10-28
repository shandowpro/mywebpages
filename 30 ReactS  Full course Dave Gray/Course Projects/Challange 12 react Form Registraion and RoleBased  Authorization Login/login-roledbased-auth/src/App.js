
// Importings  labraries   :
import { Routes, Route } from 'react-router-dom';


// Importings all compoenents  :   
//  =>   The main wrapper component of all other  components      
import Layout from './components/Layout';

//  =>   The Register Form page [Public route ] 
import Register from './components/Register';

//  =>   The Login Form  [Public route]
import Login from './components/Login';

//  =>   The LinkPage Form  [Public route]
import LinkPage from './components/LinkPage';


//  => to be displayed for the unauthorized users [public  route ]   
import Unauthorized from './components/Unauthorized';

//  =>   The Home page [protected route ] 
import Home from './components/Home';

//  =>   The Admin Form  to be displayed only for admin  [protected route ]
import Admin from './components/Admin';

//  =>   The Editor page to be displayed only for Editor  [protected route ]
import Editor from './components/Editor';

//  =>   The Lounge page to be dispalyed for both Admin and Editor [protected route ]    
import Lounge from './components/Lounge';

//  =>  The Missing page to be dispalyed for all  users [public route] 
import Missing from './components/Missing';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}  >

        {/* 1-  Public Routes Group   */}
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='linkpage' element={<LinkPage />} />
        <Route path='unauthorized' element={<Unauthorized />} />

        {/* 2-  Proteced  Routes Group   */}
        <Route path='/' element={<Home />} />
        <Route path='admin' element={<Admin />} />
        <Route path='editor' element={<Editor />} />
        <Route path='lounge' element={<Lounge />} />
        
        {/* 3-  Catch All Route  */}
        <Route path='*' element={<Missing />} />

      </Route>
    </Routes>

  );
}

export default App;


// <Route path='*' element={<Missing />} />