# Dungeons & Dragons Spellcaster Viewer

Quick reference for your character's spells.

## Usage
- Fork the repository
- Add your character (in the '_characters' directory)
- Run Jekyll:
```
bundle exec jekyll --watch
```

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