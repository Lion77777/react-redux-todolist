import { instance } from "@/common/instance/instance"
import { DomainTask, GetTasksResponse, UpdateTaskModel } from "./tasksApi.types"
import { BaseResponse } from "@/common/types"

export const tasksApi = {
    getTasks(todolistId: string) {
        return instance.get<GetTasksResponse>(`/todo-lists/${todolistId}/tasks`)
    },
    createTask(payload: {todolistId: string, title: string}) {
        const {todolistId, title} = payload

        return instance.post<BaseResponse<{item: DomainTask}>>(`/todo-lists/${todolistId}/tasks`, {title})
    },
    updatedTask(payload: {todolistId: string, taskId: string, task: DomainTask}) {
        const {todolistId, taskId, task} = payload

        return instance.put<BaseResponse<{item: UpdateTaskModel}>>(`/todo-lists/${todolistId}/tasks/${taskId}`, {task})
    }
}