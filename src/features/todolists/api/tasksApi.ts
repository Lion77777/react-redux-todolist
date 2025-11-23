import { instance } from "@/common/instance/instance"
import { DomainTask, GetTasksResponse } from "./tasksApi.types"
import { BaseResponse } from "@/common/types"

export const tasksApi = {
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
    },
    createTask(payload: {todolistId: string, title: string}) {
        const {todolistId, title} = payload
        return instance.post<BaseResponse<{item: DomainTask}>>(`/todo-lists/${todolistId}/tasks`, {title})
    }
}