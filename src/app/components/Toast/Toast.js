// components/Toast/Toast.js
'use client'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast = ({
  position = "top-right",
  autoClose = 3000,
  hideProgressBar = false,
  newestOnTop = false,
  closeOnClick = true,
  rtl = false,
  pauseOnFocusLoss = true,
  draggable = true,
  pauseOnHover = true,
  theme = "light",
  limit = 3,
  toastClassName = "",
  bodyClassName = "",
  progressClassName = "",
  ...props
}) => {
  return (
    <ToastContainer
      position={position}
      autoClose={autoClose}
      hideProgressBar={hideProgressBar}
      newestOnTop={newestOnTop}
      closeOnClick={closeOnClick}
      rtl={rtl}
      pauseOnFocusLoss={pauseOnFocusLoss}
      draggable={draggable}
      pauseOnHover={pauseOnHover}
      theme={theme}
      limit={limit}
      toastClassName={toastClassName}
      bodyClassName={bodyClassName}
      progressClassName={progressClassName}
      {...props}
    />
  );
};

export default Toast;