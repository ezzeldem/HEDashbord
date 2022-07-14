import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import Layout from "./layout/Layout";
import SingleUser from "./pages/SingleUser/SingleUser";
import AddUser from "./pages/AddUser/AddUser";

function App() {
  return (
    <div className='App'>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
          <Route path='/user/:id' element={<SingleUser />} />
          <Route path='/adduser' element={<AddUser />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
