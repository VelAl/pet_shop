import styles from './styles.module.css'
import { LoadingOutlined } from "@ant-design/icons"


export const Spiner = () => {
    return (
        <div className={styles.spiner}><LoadingOutlined  /></div>
    )
}