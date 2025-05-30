import { Header } from "../../components/header/header"
import { Footer } from "../../components/footer/footer"
import { Slider } from "../../components/slider/slider"
import "./home.css"
import Image1 from "../../assets/image1.png"
import { transformidadeData } from "../../utils/constants"
import { indicadoresData } from "../../utils/constants"

export const Home = () => {




    return (
        <div className="container flex">
            <Header />
            <div className="contentSlider">

                <Slider />
            </div>

            <div className="content">
                <div className="introContent">
                    <div className="introImg">
                        <img src={Image1} />
                    </div>
                    <div className="introDetails">
                        <h3>eMergia: O início</h3>
                        <p>A busca por modelos sustentáveis impõe o desafio de medir não apenas os custos econômicos, mas também os impactos ecológicos e energéticos dos sistemas modernos. O conceito de eMergia, proposto por Howard T. Odum, considera toda a energia ambiental (especialmente solar) necessária para produzir bens, serviços ou manter sistemas. Essa abordagem é essencial para avaliar a sustentabilidade de infraestruturas computacionais e demais sistemas tecnológicos.</p>
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