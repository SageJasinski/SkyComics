import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import App from "./App";
import Reader from "./Reader/Reader";

function Paths(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <App/>
                }/>

                <Route path="/reader" element={
                    <Reader/>
                }/>
                
            </Routes>
        </BrowserRouter>
    )
}
export default Paths;