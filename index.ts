import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Dell Clarity';
const colors = {
  black: '#111111',
  white: '#FFFFFF',
  blue: '#007db8',
  lightBlue: '#cce5f1',
  red: '#ce1126',
  green: '#c1d82f',
  yellow: '#f2af00'
}

const colorSet: IColorSet = {
  base: {
    background: colors.black,
    foreground: colors.white,
    color1: colors.blue,
    color2: colors.green,
    color3: colors.lightBlue,
    color4: colors.yellow
  },
  overrides: {
	  'editor.lineHighlightBackground': '#151515',
	  'editor.lineHighlightBorder': null,
	  'editorIndentGuide.background': '#111111',
	  'editorIndentGuide.activeBackground': '#111111',
	  'editorBracketMatch.border': '#2A2A2A',
	  'editorBracketMatch.background': '#111111',
  }
};

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
