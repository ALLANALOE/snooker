const videoUrls = [
    'https://youtu.be/FAPCidHWBeI?si=pCdgrMy_IsDCkBBq',
    'https://youtu.be/PDi7p2vLEbw?si=xOW1xbXvIy4Cnmfe',
    'https://youtu.be/n-o9mXOnJjM?si=1VFdLKkq4XD3il6b',
    'https://youtu.be/3qnylhmtk9Q?si=dfjNDBcJs9kFrKYE',
    'https://youtu.be/UAioslM16ik?si=BlVgZ3LQCc1U7jL4',
    'https://youtu.be/oY3_mF347qk?si=b9cabmtfXqUvwm2W',
    'https://youtu.be/iB13kTQd7Aw?si=DXNeOjQ7guSMR4Jw',
    'https://youtu.be/QDMw3ldMi8o?si=ORhAwawo2yxjOHWU',
    'https://youtu.be/8zBxD37Q3_4?si=u56wBVy80_U2TbTj',
    'https://youtu.be/ec1cC6TEbyk?si=CpPQozW98YtkvQNY',
    'https://youtu.be/7HDTg7IrBOA?si=nGsrYV1RR2rIqOIm',
    'https://youtu.be/9ko-_g1v9Cc?si=rqo2tPAwUonYM7TA',
    'https://youtu.be/CArQCOyC4UM?si=vBLSBUoMyjUnURTk',
    'https://youtu.be/SPE4CL_5n38?si=K-x11QRbdJe_-EH-',
    'https://youtu.be/P3Rf-Cc-8LY?si=lZSPyqA431LnfDsr',
    'https://youtu.be/J34uOg8YSck?si=HXVe6xVxa-sj6mUW',
    'https://youtu.be/6iaXhCC3kfI?si=Noo0eKWAVNPfuWuB',
    'https://youtu.be/BCMqqPf4MTY?si=2wA0qjLRkRxAD3Ip',
    'https://youtu.be/xNIhZdSjmjY?si=ypcsAqlynpd5Wr_m',

];

function extractVideoId(url) {
    const regex = /(?:https?:\/\/)?(?:www\.)?youtu\.be\/([a-zA-Z0-9_-]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
}

function createVideoItem(url, title) {
    const videoId = extractVideoId(url);
    if (videoId) {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.onclick = () => window.open(url, '_blank');

        const thumbnail = document.createElement('img');
        thumbnail.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
        thumbnail.alt = 'Video Thumbnail';

        const details = document.createElement('div');
        details.className = 'video-details';

        const videoTitle = document.createElement('h3');
        videoTitle.textContent = title || 'Loading...';

        const date = document.createElement('p');
        date.textContent = 'Loading...'; // Placeholder text

        details.appendChild(videoTitle);
        details.appendChild(date);

        videoItem.appendChild(thumbnail);
        videoItem.appendChild(details);

        return videoItem;
    }
    return null;
}

function onYouTubeIframeAPIReady() {
    videoUrls.forEach(url => {
        const videoId = extractVideoId(url);
        if (videoId) {
            const iframe = document.createElement('iframe');
            iframe.style.display = 'none';
            iframe.src = `https://www.youtube.com/embed/${videoId}?enablejsapi=1`;
            document.body.appendChild(iframe);

            const player = new YT.Player(iframe, {
                events: {
                    'onReady': function(event) {
                        const videoData = event.target.getVideoData();
                        const videoItem = createVideoItem(url, videoData.title);
                        if (videoItem) {
                            document.getElementById('videos').appendChild(videoItem);
                        }
                        iframe.remove(); // Remove iframe after getting the data
                    }
                }
            });
        }
    });
}

// Load YouTube IFrame API and call onYouTubeIframeAPIReady when ready
const script = document.createElement('script');
script.src = 'https://www.youtube.com/iframe_api';
document.head.appendChild(script);
