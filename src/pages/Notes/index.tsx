import { useEffect, useState } from 'react'

import { Masonry } from '@mui/lab'
import { Container } from '@mui/material'

import { Note, getNotes, deleteNote } from '../../data/db'
import { NoteCard } from '../../components/NoteCard'

export function Notes() {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    setNotes(getNotes())
  }, [])

  const handleDelete = async (id: number) => {
    deleteNote(id)
    setNotes(notes.filter((note) => note.id !== id))
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
