import Card from './Card'

const PorkerCards = ({hogs})=>{
    return(
        <div>
            {hogs.map((hog)=> <Card key={hog.name} hog={hog}/>)}
        </div>
    )
}

export default PorkerCards