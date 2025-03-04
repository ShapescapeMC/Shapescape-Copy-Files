(settings)=
# Settings

## Defaults
Here are the default settings of the filter.

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

## Parameters
### values
`list` - List of operations the filter will do.

### src
`string(path)` - The directory or file as a path that is supposed to be copied. Starts from the regolith working directory (BP, RP, data)

### dest
`string(path)` - The directory or file as a path that the copied directory or file is supposed to be copied to.
