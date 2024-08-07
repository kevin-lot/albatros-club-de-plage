import Image from "next/image";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleDown, faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { faClock as faClockRegular } from "@fortawesome/free-regular-svg-icons";

import Parallax from "@/components/Parallax/Parallax";
import Table from "@/components/Table/Table";
import backgroundImage from "@/components/SwimmingSchool/swimming-school-background.jpg";
import swimmingPool from "@/components/SwimmingSchool/swimming-pool.jpg";
import { swimmingSchoolOpenDays, swimmingSchoolPrices } from "@/components/SwimmingSchool/swimmingSchoolData";

export default function SwimmingSchool() {
    return (
        <section className="SwimmingSchool">
            <Parallax backgroundImage={backgroundImage}>
                Profitez de l&apos;été pour apprendre à nager avec l&apos;École de Natation
            </Parallax>
            <span id="SwimmingSchool" />
            <h1>École de Natation</h1>
            <Container>
                <Row>
                    <Col
                        lg="7"
                        md="7"
                        sm="12"
                        tag="article"
                        xl="7"
                        xs="12"
                    >
                        <div className="columns">
                            <p>
                                Dans une piscine chauffée et couverte, l&apos;Albatros propose des leçons{" "}
                                <strong>individualisées</strong> de natation. Les enfants sont deux maximum par cours.
                                Une méthode qui privilégie la familiarisation avec l&apos;eau et l&apos;apprentissage
                                des techniques de nage.
                                <br />
                                Les leçons de natations sont dispensés par un maître-nageur diplômé d&apos;état offrant
                                à vos enfants des progrès visibles et des résultats garantis.
                                <br />
                                Une séance dure 20 minutes, la durée idéale pour une concentration de qualité et un
                                engagement moteur optimal.
                                <br />
                                L&apos;École de Natation s&apos;appuie sur 3 niveaux d&apos;enseignement:
                                l&apos;initiation, l&apos;apprentissage et le perfectionnement.
                            </p>
                            <h2 className={"underline"}>Initiation</h2>
                            <p>
                                Cette première étape de l&apos;apprentissage consiste en une familiarisation de
                                l&apos;enfant avec l&apos;eau. Nous abordons les premières bases en fonction du vécu
                                aquatique: la respiration, le déplacement ventral et dorsal avec matériel ainsi que les
                                immersions. La priorité est de donner confiance à l&apos;enfant afin qu&apos;il
                                développe son aisance aquatique.
                            </p>
                            <h2 className={"underline"}>Apprentissage</h2>
                            <p>
                                Quand l&apos;enfant a acquis la confiance nécessaire, nous transmettons les premiers
                                élèments techniques de nage. Dos crawlé, brasse et crawl sont privilégiés. Avec du
                                support matériel, l&apos;enfant apprend et assimile les mouvements propices. Nous
                                cherchons à lui donner la technique adaptée à son âge.
                            </p>
                            <h2>Perfectionnement</h2>
                            <p>
                                À ce stade là, l&apos;enfant est autonome dans l&apos;eau et nous approfondissons ses
                                connaissances techniques dans les 4 nages: dos crawlé, brasse, crawl et papillon. Il
                                peut s&apos;agir d&apos;une amélioration technique de la nage (mouvements et
                                respiration) mais aussi de la découverte d&apos;une nouvelle nage (papillon par
                                exemple).
                            </p>
                        </div>
                    </Col>
                    <Col
                        lg="5"
                        md="5"
                        sm="12"
                        tag="article"
                        xl="5"
                        xs="12"
                    >
                        <p>
                            <Image
                                alt="swimming pool"
                                className="img-fluid img-thumbnail"
                                src={swimmingPool}
                            />
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col
                        lg="7"
                        md="7"
                        sm="12"
                        tag="article"
                        xl="7"
                        xs="12"
                    >
                        <div className="page-header pb">
                            <h2 className={"underline"}>Tarifs séance</h2>
                        </div>
                        <Table data={swimmingSchoolPrices} />
                    </Col>
                    <Col
                        lg="5"
                        md="5"
                        sm="12"
                        tag="article"
                        xl="5"
                        xs="12"
                    >
                        <div className="page-header">
                            <h2>
                                <span className={"underline"}>Horaires</span>
                                &nbsp;
                                <FontAwesomeIcon
                                    icon={faClockRegular}
                                    size={"xs"}
                                />
                            </h2>
                            <p className={"small text-muted"}>
                                <FontAwesomeIcon icon={faCircleExclamation} />
                                &nbsp;Réservation préalable recommandée
                            </p>
                        </div>
                        <Table data={swimmingSchoolOpenDays} />
                    </Col>
                </Row>
            </Container>
            <footer>
                <a
                    href="#Fitness"
                    target="_self"
                >
                    <FontAwesomeIcon icon={faArrowCircleDown} />
                    <span className="sr-only">Remise en Forme</span>
                </a>
            </footer>
        </section>
    );
}
