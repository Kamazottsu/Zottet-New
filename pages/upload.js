import Header from '../components/Header';

import { useState } from 'react';

export default function Upload() {
  const [text, setText] = useState('');
  const [media, setMedia] = useState('/media/placeholder_short.mp4');
  const [type, setType] = useState('short');

  async function submit(e) {
    e.preventDefault();

    const res = await fetch('/api/posts/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: 'Anon',
        text,
        media,
        mediaType: type,
        game: 'valoroso',
      }),
    });

    const data = await res.json();

    if (data.ok) {
      window.location.href = '/feed';
    }
  }

  return (
    <div className="container">
      <Header />

      <div className="card">
        <h3>Novo Post</h3>

        <form onSubmit={submit}>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{ width: '100%', height: 80 }}
          />

          <div style={{ marginTop: 8 }}>
            <label>Media URL</label>
            <input
              value={media}
              onChange={(e) => setMedia(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <div style={{ marginTop: 8 }}>
            Tipo:{' '}
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="short">Curto (≤ 30s)</option>
              <option value="long">Longo</option>
            </select>
          </div>

          <button className="btn" style={{ marginTop: 8 }}>
            Postar
          </button>
        </form>
      </div>
    </div>
  );
}
