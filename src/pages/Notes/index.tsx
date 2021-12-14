import { Container } from '@material-ui/core'
import { useEffect, useState } from 'react'

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

  return (
    <Container>
      {notes.map((note) => (
        <p key={note.id}>{note.title}</p>
      ))}
    </Container>
  )
}
