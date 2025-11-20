import type { RootState } from "@/app/store";
import type { TasksState } from "../ui/Todolists/TodolistItem/Tasks/TaskItem/TaskItem";

export const selectTasks = (state: RootState): TasksState => state.tasks