# Lunnaris Web Components
Library for components

## Glosay
modular: js file contained in a script tag that includes type="module" attribute.\
non-modular: common js file in a simple script tag.

## Usage

Each component has the following possible type of import to your project:
1. Dependent non-modular: Single file containing only the js corresponding to the selected component. You'll be required to load the css and js files for each dependency of the component and handle the correct order of script's tag calling.
2. Dependent modular: You'll be required to download all the dependencies and host them in the correct directory structure. You won't be required to handle order calling. The component js file handle the calling of all dependencies needed. Css files still need to be called individually.
3. Independent modular: single js component file containing all its dependencies. Single css file including all styles needed.
4. Full modular: single js containing the whole library (no dependency resolving needed). Single css file for all styles needed.
5. Full non-modular: single js containing the whole library (no dependency resolving needed). Single css file for all styles needed.



