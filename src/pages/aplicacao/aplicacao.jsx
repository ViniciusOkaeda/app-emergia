import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer"
import Image1 from "../../assets/unip2.jpg"

export const Aplicacao = () => {


    return (
        <div className="container flex">
            <Header />

            <div className="content">
                <div className="emphasisContent">
                    <div className="emphasisImg">
                        <img src={Image1} />
                    </div>
                    <div className="emphasisDetails">
                        <h3>APLICAÇÃO DO CONCEITO DE EMERGIA NO CAMPUS UNIP PAULISTA</h3>
                        <p>A metodologia da emergia pode ser uma poderosa ferramenta para avaliar o desempenho ambiental e energético do campus, ajudando a identificar oportunidades de otimização no uso dos recursos naturais, energéticos e materiais. Ao contabilizar toda a energia acumulada (direta e indireta) necessária para manter as atividades da universidade, torna-se possível tomar decisões mais sustentáveis, eficazes e alinhadas com os princípios da ecoeficiência.
                        </p>

                        <h4>Eficiência energética e gestão de resíduos</h4>
                        <p>
                            A aplicação do conceito de emergia permite quantificar toda a energia solar equivalente investida nos principais sistemas e estruturas do campus, como a iluminação (natural e artificial), climatização, laboratórios, equipamentos computacionais, bem como nos sistemas hidráulicos e elétricos. A partir dessa quantificação, a gestão do campus pode identificar os pontos de maior custo emergético e implementar soluções específicas para cada setor. <br /><br />
                            Por exemplo, no caso da iluminação, é possível promover a substituição sistemática de lâmpadas fluorescentes por lâmpadas LED (onde ainda foi feita esta alteração), que apresentam maior eficiência energética e vida útil mais longa. A instalação de sensores de presença em salas e corredores pode evitar o uso desnecessário de energia elétrica.<br /><br />
                            Na climatização, a modernização de aparelhos de ar-condicionado por modelos inverter é recomendada. Um ar-condicionado inverter possui tecnologia que regula o compressor de forma contínua, evitando os picos de consumo típicos dos modelos convencionais. Ele ajusta sua potência de maneira gradual conforme a necessidade, consumindo menos energia e proporcionando maior conforto térmico.<br /><br />
                            Outras soluções incluem o isolamento térmico em janelas e paredes, e a integração de sistemas de energia solar fotovoltaica para abastecer setores específicos como bibliotecas e laboratórios.<br /><br />
                            No setor de tecnologia, pode-se implementar um sistema automatizado para desligamento dos computadores ao final do expediente noturno, evitando que máquinas ociosas permaneçam ligadas durante a madrugada. Isso pode ser realizado por meio de scripts em PowerShell combinados com GPOs (Group Policy Objects) via Active Directory, ou com soluções como Microsoft Intune para ambientes híbridos e modernos. Esses mecanismos garantem que, após determinado horário (por exemplo, 23h), todos os computadores sem atividade sejam desligados de forma segura.<br /><br />
                            Ainda no campo da sustentabilidade hídrica, o uso de sistemas de reaproveitamento de água da chuva para limpeza e irrigação reduz a dependência de água potável para fins não essenciais.<br /><br />
                            Na gestão de resíduos, a emergia permite calcular o custo energético oculto de insumos descartados no campus. A instituição pode, com base nesse diagnóstico, otimizar seu plano de gerenciamento de resíduos, ampliar o uso de coletores seletivos, orientar os  alunos e funcionários do campus sobre o uso, implementar programas de compostagem para resíduos orgânicos gerados em cantinas e estimular o uso racional de papel, inclusive com substituição gradual por documentos digitais.
                        </p>
                        <h4>Infraestrutura digital e computação em nuvem</h4>
                        <p>
                            A infraestrutura de tecnologia da informação é um componente crítico no funcionamento de uma instituição de ensino superior. No entanto, nem todos os elementos da rede tecnológica são passíveis de migração para ambientes remotos. Computadores desktop, switches, access points, firewalls e sistemas de controle de acesso são essenciais para a operação do campus e devem continuar sendo gerenciados localmente. <br /><br />
                            Por outro lado, servidores dedicados a sistemas acadêmicos, bancos de dados, ambientes virtuais de aprendizagem (AVA), entre outros, podem ser migrados para a computação em nuvem. Isso resulta em menor consumo energético local, menor necessidade de refrigeração, e melhor escalabilidade. Conforme DI SALVO (2022), datacenters em nuvem apresentam vantagem emergética ao centralizar recursos em ambientes otimizados, muitas vezes abastecidos por fontes de energia renováveis. Além disso, a nuvem permite elasticidade no uso de recursos — ou seja, servidores podem ser ativados ou desligados sob demanda, o que evita o consumo contínuo de energia por servidores ociosos.

                        </p>
                        <h4>Digitalização de processos e redução de custos operacionais</h4>
                        <p>
                            A digitalização de processos institucionais impacta diretamente a emergia acumulada nas operações da universidade. Ao substituir tarefas físicas por digitais — como assinaturas, prontuários, requerimentos e certificados — reduz-se o consumo de papel, energia, deslocamentos internos e tempo de atendimento. Isso se traduz em menor uso de recursos físicos e humanos por aluno atendido. <br /><br />
                            Além disso, essa transformação influencia diretamente na redução dos custos operacionais com funcionários, especialmente nos setores administrativos. Como o “produto” de uma universidade é o formando, todos os insumos envolvidos em sua formação (tempo de docentes, coordenação, secretaria, limpeza, vigilância, etc.) entram no cálculo da emergia. Se a instituição consegue reduzir esses custos operacionais sem perda na qualidade — por meio de automação, autoatendimento digital, workflows otimizados e integração de sistemas — então há uma diminuição da emergia por formando. Isso representa um avanço significativo na ecoeficiência do processo educacional.
                        </p>
                        <h4>Otimização dos horários de aula e impacto do transporte</h4>
                        <p>
                            Outro aspecto crítico que afeta a emergia total de um campus universitário é o deslocamento dos alunos, professores e funcionários. Cada viagem até a instituição representa um consumo de energia (direta ou indireta), com impactos em emissões, uso de combustível, manutenção de veículos, e tempo. <br /><br />
                            Na UNIP, os horários de aula variam: há turmas com aulas das 19h10 às 20h25, das 20h45 às 22h00, ou mesmo dias sem aulas presenciais. Quando um aluno tem aula apenas em meio período ou horários alternados durante a semana, o consumo de recursos com transporte é diluído de forma ineficiente — por exemplo, uma aula curta em quatro dias diferentes gera mais deslocamentos do que duas noites com carga horária completa.<br /><br />
                            Portanto, otimizar a distribuição das aulas presenciais é essencial. Concentrar atividades em menos dias por semana reduz significativamente o número de deslocamentos e, consequentemente, a emergia envolvida. Além disso, expandir o uso de aulas remotas ou híbridas — especialmente para disciplinas teóricas — contribui para que os alunos utilizem menos transporte e consumam menos recursos gerais do campus.<br /><br />
                            Essa abordagem também favorece os alunos que vêm de regiões distantes, evitando deslocamentos diários e promovendo maior inclusão sem sobrecarregar a infraestrutura física da universidade.

                        </p>
                    </div>
                </div>

            </div>

            <div className="contentFooter">

                <Footer />
            </div>
        </div>)
}