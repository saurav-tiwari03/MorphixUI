import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://morphixui.sauravgo.fun'

    // Get all pages from the app directory
    const getPages = (dir: string): string[] => {
        const pages: string[] = []
        const items = fs.readdirSync(dir, { withFileTypes: true })

        for (const item of items) {
            const fullPath = path.join(dir, item.name)

            if (item.isDirectory()) {
                // Skip special Next.js directories
                if (!['api', 'admin', 'private', '_next', 'static', 'node_modules'].includes(item.name)) {
                    pages.push(...getPages(fullPath))
                }
            } else if (item.name === 'page.tsx' || item.name === 'page.ts') {
                // Convert file path to URL path
                const relativePath = path.relative(path.join(process.cwd(), 'src/app'), fullPath)
                const urlPath = relativePath.replace(/\.(tsx?|jsx?)$/, '').replace(/\/page$/, '')
                const url = urlPath === '' ? '' : `/${urlPath}`
                pages.push(url)
            }
        }

        return pages
    }

    const pages = getPages(path.join(process.cwd(), 'src/app'))

    // Define priority and change frequency based on path patterns
    const getPageConfig = (path: string) => {
        if (path === '') return { priority: 1, changeFrequency: 'weekly' }
        if (path === '/getting-started') return { priority: 0.8, changeFrequency: 'monthly' }
        if (path === '/components') return { priority: 0.9, changeFrequency: 'weekly' }
        if (path.includes('/signup') || path.includes('/login')) return { priority: 0.7, changeFrequency: 'monthly' }
        if (path.includes('/forgot-password')) return { priority: 0.5, changeFrequency: 'monthly' }
        if (path.includes('/terms') || path.includes('/privacy')) return { priority: 0.3, changeFrequency: 'yearly' }

        // Default for other pages
        return { priority: 0.6, changeFrequency: 'monthly' }
    }

    return pages.map(page => {
        const config = getPageConfig(page)
        return {
            url: `${baseUrl}${page}`,
            lastModified: new Date(),
            changeFrequency: config.changeFrequency as 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never',
            priority: config.priority,
        }
    })
}
