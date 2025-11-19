import List from "@mui/material/List"
import { useAppSelector } from "./common/hooks/useAppSelector"
import { selectTasks } from "./model/tasks-selectors"
import { Todolist } from "./TodolistItem"
import { TaskItem } from "./TaskItem"

type Props = {
    todolist: Todolist
}

export const Tasks = ({ todolist }: Props) => {
    const tasks = useAppSelector(selectTasks)
    const { id, filter } = todolist
    const todolistTasks = tasks[id]
    let filteredTasks = todolistTasks

    if (filter === 'active') {
        filteredTasks = todolistTasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filteredTasks = todolistTasks.filter(task => task.isDone)
    }

    return (
        <>
            {filteredTasks.length === 0 ? (
                <p>Тасок нет</p>
            ) : (
                <List>
                    {filteredTasks.map(task => {
                        return (
                            <TaskItem task={task} todolistId={id} />
                        )
                    })}
                </List>
            )}
        </>
    )
}