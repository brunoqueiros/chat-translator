import React from 'react';
import classNames from 'classnames';

class Steps extends React.Component {
  getStepsTab(tabActive) {
    return this.props.children.map((step, index) => {
      const stepClasses = classNames(
        'step',
        parseInt(tabActive, 10) === index && 'active'
      );

      const stepIconClasses = classNames(
        'icon',
        step.props.icon
      );

      return (
        <div key={index} className={stepClasses}>
          <i className={stepIconClasses}></i>
          <div className="content">
            <div className="title">{step.props.title}</div>
            <div className="description">{step.props.description}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    const tabActive = this.props.tabActive;
    const steps = this.getStepsTab(tabActive);

    return (
      <div>
        <div className="ui three top attached steps">
          {steps}
        </div>
        <div className="ui attached segment">
          {this.props.children[tabActive].props.children}
        </div>
      </div>
    );
  }
}

export default Steps;
