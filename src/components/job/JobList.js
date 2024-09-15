import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const JobList = ({ search }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const response = await fetch('http://localhost:5000/jobs/');
      const data = await response.json();
      setJobs(data);
    };
    fetchJobs();
  }, []);

  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(search.toLowerCase()) ||
    job.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="job-list">
      {filteredJobs.length ? (
        filteredJobs.map(job => (
          <Card key={job.id}>
            <Card.Body>
              <Card.Title>{job.title}</Card.Title>
              <Card.Text>{job.description}</Card.Text>
              <Card.Text>{job.location}</Card.Text>
              <Link to={`/apply/${job.id}`}>
                <Button variant="primary">Apply</Button>
              </Link>
            </Card.Body>
          </Card>
        ))
      ) : (
        <p>No jobs found</p>
      )}
    </div>
  );
};

export default JobList;
