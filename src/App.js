import './App.css';

import Header from '../src/Components/Shared/Header/Header';
import Home from '../src/Components/Home/Home/Home';
import SignIn from '../src/Components/SignIn/SignIn';
import SignUp from '../src/Components/SignUp/SignUp';
import Blogs from '../src/Components/Shared/Blogs/Blogs';
import NotFound from '../src/Components/Shared/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';
import Footer from './Components/Shared/Footer/Footer';
import MyProducts from './Components/MyProducts/MyProducts';
import RequreAuth from './Components/RequreAuth/RequreAuth';
import ManageProduct from './Components/ManageProduct/ManageProduct';
import AddProducts from './Components/AddProducts/AddProducts';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>

        <Route path='/addProducts' element={
          <RequreAuth>
            <AddProducts></AddProducts>
          </RequreAuth>
        }></Route>
        <Route path='/myProducts' element={
          <RequreAuth>
            <MyProducts></MyProducts>
          </RequreAuth>
        }></Route>
        <Route path='/manageProduct' element={
          <RequreAuth>
            <ManageProduct></ManageProduct>
          </RequreAuth>
        }></Route>


      </Routes>

      <Footer></Footer>
    </div >
  );
}

export default App;
