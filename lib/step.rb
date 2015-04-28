class Step

  def initialize data
    @data = data
  end

  def self.from_file step_path
    basename = File.basename step_path
    if basename =~ /(\d+(?:\.\d+)*)-(.+)\.(?:md|html)/
      parent_step = $1.split('.')[0]
      child_step  = $1.split('.')[1]
      title       = $2.split('-').map{ |word| word.capitalize }.join(' ')
      Step.new({
        id:       $1,
        parent:   parent_step,
        is_child: !!child_step,
        child_id: child_step,
        title:    title,
        url:      "{{ site.baseurl }}/steps/#{basename}".sub('.md', '.html')
      })
    else
      nil
    end
  end

  def method_missing m, *args, &block
    @data[m]
  end

  def to_s
    "#{if is_child then "    #{child_id.to_i}" else parent.to_i end}. [#{title}](#{url})"
  end

end
