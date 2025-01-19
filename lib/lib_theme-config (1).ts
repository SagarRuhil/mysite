export const themes = {
  cyberpunk: {
    primary: '#00fff0',
    secondary: '#ff00d4',
    accent: '#7928ca',
    background: '#030014',
  },
  retrowave: {
    primary: '#ff71ce',
    secondary: '#01cdfe',
    accent: '#05ffa1',
    background: '#2d1b69',
  },
  future: {
    primary: '#64ffda',
    secondary: '#ff6b6b',
    accent: '#ffd93d',
    background: '#1a1a1a',
  },
  neon: {
    primary: '#39ff14',
    secondary: '#ff00ff',
    accent: '#00ffff',
    background: '#000000',
  },
  pastel: {
    primary: '#ffb3ba',
    secondary: '#bae1ff',
    accent: '#baffc9',
    background: '#fff5f5',
  },
}

export type ThemeType = keyof typeof themes

