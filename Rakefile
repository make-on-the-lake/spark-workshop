require_relative './lib/step'

desc 'Automatically creates _includes/steps.md based upon the content of the steps directory'
task :steps do
  steps = Dir["#{File.dirname(__FILE__)}/steps/*"].map{ |file| Step.from_file file }.sort_by{ |step| step.id }
  File.write("#{File.dirname(__FILE__)}/_includes/steps.md", steps.map{ |step| step.to_s }.join("\n"))
end
