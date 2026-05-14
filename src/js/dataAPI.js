async function getDatReal() {
  const res = await fetch("https://timeapi.io/api/Time/current/zone?timeZone=America/Sao_Paulo");
  const data = await res.json();

  return `${data.year}-${String(data.month).padStart(2, "0")}-${String(data.day).padStart(2, "0")}`;
}


export async function checarData(){
    const hoje = await getDatReal();
    const ultima = localStorage.getItem("ultimadata");

    if(ultima !== hoje){
        localStorage.setItem("ultimadata", hoje);
        return true;
        
    }

}