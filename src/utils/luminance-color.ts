export const colorLuminance = (hex: string, lum: number = 0): string => {
  // validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');

  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }

  // convert to decimal and change luminosity
  let rgb = '#';
  for (let i = 0; i < 3; i++) {
    const c1 = parseInt(hex.substr(i * 2, 2), 16);
    const c2 = Math.round(Math.min(Math.max(0, c1 + (c1 * lum)), 255)).toString(16);
    rgb += ('00' + c2).substr(c2.length);
  }

  return rgb;
};
