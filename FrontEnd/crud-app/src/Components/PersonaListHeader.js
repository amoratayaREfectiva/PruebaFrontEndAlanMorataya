import React from 'react';

const PersonaListHeader = ({ onCreate }) => (
  <div className="row">
    <div className="col-6" style={{ display: 'flex', marginBottom: '10px' }}>
      <h2>Listado de Personas</h2>
    </div>
    <div
      className="col-6"
      style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}
    >
      <button type="button" className="btn btn-success" onClick={onCreate}>
        Crear Persona
      </button>
    </div>
  </div>
);

export default PersonaListHeader;
