import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import { Component } from 'react';
import SignIn from './components/Signin/SignIn';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Register from './components/Register/Register';
// import Particles from 'react-particles-js';

// const particlesOption = {
//    partcles:{
//     line_linked:{
//       shadow:{
//         enable: true,
//         color: "#3CA9D1",
//         blur: 5
//       }
//     }
//    }
// }
 
class App extends Component {
  constructor(){
    super();
    this.state = {
      input: '',
      imageUrl: '',
      route: 'signin',
      isSignedIn: false
    }
  }

  onInputChange = (event) =>{
    this.setState({input: event.target.value })
  }

  onButtonSubmit = () =>{
    this.setState({imageUrl: this.state.input})
  }

  onRouteChange = (route) =>{
    if (route === 'signout'){
      this.setState({ isSignedIn: false})
    }else if ( route === 'home'){
      this.setState({ isSignedIn: true})
    }
    this.setState({ route: route})
  }
  render(){
  return (
    <div className="App">
    {/* <Particles params={particlesOption}/> */}
      <Navigation isSignedIn={ this.state.isSignedIn } onRouteChange={ this.onRouteChange }/>
      { this.state.route === 'home'?
        <div>
      <Logo />
      <Rank />
      <ImageLinkForm 
      onInputChange={this.onInputChange} 
      onButtonSubmit={ this.onButtonSubmit} />
      <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
        :
        (
          this.state.route === 'signin'
          ? <SignIn onRouteChange={this.onRouteChange}/>
          : <Register onRouteChange={this.onRouteChange}/>
        )
       
      
      } 
    </div>
  );
}}

export default App;
