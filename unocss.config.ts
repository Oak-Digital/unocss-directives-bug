import { defineConfig, presetUno } from 'unocss';
import transformerDirectives from '@unocss/transformer-directives';
import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
  include: [/(styles|lib|pages|components).*\.(s?css|[jt]sx?)$/],
  exclude: [],
  transformers: [
    transformerDirectives({
      enforce: 'pre',
    }),
    transformerVariantGroup(),
  ],
  rules: [
    /* [ */
    /*     /^text-(.*)$/, */
    /*     ([, c]: [string | null | undefined, string|null|undefined], { theme }: any) => { */
    /*         if (c && theme?.colors?.[c]) return { color: theme.colors[c] }; */
    /*     }, */
    /* ], */
  ],
  presets: [
    /* presetTypography(), */
    presetUno({}),
  ],

  theme: {},
});
