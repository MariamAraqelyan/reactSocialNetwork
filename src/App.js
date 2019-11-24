import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/Navbar";
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";

const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <NavBar/>
                <div className='app-wrapper-content'>
                    {/*<Route path='/dialogs' component={Dialogs}/>*/}
                    {/*<Route path='/profile' component={Profile}/>*/}

                    <Route path='/dialogs' render={() => <Dialogs state ={props.state.dialogsPage} />}/>
                    <Route path='/profile' render={() => <Profile addPost={props.addPost} updateNewPostText={props.updateNewPostText} profilePage={props.state.profilePage}/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
