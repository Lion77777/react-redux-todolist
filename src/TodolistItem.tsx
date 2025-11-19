import { TodolistTitle } from './TodolistTitle'
import { Tasks } from './Tasks'
import { FilterButtons } from './FilterButtons'

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

export const TodolistItem = ({todolist}: Props) => {

  return (
    <div>
      <TodolistTitle todolist={todolist} />
      <Tasks todolist={todolist} />
      <FilterButtons todolist={todolist}/>
    </div>
  )
}
