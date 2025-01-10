import { toast } from 'react-toastify';

const configureToast = () => {
  // Configure toast
  toast.configure({
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export const showToast = (message, type = 'success') => {
  toast(message, { type });
};

export { configureToast };
