import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAPost } from '../actions';

class PostsShow extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchAPost(id);
  }

  render() {
    return (
      <div>Posts List</div>
    );
  };
}

function mapStateToProps({ posts }, ownProps) {
  return { post: posts[ownProps.match.params.id] };
}

export default connect(null, { fetchAPost })(PostsShow);
