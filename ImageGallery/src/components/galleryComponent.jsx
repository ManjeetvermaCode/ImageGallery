
import '../styles/gallery-styles.css'

export default function Gallery({data}) {
  
    return(
<>
<div className="con">
            {
                data.map((d)=>(
                    <div key={d.id} className='indi'>
                        <img className="indi_img" key={d.id} src={d.urls.small} alt={d.alt_description}/>
                        <div className='desc'>
                            <p>Clicked by- {d.user.name}</p>
                            <p>Description - {d.alt_description}</p>
                            <a href={d.links.html} target='_blank'>Open on Upsplash</a>
                        </div>
                    </div>
                ))
            }
</div>

        
</>
        
    )
}