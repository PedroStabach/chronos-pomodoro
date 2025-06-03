import styles from './styles.module.css';
import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';
export function Menu() {
    return (
        <div className={styles.Menu}>
            <a className={styles.MenuLink} href="#">
                <HomeIcon />
            </a>
            <a className={styles.MenuLink} href="#">
                <HistoryIcon />
            </a>
            <a className={styles.MenuLink} href="#">
                <SettingsIcon />
            </a>
            <a className={styles.MenuLink} href="#">
                <SunIcon />
            </a>
        </div>
        )
}