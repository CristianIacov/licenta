import React, { useState, useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import NavbarPage from '../NavigationBar/NavigationBar';
import FooterPage from '../Footer/Footer';
import '../AdoptCat/AdoptCat.css';
import PetCard from '../PetCard/PetCard';

const AdoptDog = () => {
    const [adoptDog, setAdoptDog] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/adoptdog')
        .then(response => response.json())
        .then(data => {
            setAdoptDog(data);
        })
        .catch(err => console.log(err))
    },[])

    return(
        <Container fluid={true} className= "p-0">
                <Row noGutters >
                    <Col className="homepagenav" >
                        <NavbarPage />
                    </Col>
                </Row>

                <Row>
                    <Col className = "mt-5" sm="3" md={{span:6,offset:1}}>
                        <h1>Îngrijirea generală a câinilor</h1>
                        <br>
                        </br>
                        <p className = "fs-2">Un câine poate fi un plus minunat pentru orice casă, dar indiferent dacă sunteți un părinte experimentat sau un adoptator pentru prima dată, este important să păstrați sănătatea și fericirea însoțitorului dvs. canin o prioritate. 
                        </p>
                        <p className = "fs-2">
                        Mai jos sunt câteva sfaturi utile pentru toți părinții câinilor.

Și amintiți-vă: dacă vă gândiți să aduceți acasă un câine nou, vă rugăm să faceți adoptarea prima opțiune. Vă încurajăm să navigați în directorul nostru de câini adoptabili din zona dvs. sau să vizitați pagina Găsiți un adăpost pentru a începe căutarea.
                        </p>
                        <img src = "https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" />
                        <h2> Hrănirea</h2>
                        <ul className = "fs-2">
                       <li>Puii de opt până la 12 săptămâni au nevoie de patru mese pe zi.</li> 
                       <li>Hrăniți puii de trei până la șase luni, trei mese pe zi.</li>
                        <li>Hrăniți puii de la șase luni la un an, două mese pe zi.</li>
                        <li>Când câinele dvs. ajunge la prima sa aniversare, de obicei este suficientă o masă pe zi.</li>
                       <li>Pentru unii câini, inclusiv canini mai mari sau cei predispuși la balonare, este mai bine să hrăniți două mese mai mici.</li>
                       <p className = "fs-2">
                       Mâncarea uscată de calitate superioară oferă o dietă bine echilibrată pentru câinii adulți și poate fi amestecată cu apă, bulion sau conserve. Câinele dvs. se poate bucura de brânză de vaci, ouă fierte sau fructe și legume, dar aceste adăugiri nu ar trebui să însumeze mai mult de zece la sută din aportul său zilnic de alimente.
Puii ar trebui să fie hrăniți cu o hrană pentru pui de înaltă calitate, de marcă (alimente pentru pui de rasă mare pentru rase mari). </p>
                        <p  className = "fs-2">
                            Vă rugăm să limitați „mâncarea oamenilor”, deoarece poate duce la dezechilibre de vitamine și minerale, probleme ale oaselor și dinților și poate provoca obiceiuri alimentare foarte pretențioase și obezitate. Apa curată și proaspătă trebuie să fie disponibilă în orice moment și asigurați-vă că spălați alimentele și vasele cu apă frecvent.
                        </p>
                        </ul>
                        <h2>Exercitiile</h2>
                        <p className = "fs-2">
                        Câinii au nevoie de mișcare pentru a arde calorii, pentru a-și stimula mintea și pentru a rămâne sănătoși. Nevoile individuale de exerciții fizice variază în funcție de rasă sau amestec de rase, sex, vârstă și nivel de sănătate. Exercițiile fizice tind, de asemenea, să ajute câinii să evite plictiseala, ceea ce poate duce la comportamente distructive. Distracția și jocurile supravegheate vor satisface multe dintre instinctele instinctuale ale animalului tău de a săpa, a turma, a mesteca, a recupera și a alerga.  
                        </p>
                        <img src = "https://media.istockphoto.com/photos/grooming-dog-pet-groomer-brushing-dogs-hair-with-comb-at-salon-picture-id1041885450?k=6&m=1041885450&s=612x612&w=0&h=vAVwc27zcMdZEgL3P5vmk2hg3mibChMfvTTXtRK1wjE=" />
                        <h2> Tunsul </h2>
                        <p className = "fs-2">
                        Ajutați-vă la păstrarea câinelui curat și reduceți vărsarea cu periajul frecvent. Verificați zilnic puricii și căpușele pe timp cald. Majoritatea câinilor nu trebuie să fie scăldați de mai multe ori pe an. Înainte de scăldat, pieptănați sau tăiați toate covorașele din haină. Clătiți cu grijă tot săpunul din strat, altfel murdăria se va lipi de reziduurile de săpun. Vă rugăm să vizitați pagina Sfaturi pentru îngrijirea câinilor pentru mai multe informații.
                        </p>
                        <h2> Locuința </h2>
                        <p className = "fs-2">
                        Animalul tău de companie ar trebui să aibă propriul loc curat și uscat în casa ta pentru a dormi și a se odihni. Căptușește patul pisicii tale cu o pătură sau un prosop moale și cald. Asigurați-vă că spălați lenjeria de pat des. Vă rugăm să vă păstrați pisica în interior. Pisicile în aer liber nu trăiesc atât timp cât pisicile din interior. Pisicile în aer liber sunt expuse riscului de traume cauzate de mașini sau de lupte cu alte pisici, ratoni și câini care călătoresc liber. Se știe că coioții mănâncă pisici. Pisicile în aer liber sunt mai susceptibile de a deveni infestate cu purici sau căpușe, precum și de a contracta boli infecțioase 
                        </p>
                        <h2>Identificare</h2>
                        <p className = "fs-2">
                        Urmați reglementările privind licențele din comunitatea dvs. Asigurați-vă că atașați licența la gulerul câinelui dvs. Acest lucru, împreună cu o etichetă de identificare și un microcip implantat sau un tatuaj, vă poate ajuta să vă întoarce câinele în cazul în care se pierde.

                        </p>
                        <img src = "https://media.istockphoto.com/photos/vet-with-dog-and-cat-puppy-and-kitten-at-doctor-picture-id1171733307?k=6&m=1171733307&s=612x612&w=0&h=PYNAOnrabj2VDp7QJAGKkdMZ4i7ZvbEhH0kTcasuw1Q=" />
                        <h2> Vaccinări </h2>
                        <p className = "fs-2">
                        Nu administrați niciodată câinelui medicamente care nu au fost prescrise de un medic veterinar. Dacă bănuiți că animalul dvs. a ingerat o substanță otrăvitoare, sunați medicul veterinar sau Centrul de control al otrăvurilor pentru animale ASPCA pentru informații despre otrăvirea animalelor.
                        </p>
                        <h2>Lista nevoilor unui câine</h2>
                        <ul className = "fs-2">
                        <li>Mâncare și delicatese pentru câini de calitate superioară</li>
                        <li> Fel de mancare</li>
                        <li>Vas de apă</li>
                        <li>Jucării interactive</li>
                        <li>Perie</li>
                        <li>Pieptene</li>
                        <li> Guler cu licență și etichetă ID</li>
                        <li>Purtător (pentru câini mai mici)</li>
                        <li>Pat sau cutie pentru câini cu pătură sau prosop cald</li>
                        <li>Periuță de dinți pentru câini</li>
                        </ul>
                    </Col>
                    <Col className = "mt-5" md = {{offset:1}}>
                        <h2>Câini disponibili spre adoptie</h2>
                        <Row>
                            <Col sm = "8" md = "8">
                                {   
                                    adoptDog.map(data => {
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
    );
};

export default AdoptDog;