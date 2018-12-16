import { Component } from '@stencil/core';

@Component({
  tag: 'app-header',
  styleUrl: 'app-header.css',
  shadow: true
})
export class Header {
  items = [
    'About',
    'Skills',
    'Projects',
    'Key Achievements',
    'Education',
    'Experience',
    'Contact'
  ];

  render() {
    return (
      <app-container>
        <div class="nav-wrapper">
          <div class="nav-logo">
            <img src="/assets/me.jpeg" alt="my photo" class="nav-img" />
            Eric Dodson
          </div>
          <ul class="nav">
            {this.items.map((item) =>
              <li class="nav-item">
                <a class="nav-link" href={'#' + item}>
                  {item}
                </a>
              </li>
            )}
          </ul>
        </div>
      </app-container>
    );
  }
}