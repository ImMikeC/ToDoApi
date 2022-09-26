import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ComicDetailCard from '../components/ComicDetailCard';
import { API_KEY, API_URL, HASH } from '../config';
import { getFetch } from '../libs/functions';

const Detail = () => {
    const navigate = useNavigate();
    const [comic, setComic] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        getComicsById(id);
    }, [])

    const getComicsById = async (id) => {
        try {
            const response = await getFetch(`${API_URL}/comics/${id}?ts=1&apikey=${API_KEY}&hash=${HASH}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            console.log(response)
            const { data } = await response.json();
            setComic(data.results[0]);

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="text-center">
                    {comic?.title} / {id}
                    </h1>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <ComicDetailCard title={comic?.title} thumbnail={comic?.thumbnail} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 text-center">
                    <button className="btn btn-warning btn-sm" onClick={() => navigate('/')}>
                        Regresar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Detail;