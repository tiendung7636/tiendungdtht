$(function()
{
    var playerTrack = $("#player-track");
	var bgArtwork = $('#bg-artwork');
	var bgArtworkUrl;
	var albumName = $('#album-name');
	var trackName = $('#track-name');
	var albumArt = $('#album-art'),
		sArea = $('#s-area'),
		seekBar = $('#seek-bar'),
		trackTime = $('#track-time'),
		insTime = $('#ins-time'),
		sHover = $('#s-hover'),
		playPauseButton = $("#play-pause-button"),
		i = playPauseButton.find('i'),
		tProgress = $('#current-time'),
		tTime = $('#track-length'),
		seekT, seekLoc, seekBarPos, cM, ctMinutes, ctSeconds, curMinutes, curSeconds, durMinutes, durSeconds, playProgress, bTime, nTime = 0,
		buffInterval = null, tFlag = false;
	
	var playPreviousTrackButton = $('#play-previous'), playNextTrackButton = $('#play-next'), currIndex = -1;
	
	var songs = [{
		artist: "Dig Didzay",
		name: "Nếu Anh Đi (Cover)",
		url: "Musics/NeuAnhDi.mp3",
		picture: "Background/1.jpg"
	},{
		artist: "Bùi Anh Tuấn",
		name: "Lặng Yên",
		url: "Musics/langyen.mp3",
		picture: "Background/2.jpg"
	},{
		artist: "Tuấn Hưng",
		name: "Anh nhớ em",
		url: "Musics/2.mp3",
		picture: "Background/3.jpg"
	},{
		artist: "Bùi Anh Tuấn",
		name: "Forever",
		url: "Musics/forever.mp3",
		picture: "Background/4.jpg"
	},{
	    artist: "Bùi Anh Tuấn",
		name: "Hẹn Một Mai",
		url: "Musics/hen1mai.mp3",
		picture: "Background/5.jpg"
	},{
	    artist: "Gia Huy",
		name: "Đừng Khóc Nữa Mà",
		url: "Musics/dungkhocnuama.mp3",
		picture: "Background/6.jpg"
	},{
	    artist: "Tuấn Hưng",
		name: "Vẫn Nhớ",
		url: "Musics/1.mp3",
		picture: "Background/7.jpg"
	},{
	    artist: "Bùi Anh Tuấn ",
		name: "Quên",
		url: "Musics/quen.mp3",
		picture: "Background/8.jpg"
	},{
	    artist: "Việt",
		name: "Tình Đẹp Đến Mấy Cũng Tàn",
		url: "Musics/tinhdepdenmaycungtan.mp3",
		picture: "Background/9.jpg"
	},{
	    artist: "Nhật Phong",
		name: "Yêu Một Người Tổn Thương",
		url: "Musics/yeumotnguoitonthuong.mp3",
		picture: "Background/1.jpg"
        },{
	    artist: "Tuấn Hưng",
		name: "vẫn nhớ",
		url: "Musics/1.mp3",
		picture: "Background/2.jpg"
        },{
	    artist: "Phan Mạnh Quỳnh",
		name: "Bước Qua Thế Giới",
		url: "Musics/3.mp3",
		picture: "Background/4.jpg"
        },{
	    artist: "Tuấn Hưng",
		name: "Chia Xa",
		url: "Musics/4.mp3",
		picture: "Background/3.jpg"
        },{
	    artist: "Phan Mạnh Quỳnh",
		name: "Có Chàng Trai Viết Lên Cây",
		url: "Musics/5.mp3",
		picture: "Background/6.jpg"
        },{
	    artist: "Mr Siro",
		name: "Cô Đơn Không Muốn Về Nhà",
		url: "Musics/6.mp3",
		picture: "Background/5.jpg"
        },{
	    artist: "Tuấn Hưng",
		name: "Độc Thoại",
		url: "Musics/7.mp3",
		picture: "Background/7.jpg"
        },{
	    artist: "Thanh Hưng",
		name: "Đúng Người Đúng Thời Điểm",
		url: "Musics/8.mp3",
		picture: "Background/8.jpg"
        },{
	    artist: "Alan Walker",
		name: "Faded",
		url: "Musics/9.mp3",
		picture: "Background/9.jpg"
        },{
	    artist: "Jack",
		name: "Hoa Vô Sắc",
		url: "Musics/10.mp3",
		picture: "Background/1.jpg"
        },{
	    artist: "Phan Mạnh Quỳnh",
		name: "Hồi Ức (live)",
		url: "Musics/11.mp3",
		picture: "Background/4.jpg"
        },{
	    artist: "Phan Mạnh Quỳnh",
		name: "Làm Sao Giữ",
		url: "Musics/12.mp3",
		picture: "Background/1.jpg"
        },{
	    artist: "Phan Mạnh Quỳnh",
		name: "Người Khác(piano)",
		url: "Musics/14.mp3",
		picture: "Background/2.jpg"
        },{
	    artist: "Phan Mạnh Quỳnh",
		name: "Nước Ngoài",
		url: "Musics/15.mp3",
		picture: "Background/3.jpg"
        },{
	    artist: "Trịnh Thăng Bình",
		name: "Tâm Sự Tuổi 30",
		url: "Musics/16.mp3",
		picture: "Background/4.jpg"
        },{
	    artist: "Tuấn Hưng",
		name: "Tan",
		url: "Musics/17.mp3",
		picture: "Background/5.jpg"
        },{
	    artist: "Bùi Anh Tuấn ",
		name: "Thuận Theo Ý Trời",
		url: "Musics/18.mp3",
		picture: "Background/1.jpg"
        },{
	    artist: "Tuấn Hưng",
		name: "Tìm Lại Bầu Trời",
		url: "Musics/19.mp3",
		picture: "Background/2.jpg"
        },{
	    artist: "Phan Mạnh Quỳnh",
		name: "Tri Kỷ",
		url: "Musics/20.mp3",
		picture: "Background/3.jpg"
        },{
	    artist: "Phan Mạnh Quỳnh",
		name: "Tự Dưng",
		url: "Musics/21.mp3",
		picture: "Background/4.jpg"
        },{
	    artist: "Phan Duy Anh",
		name: "Từng Yêu",
		url: "Musics/22.mp3",
		picture: "Background/1.jpg"
        },{
	    artist: "Nguyễn Trần Trung Quân ",
		name: "Tự Tâm",
		url: "Musics/23.mp3",
		picture: "Background/5.jpg"
        },{
	    artist: "Thanh Hưng",
		name: "Yêu Nhiều Ghen Nhiều",
		url: "Musics/25.mp3",
		picture: "Background/6.jpg"
        },{
	    artist: "Phan Mạnh Quỳnh",
		name: "Vợ Người Ta",
		url: "Musics/26.mp3",
		picture: "Background/9.jpg"
        },{
	    artist: "Trịnh Thăng Bình ",
		name: "Vỡ Tan",
		url: "Musics/27.mp3",
		picture: "Background/8.jpg"
        },{
	    artist: "Thanh Hưng",
		name: "Vết Nhơ",
		url: "Musics/28.mp3",
		picture: "Background/6.jpg"
        },{
	    artist: "Chung Thành Duy",
		name: "Duyên Trời Lấy 2",
		url: "Musics/24.mp3",
		picture: "Background/5.jpg"
		},{
	    artist: "Trịnh Dình Quang",
		name: "Phụ Tình",
		url: "Musics/29.mp3",
		picture: "Background/2.jpg"
        },{
	    artist: "Trịnh Dình Quang",
		name: "Buồn Lắm Em Ơi",
		url: "Musics/30.mp3",
		picture: "Background/4.jpg"
        },{
	    artist: "Trịnh Dình Quang",
		name: "Em Mỉm Cười Trông Thật Đẹp",
		url: "Musics/31.mp3",
		picture: "Background/3.jpg"
        },{
	    artist: "Trịnh Dình Quang",
		name: "Bố Trẻ Con",
		url: "Musics/32.mp3",
		picture: "Background/6.jpg"
        },{
	    artist: "Trịnh Dình Quang",
		name: "Gửi Tình Yêu Nhỏ",
		url: "Musics/33.mp3",
		picture: "Background/5.jpg"
        },{
	    artist: "Trịnh Dình Quang",
		name: "Tìm Em",
		url: "Musics/34.mp3",
		picture: "Background/7.jpg"
        },{
	    artist: "Trịnh Dình Quang",
		name: "Đồng Vân",
		url: "Musics/35.mp3",
		picture: "Background/8.jpg"
        },{
	    artist: "Vũ Duy Khánh",
		name: "Đừng Buông Tay Nhau",
		url: "Musics/36.mp3",
		picture: "Background/9.jpg"
        },{
	    artist: "Vũ Duy Khánh",
		name: "Vợ Tuyệt Vời Nhất",
		url: "Musics/37.mp3",
		picture: "Background/1.jpg"
        },{
	    artist: "Vũ Duy Khánh",
		name: "Chúc Vợ Ngủ Ngon",
		url: "Musics/38.mp3",
		picture: "Background/4.jpg"
        },{
	    artist: "Vũ Duy Khánh",
		name: "Đau",
		url: "Musics/39.mp3",
		picture: "Background/1.jpg"
        },{
	    artist: "Tùng Dương",
		name: "Quê Nhà",
		url: "Musics/40.mp3",
		picture: "Background/2.jpg"
        },{
	    artist: "Tùng Dương",
		name: "Con Cò",
		url: "Musics/41.mp3",
		picture: "Background/3.jpg"
        },{
	    artist: "Tùng Dương",
		name: "Mẹ Tôi",
		url: "Musics/42.mp3",
		picture: "Background/4.jpg"
        },{
	    artist: "Hà Anh Tuấn",
		name: "Mashup: Chỉ Còn Những Mùa Nhớ ",
		url: "Musics/43.mp3",
		picture: "Background/5.jpg"
        },{
	    artist: "Hà Anh Tuấn ",
		name: "Đợi Em Đến Hoa Cũng Tàn ",
		url: "Musics/44.mp3",
		picture: "Background/1.jpg"
        },{
	    artist: "Hà Anh Tuấn",
		name: "Qua Cơn Mê",
		url: "Musics/45.mp3",
		picture: "Background/2.jpg"
        },{
	    artist: "Hà Anh Tuấn",
		name: "Tháng Tư Là Lời Nói Dối Của Em",
		url: "Musics/46.mp3",
		picture: "Background/3.jpg"
        },{
	    artist: "Hà Anh Tuấn",
		name: "TVề Đi Em",
		url: "Musics/47.mp3",
		picture: "Background/4.jpg"
        },{
	    artist: "Trung Quân Idol",
		name: "Chưa Bao Giờ",
		url: "Musics/48.mp3",
		picture: "Background/1.jpg"
        },{
	    artist: "Trung Quân Idol",
		name: "Trót Yêu",
		url: "Musics/49.mp3",
		picture: "Background/5.jpg"
        },{
	    artist: "Trung Quân Idol",
		name: "Dấu Mưa",
		url: "Musics/50.mp3",
		picture: "Background/6.jpg"
        },{
	    artist: "Phan Mạnh Quỳnh",
		name: "Từ Đó(Mắt Biếc OST)",
		url: "Musics/51.mp3",
		picture: "Background/9.jpg"
        },{
	    artist: "Phan Mạnh Quỳnh",
		name: "Ngày Chưa Giông Bão",
		url: "Musics/53.mp3",
		picture: "Background/8.jpg"
        },{
	    artist: "X2X",
		name: "Thiệp Hồng Người Dưng",
		url: "Musics/54.mp3",
		picture: "Background/6.jpg"
        },{
	    artist: "Đạt G, Masew, Bray",
		name: "Xin",
		url: "Musics/55.mp3",
		picture: "Background/5.jpg"
		},{
	    artist: "Bảo Jen, Kn",
		name: "Hẹn Ước",
		url: "Musics/52.mp3",
		picture: "Background/9.jpg"
	}];
	
	function shuffle(a) {
		var j, x, i;
		for (i = a.length - 1; i > 0; i--) {
			j = Math.floor(Math.random() * (i + 1));
			x = a[i];
			a[i] = a[j];
			a[j] = x;
		}
		return a;
	}
	songs = shuffle(songs);

    function playPause()
    {
        setTimeout(function()
        {
            if(audio.paused)
            {
                playerTrack.addClass('active');
                albumArt.addClass('active');
                checkBuffering();
                i.attr('class','fas fa-pause');
                audio.play();
            }
            else
            {
                playerTrack.removeClass('active');
                albumArt.removeClass('active');
                clearInterval(buffInterval);
                albumArt.removeClass('buffering');
                i.attr('class','fas fa-play');
                audio.pause();
            }
        },300);
    }

    	
	function showHover(event)
	{
		seekBarPos = sArea.offset(); 
		seekT = event.clientX - seekBarPos.left;
		seekLoc = audio.duration * (seekT / sArea.outerWidth());
		
		sHover.width(seekT);
		
		cM = seekLoc / 60;
		
		ctMinutes = Math.floor(cM);
		ctSeconds = Math.floor(seekLoc - ctMinutes * 60);
		
		if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
        if( (ctMinutes < 0) || (ctSeconds < 0) )
			return;
		
		if(ctMinutes < 10)
			ctMinutes = '0'+ctMinutes;
		if(ctSeconds < 10)
			ctSeconds = '0'+ctSeconds;
        
        if( isNaN(ctMinutes) || isNaN(ctSeconds) )
            insTime.text('--:--');
        else
		    insTime.text(ctMinutes+':'+ctSeconds);
            
		insTime.css({'left':seekT,'margin-left':'-21px'}).fadeIn(0);
		
	}

    function hideHover()
	{
        sHover.width(0);
        insTime.text('00:00').css({'left':'0px','margin-left':'0px'}).fadeOut(0);		
    }
    
    function playFromClickedPos()
    {
        audio.currentTime = seekLoc;
		seekBar.width(seekT);
		hideHover();
    }

    function updateCurrTime()
	{
        nTime = new Date();
        nTime = nTime.getTime();

        if( !tFlag )
        {
            tFlag = true;
            trackTime.addClass('active');
        }

		curMinutes = Math.floor(audio.currentTime / 60);
		curSeconds = Math.floor(audio.currentTime - curMinutes * 60);
		
		durMinutes = Math.floor(audio.duration / 60);
		durSeconds = Math.floor(audio.duration - durMinutes * 60);
		
		playProgress = (audio.currentTime / audio.duration) * 100;
		
		if(curMinutes < 10)
			curMinutes = '0'+curMinutes;
		if(curSeconds < 10)
			curSeconds = '0'+curSeconds;
		
		if(durMinutes < 10)
			durMinutes = '0'+durMinutes;
		if(durSeconds < 10)
			durSeconds = '0'+durSeconds;
        
        if( isNaN(curMinutes) || isNaN(curSeconds) )
            tProgress.text('00:00');
        else
		    tProgress.text(curMinutes+':'+curSeconds);
        
        if( isNaN(durMinutes) || isNaN(durSeconds) )
            tTime.text('00:00');
        else
		    tTime.text(durMinutes+':'+durSeconds);
        
        if( isNaN(curMinutes) || isNaN(curSeconds) || isNaN(durMinutes) || isNaN(durSeconds) )
            trackTime.removeClass('active');
        else
            trackTime.addClass('active');

        
		seekBar.width(playProgress+'%');
		
		if( playProgress == 100 )
		{
			i.attr('class','fa fa-play');
			seekBar.width(0);
            tProgress.text('00:00');
            albumArt.removeClass('buffering').removeClass('active');
            clearInterval(buffInterval);
			selectTrack(1);
		}
    }
    
    function checkBuffering()
    {
        clearInterval(buffInterval);
        buffInterval = setInterval(function()
        { 
            if( (nTime == 0) || (bTime - nTime) > 1000  )
                albumArt.addClass('buffering');
            else
                albumArt.removeClass('buffering');

            bTime = new Date();
            bTime = bTime.getTime();

        },100);
    }

    function selectTrack(flag)
    {
        if( flag == 0 || flag == 1 )
            ++currIndex;
        else
            --currIndex;

        if( (currIndex > -1) && (currIndex < songs.length) )
        {
            if( flag == 0 )
                i.attr('class','fa fa-play');
            else
            {
                albumArt.removeClass('buffering');
                i.attr('class','fa fa-pause');
            }

            seekBar.width(0);
            trackTime.removeClass('active');
            tProgress.text('00:00');
            tTime.text('00:00');
			
			currAlbum = songs[currIndex].name;
            currTrackName = songs[currIndex].artist;
            currArtwork = songs[currIndex].picture;

            audio.src = songs[currIndex].url;
            
            nTime = 0;
            bTime = new Date();
            bTime = bTime.getTime();

            if(flag != 0)
            {
                audio.play();
                playerTrack.addClass('active');
                albumArt.addClass('active');
            
                clearInterval(buffInterval);
                checkBuffering();
            }

            albumName.text(currAlbum);
            trackName.text(currTrackName);
			albumArt.find('img').attr('src', currArtwork);
            $('#album-art img').prop('src', bgArtworkUrl);
        }
        else
        {
            if( flag == 0 || flag == 1 )
                --currIndex;
            else
                ++currIndex;
                albumArt.find('img').attr('src', currArtwork);
        }
    }

    function initPlayer()
	{	
        audio = new Audio();

		selectTrack(0);
		
		audio.loop = false;
		
		playPauseButton.on('click',playPause);
		
		sArea.mousemove(function(event){ showHover(event); });
		
        sArea.mouseout(hideHover);
        
        sArea.on('click',playFromClickedPos);
		
        $(audio).on('timeupdate',updateCurrTime);

        playPreviousTrackButton.on('click',function(){ selectTrack(-1);} );
        playNextTrackButton.on('click',function(){ selectTrack(1);});
	}
    
	initPlayer();
});
