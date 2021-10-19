import React from 'react';
import styles from './styles.module.css'
import { useMutation, useQuery } from "@apollo/client";
import { useParams } from "react-router"
import { CloseOutlined } from '@ant-design/icons';
import { Drawing } from './Drawing';
import { CHECK_IN, CHECK_OUT_PET } from '../../../client/mutations';
import { GET_PET_BY_ID } from "../../../client/queries";
import { useHistory } from 'react-router-dom';

export const ComplitePetInfoCard = () => {
    const history = useHistory()
    const {id} =  useParams()
    const { loading, error, data } = useQuery(GET_PET_BY_ID, {variables:{ id: id}});
    

    
    const [checkOut, {loading: loadingCheckOut}] = useMutation(CHECK_OUT_PET,{
        refetchQueries: [GET_PET_BY_ID],
        variables:{
            id
        } ,
        onError: er => console.log(er.message)
    })


    const [checkIn, {loading: loadingCheckIn}] = useMutation(CHECK_IN,{
        refetchQueries: [GET_PET_BY_ID],
        variables:{
            id
        } ,
        onError: er => console.log(er.message)
    })
    

    return(
        <div className={styles.wrapper}>
            
            <div className={styles.close_wrapper}>
                <div className={styles.close} onClick={()=>history.goBack()}>
                    <CloseOutlined />
                </div>
            </div>

            {
                loading ? 
                    <div>loading...</div>
                :
                error? 
                    <div>{error.message}</div>
                : 
                <>
                    <Drawing
                        pet={data.petById}
                    />
                    <div className={styles.status}>
                        {   
                            loadingCheckOut ||  loadingCheckIn  ?
                                 <div>checking status...</div> :
                            data.me && data.me.currentPets.some(el=>el.id===id) ? 
                                (<button onClick={()=>checkIn()}>check in</button>):
                            data.allCheckedOutPets.some(el=>el.id === id)?
                                "checked out":
                            data.me ?
                                <button onClick={()=>checkOut()}>"check out"</button> :
                            "you heve to sign in to ckeck  this pet out"
                        }
                    </div>
                </>
            }
        </div>
    )
}

