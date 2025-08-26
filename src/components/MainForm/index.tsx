import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useRef, useState } from "react";


export function MainForm() {
    const [taskName, setTaskName] = useState();
    const taskNameInput = useRef<HTMLInputElement>(null);
    const numero = useRef(0);
    function handleCreateNewTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        numero.current += 1;
        console.log('Criando nova tarefa ', taskName);
    }
    return (
        <form onSubmit={handleCreateNewTask} className='form' action=''>
                    <div className='formRow'>
                       <DefaultInput 
                       id='meuInput' 
                       type='text' 
                       labelText='task' 
                       placeholder='Digite aqui' 
                       value={taskName} 
                       onChange={e => setTaskName(e.target.value)}
                       ref={taskNameInput}
                        />
                    </div>

                    <div className='formRow'>
                        <p>
                            O proximo intervalo e 25min
                        </p>
                    </div>
                    <div className='formRow'>
                        <Cycles/>
                    </div>
                    <div className='formRow'>
                        <DefaultButton icon={<PlayCircleIcon/>} color='green'/>
                    </div>
                </form>
    );
}