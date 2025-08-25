import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";


export function MainForm() {
    return (
        <form className='form' action=''>
                    <div className='formRow'>
                       <DefaultInput id='meuInput' type='text' labelText='task' placeholder='Digite aqui' />
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