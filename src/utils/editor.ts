import * as vscode from 'vscode';

export function replaceSelectedTextWith(callback: (selectedText: string) => string): void {
    const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selection = editor.selection;

			const selectedText = document.getText(selection);
			editor.edit(editBuilder => {
				editBuilder.replace(selection, callback(selectedText));
			});
		}
}