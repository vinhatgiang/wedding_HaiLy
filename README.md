# 💒 Thiệp Cưới Điện Tử - Wedding Invitation Website

Trang web thiệp cưới sang trọng, lãng mạn và thân thiện với người dùng cho đám cưới của Đức Thắng & Mỹ Uyên.

## 🎨 Tính Năng Chính

### 1. **Thiết Kế Giao Diện Sang Trọng**
- 🌸 Bảng màu pastel nhẹ nhàng (hồng, trắng, vàng nhạt)
- ✨ Font chữ Playfair Display (tiêu đề) và Lora (nội dung)
- 🎭 Phong cách tinh tế, phù hợp với không khí lễ cưới
- ✅ Bố cục rõ ràng: giới thiệu cặp đôi, thông tin sự kiện, bản đồ, RSVP

### 2. **Tính Năng Tương Tác**
- 📝 **Form RSVP đầy đủ**: Họ tên, email, điện thoại, số lượng khách, yêu cầu đặc biệt
- 🗺️ **Bản đồ Google Maps**: Hiển thị địa điểm tổ chức
- 📤 **Chia sẻ xã hội**: Facebook, WhatsApp, Telegram
- 📱 **QR Code**: Sinh động QR code để chia sẻ thiệp
- ❤️ **Countdown Timer**: Đếm ngược đến ngày cưới
- 🎠 **Photo Carousel**: Swiper carousel để xem ảnh cặp đôi

### 3. **Responsive Design**
- 📱 Hiển thị đẹp trên mobile (480px+)
- 💻 Tối ưu cho tablet (768px+)
- 🖥️ Full HD trên desktop (1024px+)
- 🎯 Media queries cho tất cả các loại thiết bị
- 📲 Landscape orientation tối ưu

### 4. **Hiệu Ứng & Animations**
- 🎬 Fade-in, slide-in animations khi scroll
- 💫 Hover effects tinh tế trên nút bấm
- ❤️ Hiệu ứng trái tim rơi
- ✨ Smooth transitions cho tất cả interactive elements
- 🌺 Sakura falling animation (lựa chọn)

### 5. **Hiệu Suất Tối Ưu**
- ⚡ Lazy loading cho hình ảnh
- 🔄 Intersection Observer API
- 📦 Font display: swap
- 🚀 Deferred script loading (defer attribute)
- 🎯 GPU acceleration với will-change
- 📉 Giảm CLS (Cumulative Layout Shift)
- 💾 Local storage cho RSVP data

## 📁 Cấu Trúc Thư Mục

```
wedding_HaiLy/
├── index.html                 # Trang chính
├── css/
│   ├── menikah.css           # CSS chính (đã cập nhật màu pastel)
│   ├── performance.css       # CSS tối ưu hiệu suất
│   ├── calender.css          # Calendar styles
│   ├── jquery.countdown.css   # Countdown timer styles
│   ├── laroi.css             # Hiệu ứng rơi lá
│   └── jquery-sakura.min.css  # Sakura animation
├── js/
│   ├── menikah.js            # JavaScript chính (RSVP, share, QR)
│   ├── performance-optimization.js  # Tối ưu hiệu suất
│   ├── hieuung.js            # Hiệu ứng thêm
│   ├── calender.js           # Calendar logic
│   └── jquery.coundown.js    # Countdown timer
├── image/                     # Hình ảnh
│   ├── favicon.png
│   ├── 1.jpg - 11.jpg       # Ảnh cặp đôi
│   ├── divider.png
│   └── ...
├── mp3/
│   └── bg.mp3               # Nhạc nền
└── README.md                # Tài liệu này
```

## 🚀 Cách Sử Dụng

### 1. **Cập nhật thông tin cặp đôi**
Sửa trong `index.html`:
```html
<h2 class="title">Đức Thắng</h2>
<div class="ampersand">❤</div>
<h2 class="title">Mỹ Uyên</h2>
```

### 2. **Cập nhật ngày tháng**
```javascript
var harih = '2025-04-19 15:00:00'; // Sửa theo ngày cưới của bạn
```

### 3. **Cập nhật địa chỉ & bản đồ**
Thay đổi URL Google Maps embed:
```html
<iframe src="https://www.google.com/maps/embed?pb=..."></iframe>
```

### 4. **Thêm hình ảnh**
Đặt ảnh trong thư mục `image/` và cập nhật trong Swiper slides hoặc vertical photo grid

### 5. **Tùy chỉnh màu sắc**
Sửa CSS variables trong `css/menikah.css`:
```css
:root {
  --primary-pink: #F8D7DA;
  --accent-pink: #E8B4B8;
  --dark-pink: #D4949B;
  /* ... */
}
```

## 📱 Responsive Breakpoints

- **Extra Small (≤480px)**: Mobile phones
- **Small (481-768px)**: Tablets nhỏ
- **Medium (769-1024px)**: Tablets lớn
- **Large (≥1025px)**: Desktop

## ⚡ Tối Ưu Hiệu Suất

### Kỹ Thuật Được Áp Dụng:
- ✅ **Lazy Loading**: Hình ảnh tải khi cần (Intersection Observer)
- ✅ **Font Optimization**: Font display: swap
- ✅ **Script Deferring**: Defer loading scripts không critical
- ✅ **CSS Minification**: CSS đã tối ưu
- ✅ **Image Optimization**: Hình ảnh responsive
- ✅ **Caching**: Local storage cho RSVP
- ✅ **GPU Acceleration**: Will-change + translateZ(0)
- ✅ **Reduced Motion**: Hỗ trợ `prefers-reduced-motion`

### Lighthouse Scores Target:
- 🎯 Performance: 90+
- ♿ Accessibility: 95+
- 📋 Best Practices: 95+
- 🔍 SEO: 100

## 🔧 Các Thư Viện Được Sử Dụng

- **Bulma CSS Framework** - Responsive grid system
- **Swiper JS** - Image carousel
- **Font Awesome** - Icons
- **Google Fonts** - Playfair Display & Lora
- **jQuery** - DOM manipulation
- **AOS (Animate On Scroll)** - Scroll animations
- **QR Code JS** - QR code generation
- **Google Maps API** - Interactive map
- **Google Analytics** - Page tracking

## 📝 RSVP Form Data

Form RSVP được lưu trữ trong `localStorage` của browser:
```javascript
{
  name: "Tên khách",
  email: "email@example.com",
  phone: "0123456789",
  attendance: "yes",
  guestCount: 2,
  message: "Lời chúc",
  dietRestriction: true,
  timestamp: "DD/MM/YYYY HH:MM:SS"
}
```

## 🎉 Tính Năng Bổ Sung

### Share Features:
- 📘 Facebook Share
- 💬 WhatsApp Share
- 📱 Telegram Share
- 📲 QR Code Generation

### Interactive Elements:
- ❤️ Falling hearts animation (interactive)
- 🎠 Photo carousel (Swiper)
- 📅 Calendar widget
- ⏱️ Countdown timer
- 🔝 Scroll to top button

## 🌐 Deployment

1. Commit changes lên GitHub
2. Enable GitHub Pages trong settings
3. Trang web sẽ accessible tại: `https://vinhatgiang.github.io/wedding_HaiLy/`

## 📞 Support & Contact

Để điều chỉnh hoặc cập nhật, liên hệ:
- 📧 Email: [your-email@example.com]
- 💬 WhatsApp: [phone-number]

## 📄 License

© 2025 Wedding Invitation. All rights reserved.

---

**Created with ❤️ for a beautiful wedding celebration**

*Last Updated: December 8, 2025*
