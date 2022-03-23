import { shallow } from 'enzyme';
import Markdwon from '../index';

describe('Markdwon components', () => {
  it('basic', () => {
    const wrapper = shallow(<Markdwon children="hello world" />);
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('collapse', () => {
    const wrapper = shallow(
      <Markdwon children="hello world" title="hello world" />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('theme', () => {
    const wrapper = shallow(
      <Markdwon children="hello world" title="hello world" theme="tomorrow" />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
  it('code', () => {
    const code = `
    ~~~js
    console.log('hello world');
    ~~~
    `;
    const wrapper = shallow(
      <Markdwon children="hello world" title={code} theme="tomorrow" />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });
});
