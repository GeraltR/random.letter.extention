const vscode = require('vscode');

// Pule znaków do losowania — zachowujemy wielkość liter i uwzględniamy polskie znaki diakrytyczne
const LOWER_BASE = 'abcdefghijklmnopqrstuvwxyz';
const LOWER_PL = 'ąćęłńóśźż';
const UPPER_BASE = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const UPPER_PL = 'ĄĆĘŁŃÓŚŹŻ';

const LOWER_POOL = LOWER_BASE + LOWER_PL;
const UPPER_POOL = UPPER_BASE + UPPER_PL;

function randomChar(pool) {
  return pool.charAt(Math.floor(Math.random() * pool.length));
}

/**
 * Zamienia każdą literę w tekście na losową literę tej samej "kategorii"
 * (mała/duża), z uwzględnieniem polskich znaków. Cyfry, spacje, znaki
 * interpunkcyjne itd. zostają bez zmian.
 */
function randomizeText(text) {
  let result = '';
  for (const ch of text) {
    if (LOWER_POOL.includes(ch)) {
      result += randomChar(LOWER_POOL);
    } else if (UPPER_POOL.includes(ch)) {
      result += randomChar(UPPER_POOL);
    } else {
      result += ch;
    }
  }
  return result;
}

function activate(context) {
  const disposable = vscode.commands.registerCommand(
    'randomLetterAnonymizer.randomize',
    function () {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        return;
      }

      editor.edit((editBuilder) => {
        for (const selection of editor.selections) {
          if (selection.isEmpty) {
            continue;
          }
          const originalText = editor.document.getText(selection);
          const randomizedText = randomizeText(originalText);
          editBuilder.replace(selection, randomizedText);
        }
      });
    }
  );

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};