const fs = require("fs");
const path = require("path");

/**
 * Copies a file or directory recursively.
 * @param {string} src - Source path of the file or directory to copy.
 * @param {string} dest - Destination path where the file or directory should be copied.
 */
function copy(src, dest) {
	// Check if src is a file or a directory
	const stats = fs.statSync(src);
	if (stats.isDirectory()) {
		// If directory, create the destination directory if it doesn't exist
		if (!fs.existsSync(dest)) {
			fs.mkdirSync(dest, { recursive: true });
		}

		// Read and copy each item in the directory
		for (const item of fs.readdirSync(src)) {
			const srcPath = path.join(src, item);
			const destPath = path.join(dest, item);
			copy(srcPath, destPath); // Recursive call
		}
	} else {
		// If file, copy directly
		fs.copyFileSync(src, dest);
	}
}

/**
 * Copies files or directories based on JSON input from the command line.
 * @param {Object} input - JSON object with a "values" key containing an array of copy tasks.
 * @param {Object[]} input.values - Array of copy tasks.
 * @param {string} input.values[].src - Source path of the file or directory to copy.
 * @param {string} input.values[].dest - Destination path where the file or directory should be copied.
 */
function copyFiles(input) {
	const copyTasks = input.values;

	if (!Array.isArray(copyTasks)) {
		console.error(
			'Invalid JSON format: "values" key should contain an array of tasks.',
		);
		return;
	}

	for (const task of copyTasks) {
		const { src, dest } = task;
		if (!src || !dest) {
			console.error("Missing src or dest in task:", task);
			continue;
		}

		try {
			copy(src, dest);
			console.log(`Copied ${src} to ${dest}`);
		} catch (error) {
			console.error(`Failed to copy ${src} to ${dest}:`, error);
		}
	}
}

// Main function to parse command-line argument and execute copy
function main() {
	const inputArg = process.argv[2];

	if (!inputArg) {
		console.error("Please provide a JSON string as an argument.");
		process.exit(1);
	}

	try {
		const input = JSON.parse(inputArg);
		if (input && input.values) {
			copyFiles(input);
		} else {
			console.error(
				'Invalid JSON format: Expected an object with a "values" key.',
			);
		}
	} catch (error) {
		console.error("Failed to parse the JSON input:", error);
	}
}

main();
