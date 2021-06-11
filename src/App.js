import React, { useState } from 'react';

import { Post } from './Post';
import { Header } from './Header';

export function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Título da notícia 01',
      subtitle: 'Subtítulo da notícia 01',
      likes: 15,
    },
    {
      id: Math.random(),
      title: 'Título da notícia 02',
      subtitle: 'Subtítulo da notícia 02',
      likes: 20,
    },
    {
      id: Math.random(),
      title: 'Título da notícia 03',
      subtitle: 'Subtítulo da notícia 03',
      likes: 30,
    },
  ]);

  function handleAddNewPost() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Título#0${prevState.length + 1}`,
        subtitle: `Subtítulo#0${prevState.length + 1}`,
        likes: 30,
      },
    ]);
  }

  return (
    <>
      <Header title="Blog do Brendo">
        <h2>
          Posts da semana
          <button onClick={handleAddNewPost}>Novo Post</button>
        </h2>
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
