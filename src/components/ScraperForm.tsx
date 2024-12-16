// components/ScraperForm.js

import { useState } from 'react';

export default function ScraperForm() {
  const [url, setUrl] = useState('');
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`/api/scrape?url=${encodeURIComponent(url)}`);
      const data = await res.json();

      if (res.ok) {
        setTitle(data.title);
      } else {
        alert('Error: ' + data.error);
      }
    } catch (error:any) {
      alert('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Scrape'}
        </button>
      </form>

      {title && <h3>Title: {title}</h3>}
    </div>
  );
}
