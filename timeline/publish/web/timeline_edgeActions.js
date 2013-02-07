
(function($,Edge,compId){var Composition=Edge.Composition,Symbol=Edge.Symbol;
//Edge symbol: 'stage'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"document","compositionReady",function(sym,e){this.circleBtnSymbol=sym.getSymbol('btn_circle1');this.circleBtnSymbol.stop('on');this.activePanel=1;this.prevPanel=1;this.panelCount=4;this.panelObject;this.circleBtnSymbol;this.arrowBtnSymbol;sym.getSymbol('btn_circle1').stop('on');this.changePanel=function()
{this.stop('panel'+this.activePanel);this.panelObject=sym.getSymbol('panel'+this.activePanel);this.panelObject.play(0);var i=1;for(i=1;i<=this.panelCount;i++)
{this.circleBtnSymbol=sym.getSymbol('btn_circle'+i);this.circleBtnSymbol.stop('off');}
this.circleBtnSymbol=sym.getSymbol('btn_circle'+this.activePanel);this.circleBtnSymbol.stop('on');}
this.onClickCircleBtn=function(arg)
{if(arg!=this.activePanel)
{this.activePanel=arg;this.stop('panel'+this.activePanel);this.panelObject=sym.getSymbol('panel'+this.activePanel);this.panelObject.play(0);this.changePanel();}}
this.onClickLeftArrow=function()
{if(this.activePanel>1)
{this.activePanel--;}else{this.activePanel=this.panelCount;}
this.changePanel();}
this.onClickRightArrow=function()
{if(this.activePanel<this.panelCount)
{this.activePanel++;}else{this.activePanel=1;}
this.changePanel();}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_arrow_lft}","mouseout",function(sym,e){this.arrowBtnSymbol=sym.getSymbol('btn_arrow_lft');this.arrowBtnSymbol.stop('off');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_arrow_lft}","click",function(sym,e){this.onClickLeftArrow();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_arrow_lft}","mouseover",function(sym,e){this.arrowBtnSymbol=sym.getSymbol('btn_arrow_lft');this.arrowBtnSymbol.stop('on');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_arrow_rt}","click",function(sym,e){this.onClickRightArrow();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_arrow_rt}","mouseout",function(sym,e){this.arrowBtnSymbol=sym.getSymbol('btn_arrow_rt');this.arrowBtnSymbol.stop('off');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_arrow_rt}","mouseover",function(sym,e){this.arrowBtnSymbol=sym.getSymbol('btn_arrow_rt');this.arrowBtnSymbol.stop('on');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle1}","click",function(sym,e){this.onClickCircleBtn(1);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle1}","mouseout",function(sym,e){if(this.activePanel!=1)
{this.circleBtnSymbol=sym.getSymbol('btn_circle1');this.circleBtnSymbol.stop('off');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle1}","mouseover",function(sym,e){this.circleBtnSymbol=sym.getSymbol('btn_circle1');this.circleBtnSymbol.stop('on');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle2}","click",function(sym,e){this.onClickCircleBtn(2);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle2}","mouseout",function(sym,e){if(this.activePanel!=2)
{this.circleBtnSymbol=sym.getSymbol('btn_circle2');this.circleBtnSymbol.stop('off');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle2}","mouseover",function(sym,e){this.circleBtnSymbol=sym.getSymbol('btn_circle2');this.circleBtnSymbol.stop('on');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle3}","click",function(sym,e){this.onClickCircleBtn(3);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle3}","mouseout",function(sym,e){if(this.activePanel!=3)
{this.circleBtnSymbol=sym.getSymbol('btn_circle3');this.circleBtnSymbol.stop('off');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle3}","mouseover",function(sym,e){this.circleBtnSymbol=sym.getSymbol('btn_circle3');this.circleBtnSymbol.stop('on');});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle4}","click",function(sym,e){this.onClickCircleBtn(4);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle4}","mouseout",function(sym,e){if(this.activePanel!=4)
{this.circleBtnSymbol=sym.getSymbol('btn_circle4');this.circleBtnSymbol.stop('off');}});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_btn_circle4}","mouseover",function(sym,e){this.circleBtnSymbol=sym.getSymbol('btn_circle4');this.circleBtnSymbol.stop('on');});
//Edge binding end
Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();var mySymbolObject=sym.getSymbol("panel1");mySymbolObject.play(0);});
//Edge binding end
})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'btn_circle'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",0,function(sym,e){sym.stop();});
//Edge binding end
})("btn_circle");
//Edge symbol end:'btn_circle'

