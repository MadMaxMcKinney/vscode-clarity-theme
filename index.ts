import * as path from 'path';
import { generateTheme, IColorSet } from 'vscode-theme-generator';

const themeName = 'Dell Clarity';
const colors = {
  black: '#111111',
  white: '#FFFFFF',
  lightGray: '#F4F4F4',
  lightGray2: '#EEEEEE',
  lightGray3: '#E4E4E4',
  darkGray: '#666666',
  darkGray2: '#555555',
  darkGray3: '#444444',
  darkGray4: '#333333',
  mediumGray: '#CCCCCC',
  blue: '#007db8',
  blue2: '#00447c',
  lightBlue: '#cce5f1',
  red: '#ce1126',
  green: '#c1d82f',
  green2: '#6ea204',
  yellow: '#f2af00',
  transparent: '#00000000'
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
  syntax: {
	  comment: colors.darkGray
  },
  overrides: {
		'editor.lineHighlightBackground': '#151515',
		'editor.lineHighlightBorder': null,
		'editorIndentGuide.background': colors.transparent,
		'editorIndentGuide.activeBackground': colors.transparent,
		'editorBracketMatch.border': '#2A2A2A',
		'editorBracketMatch.background': colors.transparent,

		'editor.findMatchBackground': colors.darkGray,
		'editor.findMatchHighlightBackground': colors.darkGray4,

		'list.activeSelectionBackground': colors.blue,
		'list.inactiveSelectionBackground': colors.blue,

		'button.background': colors.blue,
  }
};

const colorSetLight: IColorSet = {
	base: {
	  background: colors.white,
	  foreground: colors.black,
	  color1: colors.blue,
	  color2: colors.green2,
	  color3: colors.blue2,
	  color4: colors.yellow
	},
	syntax: {
		comment: colors.mediumGray
	},
	overrides: {
		'editor.lineHighlightBackground': colors.lightGray,
		'editor.lineHighlightBorder': null,
		'editorIndentGuide.background': colors.transparent,
		'editorIndentGuide.activeBackground': colors.transparent,
		'editorBracketMatch.border': colors.lightGray,
		'editorBracketMatch.background': colors.transparent,
		'editor.selectionBackground': colors.lightGray3,
		'editor.wordHighlightBackground': colors.lightGray2,
		'editor.findMatchBackground': colors.lightGray3,
		'editor.findMatchHighlightBackground': colors.lightGray,

		'editorLineNumber.foreground': colors.blue,
		'editorLineNumber.activeForeground': colors.blue2,

		'sideBar.foreground': colors.black,
		'sideBar.background': colors.lightGray,

		'activityBar.background': colors.lightGray2,
		'activityBar.foreground': colors.black,

		'menu.background': colors.lightGray2,

		'editorCursor.foreground': colors.lightGray3,

		'tab.border': null,

		'button.background': colors.blue,

		'statusBar.background': colors.blue,

		'titleBar.activeBackground': colors.lightGray2,
		'titleBar.inactiveBackground': colors.lightGray3,

		'list.activeSelectionBackground': colors.blue,
		'list.activeSelectionForeground': colors.white,
		'list.hoverBackground': colors.lightGray3,
		'list.focusBackground': colors.lightGray3,
		'list.inactiveFocusBackground': colors.lightGray3,
		'list.inactiveSelectionBackground': colors.blue,
		'list.inactiveSelectionForeground': colors.white,
		
	}
  };

generateTheme(themeName, colorSet, path.join(__dirname, 'theme.json'));
generateTheme(themeName + " Light", colorSetLight, path.join(__dirname, 'light-theme.json'));
