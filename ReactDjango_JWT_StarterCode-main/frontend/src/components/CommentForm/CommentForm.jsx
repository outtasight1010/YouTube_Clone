const CommentForm = (props) => {
    const [commentText, setCommentText] = useState('');
    const { user, token } = useAuth(); 
  
    function handleSubmit(e) {
      e.preventDefault();
  
      
      const newEntry = {
        user_id: user.id,           
        video_id: props.videoId,    
        text: commentText,
        
      };
  
      
      axios.post(
        'http://127.0.0.1:8000/api/comments/create/',
        newEntry,
        {
          headers: {
            Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjkzOTUzNzM5LCJpYXQiOjE2OTMwODk3MzksImp0aSI6IjBmYTI2ZTZlZmYxODQxMDJiZDgzYTI1MjIwNzVjODZkIiwidXNlcl9pZCI6MSwidXNlcm5hbWUiOiJtaXNoeSIsImZpcnN0X25hbWUiOiIifQ.3IvGofA7KYBLSAEigv1hACDNGBCMnGkNa5Yi7R1_oL4'
  
          }
        }
      )
      .then(response => {
        
        props.addNewEntryProp(newEntry);
        setCommentText(''); 
      })
      .catch(error => {
        console.error('Error submitting comment:', error);
      });
    }
  
    return (
      <div className="comment-form">
        <h2>Leave a Comment</h2>
        <form onSubmit={handleSubmit}>
          <textarea
            value={commentText}
            onChange={e => setCommentText(e.target.value)}
            rows="4"
            placeholder="Enter your comment..."
          ></textarea>
          <button type="submit" style={{ width: "60px", height: "30px", font: "small-caption" }}>Submit</button>
        </form>
      </div>
    );
  };
  
  export default CommentForm;
  



