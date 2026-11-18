/* Click-to-load for the Vimeo embed: nothing is requested from Vimeo until a visitor presses play. */
document.addEventListener("click", function (e) {
  var btn = e.target.closest(".vimeo-btn");
  if (!btn) return;
  var box = btn.closest(".vimeo-lite");
  var frame = document.createElement("iframe");
  frame.className = "thumb";
  frame.style.aspectRatio = "16/9";
  frame.src = box.getAttribute("data-src");
  frame.title = box.getAttribute("data-title") || "Video";
  frame.allow = "autoplay; fullscreen; picture-in-picture";
  frame.setAttribute("allowfullscreen", "");
  box.replaceWith(frame);
});
