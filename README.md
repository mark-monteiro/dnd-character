# Dungeons & Dragons Spellcaster Viewer

Quick reference for your character's spells.

## Usage
- Fork the repository
- Update _config.yml appropriately
- Add your character (in the '_characters' directory)
- Run Jekyll:
```
bundle exec jekyll --watch
```

## Editing Content
This site is configured to use [prose.io](http://prose.io), which provides a user-friendly interface for editing content and directly committing it to your GitHub repository.
The edit links throughout the site will link you to the content editor in prose.

## Adding More Spells
- Add your JSON file of spells (_data/spells.json)
- Generate spell files from the JSON
```
rake generate_spells
```

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License
TODO: Write license