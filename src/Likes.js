import {connect} from 'react-redux'
import {incrementLikes,decrementLikes} from './redux/actions'

function Likes(props){
  return(
    <div className="button-controls">
      <button onClick={props.onIncrementLikes}>&#128420;{props.likes}</button>
      <button onClick={props.onIDecrementLikes}>Dislike</button>
    </div>
  )
}

function mapStateToProps(state){
  const {likesReducer} = state;
  return {
    likes: likesReducer.likes
  }
}

function mapDispatchToProps(dispatch){
  return {
    onIncrementLikes:() =>  dispatch(incrementLikes())
    ,
    onIDecrementLikes:() =>  dispatch(decrementLikes())

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Likes);