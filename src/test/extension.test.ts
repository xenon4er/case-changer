import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import {camelize, capitalize, dasherize, underscore} from '../utils/strings';
// import * as myExtension from '../../extension';

suite('Extension Test Suite', () => {
	vscode.window.showInformationMessage('Start all tests.');

	const CAPITTALIZED_STRING = "MySuperVar";
	const CAMEL_CASED_STRING = "mySuperVar";
	const DASHERISED_STRING = "my-super-var";
	const UNDERSCORED_STRING = "my_super_var";
	const UNDERSCORED_UPPERCASE_STRING = "MY_SUPER_VAR";
	const SPACED_STRING = "my super var";

	test("Camelize", () => {
		assert.strictEqual(camelize(CAPITTALIZED_STRING), CAMEL_CASED_STRING);
		assert.strictEqual(camelize(DASHERISED_STRING), CAMEL_CASED_STRING);
		assert.strictEqual(camelize(UNDERSCORED_STRING), CAMEL_CASED_STRING);
		assert.strictEqual(camelize(UNDERSCORED_UPPERCASE_STRING), CAMEL_CASED_STRING);
		assert.strictEqual(camelize(CAMEL_CASED_STRING), CAMEL_CASED_STRING);
		assert.strictEqual(camelize(SPACED_STRING), CAMEL_CASED_STRING);
	});

	test("Capitalize", () => {
		assert.strictEqual(capitalize(DASHERISED_STRING), "My-super-var");
		assert.strictEqual(capitalize(UNDERSCORED_STRING), "My_super_var");
		assert.strictEqual(capitalize(UNDERSCORED_UPPERCASE_STRING), "MY_SUPER_VAR");
		assert.strictEqual(capitalize(CAMEL_CASED_STRING), "MySuperVar");
		assert.strictEqual(capitalize(SPACED_STRING), "My super var");
	});

	test("Dasherize", () => {
		assert.strictEqual(dasherize(CAPITTALIZED_STRING), DASHERISED_STRING);
		assert.strictEqual(dasherize(DASHERISED_STRING), DASHERISED_STRING);
		assert.strictEqual(dasherize(UNDERSCORED_STRING), DASHERISED_STRING);
		assert.strictEqual(dasherize(UNDERSCORED_UPPERCASE_STRING), DASHERISED_STRING);
		assert.strictEqual(dasherize(CAMEL_CASED_STRING), DASHERISED_STRING);
		assert.strictEqual(dasherize(SPACED_STRING), DASHERISED_STRING);
	});

	test("Underscore", () => {
		assert.strictEqual(underscore(CAPITTALIZED_STRING), UNDERSCORED_STRING);
		assert.strictEqual(underscore(DASHERISED_STRING), UNDERSCORED_STRING);
		assert.strictEqual(underscore(UNDERSCORED_STRING), UNDERSCORED_STRING);
		assert.strictEqual(underscore(UNDERSCORED_UPPERCASE_STRING), UNDERSCORED_STRING);
		assert.strictEqual(underscore(CAMEL_CASED_STRING), UNDERSCORED_STRING);
		assert.strictEqual(underscore(SPACED_STRING), UNDERSCORED_STRING);
	});

	test('Sample test', () => {
		assert.strictEqual(-1, [1, 2, 3].indexOf(5));
		assert.strictEqual(-1, [1, 2, 3].indexOf(0));
	});
});
