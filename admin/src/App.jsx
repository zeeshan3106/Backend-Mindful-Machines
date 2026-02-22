import React, { useState , createContext } from 'react'
import {BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Dashboard from './Pages/Dashboard/Dashboard'
import Header from './Pages/Dashboard/Header'

import Product from './Pages/Product/Product'
import AddProduct from './Pages/Product/addProduct'
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import Button from '@mui/material/Button';
import MainHead from './Pages/Header/Header'
import Login from './Pages/Login/Login'
import Users from './Pages/UserList/Users'
import Feedback from './Pages/Feedbacks/Feedback'
import Contact from './Pages/ContactUS/Contact'
import Category from './Pages/Category/Category'
import Orders from './Pages/Orders/Orders'
import Resposiveness from './Pages/Category/Resposiveness'


 export const MyContext = createContext();
 const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
}); 

function App() {
 const [open, setOpen] = useState(false);



const handleOpen = () => setOpen(true);


  const handleClose = () => setOpen(false);


  return (
    
    <>
       <MyContext.Provider value={{ open, handleOpen, handleClose }}>
    <BrowserRouter>
    <Routes>
      <Route   path={'/admin'}  exact={true}  element={<Dashboard/>} />
       <Route   path={'/dashboard'}  exact={true}  element={<Header/>} />
    <Route path={'/List'} element={<Product/>} exact={true}/>
   
    
        <Route path={'/Main'} element={<MainHead/>} exact={true}/>
           <Route path={'/Upload'} element={<AddProduct/>} exact={true}/>
            <Route path={'/Login'} element={<Login/>} exact={true}/>
             <Route path={'/Users'} element={<Users/>} exact={true}/>
              <Route path={'/Feedback'} element={<Feedback/>} exact={true}/>
              <Route path={'/Contact'} element={<Contact/>} exact={true}/>
 
<Route path={'/Category'} exact={true} element={<Category/>}/>

<Route path={'/Orders'} exact={true} element={<Orders/>}/>
<Route path={'/Responsive'} exact={true} element={<Resposiveness/>}/>


 

 


      


      





    </Routes>



    </BrowserRouter>

     <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        slots={{
          transition: Transition,
        }}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Sound
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        <List>
          <ListItemButton>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItemButton>
          <Divider />
          <ListItemButton>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItemButton>
        </List>
      </Dialog>












    
    </MyContext.Provider>
    </>
  )
}

export default App