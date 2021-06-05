import React from 'react';

import { Post } from './Post';

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
      <h1>Brendo's Blog</h1>
      <h2>Posts da semana</h2>

      <hr />

      <Post title={posts[0].title} subtitle={posts[0].subtitle} />
      <Post title={posts[1].title} subtitle={posts[1].subtitle} />
      <Post title={posts[2].title} subtitle={posts[2].subtitle} />
    </>
  );
}
