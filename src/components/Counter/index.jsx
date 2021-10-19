import styles from './styles.module.css'
import { useQuery } from '@apollo/client';
import { GET_AMOUNTS } from '../../client/queries';


export const Counter =()=> {
    const { loading, error, data } = useQuery(GET_AMOUNTS);

    if(loading) return(<div>loading...</div>)
    if(error) return(<div>{error.message}</div>)
    return (
        <div className={styles.wrapper}>
            <div>total amount of pets: {data.totalPets}</div>
            <div>available pets {data.availablePets}</div>
            <div>checked out pets : {data.checkedOutPets}</div>
        </div>
    )
}