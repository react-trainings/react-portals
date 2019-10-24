import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('modal-root');

const Modal = ({ children, onClose, onInputChange }) => {
    return ReactDOM.createPortal(
        <div
            style={{
                position: 'absolute',
                top: '0',
                bottom: '0',
                left: '0',
                right: '0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0,0,0,0.3)'
            }}
        >
            <div onClick={onClose} style={{ cursor: 'pointer' }}>
                &#9587;
            </div>

            <div
                style={{
                    padding: 20,
                    background: '#fff',
                    borderRadius: '2px',
                    display: 'inline-block',
                    minHeight: '300px',
                    margin: '1rem',
                    position: 'relative',
                    minWidth: '300px',
                    boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
                    justifySelf: 'center'
                }}
            >
                {children}
                <hr />
                <textarea rows="4" cols="50" onChange={onInputChange}></textarea>
            </div>
        </div>,
        modalRoot
    );
};

export default Modal;
