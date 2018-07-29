// /**
//  * inspection the documents submitted with eslint
//  */
// const process = require('process')
// const exec = require('child_process').exec
// const CLIEngine = require('eslint').CLIEngine
// const cli = new CLIEngine()
// function getErrorLevel(number) {
//   switch (number) {
//     case 2:
//       return 'error'
//     case 1:
//       return 'warn'
//     default:
//   }
//   return 'undefined'
// }
// exec('git diff HEAD --name-only| grep ^src', (error, stdout) => {  // 获取修改后的js文件
//   if (error !== null) {
//     console.log(`exec error: ${error}`)
//     process.exit(1)
//   }
//   if (stdout.length) {
//     const array = stdout.split('\n')
//     let errorCount = 0
//     let warningCount = 0
//     const results = cli.executeOnFiles(array).results
//     results.forEach((result) => {
//       errorCount += result.errorCount
//       warningCount += result.warningCount
//       if (result.messages.length > 0) {
//         console.log('\n')
//         console.log(result.filePath)
//         result.messages.forEach((obj) => {
//           const level = getErrorLevel(obj.severity)
//           console.log(`   ${obj.line}:${obj.column}  ${level}  ${obj.message}  ${obj.ruleId}`)
//         })
//       }
//     })
//     if (warningCount > 0 || errorCount > 0) {
//       console.log(`\n   ${errorCount + warningCount} problems (${errorCount} ${'errors'} ${warningCount} warnings)`)
//       process.exit(1)
//     }
//   }
// })