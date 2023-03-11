import React, { useState } from 'react';
import styles from './Input.module.scss';
import { FaSearch } from 'react-icons/fa';
import { useStateProvider } from '../../utils/StateProvider';
import { reducerCases } from '../../utils/Constants';

export const Input = () => {
  const [{ searchInputCommmit }, dispatch] = useStateProvider();
  const [searchInput, setSearchInput] = useState<string>('');
  function search() {
    console.log('Search for ' + searchInput);
    const searchInputCommmit = searchInput;
    dispatch({
      type: reducerCases.SET_SEARCHINPUTCOMMIT,
      searchInputCommmit,
    });
  }

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchInput(e.target.value);
  }
  return (
    <span className={styles.search_bar}>
      <FaSearch />
      <input
        type='text'
        placeholder='Find a song or artist'
        onKeyDown={(e) => {
          if (e.key == 'Enter') {
            search();
          }
        }}
        onChange={handleInputChange}
      />
    </span>
  );
};
