export function getCssImportGoogleFont(fontFamily) {
  return `@import url('https://fonts.googleapis.com/css2?family=${fontFamily.replaceAll(
    ' ',
    '+'
  )}:wght@100;200;300;400;500;600;700;800;900&display=swap');`
}

export function generateColorVariants(hexColor) {
  // Convertir la couleur hexadécimale en valeurs RGB
  const r = parseInt(hexColor.slice(1, 3), 16)
  const g = parseInt(hexColor.slice(3, 5), 16)
  const b = parseInt(hexColor.slice(5, 7), 16)

  // Fonction pour générer une couleur plus claire ou plus foncée
  function shadeColor(p) {
    const t = p < 0 ? 0 : 255
    const p_ = p < 0 ? p * -1 : p
    const R = Math.round(r * (1 - p_) + t * p_)
    const G = Math.round(g * (1 - p_) + t * p_)
    const B = Math.round(b * (1 - p_) + t * p_)
    return `#${R.toString(16).padStart(2, '0')}${G.toString(16).padStart(2, '0')}${B.toString(16).padStart(2, '0')}`
  }

  // Générarion des variantes de couleur
  const light = shadeColor(0.3)
  const dark = shadeColor(-0.3)
  const lightVariant1 = shadeColor(0.6)
  const lightVariant2 = shadeColor(0.7)
  const darkVariant1 = shadeColor(-0.6)
  const darkVariant2 = shadeColor(-0.7)

  return {
    light,
    dark,
    lightVariant1,
    lightVariant2,
    darkVariant1,
    darkVariant2
  }
}

export function getContrastingTextColor(hexColor) {
  console.log(hexColor)
  let r = parseInt(hexColor.slice(1, 3), 16)
  let g = parseInt(hexColor.slice(3, 5), 16)
  let b = parseInt(hexColor.slice(5, 7), 16)

  let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  return luminance > 0.5 ? '#000000' : '#FFFFFF'
}

export function generateJsonRequest(typographyStore, colorStore, componentStore, layoutStore) {
  const request = {
    typography: {
      fontFamily: typographyStore.fontFamily,
      h1: {
        fontSize: typographyStore.h1.fontSize,
        fontWeight: typographyStore.h1.fontWeight
      },
      h2: {
        fontSize: typographyStore.h2.fontSize,
        fontWeight: typographyStore.h2.fontWeight
      },
      h3: {
        fontSize: typographyStore.h3.fontSize,
        fontWeight: typographyStore.h3.fontWeight
      },
      h4: {
        fontSize: typographyStore.h4.fontSize,
        fontWeight: typographyStore.h4.fontWeight
      },
      h5: {
        fontSize: typographyStore.h5.fontSize,
        fontWeight: typographyStore.h5.fontWeight
      },
      h6: {
        fontSize: typographyStore.h6.fontSize,
        fontWeight: typographyStore.h6.fontWeight
      },
      p: {
        fontSize: typographyStore.p.fontSize,
        fontWeight: typographyStore.p.fontWeight
      }
    },
    colors: {
      primary: colorStore.primary,
      dark: colorStore.dark,
      light: colorStore.light,
      darkVariant1: colorStore.darkVariant1,
      darkVariant2: colorStore.darkVariant2,
      lightVariant1: colorStore.lightVariant1,
      lightVariant2: colorStore.lightVariant2,
      contrast: colorStore.textButton
    },
    layout: {
      container: {
        flexDirection: layoutStore.flexDirection,
        justifyContent: layoutStore.justifyContent,
        alignItems: layoutStore.alignItems,
        maxWidth: layoutStore.maxWidth,
        paddingTop: layoutStore.padding.top,
        paddingBottom: layoutStore.padding.bottom,
        paddingLeft: layoutStore.padding.left,
        paddingRight: layoutStore.padding.right
      },
      grid: {
        columns: layoutStore.grid.columns,
        gutter: layoutStore.grid.gutter
      },
      breakpoints: [
        { name: 'md', value: layoutStore.breakpoints.sm },
        { name: 'lg', value: layoutStore.breakpoints.md },
        { name: 'xl', value: layoutStore.breakpoints.lg }
      ]
    },
    components: {
      button: {
        borderRadius: componentStore.button.borderRadius,
        padding: componentStore.button.padding,
        fontSize: componentStore.button.fontSize,
        border: componentStore.button.border
      },
      input: {
        borderRadius: componentStore.input.borderRadius,
        padding: componentStore.input.padding
      },
      card: {
        borderRadius: componentStore.card.borderRadius,
        padding: componentStore.card.padding
      }
    }
  }
  return request
}

