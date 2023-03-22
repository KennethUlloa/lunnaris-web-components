# Lunnaris Web Components
Library for components

## Glosay
modular: js file contained in a script tag that includes type="module" attribute.\
non-modular: common js file in a simple script tag.

## Usage

Each component has the following possible type of import to your project:
1. Dependent non-modular: Single file containing only the js corresponding to the selected component. You'll be required to load the css and js files for each dependency of the component and handle the correct order of script's tag calling.

```html
<head>
    <!-- all other page stuff-->
    <link rel="stylesheet" href="your-page/video/lunnaris-video.css">
    <link rel="stylesheet" href="your-page/slider/slider.css">
    <script src="your-page/utils/utils.js"></script>
    <script src="your-page/slider/slider.js"></script>
    <script src="your-page/video/lunnaris-video.js"></script>
</head>
<body>
    <!-- all other page stuff-->
    <script>
        var videoComponent = new VideoPlayer('url', true);
        /*-- etc ---*/
    </script>
</body>
```

2. Dependent modular: You'll be required to download all the dependencies and host them. You won't be required to handle order calling. The component js file handle the calling of all dependencies needed. Css files still need to be called individually.

```html
<head>
    <!-- all other page stuff-->
    <link rel="stylesheet" href="your-page/video/lunnaris-video.css">
    <link rel="stylesheet" href="your-page/slider/slider.css">
</head>
<body>
    <!-- all other page stuff-->
    <script type="module">
        import { VideoPlayer } from 'your-page/video/lunnaris-video.js'
        var videoComponent = new VideoPlayer('url', true);
        /*-- etc ---*/
    </script>
</body>
```

3. Independent modular: single js component file containing all its dependencies. Single css file including all styles needed.

```html
<head>
    <!-- all other page stuff-->
    <link rel="stylesheet" href="your-page/video/lunnaris-video-i.css">
</head>
<body>
    <!-- all other page stuff-->
    <script type="module">
        import { VideoPlayer } from 'your-page/video/lunnaris-video-i.js'
        var videoComponent = new VideoPlayer('url', true);
        /*-- etc ---*/
    </script>
</body>
```
4. Full modular: single js containing the whole library (no dependency resolving needed). Single css file for all styles needed.
```html
<head>
    <!-- all other page stuff-->
    <link rel="stylesheet" href="your-page/lunnaris-min.css">
</head>
<body>
    <!-- all other page stuff-->
    <script type="module">
        import { VideoPlayer } from 'your-page/lunnaris-min.js'
        var videoComponent = new VideoPlayer('url', true);
        /*-- etc ---*/
    </script>
</body>
```
5. Full non-modular: single js containing the whole library (no dependency resolving needed). Single css file for all styles needed.

```html
<head>
    <!-- all other page stuff-->
    <link rel="stylesheet" href="your-page/lunnaris-min.css">
    <script src="your-page/lunnaris-min.js"></script>
</head>
<body>
    <!-- all other page stuff-->
    <script>
        var videoComponent = new VideoPlayer('url', true);
        /*-- etc ---*/
    </script>
</body>
```



