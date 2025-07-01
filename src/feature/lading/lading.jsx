import React from "react";
import { Navbar } from "./components/navbar";

export const Landing = () => {
  return (
    <>
      <div className="container-fluid">
        <Navbar />
        <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleSlidesOnly"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>

            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://cdn.motor1.com/images/mgl/7qRPJ/s1/bugatti-chiron-super-sport-300-first-batch.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption">
                  <h5>Primera imagen</h5>
                  <p>Descripción breve de la primera imagen.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.deceroacien.com.mx/u/fotografias/m/2022/7/21/f1280x720-6058_137733_5050.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption">
                  <h5>Segunda imagen</h5>
                  <p>Texto que acompaña esta imagen.</p>
                </div>
              </div>
              <div class="carousel-item">
                <img
                  src="https://assets.dyler.com/uploads/cars/361996/7833474/medium_533f5d6e-fef7-47f8-9f66-16496ac65f28.jpg"
                  class="d-block w-100"
                  alt="..."
                />
                <div class="carousel-caption">
                  <h5>Tercera imagen</h5>
                  <p>Otro texto descriptivo.</p>
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Anterior</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleSlidesOnly"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Siguiente</span>
            </button>
          </div>

          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

        <div className="m-4">
          <div className="container">
            <h2>REFERENCIAS BUGGATI</h2>
            <div className="row">
              <div className="col-4">
                <div className="card">
                  <div className="card-header">Mistral</div>
                  <div className="card-body">
                    <img
                      src="https://bugatti-newsroom.imgix.net/a32c5a46-eb09-4a6f-ac28-35622dde9d4d/12%20BUGATTI_Roadster_launch-set?auto=format,compress&cs=srgb&sharp=10&w=380&dpr=2.625"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="card-footer">453 km/h</div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-header">Chiron Super Sport</div>
                  <div className="card-body">
                    <img
                      src="https://www.thereviewmag.co.uk/wp-content/uploads/2023/02/DSC00141-2-870x580.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="card-footer">490 km/h</div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-header">Bolide</div>
                  <div className="card-body">
                    <img
                      src="https://motor.elpais.com/wp-content/uploads/2023/07/Bugatti-1.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="card-footer">500 km/h</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-4">
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="card">
                  <div className="card-header">Tourbillon</div>
                  <div className="card-body">
                    <img
                      src="https://www.shutterstock.com/image-photo/szczecinpolandjuly-2024bugatti-tourbillon-v16-1800-600nw-2492193479.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="card-footer">445 km/h</div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-header">Divo</div>
                  <div className="card-body">
                    <img
                      src="https://preview.free3d.com/img/2018/12/2140185251924673907/fuo0ue78.jpg"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="card-footer">Estoy emn venta</div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-header">Veyron Super Sport</div>
                  <div className="card-body">
                    <img
                      src="https://hips.hearstapps.com/es.h-cdn.co/cades/contenidos/56057/veyron_alquiler.jpg?resize=640:*"
                      className="d-block w-100"
                      alt="..."
                    />
                  </div>
                  <div className="card-footer">Estoy emn venta</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
