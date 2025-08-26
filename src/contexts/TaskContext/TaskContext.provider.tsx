import { useState } from "react";
import { initialTaskState } from "./initialTaskState";
import { TaskContext } from "./TaskContext";

type TypeContextProviderProps = {
    children: React.ReactNode
}
export function TypeContextProvider({children}: TypeContextProviderProps){
    const [state, setState] = useState(initialTaskState);
    return (
        <TaskContext.Provider value={{state, setState}}>
        {children}
        </TaskContext.Provider>
    )
}