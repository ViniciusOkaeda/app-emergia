

export const transformidadeData = [
        {
            recurso: "Eletricidade (média mundial)",
            unidade: "J",
            transformidade: "5,87E+04",
            fonte: "Brown & Ulgiati (2004)",
            obs: "Energia elétrica média global",
            ano: "2004",
        },
        {
            recurso: "Aço",
            unidade: "g",
            transformidade: "3,16E+09",
            fonte: "Bargigli & Ulgiati (2003)",
            obs: "Produção genérica de aço",
            ano: "1998",
        },
        {
            recurso: "Plástico",
            unidade: "g",
            transformidade: "9,68E+09",
            fonte: "Buranakarn (1998)",
            obs: "Plásticos diversos",
            ano: "2003",
        },
        {
            recurso: "Computador (estimado)",
            unidade: "g",
            transformidade: "8,90E+10",
            fonte: "Di Salvo (2015)",
            obs: "Valor estimado com base em massa e mercado",
            ano: "2015",
        },
        {
            recurso: "Mão de obra (Brasil, 2008)",
            unidade: "USD",
            transformidade: "3,40E+12",
            fonte: "NEAD/IBGE",
            obs: "Razão emergia/PIB do Brasil em 2008",
            ano: "2008",
        },
    ]


export const indicadoresData = [
        {
            indicador: "UEV (Odum, 1996)",
            descricao: "Valor unitário em emergia (Unit Emergy Value): razão entre a emergia total do sistema (R+N+F) e a produção útil (Ep).",
            equacao: "UEV = (R + N + F) / Ep",
        },
        {
            indicador: "EYR (Odum, 1996)",
            descricao: "Razão de rendimento em emergia (Emergy Yield Ratio): razão entre a emergia total e os recursos econômicos (F). Mede o uso de recursos locais.",
            equacao: "EYR = (R + N + F) / F",
        },
        {
            indicador: "ELR (Odum, 1996)",
            descricao: "Razão de carga ambiental (Environmental Loading Ratio): razão entre os recursos não renováveis e econômicos em relação aos renováveis.",
            equacao: "ELR = (N + F) / R",
        },
        {
            indicador: "EIR (Odum, 1996)",
            descricao: "Razão de investimento em emergia (Emergy Investment Ratio): compara os insumos econômicos com os recursos naturais.",
            equacao: "EIR = F / (R + N)",
        },
        {
            indicador: "%R (Odum, 1996)",
            descricao: "Porcentagem de renovabilidade: quanto dos recursos utilizados provêm de fontes renováveis.",
            equacao: "%R = R / (R + N + F)",
        },
        {
            indicador: "ESI (Brown e Ulgiati, 1997)",
            descricao: "Índice de sustentabilidade ambiental (Environmental Sustainability Index): razão entre EYR e ELR. Mede a sustentabilidade de longo prazo.",
            equacao: "ESI = EYR / ELR",
        },
    ]  