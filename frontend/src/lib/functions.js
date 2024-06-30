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

  // Générer les variantes de couleur
  const light = shadeColor(0.2)
  const dark = shadeColor(-0.2)
  const lightVariant1 = shadeColor(0.4)
  const lightVariant2 = shadeColor(0.6)
  const darkVariant1 = shadeColor(-0.4)
  const darkVariant2 = shadeColor(-0.6)

  // Retourner les variantes de couleur
  return {
    light,
    dark,
    lightVariant1,
    lightVariant2,
    darkVariant1,
    darkVariant2
  }
}
