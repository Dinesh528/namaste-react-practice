import './App.css';
import BodyComponent from './components/main/BodyComponent';
import HeaderComponent from './components/navigation/Header';
import { createBrowserRouter,Outlet } from 'react-router-dom';
//import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResMenuPage from './components/ResMenuPage';
//import Gorcery from './components/Gorcery';
import { lazy,Suspense, useEffect,useState } from 'react';
import UserContext from './context/userContext';
import Cart from './components/cart/Cart';
import ContextInputUser from './components/ContextInput';

//  chuncking
//  Dynamic bundling
//  lazy loading
//  code splitting
//  on Demand Loading
//  Dynamic import

const About = lazy(()=>import('./components/About'))
const Grocery = lazy(()=>import ('./components/Gorcery'))

function App() {

  const [ userInfo,setUserInfo] = useState();

  useEffect(()=>{

    const data = {
      name:"Dinesh"
    }

    setUserInfo(data.name);

  },[])

  return (
    <UserContext.Provider value={{loggedInUser:userInfo,setUserInfo}}>
    <div className="app-container">
      <HeaderComponent />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
    </UserContext.Provider>
  );
}

//short cut to create a component rafce
export const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<BodyComponent/>
      },
      {
        path:"/about",
        element:<Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>
      },
      {
        path:"/contact",
        element:<Contact/>
      },
      {
        path:"/grocery",
        element:<Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
      },
      {
        path:"/restaurants/:resId",
        element:<ResMenuPage/>
      },
      {
        path:"/cart/",
        element:<Cart/>
      },
      {
        path:"/context/",
        element:<ContextInputUser/>
      }
    ],
    errorElement:<Error/>
  },
  
])
export default App;
