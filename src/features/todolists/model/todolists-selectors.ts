import type { RootState } from "@/app/store";
import type { Todolist } from "../ui/Todolists/TodolistItem/TodolistItem";

export const selectTodolists = (state: RootState): Todolist[] => state.todolists