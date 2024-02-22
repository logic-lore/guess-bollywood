levels = localStorage.bollySongLevel
total = parseInt(songLevelTotal);

var coins = localStorage.getItem("bollyCoins");
document.getElementById("coins").innerHTML = coins;

var FullImage = 0;

setTimeout(() => { $(".answer-bg, .back-img").css({ transform: 'scale(1)', opacity: '1' }); }, 100);
setTimeout(() => { $(".letters-bg").css({ transform: 'scale(1)', opacity: '1' }); }, 200);
setTimeout(() => { $(".tool-bg").css({ transform: 'scale(1)', opacity: '1' }); }, 300);


function Outro() {
	setTimeout(() => {
		$(".game-over-con").fadeOut();
		$(".game-over").css({ transform: 'scale(1.2)', opacity: '0' });
		$('.levels, .coins').css({ transform: 'scale(1.2)', opacity: '0' });
	}, 100);
	setTimeout(() => { $(".answer-bg, .main-img-bg, .back-img").css({ transform: 'scale(1.2)', opacity: '0' }); }, 100);
	setTimeout(() => { $(".letters-bg").css({ transform: 'scale(1.2)', opacity: '0' }); }, 150);
	setTimeout(() => { $(".tool-bg").css({ transform: 'scale(1.2)', opacity: '0' }); }, 200);
}

if (FullImage == 0) {
	$(".main-img-bg2").css({ visibility: 'hidden' });
}


function MainShuffle() {
	$(function () {
		var parent = $(".letters-bg");
		var divs = parent.children();
		while (divs.length) {
			parent.append(divs.splice(Math.floor(Math.random() * divs.length), 1)[0]);
		}
	});
}

function LevelNext() {
	coins++;
	localStorage.setItem("bollyCoins", coins);
	document.getElementById("coins").innerHTML = coins;
}
document.getElementById("coin-txt").innerHTML = "+1";

