import Comment from './Comment'

const Comments = ({ comments }) => {
  return (
    <div className='comments-wrapper'>
      {comments.map((item, index) => (
        <Comment key={index} image={item.user.image} username={item.user.username} comment={item.comment} />
      ))}

    </div>
  )
}

export default Comments
