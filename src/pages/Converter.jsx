import SelectField from 'components/SelectFild/SelectFild';

import { Heading } from 'components/App/pages.styled';

const Converter = () => {
  return (
    <>
      <Heading>Converter</Heading>
      <SelectField />
      <SelectField />
      <button type="button">Convert</button>
    </>
  );
};

export default Converter;
