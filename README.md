<html>
<head>
    <title>Floating Knights Discover</title>
    <style>
        /* styles for the website */
    </style>
    <script src="AIzaSyDwmpC78HpdErthgATbwCbB971joJKV3po"></script>
    <script>
        // initialize the player
        var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('youtube-player', {
                videoId: 'jfKfPfyJRdk',
                events: {
                    'onReady': onPlayerReady
                }
            });
        }

        function onPlayerReady(event) {
            event.target.mute();
            event.target.pauseVideo();
        }
    </script>
</head>
<body>
    <div id="header">
        <h1>Floating Knights Discover</h1>
    </div>
    <div id="nav">
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
    </div>
    <div id="main">
        <div id="about">
            <h2>About</h2>
            <p>Nothing Interesting I'm just learning to code and thought i'd make a website</p>
        </div>
        <div id="projects">
            <h2>Projects</h2>
            <p>
                <li> <a href="snake.html" target="_blank"> Snake game</a></li>
                <li> Some weebshit</li>
                <li> ect.</li>
            </p>
        </div>
        <div id="youtube-player"></div>
    </div>
</body>
</html>