$(document).ready(function () {
	vhHeight = $(window).outerHeight();
	fullHeight = $(".full").outerHeight();
	calcHeight = vhHeight - fullHeight;
	$(".letters-bg").css({ height: '' + (calcHeight - 10) });

	function Append() {
		$('.play-aud').css({ visibility: 'hidden' });
		$('.playing-bg').fadeOut();
		$('.loading-bg').css({display:'flex'});

		interact = true;
		$("#main-levels").text(levels);
		$("#ans").text(window[`q${levels}`]);
		$("#noans1").text(window[`q1${levels}`]);
		$("#noans2").text(window[`q2${levels}`]);
		$("#noans3").text(window[`q3${levels}`]);
		$("#noans4").text(window[`q4${levels}`]);
		$(".main-img").attr('src', `audio/${levels}.mp3`);
		setTimeout(() => {
			$("#ans-txt").html(window[`ans${levels}`]);
		}, 400);

		$(".option").css({
			backgroundColor: '#d3f36b'
		});

		MainShuffle();

		document.getElementById("main-aud").play();

		if (window['li' + levels] == null) {
			$('.yt-bg').fadeOut(0);
		} else {
			$('.yt-bg').off();
			$('.yt-bg').click(function () {
				console.log("yt-bg")
				setTimeout(() => {
					console.log('levels', levels)
					console.log('parent.location', window['li' + (levels - 1)])
					window.location = window['li' + (levels - 1)];
				}, 600);
			});
		}
	}
	Append();

	$(".sound-img").click(function () {
		document.getElementById("main-aud").play();
	});

	$("#main-aud").on("ended", function () {
		//song play ended
		$('.playing-bg').fadeOut();
		$('.play-aud').css({ visibility: 'visible' });
	});

	document.getElementById("main-aud").onplaying = function () {
		//starts playing the song
		setTimeout(() => {
			$('.play-aud').css({ visibility: 'hidden' });
			$('.playing-bg').css({ display: 'flex' });
		}, 400);

	};

	$('.next').click(function () {
		//the 'levels' variable have new unlocked level value while 'next' button is clicked
		if (levels <= total) {
			Append();
		} else { window.history.back(); }
		setTimeout(() => {
			$(".finish-con").fadeOut();
			$(".game-over").css({ transform: 'scale(1.2)', opacity: '0' });
			$('.levels, .coins').css({ transform: 'scale(1.2)', opacity: '0' });
		}, 100);
		setTimeout(() => {
			$('.score2').css({visibility:'hidden'});
			$(".finish-con").fadeOut();
			$(".game-over").css({ transform: 'scale(1)', opacity: '1' });
			$('.levels, .coins').css({ transform: 'scale(1)', opacity: '1' });
		}, 500);
	});

	var Inter = localStorage.getItem('Inter');
	$('.back-img, .home, .retry, .next').click(function () {
		if (Inter > 4) {
			Inter = 0;
			localStorage.setItem('Inter', 0);
			parent.location = 'https://inter';
		} else {
			Inter++;
			localStorage.setItem('Inter', Inter);
		}
	});

	$('.retry').click(function () {
		interact = true;
		$(".option").css({
			backgroundColor: '#d3f36b'
		});
		setTimeout(() => { $(".game-over").css({ transform: 'scale(1.2)', opacity: '0' }); }, 100);
		$('.game-over-con').fadeOut();
		setTimeout(() => { $(".game-over").css({ transform: 'scale(1)', opacity: '1' }); }, 400);
	});

	$('.skip-img').click(function () {
		if (coins < 10) {
			document.getElementById("button3").play();
			$('.out-coins-con').css({ display: 'flex' });
			setTimeout(function () { $('.hint-bg-bg').fadeOut(); }, 100);
			setTimeout(function () { $('.hint-bg').css({ top: '0' }); }, 400);
		} else {

			document.getElementById("win").play();
			coins -= 10;
			levels++; localStorage.bollySongLevel = levels;
			localStorage.bollyCoins = coins;
			$("#coins").html(coins);
			$('.finish-con').css({ display: 'flex' });
		}
	});


	$('.back-img, .home').click(function () {
		Outro();
		setTimeout(function () { window.history.back(); }, 900);
	});

	$('.btn1, .btn3').click(function () {
		setTimeout(() => { $(".out-coins").css({ transform: 'scale(1.2)', opacity: '0' }); }, 100);
		$('.out-coins-con').fadeOut();
		setTimeout(() => { $(".out-coins").css({ transform: 'scale(1)', opacity: '1' }); }, 400);
	});

	$('.btn1').click(function () {
		setInterval(() => {
			coins = localStorage.getItem("bollyCoins");
			$("#coins").html(coins);
		}, 2000);
		$(".buy-coins-con").fadeIn();
	});

	$('.buy-coins-top').click(function () {
		$(".buy-coins-con").fadeOut();
	});

	$(".free").click(function () {
		setTimeout(() => { parent.location = "https://reward"; }, 350);
	});
	$(".buy1").click(function () {
		setTimeout(() => { parent.location = "https://item1"; }, 350);
	});
	$(".buy2").click(function () {
		setTimeout(() => { parent.location = "https://item2"; }, 350);
	});
	$(".buy3").click(function () {
		setTimeout(() => { parent.location = "https://item3"; }, 350);
	});

	$('.cancel').click(function () {
		$('.no-more-vid-con').fadeOut();
	});

	$('.hint').click(function () {
		$(".hint-bg-bg").css({ display: 'block' });
	});

	$('.hint-bg-close, .hint-bg-top').click(function () {
		$(".hint-bg-bg").fadeOut();
		$('.hint-bg').css({ transform: 'translateY(20%)', opacity: '0' });
		setTimeout(() => { $('.hint-bg').css({ transform: 'translateY(0%)', opacity: '1' }); }, 400);
	});

	$('.letter-ct').click(function () {
		document.getElementById("button").play();
	});
	$('.btn1, .btn3, .home, .retry, .back-img, .hint, .cancel, .clear-all').click(function () {
		document.getElementById("button2").play();
	});

	interact = true;
	$("#ans").click(function () {
		document.getElementById("main-aud").pause();
		if (!interact)
			return

		interact = false;
		console.log("Correct");
		$(this).css({ background: 'green' });
		document.getElementById("finish").play();

		giveReward = Math.floor((Math.random() * 3) + 1);

		setTimeout(() => {
			if (giveReward == 1) {
				//give one coin
				$('.score2').css({visibility:'visible'});
				coins++; localStorage.setItem("bollyCoins", coins);
				$("#coins").html(coins);
			}
			$('.finish-con').css({ display: 'flex' });
		}, 400);
		levels++;
		localStorage.bollySongLevel = levels;
	});
	$(".noans").click(function () {
		if (!interact)
			return

		interact = false;
		console.log("Wrong");
		$(this).css({ background: 'red' });
		document.getElementById("over").play();
		setTimeout(() => {
			$('.game-over-con').css({ display: 'flex' });
			if (coins >= 4) {
				coins -= 4; localStorage.bollyCoins = coins;
				$("#coins").html(coins);
			} else if (coins > 0) {
				coins = 0; localStorage.bollyCoins = coins;
				$("#coins").html(coins);
			}
		}, 400);
	});

	$(".main-img").error(function () {
		$(".img-error").css({ display: "flex" });
		$(".main-img").css({ visibility: 'hidden' });
		$('.play-aud').css({ visibility: 'hidden' });
	});

	$(".back-img, .coins-img, .clear-all, .hint, .button").error(function () {
		$("img").fadeOut(0);
		$(".full-error").css({ display: 'flex' });
	});

	$(".img-error-btn").click(function () {
		$(".img-error").fadeOut(0);
		$('.play-aud').css({ visibility: 'visible' });
		$(".main-img").attr("src", "audio/" + levels + ".mp3");
		$(".main-img").css({ visibility: 'visible' });
	});
	$(".img-error-btn2").click(function () {
		setTimeout(() => { location.reload(); }, 200);
	});

});

$(".disclaimer-txt").click(function () {
	$('.front').css({ transform: 'perspective(1000px) rotateY(180deg)' });
	$('.back').css({ transform: 'perspective(1000px) rotateY(0deg)' });

});
$(".back").click(function () {
	$('.front').css({ transform: 'perspective(1000px) rotateY(0deg)' });
	$('.back').css({ transform: 'perspective(1000px) rotateY(-180deg)' });

});

if (localStorage.Inter == 'NaN' || localStorage.Inter == NaN) {
	localStorage.Inter = 1;
}