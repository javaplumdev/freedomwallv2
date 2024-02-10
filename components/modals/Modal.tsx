'use client';
import React from 'react';
import { useTheme } from 'next-themes';
import { themes } from '@/config/themes';

type ModalProps = {
  isOpen: boolean;
  setIsOpen: any;
};

const Modal = (props: ModalProps) => {
  const { isOpen, setIsOpen } = props;
  const { setTheme } = useTheme();

  return (
    <dialog className={`modal sm:modal-middle ${isOpen && 'modal-open'}`}>
      <div className="modal-box">
        <h3 className="font-bold text-lg text-center">Hello!</h3>
        <div>
          {themes.map((item, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setTheme(item);
                  setIsOpen(false);
                }}
                className="hover:bg-zinc-400 pointer-events flex"
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
      <form method="dialog" className="modal-backdrop" onSubmit={() => setIsOpen(!isOpen)}>
        <button>close</button>
      </form>
    </dialog>
  );
};

export default Modal;
