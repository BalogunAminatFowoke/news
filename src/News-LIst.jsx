import React from 'react';
import Container from './Components/container';

const NewsList = ({ articles }) => {
    const NewsArray = articles.map((articles, i) => {
        return <Container
            key={i}
            title={articles.title}
            content={articles.content}
            time={articles.publishedAt}
            description={articles.description}
            image={articles.image}
            url={articles.url}

        />

    })
    return (
        <>
            {NewsArray}

        </>
    )
}

export default NewsList;
