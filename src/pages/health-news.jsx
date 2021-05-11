import React from 'react';
import NewsType from '../Components/news-type';
import NewsList from '.././News-LIst';
import Header from '../Components/Header';

class HealthNews extends React.Component {
    constructor() {
        super()
        this.state = {
            information: [],
        }
    }

    componentDidMount() {
        fetch('https://gnews.io/api/v4/top-headlines?token=148d726e8391f4c132bab787e5675e95&lang=en&topic=health')
            .then(response => { return response.json() })
            .then(data => this.setState({ information: data.articles }))
    }
    render() {
        return (
            <>
                <div>
                    <Header />
                    <NewsType type='check out the latest health news we have for you' />
                    <NewsList articles={this.state.information} />
                </div>
            </>
        )
    }

}

export default HealthNews;