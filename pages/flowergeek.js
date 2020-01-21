import "bootstrap/dist/css/bootstrap.css";
import React from "react";

const myFlowers = () => {
  return (
    <>
      <div className="pl-3 pr-3">
        <h1>My flowers</h1>
        <h3 className="pt-3 pb-3">HOYAS</h3>
        <div className="row">
          {/* <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Camphorifolia</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-camphorifolia.png")}
              />
            </div>
          </div> */}
          {/* <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Carnosa Kringle</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-carnosa-kringle.png")}
              />
            </div>
          </div> */}
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Carnosa Tricolor</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-carnosa-tricolor.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Carnosa</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-carnosa.png")}
              />
            </div>
          </div>
          {/* <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Compacta</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-compacta.png")}
              />
            </div>
          </div> */}
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya cv. Mathildae</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-cv-mathildae.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya David Cummings</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-david-cummings.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Iris Marie</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-iris-marie.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Kerri</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-kerri.png")}
              />
            </div>
          </div>
          {/* <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Lamingtonie</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-lamingtonie.png")}
              />
            </div>
          </div> */}
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Linearis</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-linearis.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Loheri</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-loheri.png")}
              />
            </div>
          </div>
          {/* <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Magnifica</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-magnifica.png")}
              />
            </div>
          </div> */}
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Memoria</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-memoria.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Mirabilis</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-mirabilis.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Siarea</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-siarea.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Hoya Thompsonii</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/hoya-thompsonii.png")}
              />
            </div>
          </div>
        </div>
        <h3>Philodendrons</h3>
        <div className="row">
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Philodendron Tertasperma</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/philodendron-tetrasperma.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Philodendron Pedantum</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/philodendron-pedantum.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Philodendron radiatum</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/philodendron-radiatum.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Philodendron Verculosum</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/philodendron-verculosum.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Monstera Variegata</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/monstera-variegata.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Philodendron Xanadu</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/philodendron-xanadu.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Philodendron Elegans</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/philodendron-elegans.png")}
              />
            </div>
          </div>
          <div class="col-md-4">
            <div class="card mb-4">
              <div class="card-body">
                <h4>Philodendron Santa Leopoldina</h4>
              </div>
              <img
                class="img img-fluid"
                src={require("../assets/flowers/philodendron-santa-leopoldina.png")}
              />
            </div>
          </div>
          <h3>Begonias</h3>
          <div className="row">
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h4>Begonia Beefsteak</h4>
                </div>
                <img
                  class="img img-fluid"
                  src={require("../assets/flowers/begonia-beefsteak.png")}
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h4>Begonia Black Mamba</h4>
                </div>
                <img
                  class="img img-fluid"
                  src={require("../assets/flowers/begonia-black-mamba.png")}
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h4>Begonia Coralina</h4>
                </div>
                <img
                  class="img img-fluid"
                  src={require("../assets/flowers/begonia-coralina.png")}
                />
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-body">
                  <h4>Begonia Maculata</h4>
                </div>
                <img
                  class="img img-fluid"
                  src={require("../assets/flowers/begonia-maculata.png")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default myFlowers;
