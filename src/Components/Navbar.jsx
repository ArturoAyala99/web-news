import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Deportes from './Deportes';
import Salud from './Salud';
import Inicio from './Inicio';
import Economia from './Economia';
import Entretenimiento from './Entretenimiento';
import Internacional from './Internacional';
import Tecnologia from './Tecnologia';
import Ciencia from './Ciencia';


export default function Navbar({news, api_fetch}){
    return(
        <>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <Link to="/" className='navbar-brand'>
                            <h3>Web News</h3>
                        </Link>

                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/salud" className="nav-link"><h6>Salud</h6></Link>
                                <Link to="/negocios" className="nav-link"><h6>Negocios</h6></Link>
                                <Link to="/entretenimiento" className="nav-link"><h6>Entretenimiento</h6></Link>
                                <Link to="/internacional" className="nav-link"><h6>Internacional</h6></Link>
                                <Link to="/tecnologia" className="nav-link"><h6>Tecnología</h6></Link>
                                <Link to="/ciencia" className="nav-link"><h6>Ciencia</h6></Link>
                            </div>
                        </div>
                    </div>
                </nav>

                <Routes>
                    <Route path='/' element={
                        <Inicio
                            news={news}
                            api_fetch={api_fetch}
                        />}
                    />
                    <Route path='/deportes' element={
                        <Deportes
                            news={news}
                            api_fetch={api_fetch}
                        /> }
                    />
                    <Route path='/salud' element={
                        <Salud
                            news={news}
                            api_fetch={api_fetch}
                        />}
                    />
                    <Route path='/negocios' element={
                        <Economia
                            news={news}
                            api_fetch={api_fetch}
                        />}
                    />
                    <Route path='/entretenimiento' element={
                        <Entretenimiento
                            news={news}
                            api_fetch={api_fetch}
                        />}
                    />
                    <Route path='/internacional' element={
                        <Internacional
                            news={news}
                            api_fetch={api_fetch}
                        />}
                    />
                    <Route path='/tecnologia' element={
                        <Tecnologia
                            news={news}
                            api_fetch={api_fetch}
                        />}
                    />
                    <Route path='/ciencia' element={
                        <Ciencia
                            news={news}
                            api_fetch={api_fetch}
                        />}
                    />
                </Routes>

            </Router>

        </>
    )
}