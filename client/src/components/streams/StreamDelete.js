import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import history from "../../history";
import Modal from "./Modal";
import { deleteStream, fetchStream } from "../../actions";

class StreamDelete extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderActions() {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          DELETE
        </button>
        <Link to="/" className="ui button primary">
          CANCEL
        </Link>
      </React.Fragment>
    );
  }
  render() {
    return (
      <Modal
        title="Delete Stream"
        content="Are you sure you want to delete this stream?"
        actions={this.renderActions()}
        onDismiss={() => history.push("/")}
      />
    );
  }
}

export default connect(null, { deleteStream, fetchStream })(StreamDelete);
