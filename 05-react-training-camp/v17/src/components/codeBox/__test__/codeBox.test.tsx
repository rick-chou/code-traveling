import { shallow } from 'enzyme';
import CodeBox from '../index';

describe('CodeBox components', () => {
  it('basic', () => {
    const wrapper = shallow(
      <CodeBox
        value="hello world"
        onChange={() => null}
        onBeforeChange={() => null}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
