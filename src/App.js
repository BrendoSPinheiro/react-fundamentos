import React from 'react';

import { Post } from './Post';
import { Header } from './Header';

export function App() {
  const posts = [
    {
      id: 1,
      title: 'Título da notícia 01',
      subtitle: 'Subtítulo da notícia 01',
      likes: 15,
    },
    {
      id: 2,
      title: 'Título da notícia 02',
      subtitle: 'Subtítulo da notícia 02',
      likes: 20,
    },
    {
      id: 3,
      title: 'Título da notícia 03',
      subtitle: 'Subtítulo da notícia 03',
      likes: 30,
    },
  ];

  return (
    <>
      <Header title="Brendo's Blog">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map((post) => (
        <Post
          key={post.id}
          post={{
            title: post.title,
            subtitle: post.subtitle,
          }}
          likes={post.likes}
        />
      ))}
    </>
  );
}
