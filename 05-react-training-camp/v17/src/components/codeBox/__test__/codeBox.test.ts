import { shallow } from 'enzyme';
import CodeBox from '../index';

describe('CodeBox components', () => {
  it('basic', () => {
    const wrapper = shallow(<CodeBox value="hello world" />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
