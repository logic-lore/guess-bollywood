levels = localStorage.bollyActorLevel
total = parseInt(bollyActorLevelTotal);

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
$('#coin-txt').text("+1");

$(".main-img").on("load", function () {
	$(".loading-txt").fadeOut();
	$(".main-img").fadeIn();
});

$(document).ready(function () {
	vhHeight = $(window).outerHeight();
	fullHeight = $(".full").outerHeight();
	calcHeight = vhHeight - fullHeight;
	$(".letters-bg").css({ height: '' + (calcHeight - 10) });

	function Append() {
		$(".main-img").fadeOut();
		$(".loading-txt").fadeIn();

		interact = true;
		$("#main-levels").text(levels);
		$("#ans").text(window[`ans${levels}`]);
		$("#noans1").text(window[`noans1${levels}`]);
		$("#noans2").text(window[`noans2${levels}`]);
		$("#noans3").text(window[`noans3${levels}`]);
		$("#noans4").text(window[`noans4${levels}`]);
		$(".main-img").attr('src', `images/${levels}.webp`);
		setTimeout(() => {
			$("#ans-txt").html(window[`ans${levels}`]);
		}, 400);

		$(".option").css({
			background: '#d3f36b'
		});

		MainShuffle();
	}
	Append();

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
			background: 'linear-gradient(90deg, rgba(111, 134, 245, 1) 0%, rgba(83, 111, 237, 1) 100%)'
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
			levels++; localStorage.bollyActorLevel = levels;
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
		localStorage.bollyActorLevel = levels;
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
	});

	$(".back-img, .coins-img, .clear-all, .hint, .button").error(function () {
		$("img").fadeOut(0);
		$(".full-error").css({ display: 'flex' });
	});

	$(".img-error-btn").click(function () {
		$(".img-error").fadeOut(0);
		$(".main-img").attr("src", "../images/" + levels + ".webp");
		$(".main-img").css({ visibility: 'visible' });
	});
	$(".img-error-btn2").click(function () {
		setTimeout(() => { location.reload(); }, 200);
	});

});

smallImage = true;
$(".main-img").click(function () {
	if (smallImage) {
		smallImage = false;
		$('.main-img').css({ maxWidth: '100vw', maxHeight: '50vh' });
	} else {
		smallImage = true;
		$(".main-img").css({ maxWidth: '85vw', maxHeight: '30vh' });
	}
});

if (localStorage.Inter == 'NaN' || localStorage.Inter == NaN) {
	localStorage.Inter = 1;
}