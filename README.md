# is-pwa

Checks to see if the specified URL has a manifest file.

## Usage:

```sh
$ npx pdehaan/is-pwa https://github.com

{
  "name": "GitHub",
  "icons": [
    {
      "sizes": "114x114",
      "src": "https://assets-cdn.github.com/apple-touch-icon-114x114.png"
    },
    {
      "sizes": "120x120",
      "src": "https://assets-cdn.github.com/apple-touch-icon-120x120.png"
    },
    {
      "sizes": "144x144",
      "src": "https://assets-cdn.github.com/apple-touch-icon-144x144.png"
    },
    {
      "sizes": "152x152",
      "src": "https://assets-cdn.github.com/apple-touch-icon-152x152.png"
    },
    {
      "sizes": "180x180",
      "src": "https://assets-cdn.github.com/apple-touch-icon-180x180.png"
    },
    {
      "sizes": "57x57",
      "src": "https://assets-cdn.github.com/apple-touch-icon-57x57.png"
    },
    {
      "sizes": "60x60",
      "src": "https://assets-cdn.github.com/apple-touch-icon-60x60.png"
    },
    {
      "sizes": "72x72",
      "src": "https://assets-cdn.github.com/apple-touch-icon-72x72.png"
    },
    {
      "sizes": "76x76",
      "src": "https://assets-cdn.github.com/apple-touch-icon-76x76.png"
    }
  ]
}
```

If the specified site does NOT have a manifest file, `undefined` is returned:

```sh
$ npx pdehaan/is-pwa https://google.com

undefined
```
