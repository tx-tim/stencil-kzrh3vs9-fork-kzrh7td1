/* @jsx h */
import { h } from "@stencil/core";
import "../src/slots.tsx";

export default {
  parameters: {
    layout: "centered",
  },
};

export const slotstory = () => (
  <my-slots>
    <h1 slot="top">Named slot: top</h1>
    <div slot="bottom">Named slot: bottom</div>
    Some slotted content
  </my-slots>
);
