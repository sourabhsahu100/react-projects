import React, { useState } from 'react';
import SearchBar from '../components/Shared/SearchBar';
import JobList from '../components/job/JobList';

const JobSearch = () => {
  const [search, setSearch] = useState('');

  return (
    <div>
      <h2>Search Jobs</h2>
      <SearchBar search={search} onSearch={setSearch} />
      <JobList search={search} />
    </div>
  );
};

export default JobSearch;
