import List from "@mui/material/List"
import { useAppSelector } from "./common/hooks/useAppSelector"
import { selectTasks } from "./model/tasks-selectors"
import { useAppDispatch } from "./common/hooks/useAppDispatch"
import { changeTaskStatusAC, changeTaskTitleAC, createTaskAC, deleteTaskAC } from "./model/tasks-reducer"
import { ChangeEvent } from "react"
import ListItem from "@mui/material/ListItem"
import { getListItemSx } from "./TodolistItem.styles"
import Checkbox from "@mui/material/Checkbox"
import { EditableSpan } from "./EditableSpan"
import IconButton from "@mui/material/IconButton"
import DeleteIcon from '@mui/icons-material/Delete'
import { CreateItemForm } from "./CreateItemForm"
import { Todolist } from "./TodolistItem"

type Props = {
    todolist: Todolist
}

export const Tasks = ({ todolist }: Props) => {
    const tasks = useAppSelector(selectTasks)
    const { id, filter } = todolist
    const dispatch = useAppDispatch()

    const todolistTasks = tasks[todolist.id]
    let filteredTasks = todolistTasks

    if (filter === 'active') {
        filteredTasks = todolistTasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = todolistTasks.filter(task => task.isDone)
    }

    const createTask = (title: string) => {
        dispatch(createTaskAC({ todolistId: id, title }))
    }

    return (
        <>
            <CreateItemForm onCreateItem={createTask} />
            {filteredTasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <List>
                    {filteredTasks.map(task => {
                        const deleteTask = () => {
                            dispatch(deleteTaskAC({ todolistId: id, taskId: task.id }))
                        }

                        const changeTaskStatus = (e: ChangeEvent<HTMLInputElement>) => {
                            const newStatusValue = e.currentTarget.checked

                            dispatch(changeTaskStatusAC({ todolistId: id, taskId: task.id, isDone: newStatusValue }))
                        }

                        const changeTaskTitle = (title: string) => {
                            dispatch(changeTaskTitleAC({ todolistId: id, taskId: task.id, title }))
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
                    })}
                </List>
            )}
        </>
    )
}