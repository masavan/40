import { useState, useEffect} from 'react'
import type {Film} from "./interfas.tsx";
import {Card, CardDetails} from "./card";
import './App.css';
import {SerchFormUncontrold} from "./form";


function App() {
    const [films, setFilms] = useState<Film[]>([])
    const [film, setFilm] = useState<Film>({} as Film)
    const [filmName, setFilmName] = useState<string>('')

    const [inputValue, setInputValue] = useState<string>('')




    useEffect(() => {
        const films = async () => {
            try {
                if (inputValue){
                    const response = await fetch(`https://www.omdbapi.com/?apikey=a435af1f&s=${inputValue}`);
                    const data = await response.json()
                    setFilms(data.Search)
                }else {
                    const response = await fetch('https://www.omdbapi.com/?apikey=a435af1f&s=One All');
                    const data = await response.json()
                    setFilms(data.Search)
                }

            } catch (error) {
                console.error('Помилка отримання даних:', error);
            }}
        films()
    }, [inputValue]);

    useEffect(() => {
        const films2 = async () => {
            try {
                if(filmName){
                    const response = await fetch(`https://www.omdbapi.com/?apikey=a435af1f&s=${filmName}`);
                    const data = await response.json()
                    setFilm(data.Search[0])
                }
            } catch (error) {
                console.error('Помилка отримання даних:', error);
            }}
        films2();
    }, [filmName]);

//     if(!films.length) {
//         return(
//             <div>No films found</div>
//         )
//     }
// }
    const CardFilmDetails = <CardDetails item={film}></CardDetails>;

    const filmsComponents = films.map(film  => {
        return (


            <Card itemY={film} itemT={film} key={film.imdbID}>
                <button onClick={() => setFilmName(film.Title)}>Open</button>
            </Card>
        )
    })





    // @ts-ignore
    return (
        <>

            <SerchFormUncontrold onSearch={setInputValue}/>

            {filmName && CardFilmDetails}
            <div className="conteiner">
                {filmsComponents}
            </div>


        </>
    )
}

export default App
