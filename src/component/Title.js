import { connect } from 'react-redux'

function Title(props) {
  console.log(props)
  return (
    <div className="card-title">
      <div className="card-title-top">
        <input type="text" onChange={props.onChangeUserValue} />
      </div>
      <p>{props.userValue}</p>
    </div>
  )
}

function mapStateToProps(state) {
  console.log('mapStateToProps', state)
  return {
    userValue: state.titleReducer.userValue,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeUserValue: (event) => {
      const action = { type: 'ONCHANGE', value: event.target.value }
      dispatch(action)
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Title)