import * as React from 'react';
import { useSelector } from 'react-redux';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import Select, { SelectChangeEvent } from '@mui/material/Select';

import { useGetExchangesQuery } from '../../services/api';

const SelectField = () => {
  const value = useSelector(state => state.currency);
  const { data } = useGetExchangesQuery(value);

  const convertToArray = rates => {
    return Object.entries(rates).map(([currency, value]) => ({
      currency,
      value,
    }));
  };
  // const [age, setAge] = React.useState('');

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value);
  // };

  return (
    <FormControl sx={{ m: 1, minWidth: 300 }}>
      <Select
        labelId="demo-simple-select-helper-label"
        id="demo-simple-select-helper"
        // value={age}
        // onChange={handleChange}
      >
        {data &&
          convertToArray(data.rates).map(({ currency }) => (
            <MenuItem key={currency} value={currency}>
              {currency}
            </MenuItem>
          ))}
      </Select>
      <FormHelperText>With label + helper text</FormHelperText>
    </FormControl>
  );
};

export default SelectField;
