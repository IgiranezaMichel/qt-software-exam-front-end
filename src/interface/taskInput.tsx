import { TaskPriority } from "../enum/taskPriority"

export interface TaskInput {
    id: string
    title: string
    startDate: string
    endDate: string
    assignees: string
    projectId:string 
    description: string
    taskPriority: TaskPriority
    attachment: string
  }
  