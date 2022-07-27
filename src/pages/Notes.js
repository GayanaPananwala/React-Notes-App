import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import NoteCard from "../components/NoteCard";
import Masonry from '@mui/lab/Masonry';

export default function Notes() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/notes")
        .then(res => res.json())
        .then(data => setNotes(data))
    }, [])

    const handleDelete = async (id) => {
        await fetch("http://localhost:8000/notes/"+ id, {
            method: 'DELETE'
        })

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