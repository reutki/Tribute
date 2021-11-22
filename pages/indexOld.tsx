/*import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
return (
<>
  <div id="main" className={styles.container}>

    <Head>
      <title>Tribute Home</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <div className="page1">
      <nav>
        <h1><a id="tribute-link" target="_blank" href="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"
            rel="noreferrer">TRIBUTE</a></h1>
        <ul id="navbar">
          <li><a id="about-link" href="#">ABOUT</a></li>
          <li> <a id="info-link" href="#">INFO</a></li>
        </ul>
      </nav>

      <div id="subcontainer">
        <div id="img-div">
          <img id="image" src="/Main image.png" alt="People standing on the field" />
          <figcaption id="img-caption">Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to
            increase wheat yields - part of his life-long war on hunger.</figcaption>
        </div>
        <div id="title">
          <p id="name1">Dr. Norman Bovrlaug</p>
          <p id="tribute-info">The man who saved a billion lives</p>
          <p id="year">1914-2009</p>
        </div>

      </div>
      <div id="subcontainer_mobile">
        
        <div id="title">
          <p id="name1">Dr. Norman Bovrlaug</p>
          <p id="tribute-info">The man who saved a billion lives</p>
          <p id="year">1914-2009</p>
          <div id="img-div">
          <img id="image" src="/Main image.png" alt="People standing on the field" />
          <figcaption id="img-caption">Dr. Norman Borlaug, third from the left, trains biologists in Mexico on how to
            increase wheat yields - part of his life-long war on hunger.</figcaption>
        </div>
        </div>

      </div>
      <img id="arrowdown" src="/Arrow 1.png" alt="arrow down" />
    </div>

    <div className="page2">
      <div id="container2">
      <h1 id="year3_mobile">1914</h1>
        <div id="info1">
        
         <div className="dates2">

            <p id="date1"> March 25, 1914 Born in Cresco, Iowa</p>
            <p id="date-description1">Norman Borlaug was born to Henry Oliver (1889–1971) and Clara (Vaala) Borlaug (1888–1972) on his grandparents' farm in Saude in 1914, the first of four children. His three sisters were Palma Lillian (Behrens; 1916–2004), Charlotte (Culbert; b. 1919) and Helen (b. 1921).</p>
            </div>
          <img id="family_foto" src="/FOTO WITH THE FAMILY.png" alt="u.s. firest service logo" />
        </div>
        <div id="years-container">
          <h1 id="year3">1914</h1>
          <h1 id="year4">1933</h1>
        </div>
        <h1 id="year4_mobile">1933</h1>
        <div id="info2">
          <img id="photo_university" src="/FOTO UNIVERSITY.png" alt="university"/>
          <div className="dates3"> 
            <p id="date2"> 1933 - Norman Bourlaug Admission to the Minnesota University </p>
            <p id="date-description2">Norman Bourlaug finishes university and takes a job in the US Forestry Service</p>
          </div>
        </div>
      </div>
      <div id="arrows">
        <img src="/Arrow 1.png" alt="arrow down" />
        <img id="arrow2" src="Arrow 2.png" alt="arrow up" />
      </div>
    </div>



    <div className="page3">
      <div id="container3">
        <h1 id="year5_mobile">1935</h1>
    <div id="info3">
      
       
        
          <div id="dates4">

            <p id="date3"> 1935 Civilian Conservation Corps</p>
            <p id="date-description3">Stop school Norman Bourlaug has to stop school and save up more money. Works in
              the Civilian Conservation Corps, helping starving Americans. "I saw how food changed them", he said."All
              of this left scars on me."</p>

          </div>

          <img id="forestservice_logo" src="/foto natonal forest.png" alt="u.s. firest service logo" />
        </div>
        <div id="years-container">
          <h1 id="year5">1935</h1>
          <h1 id="year6">1937</h1>
        </div>
        <h1 id="year6_mobile">1937</h1>
        <div id="info4">
        
          <img id="forestwork" src="/FOTO WORK IN THE FOREST.png" alt="university" />
          <div id="dates5">
            <p id="date4"> 1937 US Forestry Service </p>
            <p id="date-description4">Norman Bourlaug finishes university and takes a job in the US Forestry Service</p>
          </div>
        </div>
      </div>
      <div id="arrows">
        <img src="/Arrow 1.png" alt="arrow down" />
        <img id="arrow2" src="Arrow 2.png" alt="arrow up" />
      </div>
    </div>




    <div className="page4">
      <div id="container4">
        <h1 id="year7_mobile">1938</h1>
        <div id="info5">
          <img id="foto_couple" src="/FOTO WITH WIFE.png" alt="couple photo" />
          <div id="dates6">

            <p id="date5"> Norman Bourlaug in Mexico head a new plant pathology program</p>
            <p id="date-description5">1944Norman Bourlaug rejects a 100% salary increase from Dupont, leaves behind his
              pregnant wife, and flies to
              Mexico to head a new plant pathology program.Over the next 16 years, his team breeds 6,000 different
              strains of disease resistent wheat - including
              different varieties for each major climate on Earth.
            </p>
          </div>
        </div>
        <div id="years-container4">
          <h1 id="year7">1938</h1>
          <h1 id="year8">1944</h1>
        </div>
        <h1 id="year8_mobile">1944</h1>

        <div id="info6">
          <div id="dates7">
            <p id="date6"> 1937 US Forestry Service </p>
            <p id="date-description6">Norman Bourlaug finishes university and takes a job in the US Forestry Service</p>
          </div>
          <img id="women" src="/foto more women.png" alt="women typing on typing machines" />
        </div>
      </div>
      <div id="arrows">
        <img src="/Arrow 1.png" alt="arrow down" />
        <img id="arrow2" src="Arrow 2.png" alt="arrow up" />
      </div>
    </div>





    <div className="page5">
      <div id="container5">
      <h1 id="year9_mobile">1962</h1>

        <div id="info7">
          <div id="dates8">

            <p id="date7"> Norman Bourlaug
              visits Delhi
            </p>
            <p id="date-description7">1962
              Norman Bourlaug
              Visits Delhi and brings his high-yielding strains of wheat to the Indian subcontinent in time to help
              mitigate mass starvation due to a rapidly expanding population
            </p>

          </div>

          <img id="dr_speaks" src="/speaks.png" alt="u.s. firest service logo" />
        </div>
        <div id="years-container5">
          <h1 id="year9">1962</h1>
          <h1 id="year10">2005</h1>
        </div>
        <h1 id="year10_mobile">2005</h1>

        <div id="info8">
          <img id="people_field" src="/N.B.with the peoples.png" alt="university" />
          <div id="dates9">
            <p id="date8">
              Norman Borlaug's 2005 speech</p>
            <p id="date-description8">In his 2005 speech, Norman Bourlaug stated that "we will have to double the
              world's food supply by 2050."
              He argues that genetically modified crops are the only way we can meet demand because we run out of arable
              land. He says genetically modified crops are not inherently dangerous because "we've been genetically
              modifying plants and animals for a long time. Long before we called it science, humans chose the best
              breeds."</p>
          </div>
        </div>
      </div>
      <div id="arrows">
        <img src="/Arrow 1.png" alt="arrow down" />
        <img id="arrow2" src="Arrow 2.png" alt="arrow up" />
      </div>
    </div>


    <div className="page6">

      <div id="container6">
        <div id="last_title">
          <h1> Norman Bourlaug
            dies</h1>
        </div>
        <p id="title_description">
          2009
          Norman Bourlaug dies at the age of 95.
        </p>
        <p id="year9">2009</p>
        <img id="last_picture" src="foto N.B. in the green plants.png" alt="photo of the doctor" />
        <div id="wikipedia">
          <p>More info on wikipedia</p>
        </div>

        <img id="arrow1" src="/Arrow 2.png" alt="arrow down" />
      </div>
      
    </div>

  </div>

  <Script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></Script>
</>
)
}

export default Home */