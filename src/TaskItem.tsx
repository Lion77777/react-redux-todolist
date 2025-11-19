import { EditableSpan } from "./EditableSpan"
import { useAppDispatch } from "./common/hooks/useAppDispatch"
import { changeTaskStatusAC, changeTaskTitleAC, deleteTaskAC } from "./model/tasks-reducer"
import { ChangeEvent } from "react"
import { getListItemSx } from "./TodolistItem.styles"
import Checkbox from "@mui/material/Checkbox"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from '@mui/icons-material/Delete'
import ListItem from "@mui/material/ListItem"

type Props = {
    task: Task
    todolistId: string
}

export type Task = {
    id: string
    title: string
    isDone: boolean
}

export type TasksState = Record<string, Task[]>


export const TaskItem = ({ task, todolistId }: Props) => {
    const dispatch = useAppDispatch()

    const deleteTask = () => {
        dispatch(deleteTaskAC({ todolistId, taskId: task.id }))
    }

    const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
        const newStatusValue = e.currentTarget.checked

        dispatch(changeTaskStatusAC({ todolistId, taskId: task.id, isDone: newStatusValue }))
    }

    const changeTaskTitle = (title: string) => {
        dispatch(changeTaskTitleAC({ todolistId, taskId: task.id, title }))
    }

    return (
        <ListItem key={task.id} sx={getListItemSx(task.isDone)}>
            <div>
                <Checkbox checked={task.isDone} onChange={changeTaskStatus} />
                <EditableSpan value={task.title} onChange={changeTaskTitle} />
            </div>
            <IconButton onClick={deleteTask}>
                <DeleteIcon />
            </IconButton>
        </ListItem>

    )
}