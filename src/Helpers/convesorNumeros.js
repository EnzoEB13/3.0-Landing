export const formatearNumero = (number) => {
    if(number){
        const regex = /\B(?=(\d{3})+(?!\d))/g;
        return number.toString().replace(regex, ".");
    }
  }