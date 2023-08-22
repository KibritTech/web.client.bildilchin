import React, { useEffect, useRef } from 'react';

const HomePopup = ({ isOpen, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isOpen && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <>
      {isOpen && (
        <div className="flex relative top-0 left-52 justify-center z-50 bg-indigo-700  w-2/5">
          <div className="  w-2/5"></div>
          <div ref={popupRef} className="bg-white rounded-lg p-6 z-10 bg-green-500">
            <h2 className="text-lg font-bold mb-4">Popup Content</h2>
            <p className="mb-4">This is the content of the popup.</p>
        
          </div>
        </div>
      )}
    </>
  );
};

export default HomePopup;
