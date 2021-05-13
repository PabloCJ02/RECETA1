'use strict';

const boton_foto = document.querySelector('#image');
const imagen = document.querySelector('#user-photo')

let widget_cloudinary = cloudinary.createUploadWidget({
    cloudName: 'dqxfwjovy',
    uploadPreset: 'preset-pabs',

}, (err, result)=>{
    if(!error && result & result.event === 'seuccess'){
        console.log('imagen subida con exito', result.info);
        imagen.src = result.info.secure_url;
    }
});

boton_foto.addEventListener('click', ()=>{
    widget_cloudinary.open();
}, false);
