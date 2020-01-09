import { Component, h } from '@stencil/core';

@Component({
  tag: 'myy-component',
  styleUrl: 'component.css',
  shadow: true
})
export class MyyComponent {

  render() {
    return <div>Hello, World! I'm Emma</div>;
  }
}
