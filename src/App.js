import {useState} from 'react';
import './App.css';
import Header from './Components/Header';
import Slider from './Components/Slider';
import Registration from './Components/Registration';
import Login from './Components/SignInForm';
import { Route, Switch } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import Profile from './Profile.comp';
import { connect } from 'react-redux';


function App(props) {
  const [count, setCount] = useState(0);
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState();
  const history = useHistory();
   let local = localStorage.getItem('user' )
   local = JSON.parse(local)
   props.dispatch({
    type: "LOGIN", 
    payload: user
  });
  // console.log(user);
  // isLogin ? history.push('/') : history.push('/registration')
  return (
       <Switch>
    <div className="App">
    <Header count= {count} />
      <Route  path = '/' exact>
      <button onClick = {()=>setCount(count + 1)} className = "btn btn-secondary btn-sm m-2"> Add item </button>
      <button className = "btn btn-primary btn-sm" onClick =
       {count < 1 ? null : ()=> setCount(count - 1)}> Remove item  </button>
       {/* <Route path = '/home'> */}
       <Slider/>
       </Route>
        {/* </Route> */}
       <Route  path = '/login'>
       <Login history = {history}/>
       </Route>
       <Route  path = '/register'>
       <Registration/>
       </Route>
      {props.isLogin  &&
       <Route   path = '/profile'>
       <Profile user = {props.userDetails} />
       </Route>
       }
    </div>
    </Switch>
   
  );
 
  
  
}

export default connect((state)=>  {return{isLogin: state.isLogin, userDetails: state.userDetails}})(App);
