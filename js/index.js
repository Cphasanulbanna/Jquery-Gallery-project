window.addEventListener("load", (event) => {
    lightGallery(document.getElementById('lightgallery'), {
        plugins: [lgZoom, lgThumbnail, lgRotate, lgFullscreen, lgAutoplay, lgShare],
        escKey: false,
        mode: "lg-zoom-in",
    });
});
  