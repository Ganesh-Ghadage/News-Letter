import axios from "axios"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"

export const reactCustomQuery = (urlPath, set, query="") => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        const controller = new AbortController()

        ;(async ()=>{
            try {
                setError(null)
                setLoading(true)
                const responce = await axios.get(urlPath)
                //console.log(responce.data.articles)
                dispatch(set(responce.data.articles)) 
                setLoading(false)
            } catch (error) {
                if(axios.isCancel(error)){
                    console.log("Error:", error)
                }
                setError(error.message)
                setLoading(false)
            }
            
        })()

        //clea up
        return(() => {
            controller.abort()
        })

    }, [query])

    return [ error, loading]
}