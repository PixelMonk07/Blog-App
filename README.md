## Blog App 📝

A **responsive** and **dynamic** blog application built with **Node.js**, **Express**, and **EJS**. Share your thoughts effortlessly and enjoy a clean, modern interface across all devices.

---

### 🚀 Features

- **Responsive Design**: Looks great on mobile, tablet, and desktop
- **EJS Templating**: Render dynamic content with partials for header, navigation, and footer
- **CRUD Functionality**:

  - Create new posts via `/compose`
  - Read posts on the homepage and individual post pages
  - Update and delete posts (extensible)

- **Dedicated Pages**:

  - **Home** (`/`): Read all blog posts
  - **Compose** (`/compose`): Create new content
  - **Post** (`/posts/:postId`): View individual posts
  - **About** (`/about`): Site or author information
  - **Contact** (`/contact`): Contact form or details

- **Organized Structure**: Clean separation with `public/`, `views/partials/`, and main `app.js`

---

### 📁 Project Structure

```
blog-app/
├── public/
│   ├── css/
│   │   ├── responsive.css
│   │   └── styles.css
│   ├── images/
│   └── js/
│       └── main.js
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── navigation.ejs
│   │   ├── footer.ejs
│   │   ├── home.ejs
│   │   ├── about.ejs
│   │   ├── compose.ejs
│   │   ├── contact.ejs
│   │   └── post.ejs
├── .gitignore
├── app.js
├── package.json
├── package-lock.json
└── README.md
```

---

### ⚙️ Installation

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/blog-app.git
   cd blog-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

---

### 🚴‍♂️ Usage

1. **Start the server**

   ```bash
   npm start
   # or
   node app.js
   ```

2. **Open in browser**

   ```
   http://localhost:3000
   ```

3. **Navigate**

   - `/` - Home
   - `/compose` - New post
   - `/about` - About
   - `/contact` - Contact
   - `/posts/:postId` - Individual posts

---

### 🎨 Customize

- **Styles**: Edit `public/css/styles.css` and `public/css/responsive.css`
- **Templates**: Update EJS files in `views/partials/`
- **Server**: Modify routes and settings in `app.js`

---

### 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

### 📄 License

This project is licensed under the MIT License.

---

<sub>Made with ❤️ by \[Your Name]</sub>
