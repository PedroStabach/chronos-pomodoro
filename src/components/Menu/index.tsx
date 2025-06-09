import styles from './styles.module.css';
import { HistoryIcon, HomeIcon, SettingsIcon, SunIcon } from 'lucide-react';
export function Menu() {
    return (
        <div className={styles.Menu}>
            <a className={styles.MenuLink} href="#" aria-label='Menu'>
                <HomeIcon />
            </a>
            <a className={styles.MenuLink} href="#" aria-label='historico'>
                <HistoryIcon />
            </a>
            <a className={styles.MenuLink} href="#"aria-label='configuracoes'>
                <SettingsIcon />
            </a>
            <a className={styles.MenuLink} href="#" aria-label='tema'>
                <SunIcon />
            </a>
        </div>
        )
}