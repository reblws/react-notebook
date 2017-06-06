import React from 'react';
import PropTypes from 'prop-types';

class NoteEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: this.props.text };
    this.onChange = this.onChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    // No need ot update if we're on the same id
    if (nextProps.id === this.props.id) return;

    this.props.updateNoteContent(this.state.text);
    this.setState({
      text: nextProps.text,
    });
  }

  onChange(event) {
    // Update the local state
    const text = event.target.value;
    this.setState({ text });
  }

  onBlur(event) {
    const text = event.target.value;
    this.props.updateNoteContent(text);
  }

  render() {
    return (
      <div className="editor-container">
        <textarea
          onChange={this.onChange}
          onBlur={this.onBlur}
          value={this.state.text}
        />
      </div>
    );
  }


}

NoteEditor.propTypes = {
  updateNoteContent: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
};

NoteEditor.defaultProps = {
  text: '',
};

export default NoteEditor;
