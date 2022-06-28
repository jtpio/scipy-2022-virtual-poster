# -*- coding: utf-8 -*-
extensions = [
    'jupyterlite_sphinx'
]

jupyterlite_config = "jupyter_lite_config.json"
jupyterlite_dir = "."

master_doc = 'index'
source_suffix = '.rst'

# General information about the project.
project = 'scipy-2022-jupyterlite-virtual-poster'
author = 'Jeremy Tuloup'

exclude_patterns = []
highlight_language = 'python'
pygments_style = 'sphinx'

html_theme = "pydata_sphinx_theme"
html_static_path = ['_static']

html_css_files = [
    'custom.css'
]
