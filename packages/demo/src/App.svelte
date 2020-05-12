<script>
  import { ThemeWrapper, ThemeToggle } from '@centroculturadigital-mx/svelte-themer'

  const themes = [
  {
    name: 'light',
    properties: {
      fonts: {
        primary: "Arial",
        secondary: "Courier",
      },
      colors: {
        subsel: {
          a: "#fa0",
          b: "#0ab",
        },
        text: '#282230',
        background: '#f1f1f1',
        primary: '#01796f',
        primary_dark: '#016159',
        secondary: '#562931',
      },
    },
  },
  {
    name: 'dark',
    properties: {
      fonts: {
        primary: "Courier",
        secondary: "Arial",
      },
      colors: {
        text: '#f1f1f1',
        background: '#27323a',
        primary: '#01978b',
        primary_dark: '#00887c',
        secondary: '#fe8690',
      },
    },
  }
]
</script>

<ThemeWrapper {themes}>
  <main>
    <div class="rail">
      <h1>Svelte Themer</h1>
      <ThemeToggle />
    </div>
    <div class="apps">
      <a href="https://www.npmjs.com/package/svelte-themer">npm</a>
      <a href="https://github.com/josefaidt/svelte-themer">github</a>
    </div>
  </main>
</ThemeWrapper>

<style>
  :global(body) {
    display: flex;
    align-items: center;
  }

	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
    margin: 0 auto;
    
    display: grid;
    grid-auto-flow: row;
    grid-gap: 2rem;
  }

  @media (max-width: 768px) {
    main {
      max-width: initial;
    }
  }
  
  .rail {
    display: grid;
    grid-auto-flow: column;
    grid-gap: 3rem;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    .rail {
      grid-auto-flow: row;
      justify-items: center;
      grid-gap: 1rem;
    }
  }

  .apps {
    display: grid;
    grid-auto-flow: column;
    justify-content: center;
    grid-gap: 3rem;
  }

	h1 {
		color: var(--theme-colors-text);
		text-transform: lowercase;
		font-size: 4em;
    font-weight: 200;
    margin: 0;

    font-family: var(--theme-fonts-primary);
  }
  
  a {
    color: var(--theme-colors-primary);
    font-family: var(--theme-fonts-secondary);
  }
  a:visited {
    color: var(--theme-colors-primary_dark)
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>