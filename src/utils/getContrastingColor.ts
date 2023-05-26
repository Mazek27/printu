const BRIGHTNESS_THRESHOLD = 200;

export function getContrastingColor(inputColor: string): string {
  const color = inputColor.replace(/^#/, '');

  const red = parseInt(color.substr(0, 2), 16);
  const green = parseInt(color.substr(2, 2), 16);
  const blue = parseInt(color.substr(4, 2), 16);

  const brightness = (red * 299  + green * 587  + blue * 114) / 1000;

  return brightness > BRIGHTNESS_THRESHOLD ? 'black' : 'white';
}