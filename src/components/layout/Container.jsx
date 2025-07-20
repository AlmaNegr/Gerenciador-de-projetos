import { Children } from 'react'    
import styles from './Container.module.css'

function Container({ children }) {

    return(
        <div className={styles.container}>{children}</div>
    )
}