import DialogContent from '@mui/material/DialogContent';
import { useState, useEffect } from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Textarea from '@mui/joy/Textarea';
import PropTypes from "prop-types";
import { Button, Dialog } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { updateUser } from '../../data/users';

function EditDataModal({showEditDataModal, closeEditDataModal, valueToEdit, formData, dataUpdated, showLoader}) {

  const mensaje = valueToEdit;

  const [editData, setEditData] = useState({
      nombre: "",
      apellido: "",
      contraseña: "",
      correo: "",
      documento: "",
      celular: ""
  });

  useEffect(() => {
    setEditData({
      nombre: formData.nombre,
      apellido: formData.apellido,
      contraseña: formData.contraseña,
      correo: formData.correo,
      documento: formData.documento,
      celular: formData.celular,
    });
  }, [formData]);

  const updateUserData = () => {
    console.log(valueToEdit);
    console.log(editData)
    const userId = localStorage.getItem('idUsuario');
    updateUser (userId, valueToEdit, editData);
    showLoader();
    dataUpdated ();
  }

  return (
    <Dialog
    onClose={closeEditDataModal}
    aria-labelledby="customized-dialog-title"
    open={showEditDataModal}
    sx={{
      "& .MuiDialog-paper": {
        borderRadius: "16px",
        padding: "20px", 
        backgroundColor: "#f3f3f3",
        width: "600px",
      },
    }}
  >
    <IconButton
      aria-label="close"
      onClick={closeEditDataModal}
      sx={{
        position: 'absolute',
        right: 5,
        top: 5,
        color: 'black',
      }}
    >
    <CloseIcon />
    </IconButton>
    <DialogContent sx={{display:"flex", flexDirection:"column", gap:"25px"}}>
      <div style={{display:"flex", justifyContent:"center"}}>
        <h2 style={{display:"flex", alignItems:"center", gap:"20px", textAlign:"center"}}> Editar {mensaje} </h2>
      </div>
      <Textarea
        color='black'
        minRows={2}
        size="lg"
        variant="outlined"
        value={editData[valueToEdit]}
        onChange={(e) => {
          setEditData({
            ...editData,
            [valueToEdit]: e.target.value
          })
        }}
      />
      <Button sx={{width:"40%", alignSelf:"center", fontWeight:"bold", backgroundColor:"#00669C"}} variant='contained' endIcon={<SendIcon/>} 
      onClick={() => updateUserData ()}>Modificar datos</Button>
    </DialogContent>
  </Dialog>
  );
}

EditDataModal.propTypes = {
    showEditDataModal: PropTypes.bool.isRequired,
    closeEditDataModal: PropTypes.func.isRequired,
    valueToEdit: PropTypes.string.isRequired, 
    formData: PropTypes.object.isRequired,
    dataUpdated: PropTypes.func.isRequired,
    showLoader: PropTypes.func.isRequired,
};

export default EditDataModal;