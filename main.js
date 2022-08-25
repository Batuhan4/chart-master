let json2; // can be use only in functions if defined in functions
let sec;
let soru;
let isim;
let ders;
let renk;
let apsis = 0;
let ordinat2 = 529;
let ordinat = 529;
let geniskatsayi = '1';
let yuksekkatsayi = '-1';
let yuksek;
let genis = 7;
let sonjson;
function mumciz(yuksek, genis, apsis, ordinat) {
  return new Konva.Rect({
    x: apsis,
    width: genis * geniskatsayi,
    height: yuksek * yuksekkatsayi,
    y: ordinat,
    fill: renk,
    stroke: 'black',
  });
}

function main_init() {
  sonjson = json2[`${ders}`];
  //console.log(json2[ders]);
  var sol = document.createElement('div');
  sol.className = 'sol';
  document.body.appendChild(sol);
  var sag = document.createElement('div');
  sag.className = 'sag';
  document.body.appendChild(sag);
  var asagi = document.createElement('div');
  asagi.className = 'asagi';
  document.body.appendChild(asagi);
  var yukari = document.createElement('div');
  yukari.className = 'yukari';
  document.body.appendChild(yukari);
  var anadiv = document.createElement('div');
  anadiv.className = 'anadiv';
  anadiv.id = 'anadiv';
  document.body.appendChild(anadiv);
  /*var canvasMain = document.createElement('canvas');
  var canvasLayer = document.createElement('canvas');
  canvasMain.className = 'canvasMain';
  canvasMain.id = 'canvasMain';
  canvasLayer.className = 'canvasLayer';
  canvasLayer.id = 'canvasLayer';
  anadiv.appendChild(canvasMain);
  anadiv.appendChild(canvasLayer); */
  var stage = new Konva.Stage({
    container: 'anadiv',
    width: window.innerWidth,
    height: window.innerWidth,
    draggable: true,
  });
  var layer = new Konva.Layer();
  stage.add(layer);
  var arrow = new Konva.Arrow({
    x: 0,
    y: 480,
    points: [0, 50, 2300, 50],
    pointerLength: 20,
    pointerWidth: 20,
    fill: 'black',
    stroke: 'black',
    strokeWidth: 4,
  });

  var arrow2 = new Konva.Arrow({
    x: 0,
    y: -1769,
    points: [0, 2300, 0, 0],
    pointerLength: 20,
    pointerWidth: 20,
    fill: 'black',
    stroke: 'black',
    strokeWidth: 4,
  });
  var date1 = new Konva.Text({
    x: 0,
    y: 570,
    text: sonjson[0].date,
    fontSize: 25,
    fontFamily: 'Calibri',
    fill: 'red',
  });
  var ders1 = new Konva.Text({
    x: 5,
    y: 60,
    text: sec + '  ' + ders + '  ' + soru,
    fontSize: 40,
    fontFamily: 'Calibri',
    fill: 'blue',
  });
  var number = new Konva.Text({
    x: -40,
    y: ordinat - 20,
    text: '20',
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'black',
  });
  var number2 = new Konva.Text({
    x: -55,
    y: ordinat - 120,
    text: '120',
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'black',
  });
  var number3 = new Konva.Text({
    x: -55,
    y: ordinat - 220,
    text: '220',
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'black',
  });
  var number4 = new Konva.Text({
    x: -55,
    y: ordinat - 320,
    text: '320',
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'black',
  });
  var number5 = new Konva.Text({
    x: -55,
    y: ordinat - 420,
    text: '420',
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'black',
  });
  var number6 = new Konva.Text({
    x: -55,
    y: ordinat - 520,
    text: '520',
    fontSize: 30,
    fontFamily: 'Calibri',
    fill: 'black',
  });
  layer.add(number6);
  layer.add(number4);
  layer.add(number5);
  layer.add(number3);
  layer.add(number2);
  layer.add(number);
  layer.add(ders1);
  layer.add(date1);
  layer.add(arrow2);
  layer.add(arrow);
  layer.draw();

  // json2[`${ders}`]
  for (let gunsayi = 0; gunsayi < 10000; gunsayi++) {
    if (json2[`${ders}`][gunsayi] == null) {
      break;
    }
    //console.log(json2[`${ders}`][gunsayi].open);
    yuksek = Math.abs(
      parseInt(json2[`${ders}`][gunsayi].open) -
        parseInt(json2[`${ders}`][gunsayi].close)
    );

    apsis = apsis + 7;

    if (
      parseInt(json2[`${ders}`][gunsayi].close) >
      parseInt(json2[`${ders}`][gunsayi].open)
    ) {
      renk = 'green';
    } else renk = 'red';

    if (renk == 'green') {
      ordinat = ordinat2 - parseInt(json2[`${ders}`][gunsayi].open);
    } else ordinat = ordinat - parseInt(json2[`${ders}`][gunsayi].close);
    layer.add(mumciz(yuksek, genis, apsis, ordinat));
  }
  layer.draw();

  //test
  layer.on('click', function () {
    console.log(stage.getPointerPosition());
  });

  // sonra grafik
}
function init() {
  fetch(`data/${sec}/${soru}.json`)
    .then((response) => response.json())
    .then((json) => saveJson2(json));
  function saveJson2(json3) {
    json2 = json3;
  }
}
function addButton(dersler) {
  var button = document.createElement('button');
  button.className = 'button';
  button.innerHTML = String(dersler);
  button.id = String(dersler);
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(button);

  // 3. Add event handler
  button.addEventListener('click', function () {
    ders = event.srcElement.id;
    removeButton('Türkçe');
    removeButton('Matematik');
    removeButton('Geometri');
    removeButton('Fizik');
    removeButton('Kimya');
    removeButton('Biyoloji');
    removeButton('Tarih');
    removeButton('Coğrafya');
    removeButton('Felsefe');
    removeButton('Din');
    removeButton('Toplam');
    main_init();
  });
}
function addSoru(isim) {
  var button = document.createElement('button');
  button.className = 'button';
  button.innerHTML = String(isim);
  button.id = String(isim);
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(button);

  // 3. Add event handler
  button.addEventListener('click', function () {
    soru = event.srcElement.id;
    removeButton('deneme');
    removeButton('soru');
    init();
    addDersler();
  });
}
function addDersler() {
  addButton('Türkçe');
  addButton('Matematik');
  addButton('Geometri');
  addButton('Fizik');
  addButton('Kimya');
  addButton('Biyoloji');
  addButton('Tarih');
  addButton('Coğrafya');
  addButton('Felsefe');
  addButton('Din');
  addButton('Toplam');
}
function removeButton(elementId) {
  // Removes an element from the document
  var element = document.getElementById(elementId);
  element.parentNode.removeChild(element);
}
function sinav(se) {
  sec = se;
  removeButton('TYT');
  removeButton('AYT');
  addSoru('deneme');
  addSoru('soru');
}
