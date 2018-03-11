// ======================================================= Objeto line (dibuja las lineas) ==============
var pp = 0,
    ps = 0;

var structlines = {
	"lines": [{
            "1": "prodServicios",
            "2": "prodProductos"
        }, {
            "1": "prodServicios",
            "2": "serviciosListHead"
        }, {
            "1": "prodProductos",
            "2": "navProductos"
        }, {
            "1": "prodProductos",
            "2": "transporteListHead"
        }, {
            "1": "navProductos",
            "2": "navSoluciones"
        }, {
            "1": "navProductos",
            "2": "navQuienes"
        }, {
            "1": "navQuienes",
            "2": "navUnitecblue"
        }, {
            "1": "navUnitecblue",
            "2": "ublueUblue"
        }, {
            "1": "navUnitecblue",
            "2": "navPlanta"
        }, {
            "1": "navSoluciones",
            "2": "soluSoluciones"
        }, {
            "1": "navPlanta",
            "2": "plantaPlanta"
        }, {
            "1": "pressPrensa",
            "2": "pressImagen"
        }, {
            "1": "pressPrensa",
            "2": "prensaRevistaListHead"
        }, {
            "1": "pressImagen",
            "2": "imagenListHead"
        }, {
            "1": "soluSoluciones",
            "2": "soluRfid"
        }, {
            "1": "soluSoluciones",
            "2": "soluAplicaciones"
        }, {
            "1": "soluRfid",
            "2": "soluRfidListHead"
        }, {
            "1": "soluAplicaciones",
            "2": "soluAplicacionesListHead"
        }, {
            "1": "soluAplicaciones",
            "2": "soluRfid"
        }, {
            "1": "ublueUblue",
            "2": "ublueFase1"
        }, {
            "1": "ublueUblue",
            "2": "ublueFase2"
        }, {
            "1": "ublueFase1",
            "2": "ublueFase2"
        }, {
            "1": "ublueFase1",
            "2": "backendListHead"
        }, {
            "1": "ublueFase2",
            "2": "fabricacionListHead"
        }, {
            "1": "plantaPlanta",
            "2": "plantaListHead"
        }

    ],
    parseline: function (context) {
        $.each(structlines.lines, function (i, object) {
            $.each(object, function (property, value) {
                if (property == 1) {
                    ps = {
                        position: $("#" + value).position(),
                        offset: $("#" + value).offset()
                    };

                    psw = $("#" + value).width();
                    psh = $("#" + value).height();
                }
                if (property == 2) {
                    pp = {
                        position: $("#" + value).position(),
                        offset: $("#" + value).offset()
                    };
                    ppw = $("#" + value).width();
                    pph = $("#" + value).height();
                }
            });

            line.init(pp.offset.left + (ppw / 2), pp.offset.top + (pph / 2),
                ps.offset.left + (psw / 2), ps.offset.top + (psh / 2));
            line.draw(context);

        });
    }
}

var line = {
    coo: {
        x: 0,
        y: 0,
        xx: 0,
        yy: 0,
        amount: 0
    },
    init: function (x, y, xx, yy) {
        this.x = x;
        this.y = y;
        this.xx = xx;
        this.yy = yy;
    },
    draw: function (ctx) {
        ctx.beginPath();
        ctx.strokeStyle = "#00BCE4";
        ctx.lineWidth = 1;

        ctx.moveTo(this.x, this.y);
        ctx.lineTo(this.xx, this.yy);

        ctx.stroke();
    },
    clean: function (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    },
    resize: function (ctx) {
        structlines.parseline(ctx);
    }
};

// ===============================================================================================================

