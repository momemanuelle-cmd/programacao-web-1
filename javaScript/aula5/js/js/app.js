let combo = prompt(
    "Escolha o código do combo desejado:\n" +
    "1 - Combo Bug (Hambúrguer + Refri)\n" +
    "2 - Combo Deploy (Pizza + Suco)\n" +
    "3 - Combo Sênior (Salada + Água)"
);
switch (combo) {
    case "1":
        alert("Pedido confirmado: Combo Bug (Hambúrguer + Refri).");
        break;
    case "2":
        alert("Pedido confirmado: Combo Deploy (Pizza + Suco).");
        break;
    case "3":
        alert("Pedido confirmado: Combo Sênior (Salada + Água).");
        break;
    default:
        alert("Opção inválida! Por favor, escolha um código entre 1 e 3.");
        break;
}