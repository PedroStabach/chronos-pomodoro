import type { TaskModel } from "./TaskModel";

export type taskStateModel = {
    tasks: TaskModel[];
    secondsRemaining: number;
    formattedSecondsReamaning: string;
    activeTaskId: TaskModel | null;
    currentCycle: number;
    config: {
        workTime: number;
        shortBreakTime: number;
        longBreakTime: number;
        cycles: number;
    }
}