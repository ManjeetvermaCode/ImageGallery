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
    const [page,setPage]=useState(1)

    const [total_pages,setTotal_pages]=useState(0)
    const [notFound,setnotFound]=useState('')

    useEffect(()=>{
        fetchImageData()
    },[page])

    const fetchImageData=async()=>{
        try {
            const fetchData=async()=>{
                const {data}=await axios.get(`${URL}?query=${search}&page=${page}&per_page=${IMG_P_PAGE}&client_id=${import.meta.env.VITE_API_KEY}&width=${d}&height=${d}`)
                console.log(data)
                        setImages(data.results)
                    setTotal_pages(data.total_pages)                    
                }
            fetchData()
           } catch (error) {
            console.log('Unabled to fetch Data', error)
           }
    }

const submitHandler=(e)=>{
  e.preventDefault()
    setPage(1)
  fetchImageData()

}




    return(
        <>
        <div className="header">
            <h2 >Search Images</h2>
                <form className="search-form" onSubmit={submitHandler}>
                    <input value={search}  required className='input-field' type="text" placeholder='for example- Train' onChange={(e)=>setSearch(e.target.value)} />
                    <button type='submit'>Search</button>
                </form>

                <Gallery data={images}/>
        <div className="pag_control">
            {page>1 && <div className="btn" onClick={()=>setPage(page-1)} >Previous Page</div>}
            {page<total_pages && <div className="btn" onClick={()=>setPage(page+1)}>Next Page Page</div>}


        </div>
        </div>
        </>
    )
}