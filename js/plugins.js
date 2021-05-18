const yaml = require('js-yaml')
const fs = require('fs')

try {
    let content = fs.readFileSync('./plugins/list.yml', 'utf-8')
    let plugins = yaml.load(content)

    for (let pluginName in plugins) {
        let plugin = plugins[pluginName]
        console.log(`${plugin.name} v${plugin.version}\n"${plugin.short_description}"`)
        console.log('Content:')
        for (let contentIndex in plugin.description.content)
            console.log(`- ${plugin.description.content[contentIndex]}`)
        console.log('Images:')
        for (let imageIndex in plugin.description.images)
            console.log(`- ${plugin.description.images}`)
    }
} catch (e) {
    console.log(e)
}