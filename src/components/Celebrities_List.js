import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCel, setCel } from '../reducers/slices/celebritySlices';
import { Link } from 'react-router-dom';
import "./celebrities.css"

const Celebrities_List = ({ celebrities }) => {
  const dispatch = useDispatch();
  const { celebrities_List } = useSelector(state => state.cel);

  function handleAdd(celid) {
    const celebrity = celebrities.find(c => c.birthday === celid);
    if (celebrities_List.find(c => c.birthday === celid)) {
      dispatch(removeCel(celid));
    } else {
      dispatch(setCel(celebrity));
    }
    console.log(celebrity);
  }

  return ( 
    <div>

      <section id="seccion_celebridades">

        {celebrities.map(c => {

          return (

            <div class="card" id="divCard">

              < div class="card-body">

                <h2 class="card-title" id="nombre_tarjeta">Nombre: {c.name}</h2>

                <ul class="list-group" id="lista_detalles">

                  <li class="list-group-item" >Edad: {c.age}</li>

                  <li class="list-group-item" >Nacionalidad: {c.nationality}</li>

                  <li class="list-group-item" >Estatura: {c.height}</li>

                  <li class="list-group-item" >Ocupaciones: {c.occupation}</li>

                  {/* <div>{c.occupation}</div> */}

                </ul><br></br>

                <button type="button" class="btn btn-outline-success" id="boton_favoritos" onClick={() => handleAdd(c.birthday)}>

                  Agregar a Favoritas</button>

              </div>

            </div>




          )

        })}

      </section>

    </div>
    // <div className="container">
    // <div className="title">Celebrities List
    //    <div> <section>
    //     {celebrities.map(c => (
    //       <div class="card text-bg-success mb-3" style="max-width: 18rem;">
    //         <div class="card-header"> <h4>{c.name}</h4></div>
    //         <div class="card-body">
    //           <h5 class="card-title">{c.birthday}</h5>
    //           {/* <div className="list-item" key={c.birthday}> */}
    //           <p class="card-text"><h2>{c.age}</h2></p>
    //           <p class="card-text">{c.occupation}</p>

    //           <button type="button" className="btn btn-outline-dark" onClick={() => handleAdd(c.birthday)}>
    //             Agregar a Celebridades Favoritas
    //           </button>
    //         </div>
    //       </div>
    //     ))}
    //   {/* </div> */}
    //   </section>
    //  </div>
    // </div>
  );
};
/*  <div class="card text-bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Success card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div> */

export default Celebrities_List;