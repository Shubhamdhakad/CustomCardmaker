
## Project Description

This project demonstrates a custom card component built with React and GrapesJS. Users can drag and drop custom cards into a visual editor and customize them through an intuitive interface.

## Features

-  Custom Card Component with image, title, description, and button
- Drag-and-drop functionality
-  Trait-based customization (Image URL, Title, Description, Button Label, Button URL)
- Responsive design preview (Desktop/Mobile)
-  Export to HTML functionality
-  Clean and modern UI

## Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:

2. Install dependencies:

3. Start the development server:

4. Open your browser and navigate to:

## Usage

### Adding a Custom Card

1. Look for the "Custom Components" category in the left blocks panel
2. Drag the "Custom Card" block into the canvas
3. Click on the card to select it

### Customizing the Card

1. Select a card component
2. Open the "Settings" tab in the right panel
3. Edit the following traits:
   - **Image URL**: Change the card image
   - **Card Title**: Update the heading
   - **Card Description**: Modify the description text
   - **Button Label**: Change button text
   - **Button URL**: Set the link destination

### Styling the Card

1. Select the card component
2. Open the "Styles" tab
3. Modify properties like:
   - Dimensions (width, padding)
   - Typography (font, size, color)
   - Decorations (background, border, shadow)

### Exporting Your Design

1. Click the "Export HTML" button in the top panel
2. The complete HTML file (with CSS) will download automatically
3. Open the downloaded file in any browser

## Project Structure

grapesjs-react-card-component/
├── public/
│ └── index.html
├── src/
│ ├── components/
│ │ ├── GrapesEditor.jsx # Main editor component
│ │ └── CustomCardComponent.js # Custom card plugin
│ ├── App.jsx # Root component
│ ├── App.css # Main styles
│ ├── main.jsx # Entry point
│ └── index.css # Global styles
├── package.json
├── vite.config.js
└── README.md


## Technologies Used

- **React 18**: UI framework
- **Vite**: Build tool and dev server
- **GrapesJS**: Web builder framework
- **Font Awesome**: Icons

## Key Features Explained

### Custom Component Type

The custom card is registered as a GrapesJS component type with:
- Predefined HTML structure
- Default styling
- Editable traits
- Event listeners for real-time updates

### Trait System

Traits allow users to edit component properties without touching code:
- Text inputs for URLs and labels
- Real-time synchronization with the canvas
- Persistent changes across sessions

### Export Functionality

The export feature generates a complete HTML file containing:
- All HTML markup
- Inline CSS styles
- Proper document structure
- Ready to deploy

## Development

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build

### Building for Production


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
# GrapesJS Custom Card Component - React + Vite
