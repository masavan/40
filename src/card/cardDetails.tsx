import type {Film} from "../interfas.tsx";

export interface ICardDetails {
    item : Film
}

export const CardDetails = ({item} : ICardDetails) => {
    const {Title, Year, Type, Poster} = item;

    const mapStyle: Record<string, string> = {
        'movie': '#b9dd16',
        'series': '#aa2d2d'
    }
    const style = {
        backgroundColor: mapStyle[Type] || '#fff',
    }


    return (
        <div className='film'>
            <img src={Poster} />
            <h3 className="h3">{Title}</h3>
            <p className="p">{Year}</p>
            <p className="p" style={style} >{Type}</p>
        </div>
    )

}