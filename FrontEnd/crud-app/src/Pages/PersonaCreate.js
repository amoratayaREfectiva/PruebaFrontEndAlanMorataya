import React, { useState, useEffect } from 'react';
import {createPersona } from '../Services/ApiService';

const PersonaCreate = ({  onChangePropValue, onChangeResponse }) => {
    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);
    useEffect(() => {

        setShow(true)

    }, []);

    const handleClose = () => {
        onChangePropValue(false);
    }



    const handleSubmit = async (user, e) => {
        e.preventDefault();
        try {
           
            user["status"]=true
            createPersona(user)
                .then(data => {
                    
                    setUser(data.usuarioInsertado)
                    setShow(false)
                    onChangePropValue(false)
                    onChangeResponse(data.usuarioInsertado)
                }

                )
                .catch(error =>
                    {
                        console.error(error)
                        onChangeResponse(null)
                    }
                    );
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setUser(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <div>

            <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel">Crear Usuario</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={e => handleClose()} ></button>
                        </div>

                        <div className="modal-body">
                            <form onSubmit={e=>handleSubmit(user,e)}>
                                <div style={{ marginBottom: 15 + 'px' }} className="row g-3">



                                    <div className="col">
                                        <label>
                                            <b> Nombre:</b>

                                            <input required autoComplete="off" className="form-control" type="text" name="nombre" value={user.nombre} onChange={handleChange} />
                                        </label>
                                    </div>


                                    <div className="col">
                                        <label>
                                            <b> Apellido:</b>

                                            <input required autoComplete="off" className="form-control" type="text" name="apellido" value={user.apellido} onChange={handleChange} />
                                        </label>
                                    </div>



                                </div>

                                <div style={{ marginBottom: 15 + 'px' }} className='row g-3'>
                                    <div className="col">
                                        <label>
                                            <b>Correo:</b>
                                            <input required autoComplete="off" className="form-control" type="email" name="correo" value={user.correo} onChange={handleChange} />
                                        </label>
                                    </div>
                                    <div className='col'>
                                        <label style={{ width: 100 + '%' }}>
                                            <b>Fecha de Nacimiento:</b>

                                            <input required className="form-control" type="date" name="fechaNacimiento" value={user.fechaNacimiento?.split("T")[0]} onChange={handleChange} />
                                        </label>
                                    </div>
                                </div>


                                < div style={{ marginBottom: 15 + 'px' }} className="row g-3">

                                    <div className="col">
                                        <label>
                                            <b>Teléfono:</b>

                                            <input required autoComplete="off" className="form-control" type="text" name="telefono" value={user.telefono} onChange={handleChange} />
                                        </label>
                                    </div>

                                    <div className="col">
                                        <label>
                                            <b>Dirección:</b>

                                            <input required autoComplete="off" className="form-control" type="text" name="direccion" value={user.direccion} onChange={handleChange} />
                                        </label>
                                    </div>

                                </div>



                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={e => handleClose()} >Cerrar</button>
                                    <button  type="submit" className="btn btn-primary">Guardar</button>
                                </div>

                                {/* <button className="form-control">Submit</button> */}
                            </form>

                        </div>




                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonaCreate;