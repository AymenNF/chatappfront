import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Pages/App'
import Page1 from './Pages/Page1'
import  Page2 from './Pages/Page2'
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Signin from './componenets/Signin';
import Login from './componenets/Login';
import Messages from './ComponenetsMessages/Messages';
import withAuth from './componenets/WithAuth';
import Test from './componenets/Test';
import StreamPage from "./componenets2/StreamPage"
import RoomPage from "./componenets2/RoomPage"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/profile" element={withAuth(App) } />
            <Route path="/users" element={withAuth(Page1) } />
            {/* <Route path="/page2" element={withAuth(Page2) } /> */}
            <Route path="/" element={withAuth(Page2)} />
            <Route path="/signin" element={<Signin />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/room" element={<StreamPage />} />
              <Route path="/room/:roomID" element={<RoomPage />} />
            <Route path="*" element={withAuth(Messages)} />
            {localStorage.getItem('connectedUser') && <Route path="*" element={<Navigate to="/" />} />}

            <Route path="/test" element={<Test />} />

        </Routes>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
