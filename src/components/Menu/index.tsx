import styles from './styles.module.css';
import { TimerIcon } from 'lucide-react';
export function Menu() {
    return (
        <div className={styles.Menu}>
            <a className={styles.MenuLink} href="#">
                <TimerIcon />
            </a>
            <a className={styles.MenuLink} href="#">
                <TimerIcon />
            </a>
            <a className={styles.MenuLink} href="#">
                <TimerIcon />
            </a>
            <a className={styles.MenuLink} href="#">
                <TimerIcon />
            </a>
        </div>
        )
}