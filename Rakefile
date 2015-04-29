require_relative './lib/step'

desc 'Automatically creates _includes/steps.md based upon the content of the steps directory'
task :steps do
  comment    = "<!-- This file is generated via Rake.  Please don't modify it by hand. TY <3 -->\n\n"
  js_comment = "/* This file is generated via Rake.  Please don't modify it by hand. TY <3 */\n\n"

  steps = Dir["#{File.dirname(__FILE__)}/steps/*"].map{ |file| Step.from_file file }.sort_by{ |step| step.id }

  # Create a markdown file which we'll use to create a navigation for all the steps
  File.write("#{File.dirname(__FILE__)}/_includes/steps.md", comment + steps.map{ |step| step.to_s }.join("\n"))

  # Create a js file with an ordered list of the step's urls
  File.write(
    "#{File.dirname(__FILE__)}/_includes/steps.js",
    js_comment + "var steps = [#{steps.map{ |step| "'#{step.url}'," }.join("\n")}];"
  )
end
