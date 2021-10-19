import { useMutation } from "@apollo/client/react/hooks";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../App";
import { SIGN_IN } from "../../client/mutations";
import { useHistoryPush } from "../../functions/useHistoryPush";


export const useSignIn =()=>{
    const [,setIsAuth] = useContext(AuthContext)
    const historyPush = useHistoryPush('/')

    const [signIn, { data, loading, error }] = useMutation(SIGN_IN, {
        errorPolicy: 'all'
    });

    const token = data? data.logIn.token : null

    useEffect(()=>{
        if(token) {
            setIsAuth(true)
            localStorage.setItem('petStoreToken', token)
            historyPush()
        }
    }, [data])

    return ({signIn, loading, error })
}
