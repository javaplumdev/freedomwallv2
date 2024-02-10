'use client';
import React, { useState } from 'react';
import Modal from '../modals/Modal';
import Icon from '../icons/Icon';

const Footer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button className="m-5 absolute bottom-0 flex" onClick={() => setIsOpen(!isOpen)}>
        <Icon label="paintbrush" /> - Change theme
      </button>

      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Footer;
