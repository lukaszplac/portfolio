import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const PageWrapper = Page => {
  return props =>
    <div className="page">
      <ReactCSSTransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={10000}
        transitionLeaveTimeout={200}
        transitionName={props.match.path === '/portfolio' ? 'SlideIn' : 'SlideOut'}
      >
        <Page {...props} />
      </ReactCSSTransitionGroup>
    </div>;
};

export default PageWrapper;