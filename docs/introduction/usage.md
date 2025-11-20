# Usage

## Steps

### 1. Add the filter to the profile

Lets add the filter to our profile:

```json
{
	"filter": "shapescape_copy_files",
	"settings": {
		"values": []
	}
}
```

### 2. Add values

Now we need to define what files we want to move. We can either define individual files:

```json
{
  "filter": "shapescape_copy_files",
    "settings": {
      "values": [
        "src": "data/foo",
        "dest": "data/baa"
      ]
    }
}
```

Or complete folders:

```json
{
  "filter": "shapescape_copy_files",
    "settings": {
      "values": [
        "src": "data/foo_folder/",
        "dest": "data/baa_folder/"
      ]
    }
}
```

### 3. Using Environment Variables

You can use environment variables in both `src` and `dest` paths using the `%VAR%` syntax:

```json
{
	"filter": "shapescape_copy_files",
	"settings": {
		"values": [
			{
				"src": "%USERPROFILE%/Documents/myfile.txt",
				"dest": "%TEMP%/backup/myfile.txt"
			},
			{
				"src": "data/config.json",
				"dest": "%APPDATA%/MyApp/config.json"
			}
		]
	}
}
```

The filter will automatically expand environment variables like `%USERPROFILE%`, `%TEMP%`, `%APPDATA%`, etc. If an environment variable is not defined, a warning will be logged and the original `%VAR%` syntax will be kept in the path.

### 4. Run the Filter

Running the filter will move the files as defined in the filter settings.
