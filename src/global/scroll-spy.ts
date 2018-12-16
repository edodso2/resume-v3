export class ScrollSpy {
  /**
   * Registers elements to be checked when and listens for page scroll
   * @param elements an array of HTML elements that can be query selected
   */
  constructor(elements, callback) {
    elements = elements.map(element => {
      const domElem = document.querySelector(element);
      if (!domElem) console.error('Element not found: ' + element);
      return domElem;
    });

    window.addEventListener('scroll', () => {
      const elementInView = this.getActiveElement(elements);
      callback(elementInView);
    });
  }

  /**
   * Determines what element is currently active
   * @param elements array of HTML elements
   */
  getActiveElement(elements) {
    let elemInViewport: HTMLElement;
    let previousTop: number;
    const viewportHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

    for (let element of elements) {
      // const scrollTop = window.pageYOffset;
      // const elementOffsetTop = element.getBoundingClientRect().top;
      // const elementHeight = element.offsetHeight;
      const rect = element.getBoundingClientRect();

      if (
        // if element is in the viewport
        (rect.bottom >= 0 && rect.top <= viewportHeight) &&

        // and elements top is greater than current element top.
        // effectivly checking if an element below has just scrolled
        // into view. also make sure the element recently in view has
        // the top of the viewport
        (!previousTop || (rect.top > previousTop && rect.top <= 0))
      ) {
        // console.log(element.nodeName);
        // console.log(rect.top > previousTop);
        previousTop = rect.top;
        elemInViewport = element;
      }
    }

    return elements.indexOf(elemInViewport);
  }
}