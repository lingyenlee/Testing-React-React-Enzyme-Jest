import Enzyme from "enzyme";
import EnzymeAdaptor from "enzyme-adaptor-react-16";

Enzyme.configure({
  adaptor: new EnzymeAdaptor(),
  disableLifecycleMethods: true,
});
