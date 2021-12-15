import { Masonry } from '@mui/lab'
import { Container } from '@mui/material'
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
      <Masonry columns={{ xs: 1, md: 2, lg: 3 }} spacing={3}>
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} handleDelete={handleDelete} />
        ))}
      </Masonry>
    </Container>
  )
}
