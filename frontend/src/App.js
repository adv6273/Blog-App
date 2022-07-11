import { Header } from "./components/Header";
import React from "react";

import { Route, Routes,BrowserRouter } from "react-router-dom";
import Auth from "./components/Auth"
import Blogs from "./components/Blogs"
import { UserBlogs } from "./components/UserBlogs";
import { BlogDetail } from "./components/BlogDetail";
import AddBlog  from "./components/AddBlog";
import { useSelector } from "react-redux";

function App() {
  const isLoggedIn=useSelector(state=>state.isLoggedIn);
  console.log(isLoggedIn);

  // const isLoggedIn = useSelector(function (state) {
  //   return state.isLoggedIn;},
  //   console.log(isLoggedIn)
  //   );
  return(  <React.Fragment>
     
     
          <Header/>
        {/* </header> */}
        <main>
          <Routes>
       <Route path="/auth" element={<Auth />}/>
       <Route path="/blogs" element={<Blogs />}/>
       <Route path="/myblogs" element={<UserBlogs />}/>
       <Route path="/myblogs/:id" element={<BlogDetail />}/>
       <Route path="/blogs/add" element={<AddBlog/>}/>
       

          </Routes>
        </main>

       {/* </BrowserRouter> */}
      

   </React.Fragment>);
  
}

export default App;
