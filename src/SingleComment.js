import {useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {commentUpdate,commentDelete} from './redux/actions'

function SingleComment({data}) {
  console.log('single comment props >', data);
  const [commenText,setCommentText] = useState('')
  const {text,id} = data;
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(commentUpdate(commenText,id))
  }

  const handleDelete = (e) => {
    console.log('click')
    e.preventDefault()
    dispatch(commentDelete(id));
  }

  useEffect(() => {
    if(text){
      setCommentText(text)
    }
  },[text])

  const handleInput = (e) => {
    setCommentText(e.target.value);
  }

  return(
      <form onSubmit={handleUpdate} className="comments-item">
        <div onClick={handleDelete} className="comments-item-delete">&times;</div><div/>
        <input type='text' value={commenText} onChange={handleInput}></input>
        <input type='submit' hidden></input>
      </form>
  )
}

export default SingleComment;