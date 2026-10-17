import Prism from 'prismjs'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-jsx'
import 'prismjs/components/prism-tsx'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-json'

export function highlightCode(code: string, language: string = 'html'): string {
  const normalizedLang = language.toLowerCase().trim()
  const langMap: Record<string, string> = {
    html: 'markup',
    xml: 'markup',
    svg: 'markup',
    markup: 'markup',
    css: 'css',
    js: 'javascript',
    javascript: 'javascript',
    ts: 'typescript',
    typescript: 'typescript',
    jsx: 'jsx',
    tsx: 'tsx',
    bash: 'bash',
    sh: 'bash',
    shell: 'bash',
    json: 'json',
  }

  const grammarKey = langMap[normalizedLang] || 'markup'
  const grammar = Prism.languages[grammarKey] || Prism.languages.markup

  if (!grammar) {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  try {
    return Prism.highlight(code, grammar, grammarKey)
  } catch {
    return code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }
}
