import { DeleteOutlined } from '@mui/icons-material'
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
} from '@mui/material'

type Props = {
  note: {
    id: number
    category: string
    title: string
    details: string
  }
  handleDelete: (id: number) => void
}

export function NoteCard({ note, handleDelete }: Props) {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton
              onClick={() => {
                if (confirm('You realy need exclude this note?')) {
                  handleDelete(note.id)
                }
              }}
            >
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  )
}
