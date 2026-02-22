import * as React from 'react';
import './Cartbar.css'
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

function Cartbar() {


   const [open, setOpen] = useState(true);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

    
  return (

    
    <div>Cartbar



              <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>



    </div>


    
  )
}

export default Cartbar