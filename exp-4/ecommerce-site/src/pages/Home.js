import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img className="d-block w-100 carousel-img" src="https://th.bing.com/th/id/R.71571c5fc2daeb2000a08ff915fde3ec?rik=pSIoJxMF7ZYQzQ&riu=http%3a%2f%2fblog.olx.com.pk%2fwp-content%2fuploads%2f2022%2f02%2fMobile-phones-1.jpg&ehk=36rPpDpeO1yHvOLkDqXceCUSP9DKqcP5gNdz7%2fRplk4%3d&risl=&pid=ImgRaw&r=0" alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carousel-img" src="https://dm0qx8t0i9gc9.cloudfront.net/watermarks/image/rDtN98Qoishumwih/graphicstock-creative-infographic-template-layout-with-smartphone-presentation-showing-various-mobile-application-and-features_rJ7SHYc6l_SB_PM.jpg" alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block w-100 carousel-img" src="https://media.gettyimages.com/id/623274020/vector/dynamic-user-interface.jpg?s=1024x1024&w=gi&k=20&c=gjXKjjk_lIjdPt7XHIi9SLA1URkdvVzBqgMeXSFbUPo=" alt="Third slide" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

export default Home;
