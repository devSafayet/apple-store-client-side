import './App.css';
import { Route, Routers } from 'react-router-dom';
import Header from '../src/Components/Shared/Header/Header';
import Home from '../src/Components/Home/Home/Home';
import SignIn from '../src/Components/SignIn/SignIn';
import SignUp from '../src/Components/SignUp/SignUp';
import Blogs from '../src/Components/Shared/Blogs/Blogs';
import NotFound from '../src/Components/Shared/NotFound/NotFound';

function App() {
  return (
    <div>
      <Header></Header>
      <Routers>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signin' element={<SignIn></SignIn>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/blog' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routers>
    </div >
  );
}

export default App;
