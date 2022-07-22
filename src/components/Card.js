import {useState} from 'react'

const Card = ({ hog }) => {
    const [isHidden,setIsHidden]= useState(true)

    const handleImgClick = ()=>{
        setIsHidden(!isHidden)
    }

    return (
        <div className="pigTile">
            <div className="image">
                <img src={hog.image} alt={hog.name} onClick={handleImgClick}/>
            </div>
            <div className="content">
                <h3 className="header">{hog.name}</h3>
            </div>
            <div className={`extra content`+(isHidden ? ' hidden': '')}>
                <p className='highest-medal'>
                    Highest Medal achieved: {hog['highest medal achieved']}
                </p>
                <div className="meta">
                    <p className="greased">{hog.greased ? 'Greased' : 'Not Greased'}</p>
                    <p className='weight'>{hog.weight} Pounds</p>
                </div>
                <div className="description">
                    Specialty: {hog.specialty}
                </div>
            </div>
        </div>
    )
}

export default Card