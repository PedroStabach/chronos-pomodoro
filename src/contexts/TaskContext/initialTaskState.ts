import type { taskStateModel } from "../../models/TaskStateModel";

export const initialTaskState: taskStateModel = {
    tasks: [],
    secondsRemaining: 0,
    formattedSecondsReamaning: '00:00',
    activeTaskId: null,
    currentCycle: 0, // 1,2,3....  8 volte a 1
    config: {
        workTime: 25,
        shortBreakTime: 5,
        longBreakTime: 25,
        cycles: 4,
    }
};