$(document).ready(function () {
    // Particles.js configuration
    particlesJS.load('particles-js', 'assets/scripts/particles.json', function () {
        console.log('Particles.js loaded.');
    });


    // Custom Cursor
    const $customCursor = $("#custom-cursor");

    // Playlist
    const songs = [
        {
            title: "DM",
            artist: "41",
            cover: "https://files.catbox.moe/ysrvmr.jpg",
            video: "https://files.catbox.moe/6rvjed.mp4"
        },
        {
            title: "Yes Freestyle",
            artist: "Sleepy Hallow - ft. Sheff G",
            cover: "https://files.catbox.moe/j0vbgh.jpg",
            video: "https://files.catbox.moe/5ipzx0.mp4"
        },
        {
            title: "TGIF",
            artist: "GloRilla",
            cover: "https://files.catbox.moe/tobqkg.png",
            video: "https://files.catbox.moe/2afmpw.mp4"
        },
        {
            title: "Opp Huntin",
            artist: "Kenzo Balla",
            cover: "https://files.catbox.moe/rc7et2.jpg",
            video: "https://files.catbox.moe/gx8gir.mp4"
        }
    ];

    let currentSongIndex = 0;
    
    const $videoElement = $("#bg-video");
    const $songTitle = $(".song-title");
    const $songArtist = $(".song-artist");
    const $songCover = $(".song-cover");
    const $playPauseButton = $("#play-pause");
    const $volumeSlider = $("#volume-slider");
    const $progressBar = $("#progress-bar");
    const $currentTime = $("#current-time");
    const $duration = $("#duration");

    let isInitialized = false; // Track if video initialized

    // Initialize video playback only after interaction
    $(document).on("click", function () {
        if (!isInitialized) {
            isInitialized = true;
            $videoElement[0].play();
        }
    });

    // Update player UI and media
    function updatePlayer() {
        const song = songs[currentSongIndex];
        $songTitle.text(song.title);
        $songArtist.text(song.artist);
        $songCover.attr("src", song.cover);
        $videoElement.attr("src", song.video);
        $videoElement[0].load();
        $videoElement[0].play();
        $playPauseButton.text("⏸");
    }
    
    $playPauseButton.on("click", function () {
        if ($videoElement[0].paused) {
            $videoElement[0].play();
            $(this).text("❚❚");
        } else { 
            $videoElement[0].pause();
            $(this).text("▶");
        }
    });
    
    $("#prev-song").on("click", function () {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updatePlayer();
    });
    
    $("#next-song").on("click", function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        updatePlayer();
    });
    
    $volumeSlider.on("input", function () {
        $videoElement[0].volume = $(this).val() / 100;
    });
    
    $videoElement.on("timeupdate", function () {
        const currentTime = $videoElement[0].currentTime;
        const duration = $videoElement[0].duration;
        $progressBar.val((currentTime / duration) * 100);
        $currentTime.text(formatTime(currentTime));
        $duration.text(formatTime(duration));
    });
    
    $progressBar.on("input", function () {
        const duration = $videoElement[0].duration;
        $videoElement[0].currentTime = ($(this).val() / 100) * duration;
    });
    
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    }
    
    // Initialize player with the first song
    updatePlayer();

    // Custom Cursor Behavior
    $(document).on("mousemove", function (e) {
        $customCursor.css({
            display: "block",
            top: e.pageY + "px",
            left: e.pageX + "px",
            opacity: 1,
            transition: "opacity 0.3s ease, transform 0.3s ease",
        });
    }).on("mouseleave", function () {
        $customCursor.css({
            opacity: 0,
            transition: "opacity 0.3s ease",
        });
    });

    // Keyboard Navigation
    $(document).on("keydown", function (e) {
        if (e.key === " ") { // Spacebar for play/pause
            e.preventDefault();
            $playPauseButton.trigger("click");
        } else if (e.key === "ArrowRight") { // Right arrow for next song
            $("#next-song").trigger("click");
        } else if (e.key === "ArrowLeft") { // Left arrow for previous song
            $("#prev-song").trigger("click");
        }
    });
});
