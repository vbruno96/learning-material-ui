import { Container, Grid, Paper } from '@mui/material'
import { useEffect, useState } from 'react'
import { NoteCard } from '../../components/NoteCard'

type Note = {
  id: number
  title: string
  details: string
  category: string
}

export function Notes() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    fetch('http://localhost:6969/notes')
      .then((res) => res.json())
      .then((data) => setNotes(data))
  }, [])

  const handleDelete = async (id: number) => {
    await fetch(`http://localhost:6969/notes/${id}`, {
      method: 'DELETE',
    })

    const newNotes = notes.filter((note) => note.id !== id)

    setNotes(newNotes)
  }

  return (
    <Container>
      <Grid container spacing={3}>
        {notes.map((note) => (
          <Grid key={note.id} item xs={12} md={6} lg={4}>
            <NoteCard note={note} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
