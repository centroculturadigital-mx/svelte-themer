<script>
  import { setContext, onMount } from "svelte";
  import { writable } from "svelte/store";
  import { presets } from "./presets.js";
  // setup initial theming
  export let themes = [...presets];
  export let storageKey = "__svelte-themer__theme";

  import rootProperties from "./rootProperties.js";

  const {
    getRootProperties,
    setRootProperties,
    setRootTypographies
  } = rootProperties;

  // internal state, useful for quickly setting CSS vars without subscribing
  let _current = themes[0].name;
  // temporary
  let _storage = {
    // name of choice
    n: themes[0].name
  };

  export let base = {
    properties: {
      colors: {
        text: "#282230"
      }
    },
    prefix: "base"
  };

  // utility to get current theme from name
  const getCurrentTheme = name => themes.find(h => h.name === name);

  // set up writeable store
  let Theme = writable(getCurrentTheme(_current));

  setContext("theme", {
    theme: Theme,
    toggle: () => {
      // update internal state
      let _currentIndex = themes.findIndex(h => h.name === _current);
      _current =
        themes[_currentIndex === themes.length - 1 ? 0 : (_currentIndex += 1)]
          .name;
      // update Theme store
      Theme.update(t => ({ ...t, ...getCurrentTheme(_current) }));
      // updatte cached theme choice
      localStorage.setItem(storageKey, _current);
      // update CSS vars
      const properties = getRootProperties(
        getCurrentTheme(_current).properties
      );

      setRootProperties(properties);
      //
      let typographies = getCurrentTheme(_current).fontFamilies

      links = setRootTypographies(typographies);
    }
  });

 let links = [];

  onMount(() => {
    let storedThemeChoice = localStorage.getItem(storageKey);
    if (storedThemeChoice) {
      // update Theme store with cached theme choice
      if (!getCurrentTheme(storedThemeChoice)) {
        // break
      } else {
        if (
          isNaN(parseInt(storedThemeChoice)) &&
          getCurrentTheme(storedThemeChoice)
        ) {
          Theme.set(getCurrentTheme(storedThemeChoice));
          _current = storedThemeChoice;
        }
      }
    } else {
      // set default internal state if cached choice does not exist
      localStorage.setItem(storageKey, _current);
    }
    // set CSS vars on mount
    // setRootProperties(base)
    const properties = getRootProperties(getCurrentTheme(_current).properties);

    setRootProperties(properties);

    //
    const typographies = getCurrentTheme(_current).fontFamilies
    
    links = setRootTypographies(typographies);

  });

  // sets CSS vars for easy use in components
  // ex: var(--theme-background)
</script>

<style>
  :global(html) {
    background-color: var(--theme-colors-background);
    color: var(--theme-colors-text);
  }
</style>

<svelte:head>
  {#each Object.values(links) as link, i}
    <link  href={link} rel="stylesheet" type="text/css" />
  {/each}
</svelte:head>

<slot>
  <!-- children -->
</slot>
