import { useState, useEffect, useRef } from "react";
import Profile from "../Elements/Image/profile";
import ListModals from "../Elements/List/modals";
import UpdatesModals from "../Elements/List/updatesModals";

function ModalComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef(null); // Untuk referensi modal
  const buttonRef = useRef(null); // Untuk referensi button

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  // Menambahkan efek untuk menutup modal jika klik di luar modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Cek apakah klik terjadi di luar modal dan button
      if (modalRef.current && !modalRef.current.contains(event.target) && !buttonRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };

    // Menambahkan event listener untuk klik di luar
    document.addEventListener("click", handleClickOutside);

    // Membersihkan event listener saat komponen dibersihkan
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <button
        ref={buttonRef} // Menambahkan ref ke button
        onClick={toggleModal}
        type="button"
      >
        <i className="ri-menu-fill border rounded p-1"></i>
      </button>
      {isModalOpen && (
        <div
          id="default-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex"
        >
          <div
            ref={modalRef} // Menambahkan ref ke modal
            className="absolute p-4 w-1/4 inset-y-0 right-0 rounded-l-2xl bg-gray-950 border-l border-slate-700"
          >
            <div className="flex items-center justify-between">
              <Profile />
              <button
                type="button"
                onClick={toggleModal}
                className="text-gray-400 bg-transparent hover:text-gray-900 rounded-lg text-sm w-8 h-8 inline-flex justify-center items-center bg-gray-800 dark:hover:text-white"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only"></span>
              </button>
            </div>
            <ListModals />
            <UpdatesModals />
          </div>
        </div>
      )}
    </div>
  );
}

export default ModalComponent;
