// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {replaceSelectedTextWith} from './utils/editor';
import {camelize, capitalize, classify, dasherize, decamelize, underscore} from './utils/strings';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "case-changer" is now active!');

	context.subscriptions.push(
		vscode.commands.registerCommand('case-changer.uppercase', () => {
			replaceSelectedTextWith(text => text?.toUpperCase());
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('case-changer.lowercase', () => {
			replaceSelectedTextWith(text => text?.toLowerCase());
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('case-changer.dasherize', () => {
			replaceSelectedTextWith(dasherize);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('case-changer.camelize', () => {
			replaceSelectedTextWith(camelize);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('case-changer.classify', () => {
			replaceSelectedTextWith(classify);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('case-changer.underscore', () => {
			replaceSelectedTextWith(underscore);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('case-changer.capitalize', () => {
			replaceSelectedTextWith(capitalize);
		})
	);

	context.subscriptions.push(
		vscode.commands.registerCommand('case-changer.decamelize', () => {
			replaceSelectedTextWith(decamelize);
		})
	);

}

// This method is called when your extension is deactivated
export function deactivate() {}
