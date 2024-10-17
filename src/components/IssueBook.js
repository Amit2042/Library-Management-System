import React, { useState } from 'react';
import dayjs from 'dayjs';

const IssueBook = () => {
  const [issueDate, setIssueDate] = useState(dayjs().format('YYYY-MM-DD'));
  const [returnDate, setReturnDate] = useState(dayjs().add(15, 'day').format('YYYY-MM-DD'));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and process book issuing logic
  };

  return (
    <div>
      <h3>Issue Book</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Issue Date:
          <input type="date" value={issueDate} onChange={(e) => setIssueDate(e.target.value)} min={dayjs().format('YYYY-MM-DD')} />
        </label>
        <label>
          Return Date:
          <input type="date" value={returnDate} onChange={(e) => setReturnDate(e.target.value)} max={dayjs().add(15, 'day').format('YYYY-MM-DD')} />
        </label>
        <button type="submit">Issue</button>
      </form>
    </div>
  );
};

export default IssueBook;
