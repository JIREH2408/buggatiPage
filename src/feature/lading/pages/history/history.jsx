import React from "react";
import { Navbar } from "../../components/navbar";

export const History = () => {
    return (
        <>
        <Navbar />
        <div className="container pt-5">
            <h1>Historia de la Fórmula 1</h1>
            <p>
                La Fórmula 1, conocida como F1, es la categoría más alta del automovilismo internacional. Desde su inicio en 1950, ha evolucionado para convertirse en un espectáculo global que combina velocidad, tecnología y estrategia.
            </p>
            <p>
                A lo largo de las décadas, la F1 ha visto a pilotos legendarios y equipos icónicos competir en circuitos de todo el mundo, estableciendo récords y creando historias memorables.
            </p>
        </div>
        </>
    );
}