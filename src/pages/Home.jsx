import { useSelector } from 'react-redux';
import { useGetExchangesQuery } from '../services/api';

import {
  HomeContainer,
  HomeTitle,
  // HomeSubtitle,
  HomeText,
} from 'components/App/pages.styled';

const Home = () => {
  const value = useSelector(state => state.currency);
  const { data } = useGetExchangesQuery(value);

  const convertToArray = rates => {
    return Object.entries(rates).map(([currency, value]) => ({
      currency,
      value,
    }));
  };

  return (
    <HomeContainer>
      <HomeTitle></HomeTitle>
      <HomeText></HomeText>
      {/* <HomeText>Enjoy using AAA!</HomeText> */}
      {data &&
        convertToArray(data.rates).map(({ currency, value }) => (
          <div key={currency}>
            <span>{currency}</span>
            <span>{value}</span>
          </div>
        ))}
      {/* <HomeSubtitle>Best regards, The AAA Team</HomeSubtitle> */}
    </HomeContainer>
  );
};

export default Home;
