import { TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import useDebounce from '../../hooks/useDebounce';
import styles from './styles';

const DEBOUNCE_TIME = 400;

const SearchBar = ({ onSearch }: { onSearch: (text: string | null) => void }) => {
  const [query, setQuery] = useState('');
  const [handleDebouncedSearch] = useDebounce<string>(onSearch, DEBOUNCE_TIME);

  useEffect(() => {
    handleDebouncedSearch(query);
  }, [query, handleDebouncedSearch]);

  return (
    <View style={styles.container}>
      <TextInput placeholder="Search..." onChangeText={setQuery} value={query} testID="input" />
    </View>
  );
};

export default SearchBar;
