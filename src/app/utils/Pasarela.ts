export default class Pasarela {
    static sendPay = (monto: number) => {
        var montoElement: any = document.getElementById("mountCulqi");
        montoElement.innerHTML = monto;
        document.getElementById("buyButton")?.click();
    }

    static listenPay = (accion: Function) => {
        var eventElement = document.getElementById("listenToken");
        eventElement?.addEventListener('click', (event: any) => {
            var token = document.getElementById("tokenCulqi")?.innerHTML;
            if (token !== "") {
                accion(token);
                var tokenElement: any = document.getElementById("tokenCulqi");
                tokenElement.innerText = "";
            }
        });
    }
}