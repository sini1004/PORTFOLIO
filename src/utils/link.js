const link = () => {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetid = this.getAttribute("href");
      const targetElemnet = document.querySelector(targetid);

      if (targetElemnet) {
        targetElemnet.scrollintoView({ behavior: "smooth" });
      }
    });
  });
};

export default link;
