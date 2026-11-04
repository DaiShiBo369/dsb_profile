/*
  PUBLIC PROFILE LINKS — fill in only verified public URLs.
  Keep an empty string for any profile you have not yet approved for publication.
  Example: googleScholar: "https://scholar.google.com/citations?user=..."
  Avatar: put your approved image at assets/profile.jpg
  WeChat: QR image path is set in wechatQr below.
*/
const SITE_CONFIG = Object.freeze({
  googleScholar: "",
  github: "https://github.com/DaiShiBo369",
  x: "https://x.com/Disboundary",
  linkedin: "https://www.linkedin.com/in/dai-shibo-4527043b0/",
  rednote: "https://www.xiaohongshu.com/user/profile/63ae4a160000000026011eb0",
  portrait: "assets/profile.jpg",
  wechatQr: "img/qrcode_for_gh_f404e6a8ba53_860.jpg",
});

const socialNames = {googleScholar: "Google Scholar", github: "GitHub", x: "X", linkedin: "LinkedIn", rednote: "RedNote (Xiaohongshu)"};
let toastTimer;
const toast = document.getElementById("pending-toast");
function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 3300);
}

document.querySelectorAll("[data-social]").forEach((a) => {
  const key = a.dataset.social;
  const url = SITE_CONFIG[key];
  if (typeof url === "string" && /^https:\/\//i.test(url)) {
    a.href = url;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
  } else {
    a.classList.add("pending");
    a.setAttribute("aria-label", `${socialNames[key] || key} profile link — pending`);
    a.addEventListener("click", (event) => {
      event.preventDefault();
      showToast(`${socialNames[key] || "This"} link will appear here once the public URL is added.`);
    });
  }
});

const portrait = document.getElementById("portrait-image");
const portraitPlaceholder = document.getElementById("portrait-placeholder");
if (portrait && portraitPlaceholder) {
  const img = new Image();
  img.onload = () => { portrait.src = img.src; portrait.hidden = false; portraitPlaceholder.hidden = true; };
  img.onerror = () => {};
  img.src = SITE_CONFIG.portrait;
}

const dialog = document.getElementById("wechat-dialog");
const openWeChat = document.getElementById("wechat-trigger");
const closeWeChat = document.getElementById("wechat-close");
const qrImage = document.getElementById("wechat-qr");
const qrPlaceholder = document.getElementById("qr-placeholder");
const qrHelper = dialog?.querySelector(".dialog-help");
if (dialog && openWeChat && closeWeChat) {
  openWeChat.addEventListener("click", () => dialog.showModal());
  closeWeChat.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (event) => { if (event.target === dialog) dialog.close(); });
  if (qrImage && qrPlaceholder && SITE_CONFIG.wechatQr) {
    const qr = new Image();
    qr.onload = () => {
      qrImage.src = qr.src;
      qrImage.hidden = false;
      qrPlaceholder.hidden = true;
      if (qrHelper) qrHelper.hidden = true;
    };
    qr.onerror = () => {};
    qr.src = SITE_CONFIG.wechatQr;
  }
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("site-nav");
if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const opened = !nav.classList.contains("open");
    nav.classList.toggle("open", opened);
    toggle.setAttribute("aria-expanded", String(opened));
  });
  nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {nav.classList.remove("open"); toggle.setAttribute("aria-expanded", "false");}));
}
