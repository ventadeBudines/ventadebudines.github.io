function enviarPorWhatsApp(event) {
    event.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const direccion = document.getElementById("direccion").value;
    const pedido = document.getElementById("pedido").value;

    const mensaje = `Hola, mi nombre es ${nombre}. Quisiera hacer un pedido de budín con los siguientes detalles:%0A+ Dirección: ${direccion}%0A+ Pedido: ${pedido}`;

    const telefono = "527442963677";
    const url = `https://wa.me/${telefono}?text=${mensaje}`;

    window.open(url, "_blank");
}
