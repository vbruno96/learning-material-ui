import { DeleteOutlined } from '@mui/icons-material'
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  Typography,
  Avatar,
} from '@mui/material'
import { blueGrey, cyan, green, yellow } from '@mui/material/colors'
import { makeStyles } from '@mui/styles'

type Note = {
  id: number
  category: string
  title: string
  details: string
}

type Props = {
  note: Note
  handleDelete: (id: number) => void
}

export function NoteCard({ note, handleDelete }: Props) {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar
              sx={{
                bgcolor: () => {
                  if (note.category === 'work') {
                    return blueGrey[500]
                  }
                  if (note.category === 'money') {
                    return green[900]
                  }
                  if (note.category === 'reminders') {
                    return yellow[700]
                  }
                  if (note.category === 'todos') {
                    return cyan[500]
                  }
                },
              }}
            >
              {note.category[0].toUpperCase()}
            </Avatar>
          }
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
