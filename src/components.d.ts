/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}


declare global {

  namespace StencilComponents {
    interface AppAbout {

    }
  }

  interface HTMLAppAboutElement extends StencilComponents.AppAbout, HTMLStencilElement {}

  var HTMLAppAboutElement: {
    prototype: HTMLAppAboutElement;
    new (): HTMLAppAboutElement;
  };
  interface HTMLElementTagNameMap {
    'app-about': HTMLAppAboutElement;
  }
  interface ElementTagNameMap {
    'app-about': HTMLAppAboutElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-about': JSXElements.AppAboutAttributes;
    }
  }
  namespace JSXElements {
    export interface AppAboutAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppContainer {

    }
  }

  interface HTMLAppContainerElement extends StencilComponents.AppContainer, HTMLStencilElement {}

  var HTMLAppContainerElement: {
    prototype: HTMLAppContainerElement;
    new (): HTMLAppContainerElement;
  };
  interface HTMLElementTagNameMap {
    'app-container': HTMLAppContainerElement;
  }
  interface ElementTagNameMap {
    'app-container': HTMLAppContainerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-container': JSXElements.AppContainerAttributes;
    }
  }
  namespace JSXElements {
    export interface AppContainerAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppHeader {

    }
  }

  interface HTMLAppHeaderElement extends StencilComponents.AppHeader, HTMLStencilElement {}

  var HTMLAppHeaderElement: {
    prototype: HTMLAppHeaderElement;
    new (): HTMLAppHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'app-header': HTMLAppHeaderElement;
  }
  interface ElementTagNameMap {
    'app-header': HTMLAppHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-header': JSXElements.AppHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHeaderAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppProjects {

    }
  }

  interface HTMLAppProjectsElement extends StencilComponents.AppProjects, HTMLStencilElement {}

  var HTMLAppProjectsElement: {
    prototype: HTMLAppProjectsElement;
    new (): HTMLAppProjectsElement;
  };
  interface HTMLElementTagNameMap {
    'app-projects': HTMLAppProjectsElement;
  }
  interface ElementTagNameMap {
    'app-projects': HTMLAppProjectsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-projects': JSXElements.AppProjectsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProjectsAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppRoot {

    }
  }

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-root': JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppSection {
      'header': any;
      'seperator': boolean;
    }
  }

  interface HTMLAppSectionElement extends StencilComponents.AppSection, HTMLStencilElement {}

  var HTMLAppSectionElement: {
    prototype: HTMLAppSectionElement;
    new (): HTMLAppSectionElement;
  };
  interface HTMLElementTagNameMap {
    'app-section': HTMLAppSectionElement;
  }
  interface ElementTagNameMap {
    'app-section': HTMLAppSectionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-section': JSXElements.AppSectionAttributes;
    }
  }
  namespace JSXElements {
    export interface AppSectionAttributes extends HTMLAttributes {
      'header'?: any;
      'seperator'?: boolean;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppSkills {

    }
  }

  interface HTMLAppSkillsElement extends StencilComponents.AppSkills, HTMLStencilElement {}

  var HTMLAppSkillsElement: {
    prototype: HTMLAppSkillsElement;
    new (): HTMLAppSkillsElement;
  };
  interface HTMLElementTagNameMap {
    'app-skills': HTMLAppSkillsElement;
  }
  interface ElementTagNameMap {
    'app-skills': HTMLAppSkillsElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-skills': JSXElements.AppSkillsAttributes;
    }
  }
  namespace JSXElements {
    export interface AppSkillsAttributes extends HTMLAttributes {

    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;