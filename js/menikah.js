// Get that hamburger menu cookin' //
document.addEventListener("DOMContentLoaded", function() {
  // Get all "navbar-burger" elements
  var $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );
  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach(function($el) {
      $el.addEventListener("click", function() {
        // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// Smooth Anchor Scrolling
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top
    },
    500
  );
});


$(document).on('click', function(){
  document.getElementById("my_audio").play();
  console.log('play');
});

// When the user scrolls down 20px from the top of the document, show the scroll up button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}
// Preloader
$(document).ready(function($) {

  $(".preloader-wrapper").fadeOut();
  $("body").removeClass("preloader-site");
});
$(window).load(function() {
  var Body = $("body");
  Body.addClass("preloader-site");
});

// ===== RSVP Form Handler =====
document.addEventListener('DOMContentLoaded', function() {
  const rsvpForm = document.getElementById('rsvpForm');
  
  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // Collect form data
      const formData = {
        name: document.getElementById('guestName').value,
        email: document.getElementById('guestEmail').value,
        phone: document.getElementById('guestPhone').value,
        attendance: document.querySelector('input[name="attendance"]:checked').value,
        guestCount: document.getElementById('guestCount').value,
        message: document.getElementById('guestMessage').value,
        dietRestriction: document.querySelector('input[name="diet-restriction"]').checked,
        timestamp: new Date().toLocaleString('vi-VN')
      };
      
      // Store in localStorage (for demo) or send to server
      try {
        let existingData = JSON.parse(localStorage.getItem('rsvpData')) || [];
        existingData.push(formData);
        localStorage.setItem('rsvpData', JSON.stringify(existingData));
        
        // Show success message
        rsvpForm.style.display = 'none';
        document.getElementById('successMessage').style.display = 'flex';
        document.getElementById('successMessage').style.flexDirection = 'column';
        document.getElementById('successMessage').style.alignItems = 'center';
        
        // Reset form after 3 seconds
        setTimeout(function() {
          rsvpForm.reset();
          rsvpForm.style.display = 'flex';
          document.getElementById('successMessage').style.display = 'none';
        }, 3000);
        
        // Optional: Log to console or send to API
        console.log('RSVP Data:', formData);
        
      } catch(err) {
        console.error('Error processing RSVP:', err);
      }
    });
  }
});

// ===== Share Functions =====
function shareToSocial(platform) {
  const pageUrl = window.location.href;
  const pageTitle = document.title;
  const shareText = encodeURIComponent(`Mời bạn tham dự đám cưới của Đức Thắng & Mỹ Uyên - ${pageUrl}`);
  
  let url = '';
  
  switch(platform) {
    case 'facebook':
      url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
      break;
    case 'twitter':
      url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${shareText}`;
      break;
    case 'whatsapp':
      url = `https://wa.me/?text=${shareText}`;
      break;
    case 'telegram':
      url = `https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${shareText}`;
      break;
  }
  
  if(url) {
    window.open(url, '_blank', 'width=600,height=400');
  }
}

// ===== QR Code Functions =====
function generateQRCode() {
  const modal = document.getElementById('qrModal');
  const container = document.getElementById('qrcode-container');
  
  // Clear previous QR code
  container.innerHTML = '';
  
  // Generate new QR code
  new QRCode(container, {
    text: window.location.href,
    width: 300,
    height: 300,
    colorDark: "#5C4B54",
    colorLight: "#FBF8F6",
    correctLevel: QRCode.CorrectLevel.H
  });
  
  modal.style.display = 'block';
}

function closeQRModal() {
  const modal = document.getElementById('qrModal');
  modal.style.display = 'none';
}

// Close QR modal when clicking outside of it
window.onclick = function(event) {
  const modal = document.getElementById('qrModal');
  if (event.target == modal) {
    modal.style.display = 'none';
  }
}

// Setup QR button listener
document.addEventListener('DOMContentLoaded', function() {
  const qrButton = document.getElementById('generateQR');
  if (qrButton) {
    qrButton.addEventListener('click', generateQRCode);
  }
});
