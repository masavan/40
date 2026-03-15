import type {Film} from "../interfas.tsx";
import './style.css'

export interface CardFilm {
    itemT: Pick<Film, 'Title' >;
    itemY: Pick<Film, 'Year'> ;
    children?: React.ReactNode;
}


export const Card = ({itemT, itemY, children}: CardFilm) => {
    const {Title} = itemT;
    const {Year} = itemY;

    return (
        <>
            <div className="card">
                <h3>{Title}</h3>
                <p>{Year}</p>
                {children}
            </div>
        </>
    )
}
