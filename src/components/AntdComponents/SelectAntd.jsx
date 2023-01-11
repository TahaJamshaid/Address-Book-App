import React from 'react';
import { Select } from 'antd';

const SelectAntd = ({ style, onChange, options, defaultValue }) => {
  return (
    <>
      <Select
        style={style}
        onChange={onChange}
        options={options}
        defaultValue={defaultValue}
      />
    </>
  );
};

export default SelectAntd;
