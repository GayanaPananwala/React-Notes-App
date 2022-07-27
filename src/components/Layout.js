import { cardClasses, Drawer, Typography } from "@mui/material";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SubjectOutlinedIcon from '@mui/icons-material/SubjectOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import { useHistory, useLocation } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { format } from 'date-fns';
import Avatar from "@mui/material/Avatar";

export default function Layout({children}) {

   
    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlinedIcon color="primary" />,
            path: '/'
        },
        {
            text: 'Create Notes',
            icon: <AddCircleOutlineOutlinedIcon color="primary" />,
            path: '/create'
        }
    ]

    const classes = {

        page: {
            backgroundColor: '#f9f9f9',
            width: '100%',
            padding: 20
        }
        , 
        active : {
            backgroundColor: '#f4f4f4'
        },

        appBar : {
            width: `calc(100% - 240px)`
        },
        drawer: {
            width: 240,
            '& .MuiDrawer-paper': {
                width: 240
            }
          },

        title: {
           padding: 2
        },

        root:{
            display: 'flex'
          },

        toolbar: {
            padding: 50
        },

        date: {
            flexGrow: 1
        },

        avatar: {
            marginLeft: 2
        }        
    }


    const history = useHistory()
    const location = useLocation()


    return(
        <div style={classes.root}> 
            <AppBar sx={classes.appBar} elevation={0}>
                <Toolbar>
                    <Typography sx={classes.date}>
                    Today is {format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        Gayana
                    </Typography>
                    <Avatar src="/me.png" sx={classes.avatar}/>
                </Toolbar>
            </AppBar>
            
            <Drawer
             sx={classes.drawer}
             variant="permanent"
             anchor="left"
             >
                <div>
                    <Typography color="primary" variant="h5" sx={classes.title}>
                        Notes
                    </Typography>
                </div>     
                <List>
                   {menuItems.map(item => (
                    <ListItem key={item.text}
                     button onClick={() => history.push(item.path)}
                     sx={location.pathname == item.path ? classes.active : null }>
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text}></ListItemText>
                    </ListItem>
                   ))}
                </List>
            </Drawer> 
            <div style={classes.page}>
                <div style={classes.toolbar}>

                </div>
                {children}
            </div>
        </div>
    )
}