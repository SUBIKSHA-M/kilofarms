import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import './App.css';
import CreateProduct from './components/CreateProduct/CreateProduct';
import ViewProducts from './components/ViewProducts/ViewProducts';
const particlesOptions = {
  //customize this to your liking
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 800
      }
    }
  }
}

const initialState = {
  input: '',
  route: 'signin',
  isSignedIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  onInputChange = (event) => {
    console.log(100);
  }

  onButtonSubmit = () => {
    console.log(1000);
  }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    else if (route === 'viewproducts') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }
  render() {
    const { isSignedIn, route} = this.state;
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <Logo />
              <CreateProduct
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
            </div>
          : <Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>}
      </div>
    );
  }
}

export default App;
