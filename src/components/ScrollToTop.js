import React from 'react';
import { withRouter } from 'react-router'

/**
 * Wrapping component that scrolls to the top of page on route change
 * 
 * @class ScrollToTop
 * @extends {React.Component}
 */

 
class ScrollToTop extends React.Component {
    componentDidUpdate(prevProps) {
      if (this.props.location.pathname !== prevProps.location.pathname) {
        window.scrollTo(0, 0)
      }
    }
  
    render() {
      return this.props.children
    }
  }
  
  export default withRouter(ScrollToTop)