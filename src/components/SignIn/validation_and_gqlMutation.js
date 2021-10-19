

export const validation_and_gqlMutation = (username, password, setWorning, signIn)=> {
    if(!username){
        setWorning(prev=>({...prev, username: 'name must be provided... '}))
        return
    } 
    if(username.length < 2){
        setWorning(prev=>({...prev, username: 'name must be at least 2 characters long... '}))
        return
    } 
    if(!password){
        setWorning(prev=>({...prev, password: 'password must be provided... '}))
        return
    } 
    if(password.length < 6){
        setWorning(prev=>({...prev, password: 'password must be at least 6 characters long... '}))
        return
    } 
   
    signIn(
        {variables: {username, password} }
    )  
}