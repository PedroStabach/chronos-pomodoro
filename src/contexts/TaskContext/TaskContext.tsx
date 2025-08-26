import { createContext } from "react"
import type { taskStateModel } from "../../models/TaskStateModel"
import { initialTaskState } from "./initialTaskState"

const initialContextValue = {
    state: initialTaskState,
    setState: () => {},
}
type TaskContextProps = {
    state: taskStateModel,
    setState: React.Dispatch<React.SetStateAction<taskStateModel>>
}

export const TaskContext = createContext<TaskContextProps>(initialContextValue)
