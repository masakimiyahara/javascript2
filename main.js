function update(_v){                //inputで入れられた物を_vに変換し全消しする
  document.querySelector('input').value =_v
}

function append(_v){
document.querySelector('input').value +=_v    //繰り返し後ろに数字を追加させる
}

function append1(_v){
document.querySelector('input').value +=_v    //繰り返し後ろに演算子を追加させる
}

function calc()
{
  const v = document.querySelector( 'input' ).value
  const f = new Function( 'return' + v )              
  update( f().toString() )     
}

function calc() // 「＝」ボタンが押されたので計算する
{
    const v = document.querySelector( 'input' ).value        
    const f = new Function( 'return ' + v )
    update( f().toString() )
}
