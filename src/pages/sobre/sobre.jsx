import "./sobre.css"
import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer"
import { transformidadeData } from "../../utils/constants"
import { indicadoresData } from "../../utils/constants"
import Image1 from "../../assets/image8.png"

export const Sobre = () => {


    return (
        <div className="container flex">
            <Header />

            <div className="content">
                <div className="emphasisContent">
                    <div className="emphasisImg">
                        <img src={Image1} />
                    </div>
                    <div className="emphasisDetails">
                        <h3>O que é eMergia?</h3>
                        <p>O termo eMergia, com “M” maiúsculo para diferenciá-lo de “energia”, foi desenvolvido por Howard T. Odum e refere-se à energia previamente utilizada, direta ou indiretamente, para a geração de um produto ou serviço. <br /><br />
                            Trata-se de uma abordagem sistêmica de contabilização energética, na qual todos os recursos naturais e processos necessários à obtenção de determinado bem ou função são convertidos em uma unidade comum: o joule solar equivalente (seJ). <br /> <br />
                            Dessa forma, a emergia permite rastrear toda a cadeia de transformações energéticas, desde a energia solar absorvida pelas plantas até os processos industriais modernos, oferecendo um indicador acumulativo do custo energético ambiental de qualquer sistema. Conforme Odum (1996), emergia é “a energia de um tipo necessária — direta e indiretamente — para fazer um serviço ou produto e que foi transformada em outra forma de energia”. <br /><br />
                            A emergia distingue-se de outras abordagens ambientais por considerar não apenas o consumo direto de energia (como eletricidade), mas também a energia incorporada nos materiais, no trabalho humano, na tecnologia e até nos serviços ecossistêmicos. Essa análise global é essencial para mensurar a sustentabilidade de sistemas produtivos, especialmente quando se deseja comparar o uso de recursos renováveis e não renováveis em diferentes alternativas tecnológicas ou organizacionais. <br /><br />
                            Segundo a metodologia emergética, os sistemas com maior uso de recursos naturais renováveis e menor dependência de recursos industriais tendem a apresentar melhores indicadores de sustentabilidade, como o Índice de Sustentabilidade Emergética (ESI). A aplicação da emergia tem se expandido em áreas como agricultura, urbanismo, planejamento energético e, mais recentemente, na avaliação de sistemas computacionais, incluindo data centers e infraestruturas de computação em nuvem. <br /><br />
                        </p>
                    </div>
                </div>

            </div>

            <div className="containerWithAlternativeColor">
                <div className="content">
                    <div className="alternativeInfo">
                        <h3>Transformidade</h3>
                        <p>
                            A transformidade é a razão entre a emergia total usada para produzir algo e a quantidade de energia (ou outra medida, como massa por exemplo) que esse algo contém.
                            <br />
                            Imagine que para produzir 1 joule de eletricidade foram necessários 200.000 seJ.
                            <br />
                            Essa alta transformidade mostra que muita emergia foi necessária para gerar pouca eletricidade, ou seja, é um recurso “caro” do ponto de vista ecológico.
                        </p>

                        <div className="tableWrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Recurso</th>
                                        <th>Unidade</th>
                                        <th>Transformidade (seJ/unidade)</th>
                                        <th>Fonte</th>
                                        <th>Observações</th>
                                        <th>Ano</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {transformidadeData.map((item, idx) => {

                                        return (
                                            <tr key={idx}>
                                                <td>{item.recurso}</td>
                                                <td>{item.unidade}</td>
                                                <td>{item.transformidade}</td>
                                                <td>{item.fonte}</td>
                                                <td>{item.obs}</td>
                                                <td>{item.ano}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="moreInfo">
                    <h3>Aplicações em sistemas</h3>

                    <p className="defaultMargin">O estudo de Di Salvo (2022) propõe a avaliação emergética de sistemas computacionais considerando hardware, energia de operação e ciclo de vida dos dispositivos. A maior parte da eMergia é atribuída à produção de hardware, com destaque para semicondutores. A operação tem impacto menor, e o descarte de eletrônicos representa carga ambiental relevante.</p>
                    <h4 className="defaultMargin">On-Premises</h4>
                    <p className="defaultMargin">Em infraestruturas locais, há alta transformidade e EIR, baixo ESI e significativa pressão ambiental, especialmente devido à produção e descarte de equipamentos.</p>
                    <h4 className="defaultMargin">Nuvem</h4>
                    <p className="defaultMargin">Na computação em nuvem, práticas como uso de energia renovável, virtualização e reaproveitamento de hardware tornam os indicadores emergéticos mais sustentáveis, com menor ELR e maior ESI.</p>

                </div>
            </div>

            <div className="containerWithAlternativeColor">
                <div className="content">
                    <div className="alternativeInfo">
                        <h3>Indicadores Emergéticos</h3>
                        <p>
                            Eles servem para avaliar a sustentabilidade de qualquer sistema, levando em conta todos os recursos usados, sejam eles naturais (renováveis e não renováveis) ou econômicos (comprados com dinheiro).
                        </p>

                        <ul>
                            <li>R: Recursos Renováveis</li>
                            <li>N: Recursos Não Renováveis</li>
                            <li>F: Insumos econômicos (como energia e materiais comprados)</li>
                        </ul>

                        <div className="tableWrapper">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Indicador</th>
                                        <th>Descrição</th>
                                        <th>Equação</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {indicadoresData.map((item, idx) => {

                                        return (
                                            <tr key={idx}>
                                                <td>{item.indicador}</td>
                                                <td>{item.descricao}</td>
                                                <td>{item.equacao}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className="contentFooter">

                <Footer />
            </div>
        </div>
    )
}