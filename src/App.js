import './App.css';
import {Routes, Route} from "react-router-dom";
import Users from "./pages/Users/Users";
import Posts from "./pages/Posts/Posts";
import Main from "./pages/Main/Main";
import Header from "./components/Header/Header";


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/posts' element={<Posts/>} />
      </Routes>
    </div>
  );
}

export default App;
