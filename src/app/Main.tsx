import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { CreateItemForm } from "@/CreateItemForm"
import { createTodolistAC } from "@/model/todolists-reducer"
import { Todolists } from "@/Todolists"
import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"

export const Main = () => {
    const dispatch = useAppDispatch()

    const createTodolist = (title: string) => {
        dispatch(createTodolistAC(title))
    }

    return (
        <Container maxWidth={'lg'}>
            <Grid container sx={{ mb: '30px' }}>
                <CreateItemForm onCreateItem={createTodolist} />
            </Grid>
            <Grid container spacing={4}>
                <Todolists />
            </Grid>
        </Container>
    )
}