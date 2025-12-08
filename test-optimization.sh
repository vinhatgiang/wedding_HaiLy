#!/bin/bash

# Wedding Website Optimization - Testing Checklist
# This script helps verify all optimizations are properly implemented

echo "🎉 Wedding Website Optimization - Testing Checklist"
echo "=================================================="
echo ""

# Color codes
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

# Counter
PASSED=0
TOTAL=0

# Function to check if text exists in file
check_file_content() {
    local file=$1
    local content=$2
    local description=$3
    
    TOTAL=$((TOTAL + 1))
    
    if grep -q "$content" "$file"; then
        echo -e "${GREEN}✓${NC} $description"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}✗${NC} $description"
    fi
}

# Function to check if file exists
check_file_exists() {
    local file=$1
    local description=$2
    
    TOTAL=$((TOTAL + 1))
    
    if [ -f "$file" ]; then
        echo -e "${GREEN}✓${NC} $description"
        PASSED=$((PASSED + 1))
    else
        echo -e "${RED}✗${NC} $description"
    fi
}

echo "📋 TESTING FILE STRUCTURE"
echo "------------------------"
check_file_exists "index.html" "Main HTML file exists"
check_file_exists "css/menikah.css" "Main CSS file exists"
check_file_exists "css/performance.css" "Performance CSS file exists"
check_file_exists "js/menikah.js" "Main JavaScript file exists"
check_file_exists "js/performance-optimization.js" "Performance optimization JS exists"
check_file_exists "README.md" "README documentation exists"
check_file_exists "OPTIMIZATION_SUMMARY.md" "Optimization summary exists"
echo ""

echo "🎨 TESTING DESIGN FEATURES"
echo "------------------------"
check_file_content "css/menikah.css" "--primary-pink" "Pastel color palette defined"
check_file_content "css/menikah.css" "Playfair Display" "Playfair Display font imported"
check_file_content "css/menikah.css" "font-family: 'Lora'" "Lora font for body text"
check_file_content "index.html" "theme-color" "Theme color meta tag"
check_file_content "css/menikah.css" "fadeInUp" "Fade-in animation defined"
check_file_content "css/menikah.css" "@keyframes slideInLeft" "Slide-in animation defined"
echo ""

echo "📝 TESTING RSVP FORM"
echo "-------------------"
check_file_content "index.html" "rsvpForm" "RSVP form HTML exists"
check_file_content "index.html" "guestName" "Guest name input exists"
check_file_content "index.html" "guestEmail" "Guest email input exists"
check_file_content "index.html" "guestPhone" "Guest phone input exists"
check_file_content "index.html" "attendance" "Attendance radio buttons exist"
check_file_content "index.html" "guestCount" "Guest count input exists"
check_file_content "index.html" "guestMessage" "Message textarea exists"
check_file_content "js/menikah.js" "rsvpForm" "RSVP form handler in JS"
check_file_content "js/menikah.js" "successMessage" "Success message handler"
check_file_content "css/menikah.css" ".rsvp-form-section" "RSVP form styling"
check_file_content "css/menikah.css" ".submit-btn" "Submit button styling"
echo ""

echo "🌐 TESTING SHARE FEATURES"
echo "------------------------"
check_file_content "index.html" "shareToSocial" "Share function called"
check_file_content "index.html" "share-facebook" "Facebook share button"
check_file_content "index.html" "share-whatsapp" "WhatsApp share button"
check_file_content "index.html" "share-telegram" "Telegram share button"
check_file_content "index.html" "generateQR" "QR code button"
check_file_content "js/menikah.js" "shareToSocial" "Share function defined"
check_file_content "js/menikah.js" "generateQRCode" "QR generation function"
check_file_content "index.html" "qrcode.min.js" "QR code library loaded"
check_file_content "css/menikah.css" ".share-btn" "Share buttons styling"
echo ""

echo "📱 TESTING RESPONSIVE DESIGN"
echo "---------------------------"
check_file_content "css/menikah.css" "@media (max-width: 480px)" "Mobile styles (≤480px)"
check_file_content "css/menikah.css" "@media (min-width: 481px) and (max-width: 768px)" "Tablet styles (481-768px)"
check_file_content "css/menikah.css" "@media (min-width: 769px)" "Desktop styles (769px+)"
check_file_content "index.html" "viewport" "Viewport meta tag"
check_file_content "css/menikah.css" "aspect-ratio: 3/4" "Responsive image ratio"
check_file_content "css/menikah.css" "font-size: clamp" "Fluid typography"
echo ""

echo "✨ TESTING ANIMATIONS"
echo "--------------------"
check_file_content "css/menikah.css" "transition: all" "Smooth transitions"
check_file_content "css/menikah.css" "transform:" "Transform animations"
check_file_content "css/menikah.css" ".float" "Float animation"
check_file_content "index.html" "fallingHearts" "Falling hearts animation"
check_file_content "css/menikah.css" "@keyframes pulse" "Pulse animation"
check_file_content "css/menikah.css" "@keyframes shimmer" "Shimmer animation"
echo ""

echo "⚡ TESTING PERFORMANCE"
echo "---------------------"
check_file_content "index.html" "defer" "Deferred script loading"
check_file_content "index.html" "rel=\"preconnect\"" "Preconnect to fonts"
check_file_content "index.html" "dns-prefetch" "DNS prefetch for CDN"
check_file_exists "js/performance-optimization.js" "Performance optimization file"
check_file_exists "css/performance.css" "Performance CSS file"
check_file_content "css/performance.css" "will-change:" "GPU acceleration"
check_file_content "js/menikah.js" "localStorage" "Local storage for RSVP"
check_file_content "css/menikah.css" "font-display: swap" "Font display swap"
check_file_content "css/performance.css" "prefers-reduced-motion" "Accessibility support"
echo ""

echo "🗺️ TESTING MAP & LOCATION"
echo "------------------------"
check_file_content "index.html" "google.com/maps" "Google Maps embedded"
check_file_content "index.html" "btn-cta" "Map direction button"
check_file_content "index.html" "Đồng Nấm" "Wedding location text"
echo ""

echo "📊 TESTING META TAGS & SEO"
echo "-------------------------"
check_file_content "index.html" "og:title" "Open Graph title"
check_file_content "index.html" "og:description" "Open Graph description"
check_file_content "index.html" "og:image" "Open Graph image"
check_file_content "index.html" "theme-color" "Theme color meta tag"
check_file_content "index.html" "utf-8" "Character encoding"
echo ""

echo "📚 TESTING DOCUMENTATION"
echo "------------------------"
check_file_exists "README.md" "README file exists"
check_file_exists "OPTIMIZATION_SUMMARY.md" "Optimization summary exists"
echo ""

# Summary
echo "=================================================="
echo "📊 TEST RESULTS"
echo "=================================================="
echo -e "${GREEN}Passed: $PASSED / $TOTAL${NC}"

if [ $PASSED -eq $TOTAL ]; then
    echo -e "${GREEN}✓ All tests passed! Website is fully optimized.${NC}"
    exit 0
else
    FAILED=$((TOTAL - PASSED))
    echo -e "${YELLOW}⚠ $FAILED test(s) need attention${NC}"
    exit 1
fi
