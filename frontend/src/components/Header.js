import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, Tab,Tabs} from "@mui/material";
// import { color } from '@mui/system'
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export const Header = () => {
const isLoggedIn=useSelector((state)=>state.isLoggedIn);
  const [value,setValue]=useState();
  return (
    <AppBar
    position="sticky"
      sx={{
        background:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(122,9,99,0.7091211484593838) 0%, rgba(214,185,175,0.7343312324929971) 56%, rgba(0,212,255,1) 100%)",
      }}>
      <Toolbar>
        <Typography variant="h4">BlogsApp</Typography>
         
        {isLoggedIn &&   <Box    display="flex" marginLeft={'auto'} marginRight={'auto'} >

          <Tabs
          textColor="inherit"
          value={value}  onChange={(e,val)=>setValue(val)} >
<Tab LinkComponent={Link} to="/blogs"  label=" All Blogs"        />   
<Tab LinkComponent={Link} to="/myBlogs" label=" My Blogs"        />   
          </Tabs>
        </Box>}



        <Box display="flex" marginLeft="auto">
          <Button
  LinkComponent={Link} to="/auth"
 
 variant="contained"
            sx={{ margin: 1.5, borderRadius: 10 }}
            color="warning"
          >
            Login
          </Button>
        { isLoggedIn && <Button
          LinkComponent={Link} to="/auth"
            variant="contained"
            sx={{ margin: 1.5, borderRadius: 10 }}
            color="warning"
          >
            LogOut
          </Button>}
          <Button
          LinkComponent={Link} to="/auth"
          
            variant="contained"
            sx={{ margin: 1.5, borderRadius: 10 }}
            color="warning"
          >
            Signup
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
