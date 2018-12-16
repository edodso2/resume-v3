import { Component } from '@stencil/core';

@Component({
  tag: 'app-container',
  styleUrl: 'app-container.css'
})
export class AppContainer {
  render() {
    return (
      <div class="container">
        <slot />
      </div>
    );
  }
}
