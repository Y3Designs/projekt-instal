if (typeof IntersectionObserver !== 'undefined') {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      })
    });
  
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
}

// nav animations
document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll("a");
    navLinks.forEach(function(link) {
        if (!link.classList.contains("scroll-to")) { // Check if the link has the class 'scroll-to'
            link.addEventListener("click", function(e) {
                e.preventDefault();
                var targetId = this.getAttribute("href").substring(1);
                var targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop,
                        behavior: "smooth",
                    });
                }
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var projectItems = document.querySelectorAll(".project");
    projectItems.forEach(function (item) {
        item.addEventListener("click", function () {
            // Extract the URL from the data-url attribute of the clicked project item
            var url = this.getAttribute("data-url");
            // Navigate to the URL
            if (url) {
                window.location.href = url;
            }
        });
    });
});
