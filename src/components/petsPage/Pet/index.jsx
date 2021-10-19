import React from "react"
import styles from "./style.module.css"
import {FullscreenOutlined} from '@ant-design/icons'
import { useHistoryPush } from "../../../functions/useHistoryPush"

const Pet = ({pet}) => {
    const push = useHistoryPush(`/allPets/${pet.id}`)

    return (
        <div className={styles.wrapper}>
            <div className={styles.info}>
                <div className={styles.petname}> <b>{pet.name}</b> </div> 
                <div className={styles.grow}></div>
                <div>weight: <b>{pet.weight}</b>  Lb</div>
                <div className={styles.type}>{pet.__typename}</div>
            </div>
            <img src={pet.photo.thumb} alt="" />
            <div
             onClick={push}
             className={styles.dilateBtn}
            > 
                <FullscreenOutlined />
            </div>
        </div>
    )
}

const MemoizedPet = React.memo(Pet);
export default MemoizedPet