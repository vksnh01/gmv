import React from "react";
import { Container,Card } from "reactstrap";
import "../NaviComponent/Navbar.css"
// import {CarouselItem,Carousel,CarouselCaption,CarouselIndicators,CarouselControl} from 'reactstrap'
const Home = () => {
  return (
    <>
<Container>
<Card className="d-flex mt-2 mb-2" style={{flexDirection:"row",backgroundColor:'beige'}}>
  <div className="text-center d-flex" style={{flexDirection:"row"}}>
<img src="./IMG/gmvlogo1.png" class="img-thumbnail" alt="logo" style={{width:"7rem"}} />
<div class="d-flex" style={{flexDirection:"column",alignItems:"flex-start"}}>
<h1 className="text-primary heading" >GOCHAR MAHAVIDHYALYA</h1>
<p className="text-primary heading">A Centre of Excellence NAAC Accredited grade “B”</p>
</div>
</div>
</Card>
</Container>

      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="./IMG/gmvgate.jpg"
              className="d-block  my-auto mx-auto mt-2"
              style={{ height: "30%", width: "60%", borderRadius: "4px" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./IMG/gmvf.jpeg"
              className="d-block my-auto mx-auto mt-2"
              style={{ borderRadius: "4px", width: "90%" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="./IMG/imag1.jpg"
              className="d-block my-auto mx-auto mt-2"
              style={{ borderRadius: "4px", height: "15%", width: "55%" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon "
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="container card">
        <div className="text-primary">
          <h1>Home</h1>
        </div>
        <div>
          <p>
            <strong><i>Gochar Mahavidyalaya – A centre of Excellence</i></strong>
          </p>
          <p>
            <strong>
              One of the oldest college started teaching in Saharanpur district
              of Western Utter Pradesh to cater the needs of society. Over a
              period of time it attained the centre of Excellence in teaching of
              Agriculture.
            </strong>
          </p>
          <p>
            In early fifties there were no colleges to teach agriculture in
            Saharanpur district of western Uttar Pradesh. The most people of
            Western Uttar Pradesh were socio economically backward due to poor
            higher educational status. However, some of the rich people were
            used to go far off places to obtain their higher education.
            Chaudhary Multan Singh, an eminent Socialist & Educationalist
            started Gurjar Degree College in Rampur Maniharan district
            Saharanpur (UP) in 1959 with an objective to provide higher
            education in Agriculture and Science. The college has been
            affiliated to Chaudahry Charan Singh University, Meerut (UP). Later,
            during 1970s the name of college was changed as Gochar
            Mahavidyalaya. Though the college has been started to teach B.Sc.
            (Ag), presently apart from B.Sc. (Ag), the college is running
            courses viz., faculty of Arts, Science, Physical Education,
            Commerce, Management, Education, Home Science and BTC, etc. During
            1988 the college has been upgraded as Post Graduate College with the
            PG courses of teaching and research in M. Sc (Ag) Chemistry,
            Agriculture Botany and Horticulture.
          </p>
          <p>The following excellent infrastructural facilities are available to the students during the round clock.</p>
          <p>Further, many external funded projects were awarded from Department of Bio-Technology, Ministry of Science and Technology, Govt. of India, University Grants Commission, NABARD, etc.</p>
       <p><strong>"Students have received more than 100 medals in various competitions from many universities."</strong></p>
        <h3 className="text-primary">Vision: </h3>
        <p>Gochar Mahavidyalaya will lead the society of the area towards their educational, agricultural ,cultural and scientific development</p>
        <h3 className="text-primary"> Mission: </h3>
          <div>
              <p>Gochar  Mahavidyalaya Rampur Maniharan enshrines in its mission in future:</p>
              <ul style={{listStyle:"auto"}}>
                <li> Making effort to provide world class infrastructure to its faculty and students.</li>
                <li>Moving forward for all-round personality development of the students by enhancing their personality through extracurricular activities, games and sports.
                    Agricultural, educational and cultural development of the society residing in the area.
                </li>
                <li>Educating people of the area to create awareness in them of eco system and environment, conservation of non renewable resources.</li>
                <li>Facilitating sustainable and advanced agriculture and animal husbandry, linking lab work of agriculture and animal husbandry to actual farming and dairying.</li>
                <li>Extending service to farmers and rural labor to avail benefits of latest researches and arrivals.</li>
                <li>Narrowing the gap between the farming community and global opportunity of cultivation, processing and marketing.</li>
                <li>Evolving promoting public private partnership for creating self employment and changing youth energy in positive and creative direction.</li>
              </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
