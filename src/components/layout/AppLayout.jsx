import React from 'react'
import Footer from './Footer'
import Header from './Header'
import { Outlet,useNavigation } from 'react-router-dom'
import {Loading} from './Loading';

function AppLayout() {
  const navigation = useNavigation();  //It will return an object.
  console.log(navigation);
  return (<>
     {/* <div>AppLayout</div> */}
     {navigation.state === "loading"? <Loading/>:<><Header/>
      <Outlet/>
      <Footer/></>
    //  <Header/>
    //  <Outlet/>
    //  <Footer/>
     }
     </>
  )
}

export default AppLayout