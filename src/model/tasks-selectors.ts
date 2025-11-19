import type { TasksState } from "../TaskItem";
import type { RootState } from "../app/store";

export const selectTasks = (state: RootState): TasksState => state.tasks