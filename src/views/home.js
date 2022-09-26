import React, { useEffect, useState } from 'react';
import ComicCard from '../components/ComicCard';
import { API_KEY, API_URL, HASH } from '../config';
import { getFetch } from '../libs/functions';

const Home = () => {

    const [comics, setComics] = useState(null);

    useEffect(() => {
        getComics();
    }, [])

    const getComics = async () => {
        try {
            const response = await getFetch(`${API_URL}/comics?ts=1&apikey=${API_KEY}&hash=${HASH}`);
            console.log(response)
            const { data } = await response.json();
            setComics(data);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">
                        Marvel API
                    </h1>
                </div>
            </div>
            <div className="row">
                {
                    !!comics &&
                    comics.results.length > 0 &&
                    comics.results.map(({ id, title, thumbnail }) => (
                        <div className="col-md-6 col-sm-6 col-12" key={id} >
                            <ComicCard id={id} title={title} thumbnail={thumbnail} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Home;