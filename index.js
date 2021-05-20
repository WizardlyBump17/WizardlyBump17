const express = require('express')
const yaml = require('js-yaml')
const fs = require('fs')

const app = express()
setup()

app.listen(8080, () => {
    console.log('started server')
})

function setup() {
    let plugins = readPlugins()

    app.set('view engine', 'ejs')

    app.use(express.static(__dirname + '/public'))

    app.get('/', (req, res) => {
        res.render('pages/index', {css_files: ['index.css'], js_files: []})
    })
    app.get('/plugins', (req, res) => {
        res.render('pages/plugins', {css_files: ['plugins.css'], js_files: ['slideshow.js'], plugins: plugins})
    })
}

function readPlugins() {
    try {
        let content = fs.readFileSync('plugins.yml', 'utf-8')
        let data = yaml.load(content)

        let plugins = []

        for (const pluginName in data) {
            const element = data[pluginName];
            plugins.push(element)
        }

        return plugins
    } catch (e) {
        console.log(e)
    }
}