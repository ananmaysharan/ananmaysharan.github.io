<script>
// @ts-nocheck

    import { onMount } from "svelte";
    import { writable } from "svelte/store";

    let song = writable("undef");
    let artist = writable("undef");
    let src = writable("https://open.spotify.com/user/ananmaysharan");
    let img = writable(
        "https://i.imgur.com/sDCYwXa.png",
    );

    let labelArtist;
    let labelTitle;
    

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

    let isHovered = false;  // Add just this line


</script>

<div class="listening-container listening-fixed"
     on:mouseenter={() => isHovered = true}
     on:mouseleave={() => isHovered = false}>
    <a href={$src}>
        <img
            src={$img}
            alt="{$song} by {$artist}"
            class="disc"
            draggable="false"
        />
    </a>
    <div class="center-circle" />
    {#if isHovered}
        <div class="song-tooltip">
            <span class="title">{$song}</span>
            <span class="artist">{$artist}</span>
        </div>
    {/if}
     <!-- Musical notes animation -->
     <div class="notes">
        <div class="noot-1">&#9835;</div>
        <div class="noot-2">&#9834;</div>
        <div class="noot-3">&#9835;</div>
        <div class="noot-4">&#9834;</div>
    </div>
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
    
    .disc:hover, .center-circle:hover {
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


    .song-tooltip {
        position: absolute;
        top: 50%;
        right: calc(100% + 15px); /* Position to the left with 15px gap */
        transform: translateY(-50%);
        background-color: #222;
        color: white;
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 14px;
        white-space: nowrap;
        z-index: 10;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .song-tooltip::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -8px; /* Arrow on right side pointing to disc */
        transform: translateY(-50%);
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-left: 8px solid #222; /* Arrow pointing right */
    }

    .song-tooltip .title {
        display: block;
        font-weight: 500;
        margin-bottom: 2px;
    }

    .song-tooltip .artist {
        display: block;
        opacity: 0.8;
        font-size: 12px;
    }

    @media only screen and (max-width: 876px) {
        .song-tooltip {
            right: calc(100% + 10px); /* Slightly closer on mobile */
            font-size: 12px;
            padding: 6px 10px;
        }
    }

    /* Musical notes animation */
.notes {
    position: absolute;
    width: 50%;
    min-width: 100px;
    height: 100px;
    top: 0;
    right: -20px;
}

.noot-1, .noot-2, .noot-3, .noot-4 {
    position: absolute;
    animation: notes 2s infinite linear;
    font-size: 1em;
    opacity: 0;
    color: #c0c0c0;
}

.noot-1 { top: 0px; left: 0; animation-delay: 0.5s; }
.noot-2 { top: 0px; left: 10%; animation-delay: 1s; }
.noot-3 { top: 0px; left: 20%; animation-delay: 1.5s; }
.noot-4 { top: 0px; left: 30%; animation-delay: 2s; }

@keyframes notes {
    0% { transform: scale(1) translate(0, 0); opacity: 0; }
    50% { opacity: 1; transform: scale(1.2) translate(50%, -50%); }
    80% { opacity: 0; transform: scale(1.2) translate(100%, -100%); filter: blur(1px); }
    100% { transform: scale(1.2) translate(100%, -100%); opacity: 0; filter: blur(2px); }
}
</style>