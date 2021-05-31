import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'

const pluginsDirectory = path.join(process.cwd(), 'plugins')

export function getPluginsData() {
    let fileNames = fs.readdirSync(pluginsDirectory)
    let allData = fileNames.map(fileName => {
        let id = fileName.replace(/.yml$/, '')
        let content = fs.readFileSync(path.join(pluginsDirectory, fileName), 'utf-8')
        let data = yaml.load(content)

        return {
            id,
            ...data
        }
    })

    return allData
}