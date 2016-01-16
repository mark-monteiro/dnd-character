require 'json'
require 'yaml'
require 'fileutils'

task :generate_spells do
   collectionDir = '_spells'

   jsonFile = File.read('_data/spells.json')
   spellList = JSON.parse(jsonFile)
   FileUtils.mkdir_p(collectionDir) unless File.directory?(collectionDir)

   # generate spells
   for jsonSpell in spellList
      next unless jsonSpell['name']
      next unless jsonSpell['page'].start_with?('phb')

      spell = {
         "name" => jsonSpell['name'],
         "slug" => jsonSpell['name'].downcase.strip.gsub(' ', '-').gsub(/[^\w-]/, ''),
         "classes" => jsonSpell['class'].split(',').map(&:strip),
         "school" => jsonSpell['school'],
         "ritual" => jsonSpell['ritual'] == 'yes',
         "level" => jsonSpell['level'].downcase == "cantrip" ? 0 : jsonSpell['level'][0].to_i,
         "castingTime" => jsonSpell['casting_time'],
         "range" => jsonSpell['range'],
         "components" => jsonSpell['components'],
         "material" => jsonSpell['material'],
         "duration" => jsonSpell['duration'],
         "concentration" => jsonSpell['concentation'] == 'yes',
         "reference" => jsonSpell['page'].gsub('phb', '').strip
      }

      newFileName = "#{spell['slug']}.html"
      File.open("#{collectionDir}/#{newFileName}", 'w') do |f|
         f.write spell.to_yaml
         f.write "---\n"
         f.write jsonSpell['desc']
      end

      puts "generated #{newFileName}"
   end
end