import React from 'react';
import NewsList from '.././News-LIst';
import NewsType from '../Components/news-type';
import Header from '../Components/Header';

class TechnologyNews extends React.Component {
    constructor() {
        super()
        this.state = {
            information: [],
        }
    }

    componentDidMount() {
        fetch('https://gnews.io/api/v4/top-headlines?token=148d726e8391f4c132bab787e5675e95&lang=en&topic=technology')
            .then(response => { return response.json() })
            .then(data => this.setState({ information: data.articles }))
    }

    render() {
        return (
            <>
                <div>
                    <Header />
                    <NewsType type='tech news</>!' />
                    <NewsList articles={this.state.information} />
                </div>
            </>
        )
    }
}

export default TechnologyNews;