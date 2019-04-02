import Enzyme, { configure, shallow, mount, render } from "enzyme";
import Adaptor from "enzyme-adapter-react-16";

configure({ adapter: new Adaptor(), disableLifecycleMethods: true });
export { shallow, mount, render };
export default Enzyme;
