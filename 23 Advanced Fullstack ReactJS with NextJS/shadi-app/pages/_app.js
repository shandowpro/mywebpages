
// This is the file has een justify to  define a constructor to be used by another defined  component [Layout] to build (2) coponents [dynmaically]  : 
// 1- first component => [main unified Navbar] section built by [Layout] component  in each inner page 
// 2- second component => [customized content] sections according the importerd  inner page  built by [Layout] component  


import '@/styles/globals.css' ; 
import Layout from '../components/layout/Layout' ; 


// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }



function App({ Component, pageProps }) {
  return (
    <>
      {/* Wraping the this function's constructor properties inside the imported component [Layout] to use it's constructing script  */}
      <Layout>
          <Component {...pageProps} />
      </Layout>
    </>
  ); 
  
}


export default App ;