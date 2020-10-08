import { connect } from 'react-redux';
import NotFound from '../components/NotFound';
import { nextMessage } from '../actions/notFound';

const mapState = (state) => ({
  allMessages: state.notFound.progressiveMessages,
  counter: state.notFound.counter,
});

const mapDispatch = (dispatch) => ({
  launchNextMessage: (providedNumber) => {
    dispatch(nextMessage(providedNumber));
  },
});

export default connect(mapState, mapDispatch)(NotFound);
