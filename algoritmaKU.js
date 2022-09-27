function add(num){
  document.form.viewbox.value = document.form.viewbox.value + num
}

function hasil(){
  var inputan = document.form.viewbox.value
  var baru = inputan.replace(/x/g, "*" )
  document.form.viewbox.value = eval(baru);
}

function reset(){
  document.form.viewbox.value = "";
}

function hapus(){
  var inputan = document.form.viewbox.value
  document.form.viewbox.value = inputan.substring(0,inputan.length-1);
}
