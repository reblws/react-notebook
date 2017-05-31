import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renameIsActive: false,
      tagName: this.props.name,
    };
    this.onChange = this.onChange.bind(this);
    this.toggleRename = this.toggleRename.bind(this);
    this.tagControlOnClick = this.tagControlOnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      tagName: nextProps.name,
    });
  }

  onChange(event) {
    const tagName = event.target.value;
    this.setState({
      tagName,
    });
  }

  tagControlOnClick(event) {
    console.log(event);
  }

  toggleRename() {
    this.setState({
      renameIsActive: !this.state.renameIsActive,
    });
  }

  render() {
    const disabledInput = this.props.isCurrentTag && this.state.renameIsActive;

  }
}


Tag.propTypes = {
  name: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  updateCurrentTag: PropTypes.func.isRequired,
  updateAllTags: PropTypes.func.isRequired,
  isCurrentTag: PropTypes.bool.isRequired,
};

export default Tag;
