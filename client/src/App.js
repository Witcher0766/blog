import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './component/layout/Layout';
import IndexPage from './pages/indexpage/IndexPage';
import LoginPage from './pages/loginpage/LoginPage';
import Register from './pages/loginpage/Register';

function App() {
  return (
  <>
 <Routes>
 <Route path='/' element={<Layout/>}> 
    <Route index element={<IndexPage/>} />
    <Route path={'/login'} element={<LoginPage/>}/>
    <Route path={'/register'} element={<Register/>}/>
    </Route>
 </Routes>
  </>
  );
}

export default App;
