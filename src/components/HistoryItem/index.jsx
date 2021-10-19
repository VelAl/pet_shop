import styles from './style.module.css'
import { getDateFromStamp } from "../../functions/getDateFromStamp"



export const HistoryItem =({pet})=>{


    return (
        
        <div className={styles.wrapper}>
            <div>
                <span className={styles.petLink}>{pet.pet.name}</span>
                - {pet.pet.__typename }
            </div>
            <div className={styles.grow}></div>
            <div className={styles.date}><b>взял: </b>{getDateFromStamp(pet.checkOutDate)}</div>   
            <div className={styles.date}><b>вернул: </b>{getDateFromStamp(pet.checkInDate)}</div>    
        </div>
    )
}