import { shallowMount } from "@vue/test-utils";
import PostsComponent from "@/components/PostsComponent.vue";

describe("PostsComponent.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(PostsComponent, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
