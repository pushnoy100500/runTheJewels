$(document).ready(function(){
	$('#start').click(function() {
		carMove1();
	});

	function carMove1() {
		$('#car').animate({left: '+=570px'}, 2000, carMove2);
		$('#audio').get(0).play();
	}
	var carMove2 = function() {
		$('#car').addClass("rotate90");
		$('#car').animate({top: '+=330px'}, 2000, carMove3);
	}
	var carMove3 = function() {
		$('#car').removeClass('rotate90').addClass('flip180');
		$('#car').animate({left: '-=520px'}, 2000, carMove4);
	}
	var carMove4 = function() {
		$('#car').removeClass('flip180').addClass('rotate90');
		$('#car').animate({top: '+=100px'}, 1000, carMove5);
	}
	var carMove5 = function() {
		$('#car').removeClass('rotate90');
		$('#car').animate({left: '+=300px'}, 1500);
				$('#audio').get(0).pause();

	}
});