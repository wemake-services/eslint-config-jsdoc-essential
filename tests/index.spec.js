'use strict'

const path = require('path')
const { CLIEngine } = require('eslint')

function fixtureFile (name) {
  return path.resolve(__dirname, 'fixtures', name)
}

describe('eslint-config-jsdoc-essential', () => {
  let cli

  beforeAll(() => {
    cli = new CLIEngine({
      useEslintrc: false,
      configFile: path.resolve(__dirname, '..', 'index.js')
    })
  })

  test('correct style', () => {
    const result = cli.executeOnFiles([fixtureFile('correct.js')])
    expect(result.errorCount).toEqual(0)
  })

  test('incorrect style', () => {
    const result = cli.executeOnFiles([fixtureFile('incorrect.js')])
    expect(result.errorCount).toEqual(5)

    const errors = [
      'jsdoc/require-description-complete-sentence',
      'jsdoc/require-param',
      'jsdoc/newline-after-description',
      'jsdoc/check-tag-names' // twice
    ]

    const eslintErrors = []
    for (const error of result.results[0].messages) {
      eslintErrors.push(error.ruleId)
    }

    for (const error of errors) {
      expect(eslintErrors).toContain(error)
    }
  })
})
