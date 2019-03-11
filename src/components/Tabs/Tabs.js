import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {Colors} from '../Theme';

import Tab from './Tab';

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  }

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
    };
  }

  onClickTabItem = (tab) => {
    this.setState({ activeTab: tab });
  }

  render() {
    const {
      onClickTabItem,
      props: {
        children,
      },
      state: {
        activeTab,
      }
    } = this;

    return (
      <TabsWrapper>
        <TabsList>
          {children.map((child) => {
            const { label } = child.props;

            return (
              <Tab
                activeTab={activeTab}
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            );
          })}
        </TabsList>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </TabsWrapper>
    );
  }
}

const TabsWrapper = styled.div`
    
`

const TabsList = styled.ol`
    display: flex;
    flex-direction: row;
    justify-content: center;

    .tab-list-item {
        display: inline-block;
        list-style: none;
        padding: 10px 30px;
        cursor: pointer;
    }

    .tab-list-active {
        border-bottom: 2px solid ${Colors.gray}
    }
`

export default Tabs;