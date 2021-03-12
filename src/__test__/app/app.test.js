import React from 'react';

// Components
import App from '../../App';
import Notification from '../../components/Notification';
import { shallow } from 'enzyme';

// Utils
import { findByTestAttr } from '../utils/testUtils';

const setup = () => shallow(<App />);

describe('Rendering components', () => {
  it('Should render <App /> component without crashing', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'app-component');
    expect(appComponent.length).toBe(1);
  });
});
