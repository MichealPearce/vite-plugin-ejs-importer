import { readFile } from 'fs/promises'
import type { Plugin } from 'vite'

export function VitePluginEJSImporter(): Plugin {
	return {
		name: 'vite-plugin-ejs-importer',
		async load(id) {
			if (!id.endsWith('.ejs')) return

			try {
				const data = await readFile(id, 'utf-8')
				return `export default ${JSON.stringify(data)}`
			} catch (error) {
				console.warn(`[vite-plugin-ejs-importer] unable to load ${id}`, error)
			}
		},
	}
}
