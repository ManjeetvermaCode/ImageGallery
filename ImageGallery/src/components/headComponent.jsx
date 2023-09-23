import { useState,useEffect} from "react"
import axios from 'axios'

//url's
const URL='https://api.unsplash.com/search/photos'
const IMG_P_PAGE=20

export default function MainComponent() {
    const [search,setSearch]=useState('')


   

    const fetchImageData=async()=>{
        try {
            const fetchData=async()=>{
                const result=await axios.get(`${URL}?query=${search}&page=1&per_page=${IMG_P_PAGE}&client_id=${import.meta.env.VITE_API_KEY}`)
                console.log(result.data)
            }
            fetchData()
           } catch (error) {
            console.log('Unabled to fetch Data', error)
           }
    }

const submitHandler=(e)=>{
  e.preventDefault()
  fetchImageData()
}

const keyWordHandler=(keyword)=>{
    setSearch(keyword)
    fetchData()
}


    return(
        <>
        <div className="header">
            <h2 >Search Image</h2>
                <form className="search-form" onSubmit={submitHandler}>
                    <input value={search}  required className='input-field' type="text" placeholder='for example- Train' onChange={(e)=>setSearch(e.target.value)} />
                    <button type='submit'>Submit</button>
                </form>

           <div className="keywords">
                <div value='House' onClick={()=>keyWordHandler('House')}>House</div>
                <div onClick={()=>keyWordHandler('Puppies')}>Puppies</div>
                <div onClick={()=>keyWordHandler('Cute Babies')}>Cute Babies</div>
                <div onClick={()=>keyWordHandler('Dog')}>Dog</div>
                <div onClick={()=>keyWordHandler('Coding')}>Coding</div>
           </div>
        </div>
        </>
    )
}