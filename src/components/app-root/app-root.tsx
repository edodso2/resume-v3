import { Component } from '@stencil/core';
import { ScrollSpy } from '../../global/scroll-spy';

const SPY_COMPONENTS = [];

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class Root {
  componentDidLoad() {
    new ScrollSpy(SPY_COMPONENTS, (index) => {
      index;
      // console.log(SPY_COMPONENTS[index]);
    });
  }

  render() {
    return (
      <div>
        <app-header role="navigation" />
        <main>
          <app-container>
            <app-about />
            <app-skills />
          </app-container>
        </main>
      </div>
    );
  }
}
