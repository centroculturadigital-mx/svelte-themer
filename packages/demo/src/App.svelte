<script>
  import { ThemeWrapper, ThemeToggle } from '@centroculturadigital-mx/svelte-themer'

  const themes = [
  {
    name: 'light',
    properties: {
      colors: {
        text: '#282230',
        background: '#f1f1f1',
        primary: '#01796f',
        primary_dark: '#016159',
        secondary: '#562931',
      }
    },
  },
  {
    name: 'dark',
    properties: {
      colors: {
        text: '#f1f1f1',
        background: '#27323a',
        primary: '#01978b',
        primary_dark: '#00887c',
        secondary: '#fe8690',
      }
    },
  },
  {
    name: 'forest',
    properties: {
      colors: {
        background: '#3b6c4c',
        text: '#f9f2cf',
        primary: '#efdc7e',
        primary_dark: '#e4d589',
        secondary: '#4a875f',
      }
    },
  },
  {
    name: 'discord',
    properties: {
      colors: {
        background: '#2C2F33',
        text: '#FFFFFF',
        primary: '#7289DA',
        primary_dark: '#7289DA',
        secondary: '#99AAB5',
      }
    },
  },
]
</script>

<ThemeWrapper>
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
		color: var(--theme-text);
		text-transform: lowercase;
		font-size: 4em;
    font-weight: 200;
    margin: 0;
  }
  
  a {
    color: var(--theme-primary)
  }
  a:visited {
    color: var(--theme-primary_dark)
  }

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>