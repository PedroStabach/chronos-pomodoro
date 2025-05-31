import styles from './container.module.css'

type Containerprops = {
    children: React.ReactNode;
}

export function Container({children}: Containerprops) {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                {children}
            </div>
        </div>
    )
}