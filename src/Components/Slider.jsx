import React from 'react'

export default function Slider() {
    const style = {
        carousel: {
            width: '100%',
            height: '80vh',
        },
        img: {
            objectFit: 'cover',
            width: "60%",
            height: "70vh"
        }
    }
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" style = {style.carousel}>
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://source.unsplash.com/random/?vegitables" style = {style.img} className="d-block w-100" alt="genetared"/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/?food" className="d-block w-100" style = {style.img}  alt="gent"/>
    </div>
    <div className="carousel-item">
      <img src="https://source.unsplash.com/random/?food" className="d-block w-100" style = {style.img} alt="gen"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    )
}
