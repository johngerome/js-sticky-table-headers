type ElementOffset = {
  left: number;
  top: number;
};

function getOffset(el: HTMLElement | null): ElementOffset {
  if (!el) {
    return {
      left: 0,
      top: 0,
    };
  }

  const rect: DOMRect = el.getBoundingClientRect();
  return {
    left: rect.left + window.scrollX,
    top: rect.top + window.scrollY,
  };
}

function stickyHeader(el: HTMLElement | null): void {
  if (!el) {
    throw new Error(`stickyHeader: Element not found, ${el}.`);
  }

  const table: HTMLTableElement | null = el.querySelector('table');

  if (!table) {
    throw new Error(`stickyHeader: <table> not found in ${el}.`);
  }

  const thead: HTMLTableSectionElement | null = table.querySelector('thead');
  const theadHeight: number = thead?.clientHeight || 0;
  const theadOffset: number = getOffset(table).top + theadHeight;

  el.addEventListener('scroll', () => {
    const _thead = el.querySelector('thead');

    if (!_thead) {
      return;
    }

    if (el.scrollTop >= theadOffset) {
      var translate =
        'translate(0,' + (el.scrollTop - theadOffset + theadHeight) + 'px)';

      _thead.style.transform = translate;
    } else {
      _thead.style.transform = '';
    }
  });
}

export default stickyHeader;