$(document).ready(function () {
    var itemActual;

    navProductosLeft = 60 + $("#navProductos").position().left;
    navProductosTop = $("#area4").height() + 60 + $("#navProductos").position().top;
    navSolucionesLeft = 60 + $("#navSoluciones").position().left;
    navSolucionesTop = $("#area4").height() + 60 + $("#navSoluciones").position().top;
    navPlantaLeft = 60 + $("#navPlanta").position().left;
    navPlantaTop = $("#area4").height() + 60 + $("#navPlanta").position().top;
    navUnitecblueLeft = 60 + $("#navUnitecblue").position().left;
    navUnitecblueTop = $("#area4").height() + 60 + $("#navUnitecblue").position().top;
    navQuienesLeft = 60 + $("#navQuienes").position().left;
    navQuienesTop = $("#area4").height() + 60 + $("#navQuienes").position().top;
    navOcultoLeft = 60 + $("#navOculto").position().left;
    navOcultoTop = $("#area4").height() + 60 + $("#navOculto").position().top;

    reposition();

    $("#prodServicios").click(function () {
        $(".serviciosListHead").show("slide", {
            direction: "left"
        }, 400, function () {
            $(".serviciosList").show("slide", {
                direction: "up"
            }, 400);
        });
    });
			
	hometop = $('#area4').position().top;
	homeleft = $('#area4').position().left;
	
    $('.menu a').click(function () {
        esteid = $(this).attr('id');

        if (esteid == "home") {
            /*$('.wrapper').animate({
                scrollTop: hometop
            }, 1000, 'easeOutCubic', function () {
                $(".wrapper").animate({
                    scrollLeft: homeleft
                }, 1000);
                animations(esteid);
            });*/
            $('.wrapper').animate({
                scrollTop: hometop,
                scrollLeft: homeleft
            }, 1000, 'easeOutCubic');
                animations(esteid);
        } else {
            /*$('.wrapper').animate({
                scrollTop: $(esteid).position().top
            }, 1000, 'easeOutCubic', function () {
                $(".wrapper").animate({
                    scrollLeft: $(esteid).position().left
                }, 1000);
                animations(esteid);
            });*/
            $('.wrapper').animate({
                scrollTop: $(esteid).position().top,
                scrollLeft: $(esteid).position().left
            }, 1000, 'easeOutCubic');
                animations(esteid);
        }
    });
    
    /* ===================================================== no scroll for ipad ===== */
    
    document.body.addEventListener('touchmove',function(event){
	  event.preventDefault();
	},false);

    /* ========================================================== */


    $(window).resize(function () {
        $('.medidas').html(
            "winWidth: " + $(window).width() + "<br/>winHeight: " + $(window).height() + "<br/>docWidth: " + $(document).width() + "<br/>docHeight: " + $(document).height() + "<br/>innerHeight: " + $(window).innerHeight() + "<br/>innerWidth: " + $(window).innerWidth() + "<br/>containerWidth: " + $('.container').width() + "<br/>containerHeight: " + $('.container').height());
        reposition();
        //$.scrollTo(itemActual, 1);
        $('.wrapper').stop().animate({
            scrollTop: itemActual.offset().top - 30
        }, 200, 'easeOutCubic', function () {
            $(".wrapper").animate({
                scrollLeft: itemActual.offset().left - 30
            }, 200);
        });
        line.clean(context);
        line.resize(context);
    });

    function recentrado(itemActual) {
        // $(itemActual).css("background","green")
    }

    function reposition() {

        $("#area2").css("left", $("#area1").width() + 40);
        $("#area3").css("left", $("#area2").width() + 40 + $("#area2").width() + 40);
        $("#area4").css("top", $("#area1").height() + 40);
        $("#area5").css("top", $("#area1").height() + 40);
        $("#area5").css("left", $("#area4").width() + 40);
        $("#area6").css("top", $("#area1").height() + 40);
        $("#area6").css("left",
            $("#area4").width() + 40 + $("#area5").width() + 40);
        $("#area7").css("top",
            $("#area1").height() + 40 + $("#area4").height() + 40);
        $("#area8").css("top",
            $("#area1").height() + 40 + $("#area4").height() + 40);
        $("#area8").css("left", $("#area7").width() + 40);
        $("#area9").css("top",
            $("#area1").height() + 40 + $("#area4").height() + 40);
        $("#area9").css("left",
            $("#area7").width() + 40 + $("#area8").width() + 40);
    }

    // obtengo el lienzo
    var canvas = $("#canvas")[0];
    var context = canvas.getContext("2d");

    if (context) {

        // agrego el canvas a un div
        function loadCanvas(id) {
            //var canvas = document.createElement('canvas');
            div = document.getElementById(id);
            canvas.id = "canvas";
            canvas.width = $("#" + id).width() * 1.5;
            canvas.height = $("#" + id).height() * 1.5;
            canvas.style.zIndex = 8;
            canvas.style.position = "absolute";
            div.appendChild(canvas);
        }

        loadCanvas("container");

        structlines.parseline(context);
        
        /* test line
         * line.init(0,0,2080,1286); line.draw(context);
         */
    };    
});

/* ===================================================== area content anim ===== */
area1flag=0;
area2flag=0;
area3flag=0;
area4flag=0;
area5flag=0;
area6flag=0;
area7flag=0;
area8flag=0;
function animations(esteid){
	/* ················································ area 1 - productos ············· */
	if(esteid=="#area1" && area1flag==0){
		$(".serviciosListHead").hide();
   		$(".serviciosList").hide();
   		$(".productosList").hide();
		setTimeout(function() {
			$(".serviciosListHead").show("slide", { direction: "left" }, 200,function() {
				$(".serviciosList").show("slide", { direction: "up" }, 1000);
			});
	   		$(".productosList").show("slide", { direction: "up" }, 1000);
		}, 500);
		area1flag=1;
   	}
   	/* ················································ area 2 - imagen ············· */
	/* ················································ area 3 - ············· */
	/* ················································ area 4 - home ············· */
	/* ················································ area 5 - soluciones ············· */
	if(esteid=="#area5" && area5flag==0){
		$(".soluRfidListHead").hide();
   		$(".soluRfidList").hide();
   		$(".soluAplicacionesList").hide();
		setTimeout(function() {
			$(".soluRfidListHead").show("slide", { direction: "left" }, 200,function() {
				$(".soluRfidList").show("slide", { direction: "up" }, 1000);
			});
	   		$(".soluAplicacionesList").show("slide", { direction: "up" }, 1000);
		}, 500);
		area5flag=1;
   	}
   	/* ················································ area 7 - Unitecblue ············· */
	if(esteid=="#area7" && area7flag==0){
		$(".fabricacionListHead").hide();
   		$(".fabricacionList").hide();
   		$(".backendListHead").hide();
   		$(".backendList").hide();
		setTimeout(function() {
			$(".fabricacionListHead").show("slide", { direction: "left" }, 200,function() {
				$(".fabricacionList").show("slide", { direction: "up" }, 1000);
			});
	   		$(".backendListHead").show("slide", { direction: "left" }, 800,function() {
	   			$(".backendList").show("slide", { direction: "up" }, 800);
	   		});
		}, 500);
		area7flag=1;
   	}
   	/* ················································ area 8 - planta ············· */
	if(esteid=="#area8" && area8flag==0){
		$(".plantaListHead").hide();
   		$(".plantaList").hide();
   		$(".graficoimg").hide();
   		$(".graficotxt").hide();
		setTimeout(function() {
			$(".plantaListHead").show("slide", { direction: "left" }, 200,function() {
				$(".plantaList").show("slide", { direction: "up" }, 1000);
			});
	   		$(".graficoimg").show("slide", { direction: "left" }, 800,function() {
	   			$(".graficotxt").show("slide", { direction: "left" }, 800);
	   		});
		}, 500);
		area8flag=1;
   	}
}
