+++
# A Projects section created with the Portfolio widget.
widget = "portfolio"  # See https://sourcethemes.com/academic/docs/page-builder/
headless = true  # This file represents a page section.
active = true  # Activate this widget? true/false
weight = 3  # Order that this section will appear.

title = "🔗 Enlaces de interés"
subtitle = "💻 Recursos online"

[content]
  # Page type to display. E.g. project.
  page_type = "enlaces-recursos-online"
  
  # Filter toolbar (optional).
  # Add or remove as many filters (`[[content.filter_button]]` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove toolbar, delete/comment all instances of `[[content.filter_button]]` below.
  
  # Default filter index (e.g. 0 corresponds to the first `[[filter_button]]` instance below).
  filter_default = 0
  
  [[content.filter_button]]
    name = "Todos"
    tag = "*"
  
  [[content.filter_button]]
    name = "Color"
    tag = "color"
	
  [[content.filter_button]]
    name = "FyQ"
    tag = "fyq"
	
  [[content.filter_button]]
    name = "Gifs"
    tag = "gifs"	
	
  [[content.filter_button]]
    name = "Juegos"
    tag = "juegos"	
	
  [[content.filter_button]]
    name = "Olimpiadas"
    tag = "olimpiadas"		

  [[content.filter_button]]
    name = "Simulaciones"
    tag = "simulaciones"	
	
  [[content.filter_button]]
    name = "Sociedades"
    tag = "sociedades"
	
  [[content.filter_button]]
    name = "Tabla Periódica"
    tag = "tabla-periódica"
	
  [[content.filter_button]]
    name = "Traductor"
    tag = "traductor"
	
  [[content.filter_button]]
    name = "Vídeos"
    tag = "vídeos"	

[design]
  # Choose how many columns the section has. Valid values: 1 or 2.
  columns = "1"

  # Toggle between the various page layout types.
  #   1 = List
  #   2 = Compact
  #   3 = Card
  #   5 = Showcase
  view = 2

  # For Showcase view, flip alternate rows?
  flip_alt_rows = false

[design.background]
  # Apply a background color, gradient, or image.
  #   Uncomment (by removing `#`) an option to apply it.
  #   Choose a light or dark text color by setting `text_color_light`.
  #   Any HTML color name or Hex value is valid.

  # Background color.
  # color = "navy"
  
  # Background gradient.
  gradient_start = "#BBCCEE"
  gradient_end = "#FFFFF8"
  
  # Background image.
  # image = "enlaces-interes.jpg"  # Name of image in `static/media/`.
  # image_darken = 0.5  # Darken the image? Range 0-1 where 0 is transparent and 1 is opaque.
  image_size = "cover"  #  Options are `cover` (default), `contain`, or `actual` size.
  image_position = "center"  # Options include `left`, `center` (default), or `right`.
  image_parallax = true  # Use a fun parallax-like fixed background effect? true/false
  
  # Text color (true=light or false=dark).
  text_color_light = false
  
[advanced]
 # Custom CSS. 
 css_style = "padding-bottom: 0px;"
 
 # CSS class.
 css_class = ""
+++