//=========================================================

//Edge symbol: 'btn_arrow'
(function(symbolName){})("btn_arrow");
//Edge symbol end:'btn_arrow'

//=========================================================

//Edge symbol: 'panel1'
(function(symbolName){Symbol.bindTriggerAction(compId,symbolName,"Default Timeline",7750,function(sym,e){sym.play("loopTaxi");});
//Edge binding end
})("panel1");
//Edge symbol end:'panel1'

//=========================================================

//Edge symbol: 'panel2'
(function(symbolName){})("panel2");
//Edge symbol end:'panel2'

//=========================================================

//Edge symbol: 'panel2_scissorsBlk'
(function(symbolName){})("panel2_scissorsBlk");
//Edge symbol end:'panel2_scissorsBlk'

//=========================================================

//Edge symbol: 'panel3'
(function(symbolName){Symbol.bindElementAction(compId,symbolName,"${_panel3_shirtGroup4}","mouseover",function(sym,e){var shirtGroup4=sym.getSymbol("panel3_shirtGroup4");shirtGroup4.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_panel3_shirtGroup4}","mouseout",function(sym,e){var shirtGroup4=sym.getSymbol("panel3_shirtGroup4");shirtGroup4.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_panel3_shirtGroup3}","mouseover",function(sym,e){var shirtGroup3=sym.getSymbol("panel3_shirtGroup3");shirtGroup3.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_panel3_shirtGroup3}","mouseout",function(sym,e){var shirtGroup3=sym.getSymbol("panel3_shirtGroup3");shirtGroup3.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_panel3_shirtGroup2}","mouseover",function(sym,e){var shirtGroup2=sym.getSymbol("panel3_shirtGroup2");shirtGroup2.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_panel3_shirtGroup2}","mouseout",function(sym,e){var shirtGroup2=sym.getSymbol("panel3_shirtGroup2");shirtGroup2.playReverse();});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_panel3_shirtGroup1}","mouseover",function(sym,e){var shirtGroup1=sym.getSymbol("panel3_shirtGroup1");shirtGroup1.play(0);});
//Edge binding end
Symbol.bindElementAction(compId,symbolName,"${_panel3_shirtGroup1}","mouseout",function(sym,e){var shirtGroup1=sym.getSymbol("panel3_shirtGroup1");shirtGroup1.playReverse();});
//Edge binding end
})("panel3");
//Edge symbol end:'panel3'

//=========================================================

//Edge symbol: 'pabel3_shirtGroup1'
(function(symbolName){})("panel3_shirtGroup1");
//Edge symbol end:'panel3_shirtGroup1'

//=========================================================

//Edge symbol: 'panel3_hit'
(function(symbolName){})("panel3_hit");
//Edge symbol end:'panel3_hit'

//=========================================================

//Edge symbol: 'panel3_shirtGroup1_1'
(function(symbolName){})("panel3_shirtGroup2");
//Edge symbol end:'panel3_shirtGroup2'

//=========================================================

//Edge symbol: 'panel3_shirtGroup2_1'
(function(symbolName){})("panel3_shirtGroup3");
//Edge symbol end:'panel3_shirtGroup3'

//=========================================================

//Edge symbol: 'panel3_shirtGroup3_1'
(function(symbolName){})("panel3_shirtGroup4");
//Edge symbol end:'panel3_shirtGroup4'

//=========================================================

//Edge symbol: 'panel4_diamondFlora'
(function(symbolName){})("panel4_diamondFlora");
//Edge symbol end:'panel4_diamondFlora'

//=========================================================

//Edge symbol: 'panel4'
(function(symbolName){})("panel4");
//Edge symbol end:'panel4'
})(jQuery,AdobeEdge,"EDGE-182481683");