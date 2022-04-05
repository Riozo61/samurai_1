import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from propst should be in the state", () => {
    const component = create(<ProfileStatus status="kekw" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("kekw");
  });
  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatus status="kekw" />);
    const instance = component.root;
    let span = instance.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status="kekw" />);
    const instance = component.root;
    let span = instance.findByType("span");
    expect(span).not.toBeNull();
  });

  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatus status="kekw" />);
    const instance = component.root;
    let span = instance.findByType("span");
    expect(span.children[0]).toBe("kekw");
  });
});
