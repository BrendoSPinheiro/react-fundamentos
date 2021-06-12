import React from 'react';
import PropTypes from 'prop-types';

export function PostHeader(props) {
  return (
    <>
      <strong>
        {props.post.read ? <s>{props.post.title}</s> : props.post.title}
      </strong>
      <button onClick={() => props.onRemove(props.post.id)}>Remover</button>
    </>
  );
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
  onRemove: PropTypes.func.isRequired,
};
