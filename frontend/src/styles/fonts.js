const getFontFace = (payload) => {
  payload.fontName = `${payload.family}${payload.suffix !== undefined ? `-${payload.suffix}` : ''}`;
  return `
    @font-face {
      font-family: '${payload.family}';
      src: url(/static/fonts/${payload.family}/${payload.fontName}.eot);
      src: url(/static/fonts/${payload.family}/${payload.fontName}.eot?#iefix) format('embedded-opentype'),
        url(/static/fonts/${payload.family}/${payload.fontName}.woff2) format('woff2'),
        url(/static/fonts/${payload.family}/${payload.fontName}.woff) format('woff'),
        url(/static/fonts/${payload.family}/${payload.fontName}.ttf) format('truetype'),
        url(/static/fonts/${payload.family}/${payload.fontName}.svg#${payload.fontName}) format('svg');
      font-weight: ${payload.weight};
      font-style: ${payload.style};
    }
  `;
};

export const family = {
  DINPro: 'DINPro',
  DINProCondensed: 'DINProCondensed',
};

export const cssFamily = {
  DINPro: `font-family: ${family.DINPro}, sans-serif;`,
  DINProCondensed: `font-family: ${family.DINProCondensed}, sans-serif;`,
};

export const fontFace = `
  ${getFontFace({family: family.DINPro, weight: '400', style: 'normal'})}
  ${getFontFace({family: family.DINPro, suffix: 'Black', weight: '900', style: 'normal'})}
  ${getFontFace({family: family.DINPro, suffix: 'BlackItalic', weight: '900', style: 'italic'})}
  ${getFontFace({family: family.DINPro, suffix: 'Bold', weight: '700', style: 'normal'})}
  ${getFontFace({family: family.DINPro, suffix: 'BoldItalic', weight: '700', style: 'italic'})}
  ${getFontFace({family: family.DINPro, suffix: 'Italic', weight: '400', style: 'italic'})}
  ${getFontFace({family: family.DINPro, suffix: 'Light', weight: '300', style: 'normal'})}
  ${getFontFace({family: family.DINPro, suffix: 'LightItalic', weight: '300', style: 'italic'})}
  ${getFontFace({family: family.DINPro, suffix: 'Medium', weight: '500', style: 'normal'})}
  ${getFontFace({family: family.DINPro, suffix: 'MediumItalic', weight: '500', style: 'italic'})}
  ${getFontFace({family: family.DINProCondensed, weight: '400', style: 'normal'})}
  ${getFontFace({family: family.DINProCondensed, suffix: 'Black', weight: '900', style: 'normal'})}
  ${getFontFace({family: family.DINProCondensed, suffix: 'BlackItalic', weight: '900', style: 'italic'})}
  ${getFontFace({family: family.DINProCondensed, suffix: 'Bold', weight: '700', style: 'normal'})}
  ${getFontFace({family: family.DINProCondensed, suffix: 'BoldItalic', weight: '700', style: 'italic'})}
  ${getFontFace({family: family.DINProCondensed, suffix: 'Italic', weight: '400', style: 'italic'})}
  ${getFontFace({family: family.DINProCondensed, suffix: 'Light', weight: '300', style: 'normal'})}
  ${getFontFace({family: family.DINProCondensed, suffix: 'LightItalic', weight: '300', style: 'italic'})}
  ${getFontFace({family: family.DINProCondensed, suffix: 'Medium', weight: '500', style: 'normal'})}
  ${getFontFace({family: family.DINProCondensed, suffix: 'MediumItalic', weight: '500', style: 'italic'})}
`;
