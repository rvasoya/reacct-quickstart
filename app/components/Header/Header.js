import React from 'react';
import { FormattedMessage, defineMessages } from 'react-intl';
import './style.scss';

// default messages
const messages = defineMessages({
  home: {
    id: 'app.header',
    defaultMessage: 'Default Header'
  }
});

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="header">
        <h2>
        	<FormattedMessage {...messages.home}/>
        </h2>
      </div>
    );
  }
}

export default Header;
