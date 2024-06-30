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
  const light = shadeColor(0.2)
  const dark = shadeColor(-0.2)
  const lightVariant1 = shadeColor(0.4)
  const lightVariant2 = shadeColor(0.6)
  const darkVariant1 = shadeColor(-0.4)
  const darkVariant2 = shadeColor(-0.6)

  return {
    light,
    dark,
    lightVariant1,
    lightVariant2,
    darkVariant1,
    darkVariant2
  }
}

export function generateJsonRequest(typographyStore, colorStore, componentStore) {
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
      lightVariant2: colorStore.lightVariant2
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
