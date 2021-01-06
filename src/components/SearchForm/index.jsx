import React, { useState } from 'react';
import classnames from 'classnames/bind';
import styles from './SearchForm.module.scss';
import Button from '../Button/index.jsx';

const cx = classnames.bind(styles);

const SearchForm = () => {
  const [value, setValue] = useState('');

  function handleChange(e) {
    e.persist();
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.log('Sumbiting: ', value);
  }

  return (
    <div className={cx('container')}>
      <form onSubmit={handleSubmit}>
        <input
          className={cx('input')}
          value={value}
          placeholder="What do you want to watch?"
          onChange={handleChange}
          required
        />
        <Button type="submit" size="lg">SEARCH</Button>
      </form>
    </div>
  );
};

export default SearchForm;
