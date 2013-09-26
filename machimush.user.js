// ==UserScript==
// @name       MachiMush
// @version    1.0.1
// @description  Améliorations pour le jeu Mush
// @match      http://mush.vg/*
// @match      http://mush.vg/#
// @copyright  2012+, Ma c'hi
// @updateurl  https://raw.github.com/Machi3000/MachiMush/master/machimush.user.js
// ==/UserScript==
// @require http://code.jquery.com/jquery-latest.js
var $ = unsafeWindow.jQuery;
var Main = unsafeWindow.Main;

var CSS = ""
+".mm_smileys { display:none; position:absolute; top:300px; right:0px; width:62px; text-align:center; }"
+".mm_smileys .mm_smileys_tabs a { background:url('http://data.mush.vg/img/design/taboff.gif') no-repeat; width:31px; height:21px; display:inline-block; vertical-align:bottom; padding-top:3px; }"
+".mm_smileys .mm_smileys_tabs a.selected { background:url('http://data.mush.vg/img/design/tabon.gif') no-repeat; }"
+".mm_smileys .mm_smileys_pages { background:#c2f3fc; box-shadow: 0px 0px 10px #000000; padding:4px; }"
+".mm_smileys .mm_smileys_pages a { display:inline-block; width:23px;  }"
+"";

