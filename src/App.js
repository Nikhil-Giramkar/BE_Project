import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import UserLayout from "./Layout/UserLayout";
import Login from "./Login";
import MainPage from "./p1";
import Register from "./Register";
function App() {
  return (
    
    <BrowserRouter>
     <Switch>
    <div className="App">
    
    <div className="AppLite"> 
               <Route exact path="/home"  render={()=>{
                 return (<MainPage/>);
               }} />
               
               <Route exact path="/login" render={()=>{
                 return (<Login/>);
               }} />
     
     <Route exact path="/register" render={()=>{
                 return (<Register/>);
               }} />
              
               <Route path="/disease" render={(props)=> <UserLayout {...props} /> } />

               <Route exact path="/">
    <Redirect to="/home" />
</Route>
                     {/* <Redirect exact from="/" to="/home" /> */}
               
    </div>
              
    </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
