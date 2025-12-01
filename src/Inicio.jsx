import "./estilo.css"
function Inicio() {
    return (
        <>
            {/* <div className="container mt-3"> */}
                <div className="row">
                    <div className="col">
                        <div id="carouselExampleIndicators" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://c.files.bbci.co.uk/7A24/production/_118486213_gettyimages-509007900.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://eju.tv/wp-content/uploads/2021/09/img_61318e345a89b.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchHJcXpMLockqMWFy0TNB4nRaBY7hP47lcQ&s" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://lapatria.bo/wp-content/uploads/2021/05/Morenada-patrimonio-boliviana_800x533.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://elfulgor.com/images/2021/05/14/morenada_large.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="col">
                        <div id="carouselExampleIndicators1" class="carousel slide">
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="4" aria-label="Slide 5"></button>
                            </div>
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="https://c.files.bbci.co.uk/7A24/production/_118486213_gettyimages-509007900.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://eju.tv/wp-content/uploads/2021/09/img_61318e345a89b.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRchHJcXpMLockqMWFy0TNB4nRaBY7hP47lcQ&s" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://lapatria.bo/wp-content/uploads/2021/05/Morenada-patrimonio-boliviana_800x533.jpg" class="d-block w-100" alt="..." />
                                </div>
                                <div class="carousel-item">
                                    <img src="https://elfulgor.com/images/2021/05/14/morenada_large.jpg" class="d-block w-100" alt="..." />
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </>
    );
}
export default Inicio;