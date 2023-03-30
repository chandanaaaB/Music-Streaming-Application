$(".album-poster").on('click', function (e) {
    var dataSwitchId = $(this).attr('data-switch');
    ap.list.switch(dataSwitchId);
    ap.play();
    $("#aplayer").addClass('showPlayer');
});

const ap = new APlayer({
    container: document.getElementById('aplayer'),
    listFolded: true,
    audio: [
         {
            name: 'Kesariya',
            artist: 'Amitabh Bhattacharya, Arijit Singh, Pritam',
            url: 'mp3/Kesariya(PagalWorld.com.se).mp3',
            cover: 'song/Kesariya.jpg'
        }, 
        {
            name: 'Deva-Deva',
            artist: 'Amitabh Bhattacharya, Arijit Singh, Jonita Gandhi, Pritam',
            url: 'mp3/Deva Deva(PagalWorld.com.se).mp3',
            cover: 'song/Deva-Deva.jpg'
        }, 
        {
            name: 'Dance ka Bhoot',
            artist: ' Arijit Singh ',
            url: 'mp3/Dance ka Bhoot(PagalWorld.com.se).mp3',
            cover: 'song/Dance Ka Bhoot.jpeg'
        },
        {
            name: 'Rasiya',
            artist: 'Shreya Ghoshal and Tushar Joshi',
            url: 'mp3/Rasiya(PagalWorld.com.se).mp3',
            cover: 'song/Rasiya.jpeg'
        }, ]
});