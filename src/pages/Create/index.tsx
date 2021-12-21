import {
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
} from '@mui/material'
import { Send } from '@mui/icons-material'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Input = {
  value: String
  isEmpty?: boolean
}

export function Create() {
  const [title, setTitle] = useState<Input>({ value: '' })
  const [details, setDetails] = useState<Input>({ value: '' })
  const [category, setCategory] = useState<Input>({ value: '' })
  const navigate = useNavigate()
  const theme = useTheme()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (title.value === '') {
      setTitle({ ...title, isEmpty: true })
    }
    if (details.value === '') {
      setDetails({ ...details, isEmpty: true })
    }
    if (category.value === '') {
      setDetails({ ...category, isEmpty: true })
    }

    if (!title.isEmpty && !details.isEmpty && !details.isEmpty) {
      fetch('http://localhost:6969/notes', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          title: title.value,
          details: details.value,
          category: category.value,
        }),
      }).then(() => navigate('/'))
    }
  }

  return (
    <Container>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Create a new Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          color={theme.palette.mode === 'light' ? 'primary' : 'secondary'}
          onChange={(e) => setTitle({ value: e.target.value })}
          label="Note Title"
          fullWidth
          required
          error={title.isEmpty}
          sx={(theme) => ({
            mt: theme.spacing(2),
            mb: theme.spacing(2),
            display: 'block',
          })}
        />
        <TextField
          color={theme.palette.mode === 'light' ? 'primary' : 'secondary'}
          onChange={(e) => setDetails({ value: e.target.value })}
          label="Details"
          fullWidth
          required
          multiline
          rows={4}
          error={details.isEmpty}
          sx={(theme) => ({
            mt: theme.spacing(2),
            mb: theme.spacing(2),
            display: 'block',
          })}
        />
        <FormControl
          sx={(theme) => ({
            mt: theme.spacing(2),
            mb: theme.spacing(2),
            display: 'block',
          })}
        >
          <FormLabel required error={category.isEmpty}>
            Note Category
          </FormLabel>
          <RadioGroup
            value={category.value}
            onChange={(e) => setCategory({ value: e.target.value })}
          >
            <FormControlLabel
              sx={{
                color:
                  theme.palette.mode === 'light'
                    ? theme.palette.primary.main
                    : theme.palette.text.secondary,
              }}
              value="money"
              control={
                <Radio
                  color={
                    theme.palette.mode === 'light' ? 'primary' : 'secondary'
                  }
                />
              }
              label="Money"
            />
            <FormControlLabel
              sx={{
                color:
                  theme.palette.mode === 'light'
                    ? theme.palette.primary.main
                    : theme.palette.text.secondary,
              }}
              value="todos"
              control={
                <Radio
                  color={
                    theme.palette.mode === 'light' ? 'primary' : 'secondary'
                  }
                />
              }
              label="Todos"
            />
            <FormControlLabel
              sx={{
                color:
                  theme.palette.mode === 'light'
                    ? theme.palette.primary.main
                    : theme.palette.text.secondary,
              }}
              value="reminders"
              control={
                <Radio
                  color={
                    theme.palette.mode === 'light' ? 'primary' : 'secondary'
                  }
                />
              }
              label="Reminders"
            />
            <FormControlLabel
              sx={{
                color:
                  theme.palette.mode === 'light'
                    ? theme.palette.primary.main
                    : theme.palette.text.secondary,
              }}
              value="work"
              control={
                <Radio
                  color={
                    theme.palette.mode === 'light' ? 'primary' : 'secondary'
                  }
                />
              }
              label="Work"
            />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          color={theme.palette.mode === 'light' ? 'primary' : 'secondary'}
          type="submit"
          disableElevation
          endIcon={<Send />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}
