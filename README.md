# Grav image slideshow theme

Takes all the images from a page (with template `default`) and display them as a slideshow.

### Photo credits
You can add photo credit to all of the images with the header `credit`. Use [metafiles](http://learn.getgrav.org/content/media#metafiles) to add credit to a specific image (`credit: text`). If both are set, the one from the metafile will be used.

### Background effect
You can also change to a pixelated effect on the background image by adding the header `img_scale: "mosaic"`. This can be set on all images by adding it in `default.md` or on a specific image by using metafiles. To reverese the effect you add `img_scale: "mosaic"` to ` default.md` and then `img_scale: "blur"` in specific metafiles.

The first image will be used as favicon.

### Credits:

* [Flex Slider](https://www.woothemes.com/flexslider/)
* [Adaptive backgrounds](http://briangonzalez.github.io/jquery.adaptive-backgrounds.js/)
* [TinyColor](https://github.com/bgrins/TinyColor)