/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};
   fonts['adobe-garamond-pro, Georgia, serif']='<script type=\"text/javascript\" src=\"http://use.typekit.com/fma0bgx.js\"></script><script type=\"text/javascript\">try{Typekit.load();}catch(e){}</script>';
   fonts['minion-pro, Georgia, serif']='<script type=\"text/javascript\" src=\"http://use.typekit.com/fma0bgx.js\"></script><script type=\"text/javascript\">try{Typekit.load();}catch(e){}</script>';


var resources = [
];
var symbols = {
"stage": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'panel4',
            display:'none',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'panel3',
            display:'none',
            type:'rect',
            rect:['0px','0px','auto','auto','auto','auto']
         },
         {
            id:'panel2',
            display:'none',
            type:'rect',
            rect:['608','154','auto','auto','auto','auto']
         },
         {
            id:'panel1',
            type:'rect',
            rect:['0','0','auto','auto','auto','auto']
         },
         {
            id:'white_rect',
            type:'rect',
            rect:['0px','330px','958px','22px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'white_top',
            type:'rect',
            rect:['0px','0px','958px','8px','auto','auto'],
            fill:["rgba(255,255,255,1.00)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'btn_circle1',
            type:'rect',
            rect:['260','113','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'btn_circle2',
            type:'rect',
            rect:['260','113','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'btn_circle3',
            type:'rect',
            rect:['260','113','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'btn_circle4',
            type:'rect',
            rect:['260','113','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'btn_arrow_rt',
            type:'rect',
            rect:['466','83','auto','auto','auto','auto'],
            cursor:['pointer']
         },
         {
            id:'btn_arrow_lft',
            type:'rect',
            rect:['466','83','auto','auto','auto','auto'],
            cursor:['pointer']
         }],
         symbolInstances: [
         {
            id:'btn_circle4',
            symbolName:'btn_circle'
         },
         {
            id:'panel3',
            symbolName:'panel3'
         },
         {
            id:'btn_circle3',
            symbolName:'btn_circle'
         },
         {
            id:'panel2',
            symbolName:'panel2'
         },
         {
            id:'btn_circle1',
            symbolName:'btn_circle'
         },
         {
            id:'panel4',
            symbolName:'panel4'
         },
         {
            id:'btn_arrow_lft',
            symbolName:'btn_arrow'
         },
         {
            id:'btn_arrow_rt',
            symbolName:'btn_arrow'
         },
         {
            id:'btn_circle2',
            symbolName:'btn_circle'
         },
         {
            id:'panel1',
            symbolName:'panel1'
         }
         ]
      },
   states: {
      "Base State": {
         "${_white_rect}": [
            ["style", "top", '330px'],
            ["style", "height", '22px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '957.90968958018px']
         ],
         "${_txt_beauty}": [
            ["style", "top", '32px']
         ],
         "${_btn_arrow_rt}": [
            ["transform", "scaleX", '0.97619'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '916.5px'],
            ["style", "top", '149px']
         ],
         "${_panel3}": [
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ],
         "${_panel4}": [
            ["style", "display", 'none']
         ],
         "${_btn_arrow_lft}": [
            ["transform", "scaleX", '-1'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '0px'],
            ["style", "top", '149px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '352px'],
            ["style", "width", '958px']
         ],
         "${_white_top}": [
            ["style", "top", '0px'],
            ["style", "height", '8px'],
            ["color", "background-color", 'rgba(255,255,255,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '957.90968958018px']
         ],
         "${_btn_circle1}": [
            ["style", "top", '334px'],
            ["style", "left", '452px'],
            ["style", "cursor", 'pointer']
         ],
         "${_panel1}": [
            ["style", "display", 'block']
         ],
         "${_btn_circle2}": [
            ["style", "top", '334px'],
            ["style", "left", '466px'],
            ["style", "cursor", 'pointer']
         ],
         "${_btn_circle4}": [
            ["style", "top", '334px'],
            ["style", "left", '495px'],
            ["style", "cursor", 'pointer']
         ],
         "${_btn_circle3}": [
            ["style", "top", '334px'],
            ["style", "left", '481px'],
            ["style", "cursor", 'pointer']
         ],
         "${_txt_details}": [
            ["style", "left", '366px']
         ],
         "${_panel2}": [
            ["style", "top", '2px'],
            ["style", "left", '1px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 14000,
         autoPlay: true,
         labels: {
            "panel1": 0,
            "panel2": 8500,
            "panel3": 12000,
            "panel4": 14000
         },
         timeline: [
            { id: "eid236", tween: [ "style", "${_btn_circle1}", "top", '334px', { fromValue: '334px'}], position: 0, duration: 0 },
            { id: "eid302", tween: [ "style", "${_panel3}", "display", 'block', { fromValue: 'none'}], position: 12000, duration: 0, easing: "easeInSine" },
            { id: "eid355", tween: [ "style", "${_panel3}", "display", 'none', { fromValue: 'block'}], position: 13806, duration: 0, easing: "easeOutSine" },
            { id: "eid237", tween: [ "style", "${_btn_circle4}", "top", '334px', { fromValue: '334px'}], position: 0, duration: 0 },
            { id: "eid354", tween: [ "style", "${_panel4}", "display", 'block', { fromValue: 'none'}], position: 14000, duration: 0, easing: "easeOutSine" },
            { id: "eid239", tween: [ "style", "${_panel2}", "display", 'block', { fromValue: 'none'}], position: 8500, duration: 0 },
            { id: "eid303", tween: [ "style", "${_panel2}", "display", 'none', { fromValue: 'block'}], position: 11396, duration: 0, easing: "easeInSine" },
            { id: "eid238", tween: [ "style", "${_btn_circle2}", "top", '334px', { fromValue: '334px'}], position: 0, duration: 0 },
            { id: "eid240", tween: [ "style", "${_panel1}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid241", tween: [ "style", "${_panel1}", "display", 'none', { fromValue: 'block'}], position: 8500, duration: 0 },
            { id: "eid235", tween: [ "style", "${_btn_circle3}", "top", '334px', { fromValue: '334px'}], position: 0, duration: 0 },
            { id: "eid242", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel1}', [0] ], ""], position: 0 },
            { id: "eid243", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel2}', [0] ], ""], position: 8500 },
            { id: "eid304", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel3}', [0] ], ""], position: 12000 },
            { id: "eid356", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_panel4}', [0] ], ""], position: 14000 }         ]
      }
   }
},
"btn_circle": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','13px','13px','auto','auto'],
      borderRadius: ['50%','50%','50%','50%'],
      id: 'Ellipse',
      stroke: [0,'rgba(0,0,0,1)','none'],
      type: 'ellipse',
      fill: ['rgba(142,143,138,1.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Ellipse}": [
            ["style", "top", '0.02px'],
            ["style", "height", '13px'],
            ["color", "background-color", 'rgba(142,143,138,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '13px']
         ],
         "${symbolSelector}": [
            ["style", "height", '13px'],
            ["style", "width", '13px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         labels: {
            "off": 0,
            "on": 500
         },
         timeline: [
            { id: "eid1", tween: [ "color", "${_Ellipse}", "background-color", 'rgba(60,60,60,1.00)', { animationColorSpace: 'RGB', valueTemplate: undefined, fromValue: 'rgba(142,143,138,1)'}], position: 0, duration: 500 }         ]
      }
   }
},
"btn_arrow": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'btn_arrow',
      type: 'image',
      rect: ['0px','0px','42px','39px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/btn_arrow.png','0px','0px']
   },
   {
      rect: ['0px','0px','42px','39px','auto','auto'],
      id: 'btn_arrowOver',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/btn_arrowOver.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '39px'],
            ["style", "width", '42px']
         ],
         "${_btn_arrow}": [
            ["style", "top", '0.27px'],
            ["style", "left", '0px'],
            ["style", "display", 'block']
         ],
         "${_btn_arrowOver}": [
            ["style", "top", '0.27px'],
            ["style", "left", '0px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4480,
         autoPlay: false,
         labels: {
            "off": 0,
            "on": 4480
         },
         timeline: [
            { id: "eid14", tween: [ "style", "${_btn_arrow}", "display", 'none', { fromValue: 'block'}], position: 3000, duration: 0 },
            { id: "eid12", tween: [ "style", "${_btn_arrowOver}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid13", tween: [ "style", "${_btn_arrowOver}", "display", 'block', { fromValue: 'none'}], position: 3000, duration: 0 }         ]
      }
   }
},
"panel1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel1_city',
      type: 'image',
      rect: ['0px','0px','2055px','751px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel1_city.jpg','0px','0px']
   },
   {
      type: 'image',
      transform: [{1:0,0:0},['90deg']],
      display: 'none',
      rect: ['242px','-93px','78px','77px','auto','auto'],
      id: 'panel1_taxi1',
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png','0px','0px']
   },
   {
      rect: ['90','-69','78px','77px','auto','auto'],
      id: 'panel1_taxi2',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png','0px','0px']
   },
   {
      rect: ['505px','-83px','78px','77px','auto','auto'],
      id: 'panel1_taxi3',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png','0px','0px']
   },
   {
      rect: ['90','-69','78px','77px','auto','auto'],
      id: 'panel1_taxi4',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/panel1_taxi.png','0px','0px']
   },
   {
      rect: ['281px','272px','400px','30px','auto','auto'],
      id: 'panel1_subHeader_box',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/panel1_subHeader_box.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['288px','280px','388px','auto','auto','auto'],
      align: 'center',
      id: 'txt_description',
      text: 'Alice Ritter brings her Parisian aesthetic to the fashion capital of the US.',
      display: 'none',
      font: ['minion-pro, Georgia, serif',12,'rgba(207,198,190,1.00)','normal','none','normal']
   },
   {
      rect: ['151px','218px','660px','54px','auto','auto'],
      id: 'panel1_headerBox',
      type: 'image',
      display: 'none',
      fill: ['rgba(0,0,0,0)','images/panel1_header_box.png','0px','0px']
   },
   {
      type: 'text',
      rect: ['338','218px','auto','54px','auto','auto'],
      align: 'center',
      id: 'txt_americanDream',
      text: 'THE AMERICAN DREAM',
      display: 'none',
      font: ['adobe-garamond-pro, Georgia, serif',12,'rgba(207,198,190,1)','700','none','normal']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_panel1_taxi3}": [
            ["style", "top", '-83px'],
            ["style", "left", '505px'],
            ["style", "display", 'none']
         ],
         "${_txt_description}": [
            ["style", "top", '280px'],
            ["style", "width", '388px'],
            ["style", "text-align", 'center'],
            ["style", "display", 'none'],
            ["color", "color", 'rgba(207,198,190,1.00)'],
            ["style", "opacity", '0.000000'],
            ["style", "left", '288px'],
            ["style", "font-size", '12px']
         ],
         "${_panel1_headerBox}": [
            ["style", "top", '218px'],
            ["style", "display", 'none'],
            ["style", "opacity", '0'],
            ["style", "left", '151px'],
            ["style", "width", '660px']
         ],
         "${_panel1_subHeader_box}": [
            ["style", "top", '272px'],
            ["style", "opacity", '0'],
            ["style", "left", '281px'],
            ["style", "display", 'none']
         ],
         "${_panel1_taxi1}": [
            ["style", "top", '-93px'],
            ["style", "display", 'none'],
            ["style", "left", '241.5px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '0px'],
            ["style", "width", '0px']
         ],
         "${_panel1_taxi2}": [
            ["style", "top", '-94px'],
            ["style", "display", 'none'],
            ["style", "left", '821px'],
            ["transform", "rotateZ", '90deg']
         ],
         "${_panel1_city}": [
            ["transform", "scaleX", '0.47'],
            ["style", "left", '-544.57px'],
            ["transform", "scaleY", '0.47'],
            ["style", "top", '-199.02px']
         ],
         "${_txt_americanDream}": [
            ["style", "line-height", '56px'],
            ["color", "color", 'rgba(255,255,255,1.00)'],
            ["style", "opacity", '0'],
            ["style", "left", '152px'],
            ["style", "font-size", '48px'],
            ["style", "top", '218px'],
            ["style", "height", '54px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["style", "font-weight", '700'],
            ["style", "width", '659px']
         ],
         "${_panel1_taxi4}": [
            ["style", "display", 'none'],
            ["style", "left", '359px'],
            ["style", "top", '354px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 7750,
         autoPlay: false,
         labels: {
            "loopTaxi": 2500
         },
         timeline: [
            { id: "eid26", tween: [ "style", "${_panel1_city}", "left", '-581px', { fromValue: '-544.57px'}], position: 0, duration: 1750 },
            { id: "eid34", tween: [ "style", "${_panel1_taxi1}", "top", '232.5px', { fromValue: '-93px'}], position: 2500, duration: 2180 },
            { id: "eid54", tween: [ "style", "${_panel1_subHeader_box}", "opacity", '0.87', { fromValue: '0.000000'}], position: 2000, duration: 500 },
            { id: "eid24", tween: [ "transform", "${_panel1_city}", "scaleY", '1', { fromValue: '0.47'}], position: 0, duration: 1750 },
            { id: "eid42", tween: [ "style", "${_panel1_taxi2}", "left", '374.5px', { fromValue: '821px'}], position: 2930, duration: 2820 },
            { id: "eid43", tween: [ "style", "${_panel1_taxi2}", "top", '354.5px', { fromValue: '-94px'}], position: 2930, duration: 2820 },
            { id: "eid48", tween: [ "style", "${_panel1_taxi4}", "display", 'block', { fromValue: 'none'}], position: 4056, duration: 0 },
            { id: "eid59", tween: [ "style", "${_txt_description}", "opacity", '0.87', { fromValue: '0.000000'}], position: 2000, duration: 500 },
            { id: "eid44", tween: [ "style", "${_panel1_taxi2}", "display", 'block', { fromValue: 'none'}], position: 2930, duration: 0 },
            { id: "eid78", tween: [ "style", "${_txt_americanDream}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid47", tween: [ "style", "${_panel1_taxi3}", "display", 'block', { fromValue: 'none'}], position: 3180, duration: 0 },
            { id: "eid79", tween: [ "style", "${_panel1_headerBox}", "display", 'block', { fromValue: 'none'}], position: 1750, duration: 0 },
            { id: "eid33", tween: [ "style", "${_panel1_taxi1}", "left", '-83.5px', { fromValue: '241.5px'}], position: 2500, duration: 2180 },
            { id: "eid35", tween: [ "style", "${_panel1_taxi1}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0 },
            { id: "eid71", tween: [ "style", "${_txt_americanDream}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500 },
            { id: "eid46", tween: [ "style", "${_panel1_taxi3}", "top", '352px', { fromValue: '-83px'}], position: 3180, duration: 3499 },
            { id: "eid51", tween: [ "style", "${_panel1_taxi4}", "left", '-76px', { fromValue: '359px'}], position: 4056, duration: 2623 },
            { id: "eid55", tween: [ "style", "${_panel1_subHeader_box}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 },
            { id: "eid57", tween: [ "style", "${_panel1_headerBox}", "opacity", '1', { fromValue: '0'}], position: 1750, duration: 500 },
            { id: "eid45", tween: [ "style", "${_panel1_taxi3}", "left", '938px', { fromValue: '505px'}], position: 3180, duration: 3499 },
            { id: "eid52", tween: [ "style", "${_panel1_taxi4}", "top", '-83px', { fromValue: '354px'}], position: 4056, duration: 2623 },
            { id: "eid28", tween: [ "style", "${_panel1_city}", "top", '-209px', { fromValue: '-199.02px'}], position: 0, duration: 1750 },
            { id: "eid22", tween: [ "transform", "${_panel1_city}", "scaleX", '1', { fromValue: '0.47'}], position: 0, duration: 1750 },
            { id: "eid58", tween: [ "style", "${_txt_description}", "display", 'block', { fromValue: 'none'}], position: 2000, duration: 0 }         ]
      }
   }
},
"panel2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'benchBg',
      type: 'image',
      rect: ['0px','0px','960px','347px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_bench_bg.jpg','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['827px','257px','156px','98px','auto','auto'],
      id: 'sketchOrangeShirt',
      fill: ['rgba(0,0,0,0)','images/panel2_sketch_orange_shirt.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['701px','-16px','113px','176px','auto','auto'],
      id: 'threadRows',
      fill: ['rgba(0,0,0,0)','images/panel2_thread_rows.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['806px','21px','100px','235px','auto','auto'],
      id: 'sketchGirl',
      fill: ['rgba(0,0,0,0)','images/panel2_sketch_girl.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['831px','233px','63px','64px','auto','auto'],
      id: 'spool',
      fill: ['rgba(0,0,0,0)','images/panel2_spool.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['0px','0px','133px','279px','auto','auto'],
      id: 'ribbon',
      fill: ['rgba(0,0,0,0)','images/panel2_ribbon.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['656px','30px','45px','65px','auto','auto'],
      id: 'needles',
      fill: ['rgba(0,0,0,0)','images/panel2_needles.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['507px','193px','193px','170px','auto','auto'],
      id: 'sketchCotton',
      fill: ['rgba(0,0,0,0)','images/panel2_sketch_cotton.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['698px','139px','127px','199px','auto','auto'],
      id: 'paperFabricSwatch',
      fill: ['rgba(0,0,0,0)','images/panel2_paper_fabric_swatch.png','0px','0px']
   },
   {
      id: 'books',
      type: 'image',
      rect: ['382px','234px','148px','136px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_books.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['341px','236px','57px','100px','auto','auto'],
      id: 'sketchBlueDress',
      fill: ['rgba(0,0,0,0)','images/panel2_sketch_blue_dress.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['252px','220px','84px','125px','auto','auto'],
      id: 'pencilSketch',
      fill: ['rgba(0,0,0,0)','images/panel2_pencil_sketch.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-29px','173px','256px','203px','auto','auto'],
      id: 'threadSpools',
      fill: ['rgba(0,0,0,0)','images/panel2_thread_spools.png','0px','0px']
   },
   {
      id: 'fabric',
      type: 'image',
      rect: ['-30px','-6px','340px','140px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_fabric.png','0px','0px']
   },
   {
      display: 'none',
      type: 'rect',
      id: 'scissorsBlk',
      rect: ['0','0','auto','auto','auto','auto']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['266px','107px','100px','102px','auto','auto'],
      id: 'bowlButtons',
      fill: ['rgba(0,0,0,0)','images/panel2_bowl_buttons.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},['0deg']],
      type: 'image',
      id: 'measureTape',
      display: 'none',
      rect: ['90px','-122px','90px','74px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_measure_tape.png','0px','0px']
   },
   {
      id: 'panel2_header_box',
      type: 'image',
      rect: ['288px','-142px','258px','62px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_header_box.png','0px','0px']
   },
   {
      transform: [{1:0,0:0},['-15deg']],
      type: 'text',
      align: 'center',
      id: 'txt_beauty',
      text: 'BEAUTY',
      rect: ['308px','-111px','256px','59px','auto','auto'],
      font: ['adobe-garamond-pro, Georgia, serif',48,'rgba(255,255,255,1)','bold','none','normal']
   },
   {
      font: ['minion-pro, Georgia, serif',19,'rgba(96,96,90,1.00)','400','none','italic'],
      type: 'text',
      id: 'txt_inThe',
      text: 'IN THE',
      align: 'center',
      rect: ['445px','92px','auto','auto','auto','auto']
   },
   {
      font: ['adobe-garamond-pro, Georgia, serif',40,'rgba(96,96,90,1)','700','none','normal'],
      rect: ['396px','109px','auto','auto','auto','auto'],
      type: 'text',
      id: 'txt_details',
      align: 'center',
      text: 'DETAILS',
      transform: [{1:0,0:0},['0deg']],
      tag: 'p'
   }],
   symbolInstances: [
   {
      id: 'scissorsBlk',
      symbolName: 'panel2_scissorsBlk'
   }   ]
   },
   states: {
      "Base State": {
         "${_txt_beauty}": [
            ["style", "line-height", '61px'],
            ["transform", "rotateZ", '-15deg'],
            ["style", "height", '59px'],
            ["style", "top", '-110.88px'],
            ["style", "left", '308.27px'],
            ["style", "width", '256px']
         ],
         "${_sketchOrangeShirt}": [
            ["style", "top", '380px'],
            ["style", "display", 'none'],
            ["style", "left", '973px'],
            ["transform", "rotateZ", '-36deg']
         ],
         "${_fabric}": [
            ["style", "top", '-146.71px'],
            ["style", "left", '-192px'],
            ["transform", "rotateZ", '-25deg']
         ],
         "${_threadRows}": [
            ["style", "top", '-199px'],
            ["style", "display", 'none'],
            ["style", "left", '740px'],
            ["transform", "rotateZ", '-54deg']
         ],
         "${_threadSpools}": [
            ["style", "top", '342px'],
            ["style", "display", 'none'],
            ["style", "left", '-128px'],
            ["transform", "rotateZ", '25deg']
         ],
         "${_adobe-garamond-proGeorgiaserif6}": [
            ["style", "left", '711px'],
            ["style", "top", '174px']
         ],
         "${_benchBg}": [
            ["style", "left", '0.09px'],
            ["style", "top", '0.04px']
         ],
         "${_bowlButtons}": [
            ["style", "top", '-112px'],
            ["style", "display", 'none'],
            ["style", "left", '285px'],
            ["transform", "rotateZ", '184deg']
         ],
         "${_pencilSketch}": [
            ["style", "top", '442px'],
            ["style", "display", 'none'],
            ["style", "left", '138px'],
            ["transform", "rotateZ", '39deg']
         ],
         "${_sketchGirl}": [
            ["style", "top", '-188.83px'],
            ["style", "display", 'none'],
            ["style", "left", '870.14px'],
            ["transform", "rotateZ", '-58deg']
         ],
         "${_needles}": [
            ["style", "top", '-103.56px'],
            ["style", "display", 'none'],
            ["style", "left", '619.92px'],
            ["transform", "rotateZ", '-51deg']
         ],
         "${_paperFabricSwatch}": [
            ["style", "top", '366px'],
            ["style", "display", 'none'],
            ["style", "left", '746px'],
            ["transform", "rotateZ", '-47deg']
         ],
         "${_txt_details}": [
            ["style", "top", '391.33px'],
            ["transform", "rotateZ", '23deg'],
            ["style", "font-style", 'normal'],
            ["style", "font-weight", '700'],
            ["style", "left", '411px'],
            ["style", "font-size", '40px']
         ],
         "${_sketchCotton}": [
            ["style", "top", '352px'],
            ["style", "display", 'none'],
            ["style", "left", '430px'],
            ["transform", "rotateZ", '32deg']
         ],
         "${_txt_inThe}": [
            ["style", "top", '365px'],
            ["color", "color", 'rgba(96,96,90,1.00)'],
            ["transform", "rotateZ", '18deg'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", '400'],
            ["style", "left", '384px'],
            ["style", "font-size", '19px']
         ],
         "${_sketchBlueDress}": [
            ["style", "top", '427px'],
            ["style", "display", 'none'],
            ["style", "left", '272px'],
            ["transform", "rotateZ", '32deg']
         ],
         "${_adobe-garamond-proGeorgiaserif7}": [
            ["style", "left", '960px'],
            ["style", "top", '166px']
         ],
         "${_measureTape}": [
            ["style", "top", '-122px'],
            ["style", "display", 'none'],
            ["style", "left", '90px'],
            ["transform", "rotateZ", '-25deg']
         ],
         "${_panel2_header_box}": [
            ["style", "top", '-109.67px'],
            ["style", "left", '291.63px'],
            ["transform", "rotateZ", '-15deg']
         ],
         "${_Text}": [
            ["style", "left", '872.91px'],
            ["style", "top", '174.21px']
         ],
         "${_ribbon}": [
            ["style", "top", '-100px'],
            ["style", "display", 'none'],
            ["style", "left", '924px'],
            ["transform", "rotateZ", '-36deg']
         ],
         "${_scissorsBlk}": [
            ["style", "top", '-250px'],
            ["transform", "scaleY", '0.98883'],
            ["transform", "rotateZ", '-31deg'],
            ["transform", "scaleX", '0.99375'],
            ["style", "left", '-130.5px'],
            ["style", "display", 'none']
         ],
         "${_spool}": [
            ["style", "top", '235px'],
            ["style", "display", 'none'],
            ["style", "left", '1003px'],
            ["transform", "rotateZ", '182deg']
         ],
         "${_books}": [
            ["style", "top", '432.88px'],
            ["style", "left", '335.79px'],
            ["transform", "rotateZ", '32deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '347px'],
            ["style", "width", '960px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 2889,
         autoPlay: false,
         timeline: [
            { id: "eid185", tween: [ "style", "${_sketchOrangeShirt}", "left", '827px', { fromValue: '973px'}], position: 1500, duration: 598, easing: "easeOutSine" },
            { id: "eid246", tween: [ "transform", "${_threadRows}", "rotateZ", '0deg', { fromValue: '-54deg'}], position: 2304, duration: 385, easing: "easeOutSine" },
            { id: "eid194", tween: [ "style", "${_txt_beauty}", "top", '28px', { fromValue: '-110.88px'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid141", tween: [ "style", "${_sketchCotton}", "left", '507px', { fromValue: '430px'}], position: 859, duration: 579, easing: "easeOutSine" },
            { id: "eid199", tween: [ "style", "${_txt_inThe}", "left", '445px', { fromValue: '384px'}], position: 649, duration: 594, easing: "easeOutSine" },
            { id: "eid195", tween: [ "transform", "${_txt_beauty}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid224", tween: [ "transform", "${_scissorsBlk}", "rotateZ", '0deg', { fromValue: '-31deg'}], position: 562, duration: 681 },
            { id: "eid159", tween: [ "style", "${_ribbon}", "left", '854px', { fromValue: '924px'}], position: 2344, duration: 345, easing: "easeOutSine" },
            { id: "eid107", tween: [ "style", "${_threadSpools}", "left", '-29px', { fromValue: '-128px'}], position: 500, duration: 475, easing: "easeOutSine" },
            { id: "eid139", tween: [ "style", "${_paperFabricSwatch}", "display", 'block', { fromValue: 'none'}], position: 1438, duration: 0, easing: "easeOutSine" },
            { id: "eid136", tween: [ "style", "${_paperFabricSwatch}", "top", '139px', { fromValue: '366px'}], position: 1438, duration: 580, easing: "easeOutSine" },
            { id: "eid130", tween: [ "style", "${_books}", "left", '382px', { fromValue: '335.79px'}], position: 1243, duration: 497, easing: "easeOutSine" },
            { id: "eid152", tween: [ "transform", "${_needles}", "rotateZ", '0deg', { fromValue: '-51deg'}], position: 2449, duration: 440, easing: "easeOutSine" },
            { id: "eid123", tween: [ "style", "${_sketchBlueDress}", "top", '236px', { fromValue: '427px'}], position: 975, duration: 500, easing: "easeOutSine" },
            { id: "eid189", tween: [ "transform", "${_sketchOrangeShirt}", "rotateZ", '0deg', { fromValue: '-36deg'}], position: 1500, duration: 598, easing: "easeOutSine" },
            { id: "eid92", tween: [ "style", "${_measureTape}", "display", 'block', { fromValue: 'none'}], position: 212, duration: 0 },
            { id: "eid150", tween: [ "style", "${_needles}", "top", '30px', { fromValue: '-103.56px'}], position: 2449, duration: 440, easing: "easeOutSine" },
            { id: "eid222", tween: [ "style", "${_scissorsBlk}", "top", '81px', { fromValue: '-250px'}], position: 562, duration: 681 },
            { id: "eid171", tween: [ "transform", "${_spool}", "rotateZ", '0deg', { fromValue: '182deg'}], position: 1740, duration: 339, easing: "easeOutSine" },
            { id: "eid203", tween: [ "transform", "${_txt_inThe}", "rotateZ", '0deg', { fromValue: '18deg'}], position: 649, duration: 594, easing: "easeOutSine" },
            { id: "eid134", tween: [ "style", "${_paperFabricSwatch}", "left", '698px', { fromValue: '746px'}], position: 1438, duration: 580, easing: "easeOutSine" },
            { id: "eid169", tween: [ "style", "${_spool}", "top", '233px', { fromValue: '235px'}], position: 1740, duration: 339, easing: "easeOutSine" },
            { id: "eid105", tween: [ "style", "${_fabric}", "top", '-6px', { fromValue: '-146.71px'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid179", tween: [ "style", "${_sketchGirl}", "display", 'block', { fromValue: 'none'}], position: 2098, duration: 0, easing: "easeOutSine" },
            { id: "eid97", tween: [ "style", "${_bowlButtons}", "top", '107px', { fromValue: '-112px'}], position: 1036, duration: 562, easing: "easeOutSine" },
            { id: "eid143", tween: [ "style", "${_sketchCotton}", "top", '193px', { fromValue: '352px'}], position: 859, duration: 579, easing: "easeOutSine" },
            { id: "eid87", tween: [ "style", "${_panel2_header_box}", "top", '27px', { fromValue: '-109.67px'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid250", tween: [ "style", "${_txt_details}", "top", '108px', { fromValue: '391.33px'}], position: 801, duration: 442, easing: "easeOutSine" },
            { id: "eid145", tween: [ "transform", "${_sketchCotton}", "rotateZ", '0deg', { fromValue: '32deg'}], position: 859, duration: 579, easing: "easeOutSine" },
            { id: "eid132", tween: [ "style", "${_books}", "top", '234px', { fromValue: '432.88px'}], position: 1243, duration: 497, easing: "easeOutSine" },
            { id: "eid101", tween: [ "style", "${_fabric}", "left", '-30px', { fromValue: '-192px'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid111", tween: [ "transform", "${_threadSpools}", "rotateZ", '0deg', { fromValue: '25deg'}], position: 500, duration: 475, easing: "easeOutSine" },
            { id: "eid164", tween: [ "style", "${_ribbon}", "display", 'block', { fromValue: 'none'}], position: 2344, duration: 0, easing: "easeOutSine" },
            { id: "eid245", tween: [ "style", "${_threadRows}", "left", '701px', { fromValue: '740px'}], position: 2304, duration: 385, easing: "easeOutSine" },
            { id: "eid161", tween: [ "style", "${_ribbon}", "top", '2.98px', { fromValue: '-100px'}], position: 2344, duration: 345, easing: "easeOutSine" },
            { id: "eid126", tween: [ "style", "${_sketchBlueDress}", "display", 'block', { fromValue: 'none'}], position: 975, duration: 0, easing: "easeOutSine" },
            { id: "eid187", tween: [ "style", "${_sketchOrangeShirt}", "top", '257px', { fromValue: '380px'}], position: 1500, duration: 598, easing: "easeOutSine" },
            { id: "eid178", tween: [ "transform", "${_sketchGirl}", "rotateZ", '0deg', { fromValue: '-58deg'}], position: 2098, duration: 420, easing: "easeOutSine" },
            { id: "eid192", tween: [ "transform", "${_panel2_header_box}", "rotateZ", '0deg', { fromValue: '-15deg'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid252", tween: [ "transform", "${_txt_details}", "rotateZ", '0deg', { fromValue: '23deg'}], position: 801, duration: 442, easing: "easeOutSine" },
            { id: "eid114", tween: [ "style", "${_pencilSketch}", "left", '252px', { fromValue: '138px'}], position: 750, duration: 493, easing: "easeOutSine" },
            { id: "eid244", tween: [ "style", "${_threadRows}", "top", '-16px', { fromValue: '-199px'}], position: 2304, duration: 385, easing: "easeOutSine" },
            { id: "eid183", tween: [ "style", "${_threadRows}", "display", 'block', { fromValue: 'none'}], position: 2304, duration: 0, easing: "easeOutSine" },
            { id: "eid190", tween: [ "style", "${_sketchOrangeShirt}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeOutSine" },
            { id: "eid172", tween: [ "style", "${_spool}", "display", 'block', { fromValue: 'none'}], position: 1740, duration: 0, easing: "easeOutSine" },
            { id: "eid176", tween: [ "style", "${_sketchGirl}", "top", '21px', { fromValue: '-188.83px'}], position: 2098, duration: 420, easing: "easeOutSine" },
            { id: "eid112", tween: [ "style", "${_threadSpools}", "display", 'block', { fromValue: 'none'}], position: 439, duration: 0 },
            { id: "eid153", tween: [ "style", "${_needles}", "display", 'block', { fromValue: 'none'}], position: 2449, duration: 0, easing: "easeOutSine" },
            { id: "eid220", tween: [ "style", "${_scissorsBlk}", "left", '122.5px', { fromValue: '-130.5px'}], position: 562, duration: 681 },
            { id: "eid146", tween: [ "style", "${_sketchCotton}", "display", 'block', { fromValue: 'none'}], position: 859, duration: 0, easing: "easeOutSine" },
            { id: "eid163", tween: [ "transform", "${_ribbon}", "rotateZ", '0deg', { fromValue: '-36deg'}], position: 2344, duration: 345, easing: "easeOutSine" },
            { id: "eid225", tween: [ "style", "${_scissorsBlk}", "display", 'block', { fromValue: 'none'}], position: 562, duration: 0 },
            { id: "eid91", tween: [ "transform", "${_measureTape}", "rotateZ", '0deg', { fromValue: '-25deg'}], position: 212, duration: 405, easing: "easeOutSine" },
            { id: "eid119", tween: [ "style", "${_pencilSketch}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutSine" },
            { id: "eid174", tween: [ "style", "${_sketchGirl}", "left", '806px', { fromValue: '870.14px'}], position: 2098, duration: 420, easing: "easeOutSine" },
            { id: "eid116", tween: [ "style", "${_pencilSketch}", "top", '220px', { fromValue: '442px'}], position: 750, duration: 493, easing: "easeOutSine" },
            { id: "eid99", tween: [ "transform", "${_bowlButtons}", "rotateZ", '0deg', { fromValue: '184deg'}], position: 1036, duration: 562, easing: "easeOutSine" },
            { id: "eid89", tween: [ "style", "${_measureTape}", "top", '34px', { fromValue: '-122px'}], position: 212, duration: 405, easing: "easeOutSine" },
            { id: "eid248", tween: [ "style", "${_txt_details}", "left", '395px', { fromValue: '411px'}], position: 801, duration: 442, easing: "easeOutSine" },
            { id: "eid138", tween: [ "transform", "${_paperFabricSwatch}", "rotateZ", '0deg', { fromValue: '-47deg'}], position: 1438, duration: 580, easing: "easeOutSine" },
            { id: "eid167", tween: [ "style", "${_spool}", "left", '831px', { fromValue: '1003px'}], position: 1740, duration: 339, easing: "easeOutSine" },
            { id: "eid193", tween: [ "style", "${_txt_beauty}", "left", '350px', { fromValue: '308.27px'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid121", tween: [ "style", "${_sketchBlueDress}", "left", '341px', { fromValue: '272px'}], position: 975, duration: 500, easing: "easeOutSine" },
            { id: "eid86", tween: [ "style", "${_panel2_header_box}", "left", '349px', { fromValue: '291.63px'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid109", tween: [ "style", "${_threadSpools}", "top", '173px', { fromValue: '342px'}], position: 500, duration: 475, easing: "easeOutSine" },
            { id: "eid118", tween: [ "transform", "${_pencilSketch}", "rotateZ", '0deg', { fromValue: '39deg'}], position: 750, duration: 493, easing: "easeOutSine" },
            { id: "eid88", tween: [ "style", "${_measureTape}", "left", '188px', { fromValue: '90px'}], position: 212, duration: 405, easing: "easeOutSine" },
            { id: "eid201", tween: [ "style", "${_txt_inThe}", "top", '92px', { fromValue: '365px'}], position: 649, duration: 594, easing: "easeOutSine" },
            { id: "eid103", tween: [ "transform", "${_fabric}", "rotateZ", '0deg', { fromValue: '-25deg'}], position: 0, duration: 439, easing: "easeOutSine" },
            { id: "eid98", tween: [ "style", "${_bowlButtons}", "left", '266px', { fromValue: '285px'}], position: 1036, duration: 562, easing: "easeOutSine" },
            { id: "eid125", tween: [ "transform", "${_sketchBlueDress}", "rotateZ", '0deg', { fromValue: '32deg'}], position: 975, duration: 500, easing: "easeOutSine" },
            { id: "eid128", tween: [ "transform", "${_books}", "rotateZ", '0deg', { fromValue: '32deg'}], position: 1243, duration: 497, easing: "easeOutSine" },
            { id: "eid96", tween: [ "style", "${_bowlButtons}", "display", 'block', { fromValue: 'none'}], position: 1036, duration: 0 },
            { id: "eid148", tween: [ "style", "${_needles}", "left", '656px', { fromValue: '619.92px'}], position: 2449, duration: 440, easing: "easeOutSine" },
            { id: "eid226", trigger: [ function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${_scissorsBlk}', [0] ], ""], position: 649 }         ]
      }
   }
},
"panel2_scissorsBlk": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel2_scissor_blk_blade1',
      type: 'image',
      rect: ['0px','0px','160px','179px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_scissor_blk_blade1.png','0px','0px']
   },
   {
      id: 'panel2_scissor_blk_blade2',
      type: 'image',
      rect: ['0px','0px','160px','179px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel2_scissor_blk_blade2.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_panel2_scissor_blk_blade1}": [
            ["style", "left", '0.01px'],
            ["style", "top", '0.01px']
         ],
         "${_panel2_scissor_blk_blade2}": [
            ["style", "top", '0.01px'],
            ["style", "left", '0.01px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '179px'],
            ["style", "width", '160px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1000,
         autoPlay: false,
         timeline: [
            { id: "eid204", tween: [ "transform", "${_panel2_scissor_blk_blade2}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 0, duration: 250 },
            { id: "eid206", tween: [ "transform", "${_panel2_scissor_blk_blade2}", "rotateZ", '0deg', { fromValue: '-30deg'}], position: 250, duration: 250 },
            { id: "eid207", tween: [ "transform", "${_panel2_scissor_blk_blade2}", "rotateZ", '-30deg', { fromValue: '0deg'}], position: 500, duration: 250 },
            { id: "eid208", tween: [ "transform", "${_panel2_scissor_blk_blade2}", "rotateZ", '0deg', { fromValue: '-30deg'}], position: 750, duration: 250 }         ]
      }
   }
},
"panel3": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      type: 'rect',
      id: 'panel3_black',
      stroke: [0,'rgb(0, 0, 0)','none'],
      rect: ['0px','0px','958px','345px','auto','auto'],
      fill: ['rgba(0,0,0,1.00)']
   },
   {
      id: 'panel3_shirtGroup1',
      type: 'rect',
      cursor: ['pointer'],
      rect: ['1px','0px','auto','auto','auto','auto']
   },
   {
      type: 'rect',
      id: 'panel3_shirtGroup2',
      rect: ['241px','0px','auto','auto','auto','auto'],
      cursor: ['pointer'],
      display: 'none'
   },
   {
      type: 'rect',
      id: 'panel3_shirtGroup3',
      rect: ['481px','0px','auto','auto','auto','auto'],
      cursor: ['pointer'],
      display: 'none'
   },
   {
      type: 'rect',
      id: 'panel3_shirtGroup4',
      rect: ['721px','0px','auto','auto','auto','auto'],
      cursor: ['pointer'],
      display: 'none'
   },
   {
      id: 'panel3_description_box2',
      type: 'image',
      rect: ['293px','280px','370px','27px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_description_box2.png','0px','0px']
   },
   {
      font: ['minion-pro, Georgia, serif',12,'rgba(185,175,167,1.00)','normal','none','normal'],
      transform: {},
      align: 'center',
      id: 'txt_description',
      text: ' A fresh, colorful and feminine line up to welcome the fall season.',
      type: 'text',
      rect: ['313','285','0','0','auto','auto']
   },
   {
      id: 'panel3_subHeader_box',
      type: 'image',
      rect: ['291px','221px','378px','55px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_subHeader_box.png','0px','0px']
   },
   {
      font: ['adobe-garamond-pro, Georgia, serif',48,'rgba(255,255,255,1.00)','bold','none','normal'],
      transform: {},
      align: 'center',
      id: 'txt_subHeader',
      text: 'COLLECTION',
      type: 'text',
      rect: ['293px','219px','375','61px','auto','auto']
   },
   {
      id: 'panel3_header_box',
      type: 'image',
      rect: ['357px','199px','245px','19px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_header_box.png','0px','0px']
   },
   {
      font: ['adobe-garamond-pro, Georgia, serif',15,'rgba(225,80,82,1.00)','normal','none','italic'],
      transform: {},
      align: 'center',
      id: 'txt_header',
      text: 'THE ALICE RITTER',
      type: 'text',
      rect: ['413','199','0','0','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'panel3_shirtGroup3',
      symbolName: 'panel3_shirtGroup3'
   },
   {
      id: 'panel3_shirtGroup2',
      symbolName: 'panel3_shirtGroup2'
   },
   {
      id: 'panel3_shirtGroup1',
      symbolName: 'panel3_shirtGroup1'
   },
   {
      id: 'panel3_shirtGroup4',
      symbolName: 'panel3_shirtGroup4'
   }   ]
   },
   states: {
      "Base State": {
         "${_txt_header}": [
            ["style", "top", '199px'],
            ["style", "display", 'block'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(225,80,82,1)'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["style", "left", '413.05px'],
            ["style", "font-size", '15px']
         ],
         "${_panel3_header_box}": [
            ["style", "top", '199px'],
            ["style", "opacity", '0'],
            ["style", "left", '357px']
         ],
         "${_txt_subHeader}": [
            ["style", "line-height", '64px'],
            ["color", "color", 'rgba(255,255,255,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '293px'],
            ["style", "font-size", '48px'],
            ["style", "top", '219px'],
            ["style", "font-weight", 'bold'],
            ["style", "display", 'block'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["style", "width", '375px'],
            ["style", "height", '61px']
         ],
         "${_panel3_black}": [
            ["style", "top", '0px'],
            ["style", "height", '345px'],
            ["color", "background-color", 'rgba(0,0,0,1.00)'],
            ["style", "left", '0px'],
            ["style", "width", '958px']
         ],
         "${_txt_description}": [
            ["style", "top", '285.8px'],
            ["style", "display", 'block'],
            ["style", "text-align", 'center'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(185,175,167,1)'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "left", '312.49px'],
            ["style", "font-size", '12px']
         ],
         "${_panel3_description_box2}": [
            ["style", "top", '280px'],
            ["style", "opacity", '0'],
            ["style", "left", '293px']
         ],
         "${symbolSelector}": [
            ["style", "height", '345px'],
            ["style", "width", '956px']
         ],
         "${_panel3_shirtGroup2}": [
            ["style", "top", '0px'],
            ["transform", "skewY", '-20deg'],
            ["transform", "scaleX", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '240.5px'],
            ["style", "display", 'none']
         ],
         "${_panel3_shirtGroup4}": [
            ["style", "top", '0px'],
            ["transform", "skewY", '-20deg'],
            ["transform", "scaleX", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '720.5px'],
            ["style", "display", 'none']
         ],
         "${_panel3_subHeader_box}": [
            ["style", "top", '221px'],
            ["style", "opacity", '0'],
            ["style", "left", '291px']
         ],
         "${_panel3_shirtGroup1}": [
            ["style", "top", '0px'],
            ["transform", "skewY", '-20deg'],
            ["transform", "scaleX", '0'],
            ["style", "left", '0.5px'],
            ["style", "cursor", 'pointer']
         ],
         "${_panel3_shirtGroup3}": [
            ["style", "top", '0px'],
            ["transform", "skewY", '-20deg'],
            ["transform", "scaleX", '0'],
            ["style", "cursor", 'pointer'],
            ["style", "left", '480.5px'],
            ["style", "display", 'none']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1788,
         autoPlay: false,
         timeline: [
            { id: "eid295", tween: [ "style", "${_txt_subHeader}", "opacity", '1', { fromValue: '0'}], position: 1149, duration: 500, easing: "easeInSine" },
            { id: "eid279", tween: [ "transform", "${_panel3_shirtGroup1}", "skewY", '0deg', { fromValue: '-20deg'}], position: 0, duration: 500, easing: "easeOutBack" },
            { id: "eid297", tween: [ "style", "${_panel3_subHeader_box}", "opacity", '1', { fromValue: '0'}], position: 1149, duration: 500, easing: "easeInSine" },
            { id: "eid299", tween: [ "style", "${_txt_description}", "opacity", '1', { fromValue: '0'}], position: 1288, duration: 500, easing: "easeInSine" },
            { id: "eid288", tween: [ "transform", "${_panel3_shirtGroup4}", "skewY", '0deg', { fromValue: '-20deg'}], position: 750, duration: 500, easing: "easeOutBack" },
            { id: "eid293", tween: [ "style", "${_panel3_header_box}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInSine" },
            { id: "eid291", tween: [ "style", "${_txt_header}", "opacity", '1', { fromValue: '0'}], position: 1000, duration: 500, easing: "easeInSine" },
            { id: "eid284", tween: [ "style", "${_panel3_shirtGroup3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeOutBack" },
            { id: "eid282", tween: [ "transform", "${_panel3_shirtGroup2}", "skewY", '0deg', { fromValue: '-20deg'}], position: 250, duration: 500, easing: "easeOutBack" },
            { id: "eid301", tween: [ "style", "${_panel3_description_box2}", "opacity", '1', { fromValue: '0'}], position: 1288, duration: 500, easing: "easeInSine" },
            { id: "eid281", tween: [ "transform", "${_panel3_shirtGroup2}", "scaleX", '1', { fromValue: '0'}], position: 250, duration: 500, easing: "easeOutBack" },
            { id: "eid283", tween: [ "style", "${_panel3_shirtGroup2}", "display", 'block', { fromValue: 'none'}], position: 250, duration: 0, easing: "easeOutBack" },
            { id: "eid280", tween: [ "transform", "${_panel3_shirtGroup1}", "scaleX", '1', { fromValue: '0'}], position: 0, duration: 500, easing: "easeOutBack" },
            { id: "eid289", tween: [ "transform", "${_panel3_shirtGroup4}", "scaleX", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeOutBack" },
            { id: "eid286", tween: [ "transform", "${_panel3_shirtGroup3}", "scaleX", '1', { fromValue: '0'}], position: 500, duration: 500, easing: "easeOutBack" },
            { id: "eid287", tween: [ "style", "${_panel3_shirtGroup4}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeOutBack" },
            { id: "eid285", tween: [ "transform", "${_panel3_shirtGroup3}", "skewY", '0deg', { fromValue: '-20deg'}], position: 500, duration: 500, easing: "easeOutBack" }         ]
      }
   }
},
"panel3_shirtGroup1": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel3_redPanel',
      type: 'image',
      rect: ['0px','0px','238px','329px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_redPanel.png','0px','0px']
   },
   {
      id: 'panel3_infoBox',
      type: 'image',
      rect: ['0px','-120px','239px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png','0px','0px']
   },
   {
      id: 'panel3_shirt1',
      type: 'image',
      rect: ['23px','48px','190px','243px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_shirt1.png','0px','0px']
   },
   {
      transform: {},
      rect: ['25px','-73px','190','59','auto','auto'],
      type: 'text',
      id: 'description',
      text: 'Elegant silk, adorned on the front with crystal stone appliqués, has a draped attached scarf to wrap as you like.',
      align: 'auto',
      font: ['minion-pro, Georgia, serif',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: {},
      rect: ['25px','-95px','0','0','auto','auto'],
      type: 'text',
      id: 'title',
      text: 'SILK BLOUSE',
      align: 'auto',
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic']
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: ['0','-118','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel3_shirt1}": [
            ["style", "top", '48px'],
            ["style", "left", '23px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_panel3_infoBox}": [
            ["style", "left", '0px'],
            ["style", "top", '-120px']
         ],
         "${_description}": [
            ["style", "top", '-73px'],
            ["style", "height", '84px'],
            ["style", "left", '25px'],
            ["style", "width", '190px']
         ],
         "${symbolSelector}": [
            ["style", "height", '330px'],
            ["style", "width", '239px']
         ],
         "${_title}": [
            ["style", "top", '-95px'],
            ["style", "height", '30px'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", 'bold'],
            ["color", "color", 'rgba(195,193,191,1)'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "left", '25px'],
            ["style", "font-size", '15px']
         ],
         "${_panel3_redPanel}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid264", tween: [ "style", "${_panel3_shirt1}", "left", '-7.19px', { fromValue: '23px'}], position: 0, duration: 500 },
            { id: "eid265", tween: [ "style", "${_panel3_shirt1}", "top", '164.48px', { fromValue: '48px'}], position: 0, duration: 500 },
            { id: "eid266", tween: [ "style", "${_panel3_redPanel}", "top", '120px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid258", tween: [ "style", "${_title}", "top", '25px', { fromValue: '-95px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid260", tween: [ "style", "${_description}", "left", '26px', { fromValue: '25px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid267", tween: [ "style", "${_panel3_infoBox}", "top", '1px', { fromValue: '-120px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid257", tween: [ "style", "${_title}", "left", '26px', { fromValue: '25px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid259", tween: [ "style", "${_description}", "top", '47px', { fromValue: '-73px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid261", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 125 },
            { id: "eid262", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '-8deg', { fromValue: '5deg'}], position: 125, duration: 180 },
            { id: "eid263", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '16deg', { fromValue: '-8deg'}], position: 305, duration: 195 }         ]
      }
   }
},
"panel3_hit": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      rect: ['0px','0px','238px','449px','auto','auto'],
      id: 'Rectangle',
      stroke: [0,'rgb(0, 0, 0)','none'],
      type: 'rect',
      fill: ['rgba(255,255,255,0.00)']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_Rectangle}": [
            ["style", "top", '0px'],
            ["style", "height", '449px'],
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["style", "left", '0px'],
            ["style", "width", '238px']
         ],
         "${symbolSelector}": [
            ["style", "height", '449px'],
            ["style", "width", '238px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"panel3_shirtGroup2": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel3_redPanel',
      type: 'image',
      rect: ['0px','0px','238px','329px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_redPanel.png','0px','0px']
   },
   {
      id: 'panel3_infoBox',
      type: 'image',
      rect: ['0px','-120px','239px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png','0px','0px']
   },
   {
      id: 'panel3_shirt1',
      type: 'image',
      rect: ['23px','48px','190px','243px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_shirt2.png','0px','0px']
   },
   {
      transform: {},
      rect: ['25px','-73px','190','59','auto','auto'],
      type: 'text',
      id: 'description',
      text: 'Patches in shades of grey and blush are set at angles for dramatic effect. Ribbed trim at neckline and armholes.',
      align: 'auto',
      font: ['minion-pro, Georgia, serif',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: {},
      rect: ['25px','-95px','0','0','auto','auto'],
      type: 'text',
      id: 'title',
      text: 'GEOMETRIC VEST',
      align: 'auto',
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic']
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: ['0','-118','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel3_shirt1}": [
            ["style", "top", '48px'],
            ["style", "left", '23px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_panel3_infoBox}": [
            ["style", "left", '0px'],
            ["style", "top", '-120px']
         ],
         "${_panel3_redPanel}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_title}": [
            ["style", "top", '-95px'],
            ["style", "height", '30px'],
            ["color", "color", 'rgba(195,193,191,1)'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '25px'],
            ["style", "font-size", '15px']
         ],
         "${symbolSelector}": [
            ["style", "height", '330px'],
            ["style", "width", '239px']
         ],
         "${_description}": [
            ["style", "height", '84px'],
            ["style", "top", '-73px'],
            ["style", "left", '25px'],
            ["style", "width", '190px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid264", tween: [ "style", "${_panel3_shirt1}", "left", '-7.19px', { fromValue: '23px'}], position: 0, duration: 500 },
            { id: "eid265", tween: [ "style", "${_panel3_shirt1}", "top", '164.48px', { fromValue: '48px'}], position: 0, duration: 500 },
            { id: "eid266", tween: [ "style", "${_panel3_redPanel}", "top", '120px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid258", tween: [ "style", "${_title}", "top", '25px', { fromValue: '-95px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid260", tween: [ "style", "${_description}", "left", '26px', { fromValue: '25px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid267", tween: [ "style", "${_panel3_infoBox}", "top", '1px', { fromValue: '-120px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid257", tween: [ "style", "${_title}", "left", '26px', { fromValue: '25px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid261", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 125 },
            { id: "eid262", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '-8deg', { fromValue: '5deg'}], position: 125, duration: 180 },
            { id: "eid263", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '16deg', { fromValue: '-8deg'}], position: 305, duration: 195 },
            { id: "eid259", tween: [ "style", "${_description}", "top", '47px', { fromValue: '-73px'}], position: 0, duration: 500, easing: "easeInSine" }         ]
      }
   }
},
"panel3_shirtGroup3": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel3_redPanel',
      type: 'image',
      rect: ['0px','0px','238px','329px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_redPanel.png','0px','0px']
   },
   {
      id: 'panel3_infoBox',
      type: 'image',
      rect: ['0px','-120px','239px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png','0px','0px']
   },
   {
      id: 'panel3_shirt1',
      type: 'image',
      rect: ['23px','48px','190px','243px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_shirt3.png','0px','0px']
   },
   {
      transform: {},
      rect: ['25px','-73px','190','59','auto','auto'],
      type: 'text',
      id: 'description',
      text: 'The voluminous silhouette of a cape style shirt features vibrant colors and has a full button fastening.',
      align: 'auto',
      font: ['minion-pro, Georgia, serif',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: {},
      rect: ['25px','-95px','0','0','auto','auto'],
      type: 'text',
      id: 'title',
      text: 'CAPE SHIRT',
      align: 'auto',
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic']
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: ['0','-118','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel3_shirt1}": [
            ["style", "top", '48px'],
            ["style", "left", '23px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '330px'],
            ["style", "width", '239px']
         ],
         "${_description}": [
            ["style", "top", '-75px'],
            ["style", "height", '84px'],
            ["style", "left", '25px'],
            ["style", "width", '190px']
         ],
         "${_panel3_infoBox}": [
            ["style", "left", '0px'],
            ["style", "top", '-120px']
         ],
         "${_title}": [
            ["style", "top", '-95px'],
            ["style", "height", '30px'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", 'bold'],
            ["color", "color", 'rgba(195,193,191,1)'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "left", '25px'],
            ["style", "font-size", '15px']
         ],
         "${_panel3_redPanel}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid264", tween: [ "style", "${_panel3_shirt1}", "left", '-7.19px', { fromValue: '23px'}], position: 0, duration: 500 },
            { id: "eid265", tween: [ "style", "${_panel3_shirt1}", "top", '164.48px', { fromValue: '48px'}], position: 0, duration: 500 },
            { id: "eid266", tween: [ "style", "${_panel3_redPanel}", "top", '120px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid258", tween: [ "style", "${_title}", "top", '25px', { fromValue: '-95px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid260", tween: [ "style", "${_description}", "left", '26px', { fromValue: '25px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid267", tween: [ "style", "${_panel3_infoBox}", "top", '1px', { fromValue: '-120px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid257", tween: [ "style", "${_title}", "left", '26px', { fromValue: '25px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid259", tween: [ "style", "${_description}", "top", '47px', { fromValue: '-75px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid261", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 125 },
            { id: "eid262", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '-8deg', { fromValue: '5deg'}], position: 125, duration: 180 },
            { id: "eid263", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '16deg', { fromValue: '-8deg'}], position: 305, duration: 195 }         ]
      }
   }
},
"panel3_shirtGroup4": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel3_redPanel',
      type: 'image',
      rect: ['0px','0px','238px','329px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_redPanel.png','0px','0px']
   },
   {
      id: 'panel3_infoBox',
      type: 'image',
      rect: ['0px','-120px','239px','120px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_infoBox.png','0px','0px']
   },
   {
      id: 'panel3_shirt1',
      type: 'image',
      rect: ['23px','48px','190px','243px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel3_shirt4.png','0px','0px']
   },
   {
      transform: {},
      rect: ['25px','-73px','190','59','auto','auto'],
      type: 'text',
      id: 'description',
      text: 'A collarless neckline with soft gathers at the shoulders and back yokes. Topped with full blouson sleeves and front button closure.',
      align: 'auto',
      font: ['minion-pro, Georgia, serif',12,'rgba(255,255,255,1)','normal','none','normal']
   },
   {
      transform: {},
      rect: ['25px','-95px','0','0','auto','auto'],
      type: 'text',
      id: 'title',
      text: 'WHITE BLOUSE',
      align: 'auto',
      font: ['minion-pro, Georgia, serif',15,'rgba(195,193,191,1.00)','bold','none','italic']
   },
   {
      id: 'panel3_hit',
      type: 'rect',
      rect: ['0','-118','auto','auto','auto','auto']
   }],
   symbolInstances: [
   {
      id: 'panel3_hit',
      symbolName: 'panel3_hit'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel3_shirt1}": [
            ["style", "top", '48px'],
            ["style", "left", '23px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${symbolSelector}": [
            ["style", "height", '330px'],
            ["style", "width", '239px']
         ],
         "${_title}": [
            ["style", "top", '-95px'],
            ["style", "height", '30px'],
            ["color", "color", 'rgba(195,193,191,1)'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "font-style", 'italic'],
            ["style", "font-weight", 'bold'],
            ["style", "left", '25px'],
            ["style", "font-size", '15px']
         ],
         "${_panel3_redPanel}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_panel3_infoBox}": [
            ["style", "left", '0px'],
            ["style", "top", '-120px']
         ],
         "${_description}": [
            ["style", "height", '84px'],
            ["style", "top", '-75px'],
            ["style", "left", '25px'],
            ["style", "width", '190px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: false,
         timeline: [
            { id: "eid264", tween: [ "style", "${_panel3_shirt1}", "left", '-7.19px', { fromValue: '23px'}], position: 0, duration: 500 },
            { id: "eid265", tween: [ "style", "${_panel3_shirt1}", "top", '164.48px', { fromValue: '48px'}], position: 0, duration: 500 },
            { id: "eid266", tween: [ "style", "${_panel3_redPanel}", "top", '120px', { fromValue: '0px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid258", tween: [ "style", "${_title}", "top", '25px', { fromValue: '-95px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid260", tween: [ "style", "${_description}", "left", '26px', { fromValue: '25px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid267", tween: [ "style", "${_panel3_infoBox}", "top", '1px', { fromValue: '-120px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid257", tween: [ "style", "${_title}", "left", '26px', { fromValue: '25px'}], position: 0, duration: 500, easing: "easeInSine" },
            { id: "eid261", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '5deg', { fromValue: '0deg'}], position: 0, duration: 125 },
            { id: "eid262", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '-8deg', { fromValue: '5deg'}], position: 125, duration: 180 },
            { id: "eid263", tween: [ "transform", "${_panel3_shirt1}", "rotateZ", '16deg', { fromValue: '-8deg'}], position: 305, duration: 195 },
            { id: "eid259", tween: [ "style", "${_description}", "top", '47px', { fromValue: '-75px'}], position: 0, duration: 500, easing: "easeInSine" }         ]
      }
   }
},
"panel4_diamondFlora": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel4_diamond_flora',
      type: 'image',
      rect: ['0px','0px','494px','494px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_diamond_flora.svg','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_panel4_diamond_flora}": [
            ["style", "left", '0.41px'],
            ["style", "top", '0px']
         ],
         "${symbolSelector}": [
            ["style", "height", '494px'],
            ["style", "width", '494px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"panel4": {
   version: "1.0.0",
   minimumCompatibleVersion: "0.1.7",
   build: "1.0.0.180",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'panel4_clothesRack',
      type: 'image',
      rect: ['0px','0px','958px','350px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/panel4_clothesRack.jpg','0px','0px']
   },
   {
      id: 'panel4_diamondFlora6',
      type: 'rect',
      rect: ['747px','194px','auto','auto','auto','auto']
   },
   {
      id: 'panel4_diamondFlora5',
      type: 'rect',
      rect: ['747px','-398px','auto','auto','auto','auto']
   },
   {
      id: 'panel4_diamondFlora4',
      type: 'rect',
      rect: ['449px','-103px','auto','auto','auto','auto']
   },
   {
      id: 'panel4_diamondFlora3',
      type: 'rect',
      rect: ['151px','194px','auto','auto','auto','auto']
   },
   {
      id: 'panel4_diamondFlora2',
      type: 'rect',
      rect: ['149px','-398px','auto','auto','auto','auto']
   },
   {
      id: 'panel4_diamondFlora1',
      type: 'rect',
      rect: ['244','15','auto','auto','auto','auto']
   },
   {
      type: 'text',
      rect: ['566','222px','263','48','auto','auto'],
      display: 'none',
      id: 'txt_description',
      align: 'center',
      text: 'Get to know the woman behind the threads. Alice offers some insight into what inspires her as a designer and motivates her as an entrepreneur.',
      font: ['minion-pro, Georgia, serif',12,'rgba(142,116,115,1.00)','normal','none','normal'],
      transform: {}
   },
   {
      type: 'text',
      rect: ['649','190','0','0','auto','auto'],
      display: 'none',
      id: 'txt_ritter',
      align: 'center',
      text: 'RITTER',
      font: ['adobe-garamond-pro, Georgia, serif',28,'rgba(96,96,90,1.00)','normal','none','italic'],
      transform: {}
   },
   {
      type: 'image',
      display: 'none',
      rect: ['-388px','-16px','600px','373px','auto','auto'],
      id: 'alice',
      fill: ['rgba(0,0,0,0)','images/panel4_alice.png','0px','0px']
   },
   {
      type: 'image',
      display: 'none',
      rect: ['521px','115px','356px','77px','auto','auto'],
      id: 'panel4_header_box',
      fill: ['rgba(0,0,0,0)','images/panel4_header_box.png','0px','0px']
   },
   {
      type: 'text',
      id: 'txt_alice',
      text: 'ALICE',
      rect: ['542','100px','306','0','auto','auto'],
      opacity: 1,
      display: 'none',
      align: 'center',
      font: ['adobe-garamond-pro, Georgia, serif',92,'rgba(154,93,88,1.00)','bold','none','normal'],
      transform: {}
   },
   {
      type: 'text',
      rect: ['661','86','76','0','auto','auto'],
      display: 'none',
      id: 'txt_meet',
      align: 'center',
      text: 'MEET',
      font: ['adobe-garamond-pro, Georgia, serif',20,'rgba(142,116,115,1.00)','normal','none','italic'],
      transform: {}
   }],
   symbolInstances: [
   {
      id: 'panel4_diamondFlora1',
      symbolName: 'panel4_diamondFlora'
   },
   {
      id: 'panel4_diamondFlora4',
      symbolName: 'panel4_diamondFlora'
   },
   {
      id: 'panel4_diamondFlora3',
      symbolName: 'panel4_diamondFlora'
   },
   {
      id: 'panel4_diamondFlora6',
      symbolName: 'panel4_diamondFlora'
   },
   {
      id: 'panel4_diamondFlora2',
      symbolName: 'panel4_diamondFlora'
   },
   {
      id: 'panel4_diamondFlora5',
      symbolName: 'panel4_diamondFlora'
   }   ]
   },
   states: {
      "Base State": {
         "${_panel4_diamondFlora3}": [
            ["style", "top", '194px'],
            ["transform", "scaleY", '1.25'],
            ["style", "left", '151px'],
            ["transform", "scaleX", '1.25']
         ],
         "${_alice}": [
            ["style", "top", '-16px'],
            ["style", "opacity", '0'],
            ["style", "left", '-388px'],
            ["style", "display", 'none']
         ],
         "${_txt_description}": [
            ["color", "color", 'rgba(142,116,115,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '566.59px'],
            ["style", "font-size", '12px'],
            ["style", "top", '222px'],
            ["style", "display", 'none'],
            ["style", "font-family", 'minion-pro, Georgia, serif'],
            ["style", "height", '48px'],
            ["style", "width", '263px']
         ],
         "${_panel4_clothesRack}": [
            ["style", "left", '0px'],
            ["style", "top", '0px']
         ],
         "${_txt_meet}": [
            ["color", "color", 'rgba(142,116,115,1)'],
            ["style", "opacity", '0'],
            ["style", "left", '661.36px'],
            ["style", "font-size", '20px'],
            ["style", "top", '85.28px'],
            ["style", "font-style", 'italic'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["style", "display", 'none'],
            ["style", "width", '76px']
         ],
         "${_txt_ritter}": [
            ["style", "top", '190px'],
            ["style", "display", 'none'],
            ["style", "font-style", 'italic'],
            ["style", "opacity", '0'],
            ["color", "color", 'rgba(96,96,90,1)'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["style", "left", '649.59px'],
            ["style", "font-size", '28px']
         ],
         "${_panel4_diamondFlora1}": [
            ["style", "top", '-103px'],
            ["transform", "scaleY", '1.25'],
            ["style", "left", '-147px'],
            ["transform", "scaleX", '1.25']
         ],
         "${_panel4_header_box}": [
            ["style", "top", '115px'],
            ["style", "opacity", '0'],
            ["style", "left", '521px'],
            ["style", "display", 'none']
         ],
         "${_panel4_diamondFlora4}": [
            ["style", "top", '-103px'],
            ["transform", "scaleY", '1.25'],
            ["style", "left", '449px'],
            ["transform", "scaleX", '1.25']
         ],
         "${symbolSelector}": [
            ["style", "height", '350px'],
            ["style", "width", '958px']
         ],
         "${_txt_alice}": [
            ["style", "line-height", '111px'],
            ["color", "color", 'rgba(154,93,88,1)'],
            ["style", "opacity", '1'],
            ["style", "left", '542.99px'],
            ["style", "font-size", '92px'],
            ["style", "top", '100px'],
            ["transform", "scaleY", '1'],
            ["style", "display", 'none'],
            ["style", "font-family", 'adobe-garamond-pro, Georgia, serif'],
            ["style", "clip", [0,-0.03515625,111,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "font-weight", 'bold']
         ],
         "${_panel4_diamondFlora2}": [
            ["style", "top", '-398px'],
            ["transform", "scaleY", '1.25'],
            ["style", "left", '149px'],
            ["transform", "scaleX", '1.25']
         ],
         "${_panel4_diamondFlora5}": [
            ["style", "top", '-398px'],
            ["transform", "scaleY", '1.25'],
            ["style", "left", '747px'],
            ["transform", "scaleX", '1.25']
         ],
         "${_panel4_diamondFlora6}": [
            ["style", "top", '194px'],
            ["transform", "scaleY", '1.25'],
            ["style", "left", '747px'],
            ["transform", "scaleX", '1.25']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 3000,
         autoPlay: false,
         timeline: [
            { id: "eid325", tween: [ "transform", "${_panel4_diamondFlora3}", "scaleY", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid353", tween: [ "style", "${_alice}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0, easing: "easeInSine" },
            { id: "eid336", tween: [ "style", "${_txt_alice}", "clip", [0,306,111,0], { valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)', fromValue: [0,-0.03515625,111,0]}], position: 1500, duration: 750, easing: "easeInSine" },
            { id: "eid343", tween: [ "style", "${_txt_meet}", "display", 'block', { fromValue: 'none'}], position: 750, duration: 0, easing: "easeInSine" },
            { id: "eid324", tween: [ "transform", "${_panel4_diamondFlora2}", "scaleX", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid338", tween: [ "style", "${_panel4_header_box}", "opacity", '1', { fromValue: '0'}], position: 1500, duration: 750, easing: "easeInSine" },
            { id: "eid352", tween: [ "style", "${_alice}", "left", '-122px', { fromValue: '-388px'}], position: 500, duration: 950, easing: "easeOutSine" },
            { id: "eid322", tween: [ "transform", "${_panel4_diamondFlora1}", "scaleX", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid340", tween: [ "style", "${_txt_alice}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInSine" },
            { id: "eid348", tween: [ "style", "${_txt_description}", "opacity", '1', { fromValue: '0'}], position: 2500, duration: 500, easing: "easeInSine" },
            { id: "eid330", tween: [ "transform", "${_panel4_diamondFlora5}", "scaleX", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid349", tween: [ "style", "${_txt_description}", "display", 'block', { fromValue: 'none'}], position: 2500, duration: 0, easing: "easeInSine" },
            { id: "eid347", tween: [ "style", "${_txt_ritter}", "opacity", '1', { fromValue: '0'}], position: 2250, duration: 500, easing: "easeInSine" },
            { id: "eid327", tween: [ "transform", "${_panel4_diamondFlora4}", "scaleY", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid350", tween: [ "style", "${_txt_ritter}", "display", 'block', { fromValue: 'none'}], position: 2250, duration: 0, easing: "easeInSine" },
            { id: "eid321", tween: [ "transform", "${_panel4_diamondFlora1}", "scaleY", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid339", tween: [ "style", "${_panel4_header_box}", "display", 'block', { fromValue: 'none'}], position: 1500, duration: 0, easing: "easeInSine" },
            { id: "eid329", tween: [ "transform", "${_panel4_diamondFlora5}", "scaleY", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid323", tween: [ "transform", "${_panel4_diamondFlora2}", "scaleY", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid332", tween: [ "transform", "${_panel4_diamondFlora6}", "scaleX", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid334", tween: [ "style", "${_txt_meet}", "opacity", '1', { fromValue: '0'}], position: 750, duration: 500, easing: "easeInSine" },
            { id: "eid331", tween: [ "transform", "${_panel4_diamondFlora6}", "scaleY", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid328", tween: [ "transform", "${_panel4_diamondFlora4}", "scaleX", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" },
            { id: "eid351", tween: [ "style", "${_alice}", "opacity", '1', { fromValue: '0'}], position: 500, duration: 950, easing: "easeOutSine" },
            { id: "eid326", tween: [ "transform", "${_panel4_diamondFlora3}", "scaleX", '1', { fromValue: '1.25'}], position: 0, duration: 1000, easing: "easeOutBack" }         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-182481683");
