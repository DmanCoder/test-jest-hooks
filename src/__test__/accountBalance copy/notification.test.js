import React from 'react';

// Components
import Notification from '../../components/Notification';
import { shallow } from 'enzyme';

// Utils
import { findByTestAttr } from '../utils/testUtils';

const setup = () => shallow(<Notification />);

describe('Rendering components', () => {
  it('Should render <Notification /> component without crashing', () => {
    const wrapper = setup();
    const appNotification = findByTestAttr(wrapper, 'notification-component');
    expect(appNotification.length).toBe(1);
  });
});
