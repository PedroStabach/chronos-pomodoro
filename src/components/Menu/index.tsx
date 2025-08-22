import { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { HistoryIcon, HomeIcon, MoonIcon, SettingsIcon, SunIcon } from 'lucide-react';

type AvaliableThemes = 'dark' | 'light'
export function Menu() {
    const [theme, setTheme] = useState<AvaliableThemes>(() => {
        const storageTheme = 
        (localStorage.getItem('theme') as AvaliableThemes) || 'dark';
        return storageTheme;
    });

    const nextThemeIcon = {
        dark: <SunIcon />,
        light: <MoonIcon />
    };

    function handleThemeChange(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        event.preventDefault();
        setTheme(prevTheme => {
            const nextTheme = prevTheme === 'dark' ? 'light' : 'dark';
            return nextTheme;
        })
    };
    
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme])
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
            <a className={styles.MenuLink} href="#" aria-label='tema' 
            onClick={handleThemeChange}>
                {nextThemeIcon[theme]}
            </a>
        </div>
        )
}