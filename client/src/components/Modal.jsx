import { Dialog, Transition } from "@headlessui/react";
import PropTypes from "prop-types";
import React from "react";

function Error({ color, message, openBtnTxt, title }) {
  const [isOpen, setIsOpen] = React.useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      {openBtnTxt && (
        <div className="fixed inset-0 flex items-center justify-center">
          <button
            type="button"
            onClick={openModal}
            className="px-4 py-2 text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
          >
            Open dialog
          </button>
        </div>
      )}
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className={`text-lg font-medium leading-6 text-${color}-900`}
                >
                  {title}
                </Dialog.Title>
                <p className={`mt-2 text-sm text-${color}-500`}>{message}</p>

                <div className="mt-4">
                  <button
                    type="button"
                    className={`inline-flex justify-center px-4 py-2 text-sm font-medium text-${color}-900 bg-${color}-100 border border-transparent rounded-md hover:bg-${color}-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-${color}-500`}
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

Error.propTypes = {
  color: PropTypes.oneOf(["red", "blue", "green", "yellow"]),
  message: PropTypes.string.isRequired,
  openBtnTxt: PropTypes.string,
  title: PropTypes.string,
};

Error.defaultProps = {
  color: "red",
  title: "Error",
};

export default Error;
