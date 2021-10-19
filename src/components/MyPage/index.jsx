import styles from './style.module.css'
import { useQuery } from '@apollo/react-hooks';
import { GET_CURRENT_USER_DATA } from '../../client/queries'
import { CurrentUserInfoVisualisation } from './CurrentUserInfoVisualisation.jsx';
import React, { useContext} from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import { AuthContext } from '../../App';
import { useHistoryPush } from '../../functions/useHistoryPush';
import { client } from '../../client/init';


export const MyPage = ()=> {
    const historyForvard = useHistoryPush('/')
    const [,setisAuth] = useContext(AuthContext)
    const { loading, error, data } = useQuery(GET_CURRENT_USER_DATA,{
        fetchPolicy: 'network-only'
    })

    const logOut = ()=> {
        setisAuth(false)
        localStorage.removeItem('petStoreToken')
        localStorage.removeItem('pet_news')
        client.resetStore()
        historyForvard()
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.logOutDiv}>
                <div 
                 className={styles.logOutBtn}
                 onClick ={logOut}
                > log out <LogoutOutlined className={styles.logOutIcon}/></div>  
            </div> 

            {loading && <div>loading...</div>}
            {error && <div>{error.message}</div>}
            {(data && data.me )&& <CurrentUserInfoVisualisation me={data.me}/> }
        </div>
    )
}