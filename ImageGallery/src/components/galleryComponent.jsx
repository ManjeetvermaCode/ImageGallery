
import '../styles/gallery-styles.css'

export default function Gallery({data}) {
  
    return(

        
        <div className="con">
            {
                data.map((d)=>(
                    <img className="indi_img" key={d.id} src={d.urls.small} alt={d.alt_description}/>
                ))
            }
        </div>
    )
}