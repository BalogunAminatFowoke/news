import React from 'react';
import NewsList from '../News-LIst';
import NewsType from '../Components/news-type';
import Header from '../Components/Header';
import SignIn from '../Components/SignIn/signin';
import { data } from '../login-details';


class WorldNews extends React.Component {
    constructor() {
        super()
        this.state = {
            information: [],
            route: SignIn,
            email:  ' ',
            password: ' ',
            phone: ' ',
        }
    }


handleOnChange  = (event)=> {
    const target = event.target;
    const name = target.name;
    this.setState ({[name]: event.target.name})  
    
}

handleSubmit =(event) =>{
    event.preventDefault();
}

    onRouteChange = () => {
            this.setState({ route: WorldNews })
    }

    componentDidMount() {
        fetch('https://gnews.io/api/v4/top-headlines?token=148d726e8391f4c132bab787e5675e95&lang=en&topic=world')
            .then(response => { return response.json(); })
            .then(data => (this.setState({ information: data.articles })))


    }
    render() {
        return (
            <>
                <div>
                    {this.state.route === SignIn ? <SignIn
                        routeChange={this.onRouteChange}
                        onChange={this.handleOnChange}
                        onSubmit = {this.handleSubmit}
                    />
                        : <div>
                            <Header />
                            <NewsType type='world news!' />
                            <NewsList articles={this.state.information} />

                        </div>
                    }

                </div>
            </>
        )
    }
}

export default WorldNews;