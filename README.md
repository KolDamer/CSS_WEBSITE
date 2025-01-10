# CSS Website Documentation

## Overview  
The Computer Science Society website is an online platform designed to support students in the KNUST Computer Science Society (CSS) by providing access to resources, event information, and community engagement tools.  
Below are the key features of this website:
- Home Page
- Events Page
- Resources Page
- Membership Page
- Contact Page

---

## Features of Webpages  

### 1. Home Page  
The Home Page is the central hub of the Computer Science Society website, designed to provide an engaging and informative first impression.
- Introduces the society, its mission, and its value to students and computer science enthusiasts.
- Serves as a gateway to all key sections of the website and offers quick access to important information (FAQ section).

### 2. Events Page  
The Event Page is dedicated to both upcoming and past events of the society. This page is where students can discover and participate in the society’s activities.
- Provides detailed information about upcoming events like workshops, conferences, challenges, seminars, etc.
- Detailed information on events such as location, time, and event schedules are available.
- Links to registration forms are available under events that require members to register before participation.
- Links to photos or highlights of successful past events are displayed on the Highlights of Past Events section.

### 3. Resources Page  
A dedicated section of the Computer Science Society website that provides members with access to a hand-picked collection of educational materials.  
The Resource page comes in 6 categories:
- **Getting Started**: Provides an overview of the Resource page, what to expect, and steps to get started using the available resources.
- **YouTube Learning**: Contains a collection of free, high-quality YouTube tutorials covering various areas in Computer Science, as well as recommended channels and tutors.
- **Past Question Docs**: A repository of previous examination and assignment questions from computer science courses. Directs users to the SCISA bot on Telegram for additional resources.
- **Udemy Courses**: Contains links to active WhatsApp communities offering free coupons for Udemy courses to aid students interested in self-learning.
- **Bootcamps**: Provides information on ongoing bootcamps and links to their registration forms.
- **Community**: Contains links to active WhatsApp and Telegram learning communities for sharing materials, collaboration, and group learning.

### 4. Membership Page  
The Membership Page is a core feature of the Computer Science Society website, enabling users to register officially as members of the society.
- A simple, user-friendly form collects essential data like full name, email address, phone number, and year.
- Links to the society’s official social media pages.

### 5. Contact Page  
The Contact Page provides users with the means to reach out to the society for inquiries, feedback, or support, ensuring effective communication.
- A simple, user-friendly form collects essential data like name, email address, and message.
- Includes the society’s official contact details such as email address, phone number, and real-time location.
- Links to the society’s official social media pages.

---

## Designer Documentation  

This documentation section outlines design principles, branding requirements, and specific instructions to ensure consistency and quality in the visual presentation of the website and its assets.

### 1. Color Palette  
The society’s core brand colors represent its identity. These colors should be used prominently in key elements as displayed in the Figma file for the website.
- **Blue**: `#3366FF` — Dominant bright blue color for main sections and accents.
- **Light-grey**: `#737373` — Primary color for paragraph text.
- **Deep-grey**: `#464555` — Color for section titles and subtitles on a contrasting background.
- **White**: `#FFFFFF` — Used for section backgrounds, text on blue backgrounds, and text on transparent or picture backgrounds.
- **Green**: `#22BA5C` — Used for green buttons or text, especially for WhatsApp-related sections.
- **Cyan**: `#22A4C8` — Used for cyan buttons or text, particularly for Telegram-related sections.
- **Purple**: `#8C51FF` — Accent color in the Bootcamp section for Zaptek branding.
- **Black**: `#000000` — Accent color for Binary Basic Club branding.

**Note**: New design elements must strictly follow the existing color palette for visual consistency.

### 2. Typography Guidelines  
- **Primary Font**: `DM Sans` — Used for bold page titles and section titles.
- **Secondary Font**: `Montserrat` — Used for body text and general content.

**Font Weights**:
- Black: For section and page titles.
- Medium: For paragraph text.
- Bold: For buttons.
- Semi-bold, Extra-bold: For special text in sections and cards.

### 3. Imagery and Photography  
- Photography should be bright, professional, and polished, featuring students, community interactions, and technology.
- Avoid generic stock photos; instead, use real-world images from events and community interactions.

### 4. Web Components & UI Elements  
- **Buttons**: Subtle roundness (square) on the Home, Contact, and Membership pages; full roundness (pill) on the Resources and Events pages. Hover effect: Colors lighten with a smooth transition.
- **Navbar**: Transparent with subtle animations. Static for easier navigation across the site. Links change to a hamburger menu on mobile. Includes a button to toggle between Dark Mode and Light Mode.
- **Footer**: Contains essential page links, social media links, and contact information.

### 5. Breakpoints  
Tailwind CSS default breakpoints are used:
- Desktop (`lg`): >= 1024px
- Tablet (`md`): >= 768px
- Mobile (`sm`): >= 320px

---

## Developer Documentation  

This section provides details to help developers understand the website's structure, codebase, and technical requirements.

### 1. Frameworks  
- **Tailwind CSS**: Utilized for styling and responsive design. Custom configurations are applied in the `tailwind.config.js` file.
- **Input.css**: Houses all the default Tailwind configurations.
- **Output.css**: Minified production CSS file generated by running `npm run dev`.

### 2. Libraries or Dependencies  
- **Flowbite**: Pre-built UI components built on top of Tailwind CSS, installed via npm.
- **AOS (Animate On Scroll)**: JavaScript library for scroll animations, installed via npm.
- **Font Awesome**: A library of vector icons and social logos, included via CDN in the HTML header.

### 3. Environment Setup & Installation  
- Clone the repository.
- Run `npm install` to install dependencies.
- Run `npm run dev` to start the development server.
- Access the `index.html` file locally.

**Note**: Customizations to Tailwind configurations should be made in `tailwind.config.js`, followed by running `npm run dev` to rebuild the CSS.

### 4. Database (Google Sheets)  
Google Sheets serves as the backend database for storing and retrieving data, such as member information.

- **Form Setup**: Forms include fields like Full Name, Email, Subject, and Message, styled using HTML and Tailwind CSS.
- **JavaScript Handling**: Prevents page reload and sends form data to a Google Apps Script Web App endpoint via `fetch()`.
- **Apps Script Backend**: Processes POST requests, maps fields to Google Sheets, and stores data as new rows. Deployed as a Web App.
- **Google Sheets**: Acts as a lightweight database, storing submissions with timestamps.
- **Feedback**: Displays success or error messages below the form, avoiding redirection.

### 5. Acknowledgments  
This website was designed and developed by the BinaryBond team. Each member's contribution has been essential in creating a user-friendly, dynamic platform for the Computer Science Society.

**Team Members**:
- King David Adom Benyah
- Gubli Abdullai Sitobu
- Kenneth Ampofo Amponsah

For any questions or help:  
Email Us: [binarybond03@gmail.com](mailto:binarybond03@gmail.com)


