import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { containerSx } from './TodolistItem.styles'
import { useAppDispatch } from './common/hooks/useAppDispatch'
import { changeTodolistFilterAC } from './model/todolists-reducer'
import { TodolistTitle } from './TodolistTitle'
import { Tasks } from './Tasks'

type Props = {
  todolist: Todolist
}

export type Todolist = {
  id: string
  title: string
  filter: FilterValues
}

export type Task = {
  id: string
  title: string
  isDone: boolean
}

export type FilterValues = 'all' | 'active' | 'completed'

export type TasksState = Record<string, Task[]>

export const TodolistItem = (props: Props) => {
  const {
    todolist: { id, filter },
  } = props

  const dispatch = useAppDispatch()

  const changeFilter = (filter: FilterValues) => {
    dispatch(changeTodolistFilterAC({ id, filter }))
  }

  return (
    <div>
      <TodolistTitle todolist={props.todolist} />
      <Tasks todolist={props.todolist} />
      <Box sx={containerSx}>
        <Button variant={filter === 'all' ? 'outlined' : 'text'}
          color={'inherit'}
          onClick={() => changeFilter('all')}>
          All
        </Button>
        <Button variant={filter === 'active' ? 'outlined' : 'text'}
          color={'primary'}
          onClick={() => changeFilter('active')}>
          Active
        </Button>
        <Button variant={filter === 'completed' ? 'outlined' : 'text'}
          color={'secondary'}
          onClick={() => changeFilter('completed')}>
          Completed
        </Button>
      </Box>
    </div>
  )
}