var smileys = [
                [
                    [':mush:','http://mush.vg/img/icons/ui/mush.png'],
                    [':cat:','http://mush.vg/img/icons/ui/cat.png'],
                    [':pa_pm:','http://mush.vg/img/icons/ui/pslots.png'],
                    [':pv:','http://mush.vg/img/icons/ui/lp.png'],
                    [':pa:','http://mush.vg/img/icons/ui/pa_slot1.png'],
                    [':pm:','http://mush.vg/img/icons/ui/pa_slot2.png'],
                    [':xp:','http://mush.vg/img/icons/ui/xp.png'],
                    [':alert:','http://mush.vg/img/icons/ui/alert.png'],
                    [':asocial:','http://mush.vg/img/icons/ui/unsociable.png'],
                    [':disabled:','http://mush.vg/img/icons/ui/disabled.png'],
                    [':hungry:','http://mush.vg/img/icons/ui/hungry.png'],
                    [':hurt:','http://mush.vg/img/icons/ui/hurt.png'],
                    [':ill:','http://mush.vg/img/icons/ui/disease.png'],
                    [':psy_disease:','http://mush.vg/img/icons/ui/status/psy_disease.png'],
                    [':admin_neron:','http://mush.vg/img/icons/ui/title_02.png'],
                    [':commander:','http://mush.vg/img/icons/ui/title_01.png'],
                    [':resp_comm:','http://mush.vg/img/icons/ui/title_03.png'],
                    [':pa_core:','http://mush.vg/img/icons/ui/pa_core.png'],
                    [':plant_youngling:','http://mush.vg/img/icons/ui/plant_youngling.png'],
                    [':plant_thirsty:','http://mush.vg/img/icons/ui/plant_thirsty.png'],
                    [':plant_dry:','http://mush.vg/img/icons/ui/plant_dry.png'],
                    [':plant_diseased:','http://mush.vg/img/icons/ui/plant_diseased.png'],
                    //[':bin:','http://mush.vg/img/icons/ui/bin.png'],
                    //[':next:','http://mush.vg/img/icons/ui/pageright.png'],
                    //[':ship_triumph:','http://mush.vg/img/icons/ui/daedalus_triumph.png']
                    //[':exp:','http://www.twinpedia.com/_media/mush/point/pa_exp.png'],
                    [':com:','http://mush.vg/img/icons/ui/comm.png'],
                    [':pa_comp:','http://mush.vg/img/icons/ui/pa_comp.png'],
                    [':pa_eng:','http://mush.vg/img/icons/ui/pa_eng.png'],
                    [':pa_garden:','http://mush.vg/img/icons/ui/pa_garden.png'],
                    [':pa_pilgred:','http://mush.vg/img/icons/ui/pa_pilgred.png'],
                    [':pa_shoot:','http://mush.vg/img/icons/ui/pa_shoot.png'],
                    [':laid:','http://mush.vg/img/icons/ui/laid.png'],
                    [':mastered:','http://mush.vg/img/icons/ui/status/mastered.png'],
                    [':stink:','http://mush.vg/img/icons/ui/status/stinky.png'],
                    [':fuel:','http://mush.vg/img/icons/ui/fuel.png'],
                    [':o2:','http://mush.vg/img/icons/ui/o2.png'],
                    [':more:','http://mush.vg/img/icons/ui/more.png'],
                    [':less:','http://mush.vg/img/icons/ui/less.png'],
                    [':chut:','http://mush.vg/img/icons/ui/discrete.png'],
                    [':talk:','http://mush.vg/img/icons/ui/talk.gif'],
                    [':talky:','http://mush.vg/img/icons/ui/talkie.png'],
                    [':pmo:','http://mush.vg/img/icons/ui/moral.png'],
                    [':pills:','http://mush.vg/img/icons/ui/demoralized2.png'],
                    [':pa_cook:','http://mush.vg/img/icons/ui/pa_cook.png'],
                    [':dead:','http://mush.vg/img/icons/ui/dead.png'],
                    [':hunter:','http://mush.vg/img/icons/ui/hunter.png'],
                    [':fire:','http://mush.vg/img/icons/ui/fire.png'],
                    [':time:','http://mush.vg/img/icons/ui/casio.png'],
                    [':tip:','http://mush.vg/img/icons/ui/tip.png'],
                    [':triumph:','http://mush.vg/img/icons/ui/triumph.png'],
                    [':pa_heal:','http://mush.vg/img/icons/ui/pa_heal.png'],
                    [':door:','http://mush.vg/img/icons/ui/door.png'],
                    [':mush_tutorial_1:','http://mush.vg/img/icons/ui/book.png'],
                    //['::','http://mush.vg/img/icons/ui/'],
                ],
                [
                    [':)','http://data.twinoid.com/img/smile/square/smile.png'],
                    [';)','http://data.twinoid.com/img/smile/square/wink.png'],
                    [':lol:','http://data.twinoid.com/img/smile/square/lol.png'],
                    [':D','http://data.twinoid.com/img/smile/square/happy.png'],
                    ['^_^','http://data.twinoid.com/img/smile/square/happy2.png'],
                    [':(','http://data.twinoid.com/img/smile/square/sad.png'],
                    ['X[','http://data.twinoid.com/img/smile/square/mad.png'],
                    ['8D','http://data.twinoid.com/img/smile/square/surprised.png'],
                    [':P','http://data.twinoid.com/img/smile/square/razz.png'],
                    ['8)','http://data.twinoid.com/img/smile/square/cool.png'],
                    ['8O','http://data.twinoid.com/img/smile/square/eek.png'],
                    [':{','http://data.twinoid.com/img/smile/square/confused.png'],
                    [':K','http://data.twinoid.com/img/smile/square/keepcool.png'],
                    [':\'(','http://data.twinoid.com/img/smile/square/cry.png'],
                    [':}','http://data.twinoid.com/img/smile/square/redface.png'],
                    [':wink:','http://data.twinoid.com/img/smile/square/wink2.png'],
                    [':fp:','http://data.twinoid.com/img/smile/square/facepalm.png'],
                    [':psycho:','http://data.twinoid.com/img/smile/square/psycho.png'],
                    [':innocent:','http://data.twinoid.com/img/smile/square/lookup.png'],
                    [':youpi:','http://data.twinoid.com/img/smile/square/yeah.png'],
                    ['O_o','http://data.twinoid.com/img/smile/square/huh.png'],
                    [':-/','http://data.twinoid.com/img/smile/square/hmm.png'],
                    ['-_-','http://data.twinoid.com/img/smile/square/dontcare.png'],
                    [':nooo:','http://data.twinoid.com/img/smile/square/nooo.png'],
                    [':bad:','http://data.twinoid.com/img/smile/square/evil.png'],
                    [':sadist:','http://data.twinoid.com/img/smile/square/twisted.png'],
                    [':chart:','http://data.twinoid.com/img/smile/square/chart.png'],
                    [':!:','http://data.twinoid.com/img/smile/square/exclaim.png'],
                    [':?:','http://data.twinoid.com/img/smile/square/question.png'],
                    [':arrow:','http://data.twinoid.com/img/smile/square/arrow.png'],
                    [':X:','http://data.twinoid.com/img/smile/square/cross.png'],
                    [':idea:','http://data.twinoid.com/img/smile/square/idea.png'],
                    [':out:','http://data.twinoid.com/img/smile/square/getout.png'],
                    [':fear:','http://data.twinoid.com/img/smile/square/fear.png'],
                    [':cute:','http://data.twinoid.com/img/smile/square/cute.png'],
                    [':omg:','http://data.twinoid.com/img/smile/square/omg.png'],
                    [':stop:','http://data.twinoid.com/img/smile/square/stop.png'],
                    [':drowl:','http://data.twinoid.com/img/smile/square/drowl.png'],
                    [':zombie:','http://data.twinoid.com/img/smile/square/zombie.png'],
                    ['T_T','http://data.twinoid.com/img/smile/square/crylot.png'],
                    ['°x°','http://data.twinoid.com/img/smile/square/puke.png'],
                    [':calim:','http://data.twinoid.com/img/smile/square/calim.png'],
                    //['::','http://mush.vg/img/icons/ui/'],
                ]
];
var nbSmileysPages = smileys.length;
var smileysDiv;
var lastUsedTextarea;

