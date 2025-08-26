import './styles/theme.css';
import './styles/global.css';
import { Home } from './pages/Home';
import { TypeContextProvider } from './contexts/TaskContext/TaskContext.provider';


export function App(){
    return (
        <TypeContextProvider>
            <Home />
        </TypeContextProvider>
    );
    
}
