import { Component, Prop } from '@stencil/core';

/**
 * NOTE: currently not used. Might use this in the future.
 * It serves as a reusable a container for sections of
 * the resume.
 */
@Component({
  tag: 'app-section',
  styleUrl: 'app-section.css'
})
export class AppSection {
  @Prop() header;
  @Prop() seperator = false;

  render() {
    return (
      <section>
        <div class="section">
          <div class="section-title">
            <h2>{this.header}</h2>
          </div>
          <slot />
        </div>
        {this.seperator
          ? <hr />
          : null
        }
      </section>
    );
  }
}