import { useHistory } from "react-router-dom"



export const useHistoryPush =(history_path)=> {
    const history = useHistory()
    
    return  ()=> {
        history.push(history_path)
    }
}