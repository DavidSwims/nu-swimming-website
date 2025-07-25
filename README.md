Northwestern Swimming & Diving Website - README File
=====================================================

Creator: David Gerchik
Professor: Victoria C. Chávez

INTERACTIVE FEATURES IMPLEMENTED
=================================

1. LEGACY PAGE CONTENT TOGGLE
   - Location: legacy.html
   - Description: Two buttons that display different content when clicked
   - Expected Behavior:
     * "Our Values" button shows program values
     * "Accomplishments" button shows program achievements
     * Active button changes color when clicked
     * Content updates in the area below buttons

2. SCHEDULE TABLE GENERATOR
   - Location: schedule.html  
   - Description: Weekly training schedule with current week dates
   - Expected Behavior:
     * Page loads with complete weekly schedule table
     * Shows morning and afternoon training sessions
     * "Refresh Schedule" button shows a pop window 
     * Table is responsive for mobile devices

ACCESSIBILITY FEATURES
=====================

- Skip link for keyboard navigation
- Proper heading hierarchy (H1, H2, H3, H4)
- Alt text for all images
- Keyboard navigation support
- Focus indicators for interactive elements
- Semantic HTML elements (nav, main, section)

TECHNICAL IMPLEMENTATION
========================

- JavaScript in external file: scripts/script.js
- CSS in external stylesheet: styles.css
- Images stored in images/ folder
- Site works without JavaScript
- Site works without CSS

FILE STRUCTURE
==============

Root/
├── index.html
├── about.html
├── legacy.html
├── schedule.html
├── team.html
├── styles.css
├── README.txt
├── scripts/
│   └── script.js
└── images/
    ├── Alexsa.webp
    ├── Greyson.webp
    ├── Northwesten Alumni.jpg
    └── Northwesten Swim & Dive Team.jpg

USAGE INSTRUCTIONS
==================

1. Open index.html in a web browser
2. Navigate between pages using the navigation menu
3. On Legacy page, click buttons to see different content
4. On Schedule page, view training schedule
5. Test on mobile by resizing browser window
