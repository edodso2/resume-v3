import { Component } from '@stencil/core';


@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css',
  shadow: true
})
export class AppAbout {

  render() {
    return (
      <p>
        I am a highly skilled web developer specializing in responsive web applications.
        Experience includes web site administrator at Priority 1 Automotive Group (BMW of Towson) and web developer at Carefirst BlueCross Blueshield.
        Hands on experience utilizing technologies such as HTML5, CSS3, AngularJs, Bootstrap, and NodeJS to develop public facing web applications.
        BS degree in computer science and certified AWS Developer.
      </p>
    );
  }
}