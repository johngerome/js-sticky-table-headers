Sticky table headers (JS way). Just to support overflow layout.

# Installation

```sh
$ npm i -D js-sticky-table-headers
```

# Usage

VanillaJs

```js
import stickyHeader from 'js-sticky-table-headers';

document.addEventListener('DOMContentLoaded', () => {
  stickyHeader(document.querySelector('.table-wrapper'));
});
```

Svelte

```html
<script>
  import stickyHeader from 'js-sticky-table-headers';
  let pageTitle = '';
  onMount(() => {
    stickyHeader(document.querySelector('.table-wrapper'));
  });
</script>
```

React

```js
import { useEffect } from 'react';
import stickyHeader from 'js-sticky-table-headers';
// ...
useEffect(() => {
  stickyHeader(document.querySelector('.table-wrapper'));
}, []);
```

Vue 3

```html
<script setup>
  import { onMounted } from 'vue';
  import stickyHeader from 'js-sticky-table-headers';

  onMounted(() => {
    stickyHeader(document.querySelector('.table-wrapper'));
  });
</script>
```

SolidJS

```js
import { createSignal, onMount } from 'solid-js';
import stickyHeader from 'js-sticky-table-headers';

// ...
onMount(() => {
  setPageTitle(document.title);
});
```
