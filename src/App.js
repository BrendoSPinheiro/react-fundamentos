import React, { useState } from 'react';

import { Post } from './Post';
import { Header } from './Header';

export function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: 'Título#01',
      subtitle: 'Subtítulo#01',
      likes: 15,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Título#02',
      subtitle: 'Subtítulo#02',
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: 'Título#03',
      subtitle: 'Subtítulo#03',
      likes: 30,
      read: false,
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

  function handleRemovePost(postId) {
    setPosts((prevState) => prevState.filter((post) => post.id !== postId));
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
        <Post key={post.id} onRemove={handleRemovePost} post={post} />
      ))}
    </>
  );
}
