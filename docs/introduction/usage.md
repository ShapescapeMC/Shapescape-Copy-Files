# Usage

## Steps 

### 1. Add the filter to the profile
Lets add the filter to our profile: 
``` json
{
  "filter": "shapescape_copy_files",
    "settings": {
      "values": []
    }
}
```
### 2. Add values
Now we need to define what files we want to move. We can either define individual files:
``` json
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
``` json
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
### 3. Run the Filter
Running the filter will move the files as defined in the filter settings.
