import React from 'react';

// Components
import AccountBalance from '../../components/AccountBalance';
import { shallow } from 'enzyme';

// Utils
import { findByTestAttr } from '../utils/testUtils';

const setup = () => shallow(<AccountBalance />);

describe('Rendering components', () => {
  it('Should render <AccountBalance /> component without crashing', () => {
    const wrapper = setup();
    const appAccountBalance = findByTestAttr(wrapper, 'account-balance-component');
    expect(appAccountBalance.length).toBe(1);
  });
});
