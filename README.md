# Luxury RP Loading Screen

Welcome to the **Luxury RP Loading Screen**, a modern and interactive loading screen designed specifically for FiveM servers. This project is built with responsiveness, elegance, and user experience in mind, offering players a high-quality introduction to your server.

---

## 🎨 Features

- **Custom Background Video**: A luxurious video background to captivate players while loading.
- **Dynamic Music Player**:
  - Playlist functionality with play, pause, next, and previous buttons.
  - Volume slider with increments of 10%.
  - Mute/unmute functionality persisting across song changes.
- **Particles Animation**: Beautiful and interactive particles powered by Particles.js.
- **Custom Cursor**: A visually appealing cursor to match the luxury theme.
- **Responsive Design**:
  - Works seamlessly on desktops and mobile devices.
  - Scales elegantly for different screen sizes.
- **Social Media Links**: Quick access to Discord and Tebex for donations.

---

## 🚀 How to Use

### Prerequisites
- A web server or FiveM server to serve the files.
- Basic knowledge of hosting a web-based interface.

### Installation Steps
1. Clone the repository to your server:
   ```bash
   git clone https://github.com/your-username/luxury-rp-loading-screen.git
   ```
2. Upload the repository contents to your desired directory.
3. Update the **particles.json** file (if necessary) to customize the particle effects.
4. Replace **assets/media/video/video_1.mp4** with your preferred video for the background.
5. Update song files in the **assets/media/songs** directory and their metadata in main.js:
  ```
const songs = [
    {
        title: "Your Song Title",
        artist: "Your Song Artist",
        cover: "assets/media/cover/your-song-cover.png",
        audio: "assets/media/songs/your-song.mp3",
        video: "assets/media/video/your-background.mp4"
    }
];
  ```

---

## 📁 Project Structure
```
luxury-rp-loading-screen/
├── assets/
│   ├── css/              # Stylesheets
│   │   └── style.css
│   │   └── all.min.css
│   │   └── fonts.css
│   ├── fonts/             
│   │   └── Poppins
│   │   └── Poppins-Medium
│   │   └── Poppins-Regular
│   │   └── Poppins-SemiBold
│   ├── media/            # Media assets (video, images, audio)
│   │   ├── icons/        # Social icons and cursor image
│   │   ├── cover/        # Song covers
│   │   ├── songs/        # Audio files
│   │   └── video/        # Background videos
│   ├── scripts/          # JS files
│       ├── main.js       # Main functionality
│       └── config.js     # Config configuration
│       └── particles.json # Particles.js configuration
├── index.html            # Main HTML file
└── README.md             # Repository documentation
```
---

## 🛠️ Technologies Used
- HTML5: Markup language for structuring the loading screen.
- CSS3: Styling and animations.
- JavaScript: Functionality for the music player, custom cursor, and interactions.
- Particles.js: Animation for particle effects.
- jQuery: Simplified DOM manipulation.

---

## 🎶 Adding Songs
To add new songs:

1. Upload your audio files to the **assets/media/songs** folder.
2. Add the cover image to the **assets/media/cover** folder.
3. Update the **songs** array in **main.js**:
```
const songs = [
    {
        title: "New Song Title",
        artist: "New Song Artist",
        cover: "assets/media/cover/new-cover.png",
        audio: "assets/media/songs/new-song.mp3",
        video: "assets/media/video/new-video.mp4"
    }
];
```

---

## 🌟 Customization

- **Video Background**
  - Replace the **video_1.mp4** file in **assets/media/video** with your preferred MP4 video.

- **Cursor**
  - Replace the **cursor.png** file in **assets/media/icons** with your custom cursor design.

- **Particles Effect**
  - Edit **particles.json** to modify the particle behavior, colors, and density. Use the Particles.js Documentation for guidance


---

## 📄 License

This project is licensed under the MIT License. Feel free to use and modify it for your FiveM server.

---

## ❤️ Contributions

Contributions are welcome! If you have ideas or enhancements, feel free to submit a pull request or open an issue.


