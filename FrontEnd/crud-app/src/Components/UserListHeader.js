import React from 'react';

const UserListHeader = ({ onCreate }) => (
  <div className="row">
    <div className="col-6" style={{ display: 'flex', marginBottom: '10px' }}>
      <h2>Listado de usuarios</h2>
    </div>
    <div
      className="col-6"
      style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}
    >
      <button type="button" className="btn btn-success" onClick={onCreate}>
        Crear Usuario
      </button>
    </div>
  </div>
);

export default UserListHeader;
