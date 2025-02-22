## loading="lazy" in <img> Tag:
- The `loading="lazy"` attribute in the `<img>` tag helps optimize web performance by **deferring the loading of images until they are about to enter the viewport**. This improves page load speed and reduces bandwidth usage.

### **Example**
```html
<img src="example.jpg" alt="Example Image" loading="lazy" width="600" height="400">
```

### **How It Works:**
- The image **won't load** immediately when the page loads.
- It **loads only when the user scrolls** close to it.
- Works best when **width** and **height** are defined to prevent layout shifts.

### **Browser Support**
✅ Supported in **Chrome, Edge, Firefox, Opera**.  
❌ **Not supported** in Safari (yet).  


## loading="eager" in <img> Tag:
- The loading="eager" attribute forces the image to load immediately when the page loads, regardless of whether it is visible in the viewport. This is the default behavior if the loading attribute is not specified.


## control Keyword:
- we must add **control** keyword in audio and video tag.

## iframe Tag:
    The <iframe> (Inline Frame) tag is used to embed another webpage or external content within an HTML page.
### How to render/embed a YT video on your website using iframe?
- src="https://www.youtube.com/watch?v=UcxK4qDRMxk" (yt link)
- src="https://www.youtube.com/embed/UcxK4qDRMxk" (changed link)
 - https://www.yt.com/embed/video_id


