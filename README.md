# vite-plugin-ejs-importer

a plugin for vite that allows importing `.ejs` files as strings

install:

```bash
# for yarn
yarn add -D vite-plugin-ejs-loader

# for npm
npm install -D vite-plugin-ejs-loader
```

usage:

```javascript
import { defineConfig } from 'vite'
import { VitePluginEJSImporter } from 'vite-plugin-ejs-importer'

export default defineConfig({
	plugins: [VitePluginEJSImporter()],
})
```
