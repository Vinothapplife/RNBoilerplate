import React, {Component} from 'react'
// import PropTypes from 'prop-types';
import { View, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { withNavigation } from 'react-navigation'

class AppFooter extends Component {
  //  Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  //  Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={() => this.props.navigation.navigate("Home")} vertical="vertical">
            <Icon name="home"/>
            <Text>Home</Text>
          </Button>
          <Button onPress={() => this.props.navigation.navigate("Settings")} vertical="vertical">
            <Icon name="cog"/>
            <Text>Settings</Text>
          </Button>

        </FooterTab>
      </Footer>
    )
  }
}


export default withNavigation(AppFooter)
