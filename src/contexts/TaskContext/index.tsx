import { createContext, useContext, useState } from "react";
import type { taskStateModel } from "../../models/TaskStateModel";

const initialState = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsReamaning: '00:00',
    activeTaskId: null,
    currentCycle: 0,
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 25,
        cycles: 4,
    }
};
const initialContextValue = {
    state: initialState,
    setState: () => {},
}
type TaskContextProps = {
    state: taskStateModel,
    setState: React.Dispatch<React.SetStateAction<taskStateModel>>
}
type TypeContextProviderProps = {
    children: React.ReactNode
}
export function TypeContextProvider({children}: TypeContextProviderProps){
    const [state, setState] = useState(initialState);
    return (
        <TaskContext.Provider value={{state, setState}}>
        {children}
        </TaskContext.Provider>
    )
}
export const TaskContext = createContext<TaskContextProps>(initialContextValue)

export function useTaskContext(){return useContext(TaskContext)}