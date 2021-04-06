import React from 'react';
import { Link } from 'react-router-dom';
import ButtonIcon from '../../core/components/ButtonIcon';
import './styles.scss';

const Home = () => (
    <div className="home-container">
        <h1 className="text-title">
            Desafio do Capítulo 3, <br />Bootcamp DevSuperior
        </h1>
        <div className="text">
            <p>Bem-vindos ao desafio do capítulo 3 do Bootcamp DevSuperior.</p>
            <p>Favor observar as instruções passadas no capítulo sobre a <br />elaboração deste projeto. </p>
            <p>Este design foi adaptado a partir de Ant Design System for Figma, de <br />Mateusz Wierzbicki:
            antforfigma@gmail.com</p>
        </div>
        <Link to="/search">
            <ButtonIcon text="Começar"></ButtonIcon>
        </Link>
    </div>
);

export default Home;