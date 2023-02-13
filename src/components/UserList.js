import React, {useEffect, useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import {connect} from 'react-redux';
import {getPostData} from '../redux/action/PostAction';
import {fetchUserData} from '../redux/action/UserAction';

function UserList(props) {
  const [postId, setPostId] = useState();
  useEffect(() => {
    // props.fetchUser();
  }, []);
  return (
    <View>
      {props.user.loading && <Text>loading...</Text>}
      <Text>{props.user.error}</Text>
      <Text>User List {props.user.loading.toString()}</Text>
      <Button title="get" onPress={() => props.fetchUser()} />
      {props.user.data &&
        props.user.data.map(user => {
          return <Text key={user.id}>{user.name}</Text>;
        })}
      <TextInput onChangeText={txt => setPostId(txt)} />
      <Button title="get" onPress={() => props.fetchPost(postId)} />
      <Text>{props.post.data.title}</Text>
    </View>
  );
}

const mapStateToProps = state => {
  return {
    user: state.user,
    post: state.post,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchUser: () => dispatch(fetchUserData()),
    fetchPost: postId => dispatch(getPostData(postId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
