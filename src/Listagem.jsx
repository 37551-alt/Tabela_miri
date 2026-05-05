import { useState } from "react";
import './Listagem.css'

export default function Listagem (){

    return (
        <main>
            <h1>Tabela de Carros</h1>
        <table>
            <tr>
                <td>Modelo</td>
                <td>Marca</td>
                <td>Ano</td>
                <td>Editar</td>
                <td>Excluir</td>
            </tr>

            <tr>
                <td>Corsa</td>
                <td>Chevrolet</td>
                <td>2001</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Uno Escada Dupla</td>
                <td>Fiat</td>
                <td>2000</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>

            <tr>
                <td>Yangwang U9 Xtreme</td>
                <td>BYD</td>
                <td>2026</td>
                <td>📝</td>
                <td>🗑️</td>
            </tr>
        </table>
    </main>
    )
}