import { TodolistTitle } from './TodolistTitle/TodolistTitle'
import { Tasks } from './Tasks/Tasks'
import { FilterButtons } from './FilterButtons/FilterButtons'
import { useAppDispatch } from '@/common/hooks/useAppDispatch'
import { CreateItemForm } from '@/common/components/CreateItemForm/CreateItemForm'
import { createTaskAC } from '@/features/todolists/model/tasks-reducer'

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