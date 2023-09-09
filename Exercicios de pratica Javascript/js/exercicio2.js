function tratadorDeCliqueExercicio2() {
    horario = new Date();
    let hora = 0;
    if (hora > 12) {
        hora = horario.getHours() - 12;
    } else {
        hora = horario.getHours();
    }
    window.alert(`Horario: ${hora} ${horario.getHours() > 12 ? "PM" : "AM"} : ${horario.getMinutes()}m : ${horario.getSeconds()}s`);
    console.log('adicionar código na função tratadorDeCliqueExercicio2() em ./js/exercicio2.js')
}