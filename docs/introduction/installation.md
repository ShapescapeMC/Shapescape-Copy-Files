(installation)=
# Installation

## Steps

### 1. Install the filter
Use the following command
```
regolith install shapescape_copy_files
```

You can alternatively use this command:
```
regolith install github.com/ShapescapeMC/shapescape-copy-files/shapescape_copy_files
```

### 2. Add filter to a profile
Add the filter to the `filters` list in the `config.json` file of the Regolith project and add the settings:

```json
{
  "filter": "shapescape_copy_files",
  "settings": {
    "values": [
      {
        "src": "data/foo",
        "dest": "BP/bar"
      },
      ...
    ]					
  }
}
```