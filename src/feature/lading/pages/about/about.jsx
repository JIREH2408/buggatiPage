import React from "react";
import { Navbar } from "../../components/navbar";

export const About = () => {
    return (
        <>
        <Navbar />
        <div className="container pt-5">
            <h1>Quienes somos</h1>
            <p>
                Somos un equipo apasionado por la Fórmula 1, dedicados a brindar las últimas noticias, análisis y actualizaciones sobre el emocionante mundo de las carreras.
            </p>
            <p>
                Nuestro objetivo es ofrecer a los aficionados una plataforma donde puedan encontrar información detallada sobre pilotos, equipos, circuitos y mucho más.
            </p>
            </div>
        </>
    );
}