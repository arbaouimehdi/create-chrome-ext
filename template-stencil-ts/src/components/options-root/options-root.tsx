import { Component, h } from '@stencil/core'

@Component({
  tag: 'options-root',
  styleUrl: 'options-root.css',
  shadow: true,
})
export class OptionsRoot {
  render() {
    let crx = 'create-chrome-ext'
    return (
      <main>
        <h3>Options Page!</h3>

        <h6>v 0.0.0</h6>

        <a href="https://www.npmjs.com/package/create-chrome-ext" target="_blank">
          Power by {crx}
        </a>
      </main>
    )
  }
}
