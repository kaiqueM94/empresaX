$(function(){
	let imgItens = $('.slider li').length; //Numero de slides
	let imgPos = 1;

	//Adicionando a paginação
	for(let i = 1; i <= imgItens; i++){ 
		$('.paginacao').append('<li><span><i class="fas fa-circle"></i></span></li>');
	}
	//-------------------------------------------------------------------------------------

	$('.slider li').hide(); //Ocultando todos os slides
    $('.slider li:first').show(); //Mostrando o primeiro slide
    $('.paginacao li').css({'color':'#696969'});
	$('.paginacao li:first').css({'color':'#f86a42'}); //Adicionando o estilo da primeira paginação

	//Executando todas as funções
	$('.paginacao li').click(paginacao);
	$('.direita span').click(nextSlider);
	$('.esquerda span').click(prevSlider);

	setInterval(function(){
		nextSlider();
	}, 3000);

	//Funções ==============================================================================

	function paginacao(){
		let paginacaoPos = $(this).index() + 1; //Posição da paginação selecionada

		$('.slider li').hide(); //Ocultando todos os slides
		$('.slider li:nth-child('+ paginacaoPos +')').fadeIn(); //Mostrando o slide selecionado

		//Atribuindo o estilo a paginação selecionada
		$('.paginacao li').css({'color':'#696969'});
		$(this).css({'color':'#f86a42'});

		imgPos = paginacaoPos; //Alinhando a posição das imagens e da paginação
	}

	function nextSlider(){
		if(imgPos >= imgItens){
			imgPos = 1;
		}else{
			imgPos++;
		}

		$('.paginacao li').css({'color':'#696969'});
		$('.paginacao li:nth-child('+ imgPos +')').css({'color':'#f86a42'});

		$('.slider li').hide();//Ocultando todos os slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn();//Mostrando o slide selecionado
	}

	function prevSlider(){
		if(imgPos <= 1){
			imgPos = imgItens;
		}else{
			imgPos--;
		}

		$('.paginacao li').css({'color':'#696969'});
		$('.paginacao li:nth-child('+ imgPos +')').css({'color':'#f86a42'});

		$('.slider li').hide();//Ocultando todos os slides
		$('.slider li:nth-child('+ imgPos +')').fadeIn();//Mostrando o slide selecionado
	}


})

$(function(){
    $("#imagens").hide()
})

$(".vejaequipe").click(function(){
    $("#imagens").fadeIn(1000)
    $("html, body").animate({
        scrollTop: $("#rodape").offset().top
   }, 1000);
})
