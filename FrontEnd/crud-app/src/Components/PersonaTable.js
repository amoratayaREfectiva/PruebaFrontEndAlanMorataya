import React from 'react';

const PersonaTable = ({ users, onEdit, onDelete }) => (
  <table className="table table-striped table-hover">
    <thead className="table-dark">
      <tr>
        <th>#Id</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Correo</th>
        <th>Teléfono</th>
        <th>Dirección</th>
        <th>Fecha Nacimiento</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {users.map(user => (
        <tr key={user.Id}>
          <th>{user.Id}</th>
          <td>{user.Nombre}</td>
          <td>{user.Apellido}</td>
          <td>{user.Correo}</td>
          <td>{user.Telefono}</td>
          <td>{user.Direccion}</td>
          <td>{user.FechaNacimiento?.split('T')[0]}</td>
          <td>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => onEdit(user.Id)}
            >
              Editar
            </button>
            <button
              type="button"
              className="btn btn-danger"
              style={{ marginLeft: '5px' }}
              onClick={() => onDelete(user.Id)}
            >
              Borrar
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PersonaTable;