function getSmileysDiv() {
    if(smileysDiv) {
        return smileysDiv;
    } else {
        smileysDiv = '<div class="mm_smileys">';
        
      	smileysDiv = smileysDiv+'<div class="mm_smileys_tabs">';
        for(var k=0;k<nbSmileysPages;k++) {
        	smileysDiv = smileysDiv+'<a href="#" class="mm_smileys_tab'+k+'" data-page="'+k+'"><img src="'+smileys[k][0][1]+'" alt="'+smileys[k][0][0]+'" /></a>';
        }
       	smileysDiv = smileysDiv+'</div>';
                    
      	smileysDiv = smileysDiv+'<div class="mm_smileys_pages">';
        for(var i=0;i<nbSmileysPages;i++) {
            var nbSmileys = smileys[i].length;
    		smileysDiv = smileysDiv+'<div class="mm_smileys_p'+i+'" style="display:none">'
    		for(var j=0;j<nbSmileys;j++) {
            	smileysDiv = smileysDiv+'<a href="#" data-code="'+smileys[i][j][0]+'"><img src="'+smileys[i][j][1]+'" alt="'+smileys[i][j][0]+'" /></a>';
    		}
    		smileysDiv = smileysDiv+'</div>'
        }
       	smileysDiv = smileysDiv+'</div>';

        smileysDiv = smileysDiv+'</div>';
        return smileysDiv;
    }
}

function addCSS() {
    $('head').append('<style type="text/css" id="_mm">'+CSS+'</style>');
}

function mm_smileys_hideAllPages() {
    for(var i=0;i<nbSmileysPages;i++) {
        $('.mm_smileys_p'+i).slideUp();
        $('.mm_smileys_tab'+i).removeClass('selected');
    }
}
function mm_smileys_showPage(page) {
    mm_smileys_hideAllPages();
    $('.mm_smileys_p'+page).slideDown();
    $('.mm_smileys_tab'+page).addClass('selected');
}
function mm_smileys_hide() {
	$('.mm_smileys').fadeOut();
    mm_smileys_hideAllPages();
}
function mm_smileys_show() {
    if($('.mm_smileys:hidden').size()>0) {
		mm_smileys_hideAllPages();
    	$('.mm_smileys_p0').show();
    	$('.mm_smileys_tab0').addClass('selected');
   		$('.mm_smileys').fadeIn();
    }
}

function init() {
    $('body').append(getSmileysDiv());
    addCSS();
    $('#chat_col textarea').focus(function(){
    	lastUsedTextarea = $(this);
        if(!lastUsedTextarea.attr('data-mm_modified')) {
       		lastUsedTextarea.blur(function() { mm_smileys_hide(); });
            lastUsedTextarea.attr('data-mm_modified','1');
    	}
        mm_smileys_show();       
    });
    
    $('.mm_smileys .mm_smileys_tabs a').mousedown(function() {
        var onBlur;
        if(lastUsedTextarea) {
            onBlur = lastUsedTextarea.attr('onBlur');
            lastUsedTextarea.attr('onBlur','');
        }
		mm_smileys_showPage($(this).attr('data-page'));
        if(lastUsedTextarea) {
            lastUsedTextarea.attr('onBlur',onBlur);
        }
        return false;
    });
    $('.mm_smileys .mm_smileys_pages a').mousedown(function() {
        if(lastUsedTextarea) {
            var onBlur = lastUsedTextarea.attr('onBlur');
            lastUsedTextarea.attr('onBlur','');
            var cache = lastUsedTextarea.val();
            lastUsedTextarea.focus();
            lastUsedTextarea.val('').val(cache+$(this).attr('data-code'));
            lastUsedTextarea.attr('onBlur',onBlur);
        }
        return false;
    });
}

window.addEventListener('load', init, false);
