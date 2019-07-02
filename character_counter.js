 (function(){ //　即時関数
  'user strict'; // strictモード(厳格モード)

  // id input_textのエレメントを取得syutoku
  var e = document.getElementById('input_text');
  //　初期値をセット
  document.getElementById('character_count').innerHTML = '10';

  // keyupのイベント発生時に、入力文字数をコンソールに出力
  e.addEventListener('keyup', function(){
    // console.log(e.value);
    // console.log(e.value.length);

    // 改行を削除削除
    var str = e.value;
    //　改行の削除
    str = str.replace(/\r?\n/g, '');
    // 文字数の表示
    // console.log(str.length);
    var remaining = 10 - str.length;
    document.getElementById('character_count').innerHTML = remaining; //str.length;

    if (remaining >= 0) {
      document.getElementById('character_count_wrap').style.color = 'black';
    } else {
      document.getElementById('character_count_wrap').style.color = 'red';
    }
  });
 })();