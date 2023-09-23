import { useState,useEffect} from "react"
import axios from 'axios'

//variables
const URL='https://api.unsplash.com/search/photos'
const IMG_P_PAGE=20
const d=200


//components
import Gallery from "./galleryComponent"

export default function MainComponent() {
    const [search,setSearch]=useState('')

    const [images,setImages]=useState([])
    const [total_pages,setTotal_pages]=useState(0)
   

    const fetchImageData=async()=>{
        try {
            const fetchData=async()=>{
                const {data}=await axios.get(`${URL}?query=${search||keyword}&page=1&per_page=${IMG_P_PAGE}&client_id=${import.meta.env.VITE_API_KEY}&width=${d}&height=${d}`)
                setImages(data.results)
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




    return(
        <>
        <div className="header">
            <h2 >Search Image</h2>
                <form className="search-form" onSubmit={submitHandler}>
                    <input value={search}  required className='input-field' type="text" placeholder='for example- Train' onChange={(e)=>setSearch(e.target.value)} />
                    <button type='submit'>Search</button>
                </form>

        <Gallery data={images}/>
        
        </div>
        </>
    )
}