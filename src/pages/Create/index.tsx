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
} from '@material-ui/core'
import { Send } from '@material-ui/icons'
import { makeStyles } from '@material-ui/styles'
import { FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'

type Input = {
  value: String
  isEmpty?: boolean
}

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
})

export function Create() {
  const [title, setTitle] = useState<Input>({ value: '' })
  const [details, setDetails] = useState<Input>({ value: '' })
  const [category, setCategory] = useState<Input>({ value: '' })
  const navigate = useNavigate()

  const classes = useStyles()

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
          className={classes.field}
          onChange={(e) => setTitle({ value: e.target.value })}
          label="Note Title"
          color="secondary"
          fullWidth
          required
          error={title.isEmpty}
        />
        <TextField
          className={classes.field}
          onChange={(e) => setDetails({ value: e.target.value })}
          label="Details"
          color="secondary"
          fullWidth
          required
          multiline
          rows={4}
          error={details.isEmpty}
        />
        <FormControl className={classes.field}>
          <FormLabel required error={category.isEmpty}>
            Note Category
          </FormLabel>
          <RadioGroup
            value={category.value}
            onChange={(e) => setCategory({ value: e.target.value })}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          variant="contained"
          type="submit"
          color="primary"
          disableElevation
          endIcon={<Send />}
        >
          Submit
        </Button>
      </form>
    </Container>
  )
}
