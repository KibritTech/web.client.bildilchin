import React, { useEffect, useRef } from 'react';

const Popup = ({ isOpen, onClose }) => {
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
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
          <div ref={popupRef} className="bg-white rounded-lg p-6 z-10 ">
            <h2 className="text-lg font-bold mb-4">Popup Content</h2>
            <p className="mb-4">This is the content of the popup.</p>
        
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
