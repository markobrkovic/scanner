import React from 'react';

function Styleguide() {
  return (
    <div
      style={{
        background: 'grey',
        padding: '2rem',
        width: '45%',
      }}
    >
      <div
        style={{
          display: 'inline-block',
          background: 'var(--color-primary)',
          width: '69px',
          height: '69px',
          borderRadius: '50%',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          background: 'var(--color-secondary)',
          width: '69px',
          height: '69px',
          borderRadius: '50%',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          background: 'var(--color-tertiary)',
          width: '69px',
          height: '69px',
          borderRadius: '50%',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          background: 'var(--color-text)',
          width: '69px',
          height: '69px',
          borderRadius: '50%',
        }}
      ></div>
      <h1 style={{ color: 'var(--color-primary)' }}>Heading 1</h1>
      <h2 style={{ color: 'var(--color-secondary)' }}>Heading 2</h2>
      <h3 style={{ color: 'var(--color-tertiary)' }}>Heading 3</h3>
      <h4 style={{ color: 'var(--color-text)' }}>Heading 4</h4>
      <p style={{ color: 'var(--color-text)' }}>Paragraph</p>
      <a
        href=""
        style={{
          display: 'block',
          color: 'var(--color-text)',
          marginBottom: '1rem',
          textDecoration: 'none',
        }}
      >
        Link
      </a>
      <div
        style={{
          display: 'inline-block',
          background: 'var(--color-secondary)',
          width: '100px',
          height: '50px',
          borderRadius: 'var(--border-radius)',
        }}
      ></div>
      <div
        style={{
          display: 'inline-block',
          marginLeft: '1rem',
          background: 'var(--color-text)',
          width: '300px',
          height: '50px',
          borderRadius: 'var(--border-radius)',
        }}
      ></div>
    </div>
  );
}

export default Styleguide;
