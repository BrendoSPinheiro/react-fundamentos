import React from 'react';

import { Post } from './Post';

export function App() {
  return (
    <>
      <h1>Brendo's Blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </>
  );
}
