import React, { useState, useEffect } from 'react';
import { getPersonas, deletePersona } from '../Services/ApiService';
import Swal from 'sweetalert2';
import PersonaTable from '../Components/PersonaTable';
import PersonaListHeader from '../Components/PersonaListHeader';
import PersonaEdit from './PersonaEdit';
import PersonaCreate from './PersonaCreate';

const PersonaList = () => {
  const [users, setUsers] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalCreate, setShowModalCreate] = useState(false);
  const [idUser, setIdUser] = useState();
  const [isLoading, setIsLoading] = useState(true); // Estado para el loader

  useEffect(() => {
    setIsLoading(true); // Inicia el loader
    getPersonas()
      .then(data => setUsers(data))
      .catch(error => console.error(error))
      .finally(() => setIsLoading(false)); // Termina el loader
  }, []);

  const handleResponseUpdate = (updatedUser) => {
    if (updatedUser) {
      setUsers(prevUsers =>
        prevUsers.map(user => (user.Id === updatedUser.Id ? updatedUser : user))
      );
      showToast('success', '¡Se han modificado los datos del usuario correctamente!');
    } else {
      showToast('warning', '¡Ocurrió un error al modificar los datos!');
    }
  };

  const handleResponseCreate = (newUser) => {
    if (newUser) {
      setUsers(prevUsers => [...prevUsers, newUser]);
      showToast('success', '¡Se ha creado el usuario correctamente!');
    } else {
      showToast('warning', '¡Ocurrió un error al crear el usuario!');
    }
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Deseas eliminar el usuario?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        deletePersona(id)
          .then(data => {
            setUsers(prevUsers => prevUsers.filter(user => user.Id !== data.usuarioEliminado.Id));
            showToast('success', '¡Se ha eliminado el usuario correctamente!');
          })
          .catch(() => showToast('warning', '¡Ocurrió un error al eliminar el usuario!'));
      }
    });
  };

  const showToast = (icon, title) => {
    Swal.fire({
      toast: true,
      position: 'top-end',
      icon,
      title,
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
    });
  };

  const handleShow = (elemento) => {
    setIdUser(elemento)
    setShowModal(true);
  };


  return (
    <div>
      <PersonaListHeader onCreate={() => setShowModalCreate(true)} />
      {isLoading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Cargando...</span>
          </div>
        </div>
      ) : (
        <PersonaTable users={users} onEdit={handleShow} onDelete={handleDelete} />
      )}
      {showModal && (
        <PersonaEdit
          id={idUser}
          onChangePropValue={setShowModal}
          onChangeResponse={handleResponseUpdate}
        />
      )}
      {showModalCreate && (
        <PersonaCreate
          onChangePropValue={setShowModalCreate}
          onChangeResponse={handleResponseCreate}
        />
      )}
    </div>
  );
};

export default PersonaList;
