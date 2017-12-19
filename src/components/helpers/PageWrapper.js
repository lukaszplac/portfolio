import React from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

const PageWrapper = Page => {
  return props =>
    <div className="page">
        <CSSTransitionGroup
          transitionAppear={true}
          transitionName="example"
          transitionEnterTimeout={2000}
          transitionLeaveTimeout={2000}
          transitionAppearTimeout={20000}>
        <Page {...props} />
        </CSSTransitionGroup>
    </div>;
};

export default PageWrapper;