if (idade < 18) {
    alert("Acesso bloqueado: Você deve ser maior de idade para acessar a plataforma.");
} else {
    // 3. Solicita a escolha do plano caso seja maior de idade
    let plano = prompt("Qual plano deseja assinar? (Básico, Pro ou VIP)");if (plano) {
        plano = plano.toLowerCase();
    }

    // 4. Analisa o plano escolhido usando switch/case
    switch (plano) {
        case "básico":
        case "basico":
            alert("Benefícios do Plano Básico:\n- Acesso aos cursos essenciais\n- Suporte via fórum comunitário");
            break;
        case "pro":
            alert("Benefícios do Plano Pro:\n- Acesso a todos os cursos\n- Certificados digitais inclusos\n- Suporte prioritário");
            break;
        case "vip":
            alert("Benefícios do Plano VIP:\n- Acesso total e ilimitado\n- Mentoria individual semanal\n- Acesso antecipado a novos conteúdos");
            break;
        default:
            alert("Plano não reconhecido. Escolha entre Básico, Pro ou VIP.");
            break;
    }
}