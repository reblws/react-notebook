import PropTypes from 'prop-types';

const noteSchema = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  dateCreated: PropTypes.number.isRequired,
  dateModified: PropTypes.number,
};

export default noteSchema;
