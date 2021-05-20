import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import NavbarPage from '../NavigationBar/NavigationBar';
import FooterPage from '../Footer/Footer';
import PetCard from '../PetCard/PetCard';
import './AdoptCat.css';
const AdoptCat = () => {
    const [adoptCat, setAdoptCat] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/adoptcat')
        .then(response => response.json())
        .then(data => {
            setAdoptCat(data);
        })
        .catch(err => console.log(err))
    },[])

    return(
        <div className = "adopt">
        <Container fluid={true} className= "p-0">
                <Row noGutters >
                    <Col className="homepagenav" >
                        <NavbarPage />
                    </Col>
                </Row>

                <Row>
                    <Col className = "mt-5" sm="3" md={{span:6,offset:1}}>
                        <h1>Îngrijirea generală a pisicilor</h1>
                        <br>
                        </br>
                        <p className = "fs-2">Ați adăugat recent un prieten felin în familia dvs.? Felicitări! Știm că vei fi încântat să ai noua ta pisică acasă. 
                        Dacă vă gândiți să adoptați o pisică, vă rugăm să vizitați adăpostul local. 
                        </p>
                        <p className = "fs-2">
                        Vă încurajăm să navigați în directorul nostru de pisici adoptabile din zona dvs. sau să utilizați căutătorul nostru de adăpost pentru a începe căutarea.
                        </p>
                        <p className = "fs-2">

                        Citiți mai departe pentru sfaturi utile pentru noii părinți de pisică și pentru cei care doresc să își perfecționeze abilitățile de îngrijire a animalelor de companie.</p>
                        <img src = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" />
                        <h2> Hrănirea</h2>
                        <ul className = "fs-2">
                        Vă recomandăm să cumpărați mâncare de pisică sau pisică de înaltă calitate, de marcă. Medicul veterinar va putea să evalueze noua pisică sau pisoi și să stabilească cea mai bună dietă. Factori precum vârsta, nivelul de activitate și sănătatea fac diferența în ceea ce și cât ar trebui să mănânce o pisică.

                       <li>Pisicile necesită taurină, un aminoacid esențial, pentru sănătatea inimii și a ochilor. Mâncarea pe care o alegeți ar trebui să fie echilibrată pentru stadiul de viață al pisicii sau pisoiului dumneavoastră. Alimentele echilibrate corespunzător vor conține taurină.</li> 
                       <li>Va trebui să oferiți apă curată și curată în orice moment și să spălați și să umpleți zilnic vasele de apă ale pisicii.</li>
                        <li>Tratamentele nu trebuie să depășească 5-10% din dietă.</li>
                        <li>Mulți oameni hrănesc hrană pentru bebeluși unei pisici sau pisoi care refuză hrana sau nu se simte bine Vă rugăm să citiți cu atenție etichetele: Dacă hrana pentru copii conține ceapă sau usturoi praf, animalul dvs. de companie ar putea fi otrăvit.</li>
                       <li>Luați animalul de companie la medicul veterinar dacă semnele de anorexie, diaree, vărsături sau letargie continuă mai mult de două zile.</li>
                        <li>Vă rugăm să vizitați pagina People Foods pentru a evita hrănirea animalelor dvs. de companie pentru o listă de articole interzise, ​​precum și pagina noastră Sfaturi nutriționale pentru pisici pentru mai multe informații.</li>
                        </ul>
                        <img src = "http://www.lifeasapet.com/wp-content/uploads/2009/05/Cat-Grooming.jpg" />
                        <h2> Tunsul </h2>
                        <p className = "fs-2">
                        Majoritatea pisicilor rămân relativ curate și rareori au nevoie de baie, dar ar trebui să vă periați sau să vă pieptănați pisica în mod regulat. Periajul frecvent ajută la menținerea curată a hainei pisicii, reduce cantitatea de vărsare și reduce incidența bilelor de păr. Vă rugăm să vizitați pagina Sfaturi pentru îngrijirea pisicilor pentru mai multe informații.
                        </p>
                        <h2> Locuința </h2>
                        <p className = "fs-2">
                        Animalul tău de companie ar trebui să aibă propriul loc curat și uscat în casa ta pentru a dormi și a se odihni. Căptușește patul pisicii tale cu o pătură sau un prosop moale și cald. Asigurați-vă că spălați lenjeria de pat des. Vă rugăm să vă păstrați pisica în interior. Pisicile în aer liber nu trăiesc atât timp cât pisicile din interior. Pisicile în aer liber sunt expuse riscului de traume cauzate de mașini sau de lupte cu alte pisici, ratoni și câini care călătoresc liber. Se știe că coioții mănâncă pisici. Pisicile în aer liber sunt mai susceptibile de a deveni infestate cu purici sau căpușe, precum și de a contracta boli infecțioase 
                        </p>
                        <h2>Identificare</h2>
                        <p className = "fs-2">
                        Dacă este permis în aer liber, pisica dvs. trebuie să poarte un guler de siguranță și o etichetă de identificare. Un guler de siguranță cu un panou elastic îi va permite pisicii să se desprindă dacă gulerul se prinde de ceva. Și pentru pisicile de interior și de exterior, o etichetă de identificare sau un microcip implantat vă pot ajuta să vă asigurați că pisica dvs. este returnată dacă se pierde.

                        </p>
                        <h2>Litiera</h2>
                        <p className = "fs-2">
                        Toate pisicile de interior au nevoie de o cutie de gunoi, care ar trebui plasată într-o locație liniștită și accesibilă. Într-o casă pe mai multe niveluri, se recomandă o cutie pe etaj. Evitați să mutați cutia, cu excepția cazului în care este absolut necesar, dar dacă trebuie să faceți acest lucru, mutați cutia la doar câțiva centimetri pe zi. Rețineți că pisicile nu vor folosi o cutie de gunoi dezordonată, mirositoare, așa că scoateți deșeurile solide din cutie cel puțin o dată pe zi. Aruncați totul, spălați cu un detergent ușor și umpleți cel puțin o dată pe săptămână; puteți face acest lucru mai rar dacă utilizați așternuturi aglomerate. Nu utilizați amoniac, deodorante sau mirosuri, în special lămâie, atunci când curățați litiera. Dacă pisica dvs. nu va folosi o cutie de gunoi, vă rugăm să consultați medicul veterinar. Uneori, refuzul de a folosi o cutie de gunoi se bazează pe o afecțiune medicală care necesită tratament. Pentru mai multe informații, vă rugăm să vizitați pagina Probleme la cutia de gunoi.

                        </p>
                        <img src = "https://ak.picdn.net/shutterstock/videos/2887813/thumb/2.jpg" />
                        <h2> Vaccinări </h2>
                        <p className = "fs-2">
                        Medicul veterinar vă va face recomandări în funcție de vârsta și sănătatea pisicii dvs. Vă rugăm să vizitați pagina noastră de vaccinări pentru animale de companie pentru a afla mai multe.
                        </p>
                        <h2>Lista nevoilor unei pisici</h2>
                        <ul className = "fs-2">
                        <li>Mâncare pentru pisici de marcă premium</li>
                        <li> Fel de mancare</li>
                        <li>Vas de apă</li>
                        <li>Jucării interactive</li>
                        <li>Perie</li>
                        <li>Pieptene</li>
                        <li> Guler de pisică de siguranță cu etichetă de identificare</li>
                        <li>Stâlp de zgâriere sau tampon de zgâriere</li>
                        <li>Cutie de gunoi și așternut</li>
                        <li>Purtător de pisici</li>
                        <li>Pat sau cutie pentru pisici cu pătură caldă sau prosop</li>
                        </ul>
                    </Col>
                    <Col className = "mt-5" md = {{offset:1}}>
                        <h2>Pisici disponibile spre adoptie</h2>
                        <Row>
                            <Col sm = "8" md = "8">
                                {   
                                    adoptCat.map(data => {
                                        return(
                                            <div>
                                            {data?
                                            <div className = "mt-5 mb-5">
                                            <PetCard Pet = {data} />
                                            </div>
                                            :
                                            <>
                                            </>
                                            }
                                            </div>
                                        );
                                    })
                                }
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className ="mt-auto">
                    <Col className ="mt-auto">
                         <FooterPage />
                    </Col>
                </Row>
        </Container>
        </div>
    );
};

export default AdoptCat;