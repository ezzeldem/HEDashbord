import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Layout from "./layout/Layout";
import SingleUser from "./pages/SingleUser/SingleUser";
import AddUser from "./pages/AddUser/AddUser";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/SingleProduct/SingleProduct";

function App() {

  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route path='/users' element={<Users />} />
          <Route path='/user/:id' element={<SingleUser />} />
          <Route path='/adduser' element={<AddUser />} />
          <Route path='/products' element={<Products />} />
          <Route path='/product/:id' element={<SingleProduct />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
