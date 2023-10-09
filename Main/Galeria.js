var lightbox = GLightbox();
lightbox.on("open", (target) => {
  console.log("lightbox opened");
});
var lightboxDescription = GLightbox({
  selector: ".glightbox2",
});
var lightboxVideo = GLightbox({
  selector: ".glightbox3",
});
