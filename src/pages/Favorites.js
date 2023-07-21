import React from "react";
import { useDispatch, useSelector } from "react-redux";

export const Favorites = () => {
    const dispatch = useDispatch();
    const { celebrities_List } = useSelector(state => state.cel);
    return (
        <>
            <div card>Celebridades Favoritas</div>
            <table class="table table-success table-striped-columns">
                <thead>
                    <tr >
                        <th scope='col'> ID </th>
                        <th scope='col'> Nombre </th>
                        <th scope='col'> Nacionalidad </th>
                        <th scope='col'> Edad </th>
                    </tr>
                </thead>
                <tbody>
                    {celebrities_List.map(c => {
                        return (
                            <tr>
                                <td scope='row'>{c.birthday}</td>
                                <td scope='row'>{c.name}</td>
                                <td scope='row'>{c.nationality}</td>
                                <td scope='row'>{c.age}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}