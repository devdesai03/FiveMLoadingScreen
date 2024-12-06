$(document).ready(function () {
    // Particles.js configuration
    particlesJS.load('particles-js', 'assets/scripts/particles.json', function () {
        console.log('Particles.js loaded.');
    });

    // Audio & Video Elements
    const $customCursor = $("#custom-cursor");
    const audioToggle = $("#audio-toggle");
    const toggleText = $(".toggle-text");

    // Playlist
    const songs = [
        {
            title: "Banned From Boston",
            artist: "Jay 5ive x Jay Hound",
            cover: "assets/media/cover/song1.png",
            audio: "assets/media/songs/song_1.mp3",
            video: "assets/media/video/video_1.mp4"
        },
        {
            title: "50 Bars, Pt. 4",
            artist: "Rah Swish",
            cover: "assets/media/cover/song2.png",
            audio: "assets/media/songs/song_2.mp3",
            video: "assets/media/video/video_1.mp4"
        },
        {
            title: "Solo",
            artist: "Future",
            cover: "assets/media/cover/song3.png",
            audio: "assets/media/songs/song_3.mp3",
            video: "assets/media/video/video_1.mp4"
        },
        {
            title: "Keep It P Pt.2",
            artist: "EthoSuave",
            cover: "assets/media/cover/song4.jpg",
            audio: "assets/media/songs/song_4.mp3",
            video: "assets/media/video/video_1.mp4"
        }
    ];

    let currentSongIndex = 0;
    const audio = new Audio();
    const $songTitle = $(".song-title");
    const $songArtist = $(".song-artist");
    const $songCover = $(".song-cover");
    const $videoElement = $("#bg-video");
    const $playPauseButton = $("#play-pause");
    const $volumeSlider = $("#volume-slider");

    let isMuted = false; // Track mute state
    let isInitialized = false; // Track if audio/video initialized

    // Initialize audio/video playback only after interaction
    $(document).on("click", function () {
        if (!isInitialized) {
            isInitialized = true;
            audio.play();
            $videoElement[0].play();
        }
    });

    // Update player UI and media
    function updatePlayer() {
        const song = songs[currentSongIndex];

        // Update UI details
        $songTitle.text(song.title);
        $songArtist.text(song.artist);
        $songCover.attr("src", song.cover);

        // Update audio source
        audio.src = song.audio;
        audio.volume = isMuted ? 0 : parseFloat($volumeSlider.val()) / 100;
        audio.play();

        // Update video source
        $videoElement.attr("src", song.video);
        $videoElement[0].play();

        // Update play/pause button
        $playPauseButton.text("⏸");
    }

    // Play/Pause functionality
    $playPauseButton.on("click", function () {
        if ($videoElement[0].paused || audio.paused) {
            $videoElement[0].play();
            audio.play();
            $(this).text("⏸");
        } else {
            $videoElement[0].pause();
            audio.pause();
            $(this).text("▶");
        }
    });

    // Next Song functionality
    $("#next-song").on("click", function () {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        updatePlayer();
    });

    // Previous Song functionality
    $("#prev-song").on("click", function () {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        updatePlayer();
    });

    // Volume Control
    $volumeSlider.on("input", function () {
        const volume = $(this).val() / 100;
        if (!isMuted) audio.volume = volume;
    });

    // Mute/Unmute Toggle
    audioToggle.on("change", function () {
        isMuted = !$(this).is(":checked");
        audio.volume = isMuted ? 0 : parseFloat($volumeSlider.val()) / 100;
        toggleText.text(isMuted ? "Unmute" : "Mute");
    });

    // Initialize player with the first song
    updatePlayer();

    // Custom Cursor Behavior
    $(document).on("mousemove", function (e) {
        $customCursor.css({
            display: "block",
            top: e.pageY + "px",
            left: e.pageX + "px",
        });
    }).on("mouseleave", function () {
        $customCursor.css("display", "none");
    }).on("mouseenter", function () {
        $customCursor.css("display", "block");
    });
});
