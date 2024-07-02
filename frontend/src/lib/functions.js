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
