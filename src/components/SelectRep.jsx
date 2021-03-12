/* eslint-disable no-unused-vars */
import React from 'react';
import Select from 'react-select';

export default function SelectRep({ options, onChange }) {
  const customStyles = {
    container: (provided, state) => ({
      ...provided,
      marginBottom: '15px',
    }),
    control: (provided) => ({
      ...provided,
      borderRadius: '6px',
      fontFamily: "'Roboto', sans- serif",
      fontWeight: 'bold',
      border: '1px solid #B4B4B4',
      cursor: 'pointer',
      fontSize: '1.2rem',
      padding: '5px',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: '#625f5f',
    }),
    placeholder: (provided) => ({
      ...provided,
      color: '#9F9F9F',
    }),
  };

  return (
    <Select
      placeholder="Onde você mora?"
      styles={customStyles}
      width="200px"
      menuColor="red"
      options={options}
      onChange={onChange}
    />
  );
}
