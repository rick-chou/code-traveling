import { shallow } from 'enzyme';
import JsonTree from '../index';

describe('JsonTree components', () => {
  it('basic', () => {
    const wrapper = shallow(<JsonTree data={{ name: 'chou' }} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
