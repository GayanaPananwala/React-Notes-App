import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import NoteCard from "../components/NoteCard";
import Masonry from '@mui/lab/Masonry';

export default function Notes() {

    const [notes, setNotes] = useState([])

    //Using a fetch request to grab the data using end point that JSON server provides
    useEffect(() => {
        fetch("http://localhost:8000/notes")
        .then(res => res.json()) 
        .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) => {
        //making a fetch request to delete nots from notes array
        await fetch("http://localhost:8000/notes/"+ id, {
            method: 'DELETE'
        })

        //Delete note from notes page 
        const newNotes = notes.filter(note => note.id != id)
        setNotes(newNotes)
    }
    return (
        <Container>
            <Masonry columns={3} spacing={3}>
            {notes.map(note => (
                <div item key={note.id} >
                    <NoteCard note={note} handleDelete = {handleDelete}/>
                </div>
            ))}
            </Masonry>
        </Container>
    )
}