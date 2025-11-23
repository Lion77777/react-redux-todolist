import { instance } from "@/common/instance/instance"

export const tasksApi = {
    getTasks(todolistId: string) {
        return instance.get(`/todo-lists/${todolistId}/tasks`)
    }
}