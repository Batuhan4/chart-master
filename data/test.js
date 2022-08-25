let date,
  Fizik,
  json2,
  Matematik,
  Geometri,
  Kimya,
  Biyoloji,
  Tarih,
  Türkçe,
  Din,
  Coğrafya,
  Felsefe,
  sec,
  sinav,
  sum = 0,
  Toplam;
function download(content, fileName, contentType) {
  var a = document.createElement('a');
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
function Push(ders, json2, dersData) {
  var open = 0,
    close = dersData,
    high = 0,
    low = 0,
    ab = 0;
  //console.log(json2.Türkçe.length);
  //open = json2.Türkçe[json2.Türkçe.length - 1].close;
  ab = json2[`${ders}`].length - 1;
  open = json2[`${ders}`][ab].close;

  if (open > close) {
    high = open;
    low = close;
  } else {
    high = close;
    low = open;
  }
  json2[`${ders}`].push({
    date: `${date}`,
    open: `${open}`,
    high: `${high}`,
    low: `${low}`,
    close: `${close}`,
  });
  sum += parseInt(close);
}
function getData(json2) {
  Push('Türkçe', json2, Türkçe);
  Push('Matematik', json2, Matematik);
  Push('Fizik', json2, Fizik);
  Push('Geometri', json2, Geometri);
  Push('Biyoloji', json2, Biyoloji);
  Push('Tarih', json2, Tarih);
  Push('Kimya', json2, Kimya);
  Push('Din', json2, Din);
  Push('Coğrafya', json2, Coğrafya);
  Push('Felsefe', json2, Felsefe);
  if (sec != 'deneme') {
    // denemeleri ayrıca soruya gir ki çözdüğün belli olsun
    Push('Toplam', json2, sum); // denemelerde toplam ı ayrı kağıta sonra girersin
  }

  Str_txt = JSON.stringify(json2);
  download(Str_txt, `${sec}`, 'application/json');
}
function submit() {
  checkbox = document.getElementById('sec');
  checkbox2 = document.getElementById('ayt');
  if (checkbox.checked == true) {
    sec = 'deneme';
    //alert('a');
  } else sec = 'soru';
  if (checkbox2.checked == true) {
    sinav = 'AYT';
    //alert('a');
  } else sinav = 'TYT';

  date = document.getElementById('date').value;
  Fizik = document.getElementById('Fizik').value;
  Matematik = document.getElementById('Matematik').value;
  Geometri = document.getElementById('Geometri').value;
  Biyoloji = document.getElementById('Biyoloji').value;
  Türkçe = document.getElementById('Türkçe').value;
  Tarih = document.getElementById('Tarih').value;
  Kimya = document.getElementById('Kimya').value;
  Din = document.getElementById('Din').value;
  Coğrafya = document.getElementById('Coğrafya').value;
  Felsefe = document.getElementById('Felsefe').value;

  fetch(`${sinav}/${sec}.json`)
    .then((response) => response.json())
    .then((json) => getData(json));

  //json2.daily[json2.daily.lenght].close = 0;

  //console.log(json2);

  /*console.log(date);
  console.log(open1);
  console.log(close1);
  console.log(high);
  console.log(low);
*/
}
