// ==UserScript==
// @name       MachiMush
// @version    0.1
// @description  Améliorations pour le jeu Mush
// @match      http://mush.vg/*
// @match      http://mush.vg/#
// @copyright  2012+, Ma c'hi
// ==/UserScript==
// @require http://code.jquery.com/jquery-latest.js
var $ = unsafeWindow.jQuery;
var Main = unsafeWindow.Main;

var CSS = ""
+".mm_smileys { position:absolute; top:300px; right:0px; border:1px solid #FFFFFF; width:22px; padding:4px; text-align:center; background:#c2f3fc; }"
+""
+"";

var smileys = [
    [':pa_pm:','http://mush.vg/img/icons/ui/pslots.png'],
    [':pa:','http://mush.vg/img/icons/ui/pa_slot1.png'],
    [':pm:','http://mush.vg/img/icons/ui/pa_slot2.png'],
    [':pv:','http://mush.vg/img/icons/ui/lp.png'],
    [':xp:','http://mush.vg/img/icons/ui/xp.png'],
    [':asocial:','http://mush.vg/img/icons/ui/unsociable.png'],
    [':disabled:','http://mush.vg/img/icons/ui/disabled.png'],
    [':hungry:','http://mush.vg/img/icons/ui/hungry.png'],
    [':hurt:','http://mush.vg/img/icons/ui/hurt.png'],
    [':ill:','http://mush.vg/img/icons/ui/disease.png'],
    [':psy_disease:','http://mush.vg/img/icons/ui/status/psy_disease.png'],
    [':admin_neron:','http://mush.vg/img/icons/ui/title_02.png'],
    [':commander:','http://mush.vg/img/icons/ui/title_01.png'],
    [':resp_comm:','http://mush.vg/img/icons/ui/title_03.png'],
    [':alert:','http://mush.vg/img/icons/ui/alert.png'],
    [':com:','http://mush.vg/img/icons/ui/comm.png'],
    [':door:','http://mush.vg/img/icons/ui/door.png'],
    [':plant_youngling:','http://mush.vg/img/icons/ui/plant_youngling.png'],
    [':plant_thirsty:','http://mush.vg/img/icons/ui/plant_thirsty.png'],
    [':plant_dry:','http://mush.vg/img/icons/ui/plant_dry.png'],
    [':plant_diseased:','http://mush.vg/img/icons/ui/plant_diseased.png'],
    [':bin:','http://mush.vg/img/icons/ui/bin.png'],
    [':next:','http://mush.vg/img/icons/ui/pageright.png'],
    [':ship_triumph:','http://mush.vg/img/icons/ui/daedalus_triumph.png']
    //[':exp:','http://www.twinpedia.com/_media/mush/point/pa_exp.png'],
    //['::',''],
];
var nbSmileys = smileys.length;
var smileysDiv;
var lastUsedTextarea;

function getSmileysDiv() {
    if(smileysDiv) {
        return smileysDiv;
    } else {
        smileysDiv = '<div class="mm_smileys">';
        for(var i=0;i<nbSmileys;i++) {
            smileysDiv = smileysDiv+'<a href="#" data-code="'+smileys[i][0]+'"><img src="'+smileys[i][1]+'" alt="'+smileys[i][0]+'" /></a> ';
        }
        smileysDiv = smileysDiv+'</div>';
        return smileysDiv;
    }
}

function addCSS() {
    $('head').append('<style type="text/css" id="_mm">'+CSS+'</style>');
}

function init() {
    $('body').append(getSmileysDiv());
    addCSS();
    $('#chat_col textarea').focus(function(){
    	lastUsedTextarea = $(this);
        lastUsedTextarea.attr('onBlur','');
    });
    $('.mm_smileys a').click(function() {
        if(lastUsedTextarea) {
            var cache = lastUsedTextarea.val();
            lastUsedTextarea.focus();
            lastUsedTextarea.val('').val(cache+$(this).attr('data-code'));
        } else {
            
        }
        return false;
    });
}

window.addEventListener('load', init, false);
