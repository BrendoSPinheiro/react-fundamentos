import React from 'react';

import { Post } from './Post';
import { Header } from './Header';

const posts = [
  {
    title: 'Título da notícia 01',
    subtitle: 'Subtítulo da notícia 01',
    likes: 15,
  },
  {
    title: 'Título da notícia 02',
    subtitle: 'Subtítulo da notícia 02',
    likes: 20,
  },
  {
    title: 'Título da notícia 03',
    subtitle: 'Subtítulo da notícia 03',
    likes: 30,
  },
];

export function App() {
  return (
    <>
      <Header title="Blog do Brendo">
        <h2>Posts da semana</h2>
      </Header>

      <hr />

      {posts.map((post, index) => (
        <Post
          key={index}
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
