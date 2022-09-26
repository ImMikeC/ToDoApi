import React from 'react';

const ComicDetailCard = ({ title, thumbnail }) => {
    return (
        <div className="card mb-3">
            <img src={thumbnail?.path+"."+thumbnail?.extension} className="card-img-top rounded-start" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </p>
                <p className="card-text">
                    <small className="text-muted">Last updated 3 mins ago</small>
                </p>
            </div>
        </div>
    )
}

ComicDetailCard.defaultProps = {
    title: 'Title',
    thumbnail: {
        path: 'prueba',
        extension: 'jpg'
    }
}

export default ComicDetailCard;