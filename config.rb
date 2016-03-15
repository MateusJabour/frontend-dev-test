http_path = "/"
css_dir = 'assets/css'
sass_dir = 'assets/sass'
images_dir = 'assets/img'

output_style = :compressed
line_comments = false

on_stylesheet_saved do
  `compass compile -c config_dev.rb --force`
end
