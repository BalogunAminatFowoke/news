 onRouteChange = (email, password, phone) => {
            if(email.event.target.value === 'aminatbalogun00@gmail.com' 
                    && password.event.target.value ==='Amina123' 
                    && phone.event.target.value==='888') {
                        console.log('dncjd')
                    } else
                        { console.log('nnxndsj') }
    }

     onRouteChange = () => {
            this.setState({ route: WorldNews })
    }

    = ({ routeChange, type, required, label, ...otherProps }) =>

     === 'aminatbalogun@gmail.com' && 'Amina123' && '000' ? 
        this.onRouteChange : alert ('invalid');
