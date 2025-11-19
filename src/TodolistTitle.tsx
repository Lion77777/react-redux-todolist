import IconButton from "@mui/material/IconButton"
import { EditableSpan } from "./EditableSpan"
import DeleteIcon from '@mui/icons-material/Delete'
import { useAppDispatch } from "./common/hooks/useAppDispatch"
import { changeTodolistTitleAC, deleteTodolistAC } from "./model/todolists-reducer"
import { Todolist } from "./TodolistItem"

type Props = {
    todolist: Todolist
}

export const TodolistTitle = ({ todolist }: Props) => {
    const dispatch = useAppDispatch()

    const deleteTodolist = () => {
        dispatch(deleteTodolistAC({ id: todolist.id }))
    }

    const changeTodolistTitle = (title: string) => {
        dispatch(changeTodolistTitleAC({ id: todolist.id, title }))
    }
    
    return (
        <div className={'container'}>
            <h3>
                <EditableSpan value={todolist.title} onChange={changeTodolistTitle} />
            </h3>
            <IconButton onClick={deleteTodolist}>
                <DeleteIcon />
            </IconButton>
        </div>
    )
}