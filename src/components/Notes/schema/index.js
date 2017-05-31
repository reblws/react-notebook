import PropTypes from 'prop-types';

const noteSchema = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  // dateCreated: PropTypes.int.isRequired,
  dateModified: PropTypes.int,
};

export default noteSchema;
