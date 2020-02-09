import React from 'react';
import { ActivityIndicator, AsyncStorage, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { setAuth } from '../actions';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => {
    const { setAuthAction } = this.props;
    const [accessToken, userId] = await AsyncStorage.multiGet([
      'accessToken',
      'userId',
    ]);
    setAuthAction({ accessToken: accessToken[1], userId: userId[1] });
    this.props.navigation.navigate(accessToken[1] ? 'App' : 'Auth');
  };

  render() {
    return (
      <View>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  accessToken: state.auth.accessToken,
});

const mapDispatchToProps = dispatch => ({
  setAuthAction: auth => dispatch(setAuth(auth)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthLoadingScreen);
