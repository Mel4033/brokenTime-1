import { connect } from 'react-redux';
import Library from '../components/Library';

const mapState = ( state ) => ({
  Cards: state.Library.cards
});

const mapDispatch = {};

export default connect(mapState, mapDispatch)(Library);