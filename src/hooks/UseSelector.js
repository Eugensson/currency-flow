import { useSelector } from 'react-redux';

export const useSelectors = () => {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter.filter);

  return {
    contacts,
    filter,
  };
};
