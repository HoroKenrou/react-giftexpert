
import { GiftItem } from "./giftIten"
import { useFetchGifs } from "../hooks/useFetchGifs"

export const GiftGrid = ({category,onDeleteCategory})=>{

    const {images, isLoading} = useFetchGifs(category);
    const handleRemove = ()=>{
        onDeleteCategory(category);
    }

    return (

        <>
            <div className="container">
                <h3 className="heading">{category}</h3> 
                <button onClick={handleRemove}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>
                
            {
                isLoading && ( <h2>Cargando....</h2> )
            }
            <div className="card-grid">
                {
                    images.map(img => (
                        <GiftItem 
                            key={img.id}
                            {...img}
                        />
                    ))
                }

            </div>
        </>
    )


}