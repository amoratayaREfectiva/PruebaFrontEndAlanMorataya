import React, { useState, useEffect, useCallback } from 'react';
import { getPersonaId, updatePersona } from '../Services/ApiService';

const PersonaEdit = ({ id, onChangePropValue, onChangeResponse }) => {
    const [user, setUser] = useState({});
    const [show, setShow] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const data = await getPersonaId(id);
                setUser(data.usuario);
                setShow(true);
            } catch (err) {
                console.error(err);
                setError('Error al cargar los datos del usuario.');
            }
        };
        fetchUser();
    }, [id]);

    const handleClose = () => {
        setShow(false);
        onChangePropValue(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await updatePersona(user);
            setUser(data.usuarioActualizado);
            setShow(false);
            onChangePropValue(false);
            onChangeResponse(data.usuarioActualizado);
        } catch (err) {
            console.error(err);
            setError('Error al guardar los cambios. Inténtalo nuevamente.');
            onChangeResponse(null);
        }
    };

    const handleChange = useCallback((e) => {
        const { name, value } = e.target;
        setUser((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    }, []);

    return (
        <div>
            <div className={`modal ${show ? 'd-block' : 'd-none'}`} tabIndex="1" role="dialog" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Editar Usuario #{user.Id}</h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                                onClick={handleClose}
                            ></button>
                        </div>

                        <div className="modal-body">
                            {error && <div className="alert alert-danger">{error}</div>}
                            <form onSubmit={handleSubmit}>
                                <div className="row g-3 mb-3">
                                    <div className="col">
                                        <label>
                                            <b>Nombre:</b>
                                            <input
                                                required
                                                autoComplete="off"
                                                className="form-control"
                                                type="text"
                                                name="Nombre"
                                                value={user.Nombre || ''}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <label>
                                            <b>Apellido:</b>
                                            <input
                                                required
                                                autoComplete="off"
                                                className="form-control"
                                                type="text"
                                                name="Apellido"
                                                value={user.Apellido || ''}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col">
                                        <label>
                                            <b>Correo:</b>
                                            <input
                                                required
                                                autoComplete="off"
                                                className="form-control"
                                                type="email"
                                                name="Correo"
                                                value={user.Correo || ''}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <label>
                                            <b>Fecha de Nacimiento:</b>
                                            <input
                                                required
                                                className="form-control"
                                                type="date"
                                                name="FechaNacimiento"
                                                value={user.FechaNacimiento?.split('T')[0] || ''}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="row g-3 mb-3">
                                    <div className="col">
                                        <label>
                                            <b>Teléfono:</b>
                                            <input
                                                required
                                                autoComplete="off"
                                                className="form-control"
                                                type="text"
                                                name="Telefono"
                                                value={user.Telefono || ''}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                    <div className="col">
                                        <label>
                                            <b>Dirección:</b>
                                            <input
                                                required
                                                autoComplete="off"
                                                className="form-control"
                                                type="text"
                                                name="Direccion"
                                                value={user.Direccion || ''}
                                                onChange={handleChange}
                                            />
                                        </label>
                                    </div>
                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={handleClose}>
                                        Cerrar
                                    </button>
                                    <button type="submit" className="btn btn-primary">
                                        Guardar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PersonaEdit;
