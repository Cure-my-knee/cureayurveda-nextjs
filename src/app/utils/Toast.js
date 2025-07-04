// utils/toast.js
import { toast } from 'react-toastify';

// Default toast options
const defaultOptions = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
};

// Success toast
export const showSuccess = (message, options = {}) => {
  return toast.success(message, {
    ...defaultOptions,
    ...options,
  });
};

// Error toast
export const showError = (message, options = {}) => {
  return toast.error(message, {
    ...defaultOptions,
    ...options,
  });
};

// Info toast
export const showInfo = (message, options = {}) => {
  return toast.info(message, {
    ...defaultOptions,
    ...options,
  });
};

// Warning toast
export const showWarning = (message, options = {}) => {
  return toast.warning(message, {
    ...defaultOptions,
    ...options,
  });
};

// Custom toast with custom styling
export const showCustom = (message, options = {}) => {
  return toast(message, {
    ...defaultOptions,
    ...options,
  });
};

// Toast with promise handling
export const showPromise = (promise, messages, options = {}) => {
  return toast.promise(
    promise,
    {
      pending: messages.pending || 'Loading...',
      success: messages.success || 'Success!',
      error: messages.error || 'Something went wrong!',
    },
    {
      ...defaultOptions,
      ...options,
    }
  );
};

// Dismiss all toasts
export const dismissAll = () => {
  toast.dismiss();
};

// Dismiss specific toast by ID
export const dismissToast = (toastId) => {
  toast.dismiss(toastId);
};

// Loading toast that can be updated
export const showLoading = (message = "Loading...", options = {}) => {
  return toast.loading(message, {
    ...defaultOptions,
    ...options,
  });
};

// Update existing toast
export const updateToast = (toastId, message, type = 'default', options = {}) => {
  const updateOptions = {
    ...defaultOptions,
    ...options,
    render: message,
    type: type,
    isLoading: false,
  };
  
  return toast.update(toastId, updateOptions);
};