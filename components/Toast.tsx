import React from 'react'
import{Slide,toast }from'react-toastify';


const Toast = (type:string,message:string,toastId:string) => {
    //incase multiple simultaneous toasts
    
    const id:any= toastId?toastId:'signingin';
    if (type == 'success') {
        toast.success(message, {
            position: toast.POSITION.TOP_CENTER,
            autoClose: 3000, //3 seconds
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            toastId,
            transition: Slide
        });
    }
    else {
         toast.error('Cound not fetch nationalities, please try again later', {
        position: toast.POSITION.TOP_RIGHT,
        toastId
      });
     }
   
  
}

export default Toast