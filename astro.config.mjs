// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      // 双主题：浅色/深色，输出 CSS 变量，由 [data-theme] 在 global.css 里切换
      themes: {
        light: 'vitesse-light',
        dark: 'vitesse-dark',
      },
      transformers: [
        {
          // 在 <pre> 上写一个 data-lang 属性，供右上角语言标签使用
          pre(node) {
            const lang = this.options.lang;
            if (lang && lang !== 'text' && lang !== 'plaintext') {
              node.properties['data-lang'] = lang;
            }
          },
        },
      ],
    },
  },
});
