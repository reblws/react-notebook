import React from 'react';
import PropTypes from 'prop-types';

class Tag extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      renameIsActive: false,
      name: this.props.name,
    };
    this.onChange = this.onChange.bind(this);
    this.toggleRename = this.toggleRename.bind(this);
    this.tagControlOnClick = this.tagControlOnClick.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      name: nextProps.name,
    });
  }

  onChange(event) {
    const name = event.target.value;
    this.setState({
      name,
    });
  }

  tagControlOnClick(event) {
    switch (event.target.textContent) {
      case 'Save': {
        const newTagName = this.state.name;
        this.props.updateAllTags(this.props.name, newTagName);
        break;
      }
      case 'Rename': {
        this.toggleRename();
        break;
      }
      default:
        break;
    }
  }

  toggleRename() {
    this.setState({
      renameIsActive: !this.state.renameIsActive,
    });
  }

  render() {
    const disabledInput = this.props.isCurrentTag && this.state.renameIsActive;
    return (
      <div
        role="option"
        className={this.props.isCurrentTag ? 'selected-tag' : 'tag-item'}
        aria-selected={this.props.isCurrentTag}
        onClick={() => this.props.updateCurrentTag(this.props.name)}
      >
        <input
          className="tag-input"
          type="text"
          value={this.state.name}
          onChange={this.onChange}
          disabled={!disabledInput}
        />
        <span>Count: {this.props.count}</span>
        {(this.props.isCurrentTag && this.props.name !== 'All') &&
          <div>
            <a
              role="button"
              className="tag-ctrl"
              onClick={this.tagControlOnClick}
            >
              {this.state.renameIsActive ? 'Save' : 'Rename'}
            </a>
            <a
              role="button"
              className="tag-ctrl"
            >
              Delete
            </a>
          </div>
        }
      </div>
    );
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
