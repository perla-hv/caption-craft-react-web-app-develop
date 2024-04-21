import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, { useState } from 'react'

import MenuIcon from "@mui/icons-material/Menu"

const pages = ["Home", "Craft", "Messages", "Profile", "Settings", "Help"];

 function DrawerComp() {
  const [openDrawer, setOpenDrawer] = useState(false)
  return (
    <div>
      <React.Fragment>
        <Drawer open ={openDrawer} onClose={() => setOpenDrawer(false)}>
          <List>
            {
              pages.map((page,index) => (
                <ListItemButton key = {index}>
                  <ListItemIcon>
                    <ListItemText>
                        {page}
                    </ListItemText>
                  </ListItemIcon>
              </ListItemButton>
              ))
            }
            
          </List>
        </Drawer>
        <IconButton sx = {{color : "white"}}onClick={() => setOpenDrawer(!openDrawer)}>
          <MenuIcon/>
        </IconButton>
    </React.Fragment>
    </div>
  )
}
export default DrawerComp