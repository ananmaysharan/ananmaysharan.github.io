<script>
    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    let song = writable("undef");
    let artist = writable("undef");
    let src = writable("https://open.spotify.com/user/ananmaysharan");
    let img = writable(
        "https://i.imgur.com/sDCYwXa.png",
    );

    onMount(async () => {
        const isCached = localStorage.getItem("listeningToCached");
        const cachedTime = localStorage.getItem("listeningToCacheTimestamp");

        if (isCached && cachedTime) {
            const currentTime = new Date().getTime();
            const twoMinutes = 2 * 60 * 1000;

            if (currentTime - parseInt(cachedTime) <= twoMinutes) {
                const image = localStorage.getItem("listeningToImage");
                const link = localStorage.getItem("listeningToLink");
                const title = localStorage.getItem("listeningToTitle");
                const artistStored = localStorage.getItem("listeningToArtist");

                img.set(image);
                artist.set(artistStored);
                song.set(title);
                src.set(link);
                return;
            }
        }

        const response = await fetch(
            "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=ananmaysharan&api_key=039d690f10b142fe161c95b64e66ec45&format=json&limit=1",
        );
        const data = await response.json();
        const track = data.recenttracks.track[0];
        const artistFromApi = track.artist["#text"];
        const imageFromApi = track.image[2]["#text"];
        const { name: title, url: link } = track;

        img.set(imageFromApi);
        artist.set(artistFromApi);
        song.set(title);
        src.set(link);

        localStorage.setItem("listeningToImage", imageFromApi);
        localStorage.setItem("listeningToLink", link);
        localStorage.setItem("listeningToTitle", title);
        localStorage.setItem("listeningToArtist", artistFromApi);
        localStorage.setItem(
            "listeningToCacheTimestamp",
            new Date().getTime().toString(),
        );
        localStorage.setItem("listeningToCached", "true");
    });
</script>

<div class="listening-container">
    <a href={$src}>
        <img
            src={$img}
            alt="{$song} by {$artist}"
            class="disc"
            draggable="false"
        />
    </a>
    <div class="center-circle" />
</div>

<style>
    .disc {
        /* animation: rotate 10s linear infinite; */
        width: 95px;
        height: 95px;
        text-decoration: none;
        outline: 1px solid rgba(0, 0, 0, 0.1);
        outline-offset: -1px;
        border-radius: 50%;
        transition: 0.2s ease-in-out;
        box-shadow:
            rgba(14, 63, 126, 0.06) 0px 0px 0px 1px,
            rgba(42, 51, 70, 0.03) 0px 1px 1px -0.5px,
            rgba(42, 51, 70, 0.04) 0px 2px 2px -1px,
            rgba(42, 51, 70, 0.04) 0px 3px 3px -1.5px,
            rgba(42, 51, 70, 0.03) 0px 5px 5px -2.5px,
            rgba(42, 51, 70, 0.03) 0px 10px 10px -5px,
            rgba(42, 51, 70, 0.03) 0px 24px 24px -8px;
    }

    .disc {
    animation: rotate 10s linear infinite;
    }
    
    .disc:hover {
        cursor: pointer;
    }

      
    .disc:hover {
      scale: 1.01;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
        rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
    }

    .listening-container {
        position: relative;
        width: 95px;
        height: 95px;
    }

    .center-circle {
        position: absolute;
        background-color: #f9f9f9;
        border-radius: 50%;
        width: 16px;
        height: 16px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.5);
        border: 10px solid #222;
        outline: 2px solid #000;


    }

    @media only screen and (max-width: 876px) {
        .listening-container {
            width: 80px;
            height: 80px;
        }

        .disc {
            width: 80px;
            height: 80px;
        }

        .center-circle {
            width: 12px;
            height: 12px;
        }
    }

    @keyframes rotate {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
</style>
