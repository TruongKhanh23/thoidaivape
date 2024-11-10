import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },
  {
    ...pluginVue.configs['flat/essential'],
    rules: {
      'vue/block-lang': 'off', // Vô hiệu hóa quy tắc yêu cầu `lang` trong thẻ <script>
    },
  },
  ...vueTsEslintConfig(),
  skipFormatting,
]
