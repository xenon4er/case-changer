import * as vscode from 'vscode';

export function replaceSelectedTextWith(callback: (selectedText: string) => string): void {
    const editor = vscode.window.activeTextEditor;

		if (editor) {
			const document = editor.document;
			const selections = editor.selections;

			editor.edit(editBuilder => {
				for(let selection of selections) {
					const selectedText = document.getText(selection);
					editBuilder.replace(selection, callback(selectedText));
				}
			});
		}
}