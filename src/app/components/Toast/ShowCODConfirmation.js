import { toast } from 'react-toastify';

const ShowCODConfirmation = () => {
  return new Promise((resolve) => {
    const toastId = toast(
      ({ closeToast }) => (
        <div>
          <p>Are you sure you want to place a <strong>Cash on Delivery</strong> order?</p>
          <div className="flex justify-end gap-2 mt-2">
            <button
              className="bg-green-600 text-white px-3 py-1 rounded"
              onClick={() => {
                resolve(true);
                toast.dismiss(toastId);
              }}
            >
              Yes
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded"
              onClick={() => {
                resolve(false);
                toast.dismiss(toastId);
              }}
            >
              No
            </button>
          </div>
        </div>
      ),
      {
        autoClose: false,
        closeOnClick: false,
        closeButton: false,
      }
    );
  });
};
