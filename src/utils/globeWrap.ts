import { findAndReplace } from 'mdast-util-find-and-replace'

export function remarkGlobe() {
  return (tree: any) => {
    findAndReplace(tree, [
      [
        /🌐/g,
        () => ({
          type: 'html',
          value: '<span class="paragraph-separator">🌐</span>',
        }),
      ],
    ])
  }
}
