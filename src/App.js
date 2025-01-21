import React from 'react';
import logo from './logo.svg';
import './App.css';
import {DraftArea} from './DraftArea';
import {Route, Routes} from 'react-router-dom';
import {MainArea} from './MainArea';
import {Box, Button} from "@mui/material";
import { Link } from "react-router";
import {Store} from './Store';

function App() {
    return (
        <div className="App">
            <header className="">
                <img src={logo} className="App-logo" alt="logo"/>
                <Box component={"p"}>Material here (MUI) - with MUI you can use prepared design items</Box>
                <div>

                    <a
                        className="App-link"
                        href="https://mui.com/material-ui/react-text-field/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn MUI
                    </a>
                </div>
                <div>

                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </div>
                <div>

                    <Link to="/main">Main Area</Link>

                </div>
                <div>

                    <Link to="/draft">Draft Area</Link>

                </div>
                <div>

                    <Link to="/store">Store</Link>

                </div>

                

                <Button variant={"contained"}>Material button</Button>
                {/* <p>
          Edit  <code>src/App.js</code> and save to reload.
        </p> */}
                {/* <DraftArea/>
        <MyComponent/> */}


                {/* Define your routes here */}
                <h1>Below is the location of the route screen</h1>
                <Routes>
                    {/* <Route path="/" element={<App />} /> */}
                    <Route path="/main" element={<MainArea/>}/>
                    <Route path="/draft" element={<DraftArea/>}/>
                    <Route path="/store" element={<Store/>}/>

                </Routes>

            </header>
        </div>
    );
}

export default App;
