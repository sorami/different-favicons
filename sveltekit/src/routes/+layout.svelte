<script lang="ts">
  const faviconDict: Record<string, string> = {
    development: "🚧",
    staging: "🚨",
    production: "🥳",
  };

  const faviconChar = faviconDict[import.meta.env.MODE];
  const faviconHref = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${faviconChar}</text></svg>`;
</script>

<svelte:head>
  <link rel="icon" href={faviconHref} />
</svelte:head>

<slot />
