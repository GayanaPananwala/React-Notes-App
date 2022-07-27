import React from "react";
import Card  from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import { Avatar, IconButton, Typography } from "@mui/material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutline';
import { blue, green, pink, yellow } from "@mui/material/colors";


export default function NoteCard(props) {


    const classes = {
        avatar: {
            backgroundColor: props.note.category == "work" ? yellow[700]: 
            props.note.category == "money" ? green[500] : 
            props.note.category == "todos" ? pink[500] :
            blue[500]
        }
    }

    return(
        <div>
            <Card elevation={1}>
                <CardHeader
                    avatar={
                        <Avatar sx={classes.avatar}>{props.note.category[0].toUpperCase()}</Avatar>
                    }
                    action={
                        <IconButton onClick={()=> props.handleDelete(props.note.id)}>
                            <DeleteOutlinedIcon />
                        </IconButton>
                    }
                    title={props.note.title}
                    subheader={props.note.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {props.note.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}