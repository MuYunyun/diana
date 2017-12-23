/**
 * generate the index.html
 */
const fs = require('fs'),
      path = require('path'),
      chalk = require('chalk'),
      sass = require('node-sass'),
      md = require('markdown-it')()
// Compile the mini.css framework and custom CSS styles, using `node-sass`.
sass.render({
  file: path.join('docs', 'mini', 'flavor.scss'),
  outFile: path.join('docs', 'mini.css'),
  outputStyle: 'compressed'
}, (err, result) => {
  if (!err) {
    fs.writeFile(path.join('docs', 'mini.css'), result.css, (err2) => {
      if (!err2) console.log(`${chalk.green('SUCCESS!')} mini.css file generated!`)
      else console.log(`${chalk.red('ERROR!')} During mini.css file generation: ${err}`)
    })
  } else {
    console.log(`${chalk.red('ERROR!')} During mini.css file generation: ${err}`)
  }
})

// 因为是 npm 的命令，所以路径是 '.' 不是 '..'
const snippetsPath = './snippets/', staticPartsPath = './static-parts', docsPath = './docs', snippets = {}
let startPart = '', endPart = '', output = '', tagDbData = {}
const objectFromPairs = arr => arr.reduce((a, v) => (a[v[0]] = v[1], a), {})
const capitalize = (str, lowerRest = false) => str.slice(0, 1).toUpperCase() + (lowerRest ? str.slice(1).toLowerCase() : str.slice(1));
// start the time
console.time('Builder')
// Synchronously read all snippets and sort them as necessary (case-insensitive)
try {
  let snippetFilenames = fs.readdirSync(snippetsPath) // readdirSync 返回文件名的数组
  snippetFilenames.sort((a, b) => {
    a = a.toLowerCase()
    b = b.toLowerCase()
    if (a < b) return -1
    if (a > b) return 1
    return 0
  })
  // Store the data read from each snippet in the appropriate object
  for (let snippet of snippetFilenames) {
    snippets[snippet] = fs.readFileSync(path.join(snippetsPath, snippet), 'utf8')
  }
} catch (err) {
  console.log(`${chalk.red('ERROR!')} During snippet loading: ${err}`)
  process.exit(1)
}
// Load static parts for the index.html file
try {
  startPart = fs.readFileSync(path.join(staticPartsPath, 'index-start.html'), 'utf8')
  endPart = fs.readFileSync(path.join(staticPartsPath, 'index-end.html'), 'utf8')
}
catch (err) { // Handle errors (hopefully not!)
  console.log(`${chalk.red('ERROR!')} During static part loading: ${err}`)
  process.exit(1);
}

// Load tag data from the database
try {
  // 根据 split('\n'), 所以 tag_database 的末尾必须多加一行
  const pairs = fs.readFileSync('tag_database', 'utf8').split('\n').slice(0, -1).map(v => v.split(':').slice(0, 2)) // [['anagrams', 'string'], ['arrayAverage', 'array']]
  tagDbData = objectFromPairs(pairs) // {anagrams: 'string', arrayAverage: 'array'}
  // 统计相同标签含有的数量
  tagDbStats = pairs.sort((a, b) => a[1].localeCompare(b[1])).reduce((acc, val) => { acc.hasOwnProperty(val[1]) ? acc[val[1]]++ : acc[val[1]] = 1; return acc }, {})
}
catch (err) { // Handle errors (hopefully not!)
  console.log(`${chalk.red('ERROR!')} During tag database loading: ${err}`)
  process.exit(1)
}

// Create the output for the index.html file
try {
  // Add the start static part
  output += `${startPart + '\n'}`
  // 左侧列表渲染
  for (let tag of [...new Set(Object.entries(tagDbData).map(t => t[1]))].sort((a, b) => a.localeCompare(b))) {
    // Object.entries(tagDbData).map(t => t[1])) 为取到 tag 对应的类别，new Set 为去重
    output += `<h3>` + md.render(`${capitalize(tag, true)}\n`).replace(/<p>/g, '').replace(/<\/p>/g, '') + `</h3>`
    for (let taggedSnippet of Object.entries(tagDbData).filter(v => v[1] === tag)) {
      // 生成索引
      output += md.render(`[${taggedSnippet[0]}](#${taggedSnippet[0].toLowerCase()})\n`).replace(/<p>/g, '').replace(/<\/p>/g, '').replace(/<a/g, '<a class="sublink-1"')
    }
    output += '\n'
  }
  output += `</nav><main class="col-sm-12 col-md-8 col-lg-9" style="height: 100%;overflow-y: auto; background: #eceef2;">`
  output += `<a id="top">&nbsp;</a>`
  // 渲染右侧的内容
  for (let tag of [...new Set(Object.entries(tagDbData).map(t => t[1]))].sort((a, b) => a.localeCompare(b))) {
    // 类的主题 ## 解析为 h2
    output += md.render(`## ${capitalize(tag, true)}\n`).replace(/<h2>/g, '<h2 style="text-align:center;">')
    for (let taggedSnippet of Object.entries(tagDbData).filter(v => v[1] === tag)) {
      output += '<div class="card fluid"><div class="section double-padded">' + md.render(`${snippets[taggedSnippet[0] + '.md']}`).replace(/<h3/g, `<h3 id="${taggedSnippet[0].toLowerCase()}"`).replace(/<\/h3>/g, '</h3></div><div class="section double-padded">') + '</div></div><br/>'
    }
  }
  // Add the ending static part
  output += `\n${endPart + '\n'}`
  // Write to the index.html file
  fs.writeFileSync(path.join(docsPath, 'index.html'), output)
}
catch (err) {  // Handle errors (hopefully not!)
  console.log(`${chalk.red('ERROR!')} During index.html generation: ${err}`)
  process.exit(1)
}
// Log a success message
console.log(`${chalk.green('SUCCESS!')} index.html file generated!`)
// Log the time taken
console.timeEnd('Builder')