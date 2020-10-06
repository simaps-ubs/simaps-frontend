import React from 'react';

import Select from 'react-select';

import { Container } from './styles';

const customStyles = {
  control: styles => ({
    ...styles,
    width: '160px',
    // height: '48px',
    borderRadius: '8px',
    border: 0,
  }),
  menu: styles => ({
    ...styles,
    width: '160px',
    borderRadius: '8px',
  }),
  option: styles => ({ ...styles }),
};

export default function Selector({ options }) {
  const curr = options;

  const currencies = [];

  if (curr) {
    for (let i = 0; i < curr.length; i += 1) {
      currencies.push({ value: curr[i], label: curr[i] });
    }
  }

  return (
    <Container>
      <Select
        // defaultValue={{ value: name, label: name }}
        defaultValue={currencies[0]}
        styles={customStyles}
        label="Single select"
        options={currencies}
        theme={theme => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: '#7F7FD5',
            primary50: '#7F7FD5',

            primary: '#01579B',
          },
        })}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    </Container>
  );
}
