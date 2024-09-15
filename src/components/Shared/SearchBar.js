import React from 'react';
import { Form } from 'react-bootstrap';

const SearchBar = ({ search, onSearch }) => (
  <Form>
    <Form.Group controlId="searchBar">
      <Form.Control
        type="text"
        placeholder="Search jobs..."
        value={search}
        onChange={(e) => onSearch(e.target.value)}
      />
    </Form.Group>
  </Form>
);

export default SearchBar;
