# VuetifyImageInput

The component is globally available as `VuetifyImageInput`. If Vue is detected, the component is registered automatically.

## usage

Register the component globally.

```javascript
import Vue from 'vue';
import VImageInput from 'vuetify-image-input';

Vue.component(VImageInput.name, VImageInput);
```

*or*

Register the component locally.

```javascript
import VImageInput from 'vuetify-image-input';

export default {
  components: {
    VImageInput,
  },
  // ...
};
```

---

Use the component inside a template.

```html
<v-image-input
  v-model="image"
  :image-quality="0.85"
  clearable
  image-format="jpeg"
  @file-info="onFileInfo"
/>
```

## properties

| name | type | default | description |
| ---: | :--- | :--- | :--- |
| `clearable` | `Boolean` | `false` | |
| `clearIcon` | `String` | `'$clear'` | |
| `clearIconStyle` | `Object` | | |
| `debounce` | `Number` | `0` | |
| `disabled` | `Boolean` | `false` | |
| `errorIcon` | `String` | `'$error'` | |
| `errorIconStyle` | `Object` | | |
| `flipHorizontallyIcon` | `String` | `'mdi-flip-horizontal'` | |
| `flipHorizontallyIconStyle` | `Object` | | |
| `flipVerticallyIcon` | `String` | `'mdi-flip-vertical'` | |
| `flipVerticallyIconStyle` | `Object` | | |
| `fullHeight` | `Boolean` | `false` | |
| `fullWidth` | `Boolean` | `false` | |
| `hideActions` | `Boolean` | `false` | |
| `imageBackgroundColor` | `String` | | |
| `imageFormat` | `String` | `'png'` | Possible values are `'png'`, `'jpeg'` and `'webp'`. |
| `imageHeight` | `Number` | `256` | |
| `imageMaxScaling` | `Number` | `1` | |
| `imageMinScaling` | `String` | `'cover'` | Possible values are `'cover'` and `'contain'`. |
| `imageQuality` | | | |
| `imageWidth` | `Number` | `256` | |
| `name` | `String` | | |
| `overlayBackgroundColor` | `String` | `'rgba(0,0,0,0.5)'` | |
| `overlayBorderColor` | `String` | `'#fff'` | |
| `overlayBorderWidth` | `String` | `'4px'` | |
| `overlayPadding` | `String` | `'50px'` | |
| `readonly` | `Boolean` | `false` | |
| `rotateClockwiseIcon` | `String` | `'mdi-rotate-right'` | |
| `rotateClockwiseIconStyle` | `Object` | | |
| `rotateCounterClockwiseIcon` | `String` | `'mdi-rotate-left'` | |
| `rotateCounterClockwiseIconStyle` | `Object` | | |
| `successIcon` | `String` | `'$success'` | |
| `successIconStyle` | `Object` | | |
| `uploadIcon` | `String` | `'mdi-upload'` | |
| `uploadIconStyle` | `Object` | | |
| `value` | `String` | | |

## events

| name |
| ---: |
| `file-info` |
| `input` |