export function generateCssContent(data) {
  const importGoogleFont = getCssImportGoogleFont(data.typography.fontFamily)

  let cssContent = `${importGoogleFont}
        
:root {
  --primary-color: ${data.colors.primary};
  --dark-primary-color: ${data.colors.dark};
  --light-primary-color: ${data.colors.light};
  --dark-variant1-color: ${data.colors.darkVariant1};
  --dark-variant2-color: ${data.colors.darkVariant2};
  --light-variant1-color: ${data.colors.lightVariant1};
  --light-variant2-color: ${data.colors.lightVariant2};

  --layout-gutter: ${data.layout.grid.gutter}px;
  --layout-columns: ${data.layout.grid.columns};

  --contrast-color: ${data.colors.contrast};
}

html, body {
  font-family: ${data.typography.fontFamily};
}

h1 {
  font-size: ${data.typography.h1.fontSize}px;
  font-weight: ${data.typography.h1.fontWeight};
}

h2 {
  font-size: ${data.typography.h2.fontSize}px;
  font-weight: ${data.typography.h2.fontWeight};
}

h3 {
  font-size: ${data.typography.h3.fontSize}px;
  font-weight: ${data.typography.h3.fontWeight};
}

h4 {
  font-size: ${data.typography.h4.fontSize}px;
  font-weight: ${data.typography.h4.fontWeight};
}

h5 {
  font-size: ${data.typography.h5.fontSize}px;
  font-weight: ${data.typography.h5.fontWeight};
}

h6 {
  font-size: ${data.typography.h6.fontSize}px;
  font-weight: ${data.typography.h6.fontWeight};
}

p {
  font-size: ${data.typography.p.fontSize}px;
  font-weight: ${data.typography.p.fontWeight};
}

button {
  border-radius: ${data.components.button.borderRadius}px;
  padding: ${data.components.button.padding}px ${data.components.button.padding * 3}px;
  font-size: ${data.components.button.fontSize}px;
  border: ${data.components.button.border}px;
}

.container {
  display: flex;
  flex-direction: ${data.layout.container.flexDirection};
  justify-content: ${data.layout.container.justifyContent};
  align-items: ${data.layout.container.alignItems};
  max-width: ${data.layout.container.maxWidth}px;
  padding: ${data.layout.container.paddingTop}px ${
    data.layout.container.paddingRight
  }px ${data.layout.container.paddingBottom}px ${data.layout.container.paddingLeft}px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(var(--layout-columns), 1fr);
  grid-gap: var(--layout-gutter);
}

.button-primary {
  background-color: var(--primary-color);
  color: var(--contrast-color);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.button-primary:hover {
  background-color: var(--dark-primary-color);
}

.button-secondary {
  box-shadow: inset 0 0 0 2px var(--primary-color);
  background-color: transparent;
  color: var(--primary-color);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.button-secondary:hover {
  background-color: var(--primary-color);
  color: var(--contrast-color);
}

.button-disabled {
  background-color: lightgray;
  color: white;
  cursor: not-allowed;
}

.button-xl {
  padding: 15px 40px;
  font-size: 20px;
}

.button-s {
  padding: 5px 15px;
  font-size: 12px;
}

input[type="text"] {
  border-radius: ${data.components.input.borderRadius}px;
  padding: ${data.components.input.padding}px;
  border: 1px solid var(--primary-color);
}

input[type="text"]:focus {
  outline: none;
  border: 2px solid var(--primary-color);
}

input[type="text"].input-success {
  border: 1px solid green !important;
}

input[type="text"].input-success:focus {
  border: 2px solid green;
}

input[type="text"].input-error {
  border: 1px solid red;
}

input[type="text"].input-error:focus {
  border: 2px solid red;
}

.card {
  border-radius: ${data.components.card.borderRadius}px;
  padding: ${data.components.card.padding}px;
}
`

  for (let i = 1; i <= data.layout.grid.columns; i++) {
    cssContent += `
  .col-${i} {
    grid-column: span ${i};
  }`
  }

  data.layout.breakpoints.forEach((breakpoint) => {
    cssContent += `
@media screen and (min-width: ${breakpoint.value}px) {
          `

    for (let i = 1; i <= data.layout.grid.columns; i++) {
      cssContent += `
  .col-${breakpoint.name}-${i} {
    grid-column: span ${i};
  }
            `
    }
    cssContent += '}'
  })

  return cssContent
}
