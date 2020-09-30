import { connect } from 'react-redux';
import Library from '../components/Library';

const mapState = (state) => ({
  cards: state.cards,
});

const mapDispatch = null;

export default connect(mapState, mapDispatch)(Library);
