---
# An instance of the Contact widget.
# Documentation: https://sourcethemes.com/academic/docs/page-builder/
widget: contact

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 8

title: "📬 Contact"
subtitle:

content:
  # Automatically link email and phone or display as text?
  autolink: true
  
  # Email form provider
  form:
    provider: netlify    
    netlify:
      # Enable CAPTCHA challenge to reduce spam?
      captcha: true
      success_page: /thank-you
  
design:
  columns: '1'
  background:
    color: "#FFFFF8"

advanced:
  css_style: "padding-bottom: 0px;"	
---