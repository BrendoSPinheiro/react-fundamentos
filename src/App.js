import React from 'react';

import { Post } from './Post';
import { Header } from './Header';

export function App() {
  const posts = [
    {
      id: 1,
      title: 'Título da notícia 01',
      subtitle: 'Subtítulo da notícia 01',
    },
    {
      id: 2,
      title: 'Título da notícia 02',
      subtitle: 'Subtítulo da notícia 02',
    },
    {
      id: 3,
      title: 'Título da notícia 03',
      subtitle: 'Subtítulo da notícia 03',
    },
  ];

  return (
    <>
      <Header title="Brendo's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
