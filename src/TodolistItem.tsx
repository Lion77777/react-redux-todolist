import { TodolistTitle } from './TodolistTitle'
import { Tasks } from './Tasks'
import { FilterButtons } from './FilterButtons'
import { useAppDispatch } from './common/hooks/useAppDispatch'
import { createTaskAC } from './model/tasks-reducer'
import { CreateItemForm } from './CreateItemForm'

type Props = {
  todolist: Todolist
}

export type Todolist = {
  id: string
  title: string
  filter: FilterValues
}

export type FilterValues = 'all' | 'active' | 'completed'

export const TodolistItem = ({ todolist }: Props) => {
  const dispatch = useAppDispatch()

  const createTask = (title: string) => {
    dispatch(createTaskAC({ todolistId: todolist.id, title }))
  }
  
  return (
    <div>
      <TodolistTitle todolist={todolist} />
      <CreateItemForm onCreateItem={createTask} />
      <Tasks todolist={todolist} />
      <FilterButtons todolist={todolist} />
    </div>
  )
}