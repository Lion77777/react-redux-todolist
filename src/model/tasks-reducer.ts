import { v1 } from 'uuid'
import type { Task, TasksState } from '../App'
import { type CreateTodolistAction, type DeleteTodolistAction } from './todolists-reducer'
import { createAction } from '@reduxjs/toolkit'

const initialState: TasksState = {}

export const tasksReducer = (state: TasksState = initialState, action: Actions): TasksState => {
  switch (action.type) {
    case 'delete_task': {
      return {
        ...state,
        [action.payload.todolistId]: state[action.payload.todolistId].filter(task => task.id !== action.payload.taskId)
      }
    }
    case 'create_task': {
      const newTask: Task = { title: action.payload.title, isDone: false, id: v1() }
      return { ...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]] }
    }
    case "change_task_status": {
      return {
        ...state,
        [action.payload.todolistId]: state[action.payload.todolistId].map(task => task.id === action.payload.taskId ? { ...task, isDone: action.payload.isDone } : task)
      }
    }
    case "change_task_title": {
      return {
        ...state,
        [action.payload.todolistId]: state[action.payload.todolistId].map(task => task.id === action.payload.taskId ? { ...task, title: action.payload.title } : task)
      }
    }
    case "create_todolist": {
      return { ...state, [action.payload.id]: [] }
    }
    case "delete_todolist": {
      const newState = { ...state }
      delete newState[action.payload.id]
      return newState
    }
    default:
      return state
  }
}

export const createTaskAC = createAction<{ todolistId: string, title: string }>('tasks/createTask')
export const deleteTaskAC = createAction<{ todolistId: string, taskId: string }>('tasks/deleteTask')
export const changeTaskStatusAC = createAction<{ todolistId: string, taskId: string, isDone: boolean }>('tasks/changetTaskStatus')
export const changeTaskTitleAC = createAction<{ todolistId: string, taskId: string, title: string }>('tasks/changetTaskTitle')

export type DeleteTaskAction = ReturnType<typeof deleteTaskAC>
export type CreateTaskAction = ReturnType<typeof createTaskAC>
export type ChangeTaskStatusAction = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleAction = ReturnType<typeof changeTaskTitleAC>

type Actions =
  | DeleteTaskAction
  | CreateTaskAction
  | ChangeTaskStatusAction
  | ChangeTaskTitleAction
  | CreateTodolistAction
  | DeleteTodolistAction
