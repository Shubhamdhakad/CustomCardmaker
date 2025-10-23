export const customCardPlugin = (editor) => {
  
    editor.DomComponents.addType('custom-card', {
      isComponent: (el) => {
        return el.classList && el.classList.contains('custom-card')
      },
      
      model: {
        defaults: {
          tagName: 'div',
          classes: ['custom-card'],
          attributes: {
            'data-gjs-type': 'custom-card'
          },
          
          traits: [
            {
              type: 'text',
              name: 'card-image-url',
              label: 'Image URL',
              placeholder: 'Enter image URL',
              changeProp: true
            },
            {
              type: 'text',
              name: 'card-title',
              label: 'Card Title',
              placeholder: 'Enter card title',
              changeProp: true
            },
            {
              type: 'textarea',
              name: 'card-description',
              label: 'Description',
              placeholder: 'Enter card description',
              changeProp: true
            },
            {
              type: 'text',
              name: 'button-label',
              label: 'Button Label',
              placeholder: 'Enter button text',
              changeProp: true
            },
            {
              type: 'text',
              name: 'button-link',
              label: 'Button Link',
              placeholder: 'Enter button URL',
              changeProp: true
            }
          ],
          
          components: [
            {
              tagName: 'img',
              classes: ['card-image'],
              attributes: {
                src: 'https://via.placeholder.com/300x150',
                alt: 'Card Image'
              }
            },
            {
              tagName: 'h3',
              classes: ['card-title'],
              components: [{ type: 'textnode', content: 'Card Title' }]
            },
            {
              tagName: 'p',
              classes: ['card-description'],
              components: [{ type: 'textnode', content: 'Card description goes here...' }]
            },
            {
              tagName: 'a',
              classes: ['btn', 'card-button'],
              attributes: {
                href: '#'
              },
              components: [{ type: 'textnode', content: 'Click Me' }]
            }
          ],
          
          style: {
            'max-width': '300px',
            'border': '1px solid #ddd',
            'border-radius': '8px',
            'padding': '16px',
            'margin': '16px',
            'box-shadow': '0 2px 4px rgba(0,0,0,0.1)',
            'background-color': '#fff',
          }
        },
        
        init() {
          this.on('change:card-image-url', this.updateImageUrl)
          this.on('change:card-title', this.updateTitle)
          this.on('change:card-description', this.updateDescription)
          this.on('change:button-label', this.updateButtonLabel)
          this.on('change:button-link', this.updateButtonLink)
          
          this.updateImageUrl()
          this.updateTitle()
          this.updateDescription()
          this.updateButtonLabel()
          this.updateButtonLink()
        },
        
        updateImageUrl() {
          const imageUrl = this.get('card-image-url') || 'https://via.placeholder.com/300x150'
          const imgComponent = this.components().find(comp => comp.getClasses().includes('card-image'))
          if (imgComponent) {
            imgComponent.addAttributes({ src: imageUrl })
          }
        },
        
        updateTitle() {
          const title = this.get('card-title') || 'Card Title'
          const titleComponent = this.components().find(comp => comp.getClasses().includes('card-title'))
          if (titleComponent) {
            titleComponent.components().reset([{ type: 'textnode', content: title }])
          }
        },
        
        updateDescription() {
          const description = this.get('card-description') || 'Card description goes here...'
          const descComponent = this.components().find(comp => comp.getClasses().includes('card-description'))
          if (descComponent) {
            descComponent.components().reset([{ type: 'textnode', content: description }])
          }
        },
        
        updateButtonLabel() {
          const buttonLabel = this.get('button-label') || 'Click Me'
          const buttonComponent = this.components().find(comp => comp.getClasses().includes('card-button'))
          if (buttonComponent) {
            buttonComponent.components().reset([{ type: 'textnode', content: buttonLabel }])
          }
        },
        
        updateButtonLink() {
          const buttonLink = this.get('button-link') || '#'
          const buttonComponent = this.components().find(comp => comp.getClasses().includes('card-button'))
          if (buttonComponent) {
            buttonComponent.addAttributes({ href: buttonLink })
          }
        }
      }
    })
    
    editor.CssComposer.addRules(`
      .custom-card {
        max-width: 300px;
        border: 1px solid #ddd;
        border-radius: 8px;
        padding: 16px;
        margin: 16px;
        box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        background-color: #fff;
        font-family: Arial, sans-serif;
        display: flex;
        flex-direction: column;
      }
      
      .custom-card .card-image {
        width: 100%;
        height: 150px;
        object-fit: cover;
        border-radius: 4px;
        margin-bottom: 12px;
      }
      
      .custom-card .card-title {
        font-size: 18px;
        font-weight: bold;
        margin: 0 0 8px 0;
        color: #333;
      }
      
      .custom-card .card-description {
        font-size: 14px;
        color: #666;
        line-height: 1.4;
        margin: 0 0 16px 0;
        flex-grow: 1;
      }
      
      .custom-card .card-button {
        display: inline-block;
        padding: 8px 16px;
        background-color: #007bff;
        color: white;
        text-decoration: none;
        border-radius: 4px;
        text-align: center;
        font-size: 14px;
        font-weight: 500;
        transition: background-color 0.2s;
        align-self: flex-start;
      }
      
      .custom-card .card-button:hover {
        background-color: #0056b3;
        text-decoration: none;
        color: white;
      }
    `)
    
    editor.BlockManager.add('custom-card-block', {
      label: 'Custom Card',
      category: 'Custom Components',
      content: {
        type: 'custom-card'
      },
      media: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="18" rx="2" stroke="currentColor" stroke-width="2"/>
        <rect x="6" y="7" width="12" height="2" fill="currentColor"/>
        <rect x="6" y="11" width="8" height="1" fill="currentColor"/>
        <rect x="6" y="14" width="6" height="1" fill="currentColor"/>
        <rect x="6" y="17" width="4" height="2" rx="1" fill="currentColor"/>
      </svg>`
    })
  }
  