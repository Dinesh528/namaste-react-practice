import './App.css';
import BodyComponent from './components/main/BodyComponent';
import HeaderComponent from './components/navigation/Header';
import { createBrowserRouter,Outlet } from 'react-router-dom';
//import About from './components/About';
import Contact from './components/Contact';
import Error from './components/Error';
import ResMenuPage from './components/ResMenuPage';
//import Gorcery from './components/Gorcery';
import { lazy,Suspense } from 'react';


//  chuncking
//  Dynamic bundling
//  lazy loading
//  code splitting
//  on Demand Loading
//  Dynamic import

const About = lazy(()=>import('./components/About'))
const Grocery = lazy(()=>import ('./components/Gorcery'))

function App() {
  return (
    <div className="">
      <HeaderComponent/>
      <Outlet/>
    </div>
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
      }
    ],
    errorElement:<Error/>
  },
  
])
export default App;
