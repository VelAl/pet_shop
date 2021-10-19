import styles from './style.module.css'
import React, { useEffect, useState } from 'react'
import { useLazyQuery } from '@apollo/client'
import { GET_CURRENT_USER_HISTORY } from '../../client/queries'
import { getDateFromStamp } from '../../functions/getDateFromStamp'
import { HistoryItem } from '../HistoryItem'
import { Spiner } from '../Spiner'
import Pet from '../petsPage/Pet'


export const CurrentUserInfoVisualisation = ({me})=> {

    const [myData, setMyData] = useState({showHistory: false, showMyPets: false})
    const {showHistory, showMyPets} = myData

    const [loadHistory, {loading, error, data}] = useLazyQuery(GET_CURRENT_USER_HISTORY)



    useEffect(()=>{
        return ()=>{setMyData({showHistory: false, showMyPets: false})}
    },[])

    return (
        <>
            <div>{`${me.name} ${me.username}`}</div>
            <div>на сайте с {getDateFromStamp(me.dateCreated)}</div>


            <div className={styles.btnHolder}>
                {!showHistory &&
                    <button
                     onClick={()=>{
                         setMyData({showHistory: true, showMyPets: false})
                         loadHistory()
                    }}
                    >my history</button>
                }
                <div className={styles.grow}></div>
                {!showMyPets && <button
                 onClick={()=>{
                    setMyData({showHistory: false ,showMyPets: true})
                    
                 }}
                >my current pets</button>}
            </div>
            
            {showHistory ? <h3>my history:</h3> : showMyPets ? <h3>my current pets:</h3> : null}

            {showHistory && 
                <div>
                    {
                        loading ? 
                            <Spiner />
                        : error ? 
                            <div>{error}</div>
                        : data && data.me? 
                            data.me.checkoutHistory.map((pet, i)=>
                                <HistoryItem
                                    key={i}
                                    pet={pet}
                                />
                            )
                        : 'something went wrong...'
                    }
                </div>
            }

            {showMyPets &&
                <>
                    {(!me.currentPets.length ) ? 'no current pets' :

                    <div>

                        {me.currentPets.map(pet => 
                            <Pet
                                key={pet.id}
                                pet={pet}
                            />
                        )}                    
                    </div>}
                </>
            }
        </>
    )
}