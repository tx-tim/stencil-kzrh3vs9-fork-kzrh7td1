/* @jsx h */
import { h, Component, Element, State, Host } from "@stencil/core";

@Component({
  tag: "my-slots",
  styleUrl: "slots.css",
  shadow: true,
})
export class MySlots {
  @Element() host;
  @State() count: number = 0;

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

  getSlots = () => {};

  connectedCallback() {
    console.info("connected callback");
    const topSlot = Array.from(this.host.children).filter(
      (slot) => slot.getAttribute("slot") === "top"
    )[0];
    console.log(topSlot);
    this.inc();
  }

  componentWillLoad() {
    console.info("component Will Load");
    const topSlot = Array.from(this.host.children).filter(
      (slot) => slot.getAttribute("slot") === "top"
    )[0];
    console.log(topSlot);
    this.inc();
  }

  componentWillRender() {
    console.info("component Will Render");
    const topSlot = Array.from(this.host.children).filter(
      (slot) => slot.getAttribute("slot") === "top"
    )[0];
    console.log(topSlot);
    this.inc();
  }

  componentDidLoad() {
    console.info("component Did Load");
    const topSlot = Array.from(this.host.children).filter(
      (slot) => slot.getAttribute("slot") === "top"
    )[0];
    console.log(topSlot);
  }

  componentDidRender() {
    console.info("component Did Render");
    const topSlot = Array.from(this.host.children).filter(
      (slot) => slot.getAttribute("slot") === "top"
    )[0];
    console.log(topSlot);
  }

  componentShouldUpdate() {
    console.info("component Should Update");
    const topSlot = Array.from(this.host.children).filter(
      (slot) => slot.getAttribute("slot") === "top"
    )[0];
    console.log(topSlot);
  }

  componentWillUpdate() {
    console.info("component Will Update");
    const topSlot = Array.from(this.host.children).filter(
      (slot) => slot.getAttribute("slot") === "top"
    )[0];
    console.log(topSlot);
  }

  componentDidUpdate() {
    console.info("component Did Update");
    const topSlot = Array.from(this.host.children).filter(
      (slot) => slot.getAttribute("slot") === "top"
    )[0];
    console.log(topSlot);
  }

  render() {
    return (
      <Host>
        <section id="section-1">
          <slot name="top"></slot>
        </section>

        <section id="section-2">
          <button onClick={this.dec.bind(this)}>-</button>
          <span>{this.count}</span>
          <button onClick={this.inc.bind(this)}>+</button>
        </section>

        <section id="section-3">
          <slot></slot>
        </section>

        <section id="section-4">
          <slot name="bottom"></slot>
        </section>
      </Host>
    );
  }
}
