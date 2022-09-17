import React from "react";
import { Carousel } from "3d-react-carousal";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import useProduct from "../../Hooks/useProduct";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UpcomingItems from "../Upcomming/UpcomingItems";
import image1 from "../../image/1.jpg";
import image2 from "../../image/2.jpg";
import image3 from "../../image/3.jpg";
import image4 from "../../image/4.jpg";

const Home = () => {
  let slides = [
    <img src={image1} alt="1" />,
    <img src={image2} alt="2" />,
    <img src={image3} alt="3" />,
    <img src={image4} alt="4" />,
  ];

  const [products, setProducts] = useProduct();
  const navigate = useNavigate();
  const handleUpdate = (id) => {
    navigate(`/inventory/${id}`);
  };

  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure?");
    if (proceed) {
      const url = `https://car-inventory-bd.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Items Delete successfully", data);
          const remaining = products.filter((product) => product._id !== id);
          setProducts(remaining);
        });
    }
  };

  return (
    <div className="container">
      <div className="py-20">
        <Carousel slides={slides} autoplay={true} interval={3000} />
      </div>
      <div className="pb-5 text-center">
        <div className="flex justify-center items-center text-center">
          <div className="h-10 w-1 bg-gray-700"></div>
          <div className="h-1 w-14 bg-gray-700"></div>
          <h3 className="my-5 border-4 border-gray-800 px-4 rounded-xl">
            Inventory
          </h3>
          <div className="h-1 w-14 bg-gray-700"></div>
          <div className="h-10 w-1 bg-gray-700"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
          {products.slice(0, 6).map((product) => (
            <div key={product._id} className="my-3">
              <Card
                className="shadow-xl shadow-gray-500 mx-auto"
                style={{ width: "18rem" }}
              >
                <Card.Img
                  variant="top"
                  className="p-2"
                  src={product?.picture}
                />
                <Card.Body>
                  <Card.Title>{product?.name}</Card.Title>
                  <Card.Text>
                    {product?.about
                      ? product.about.slice(0, 60)
                      : product.about}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{product?.balance}</ListGroupItem>
                  <ListGroupItem>{product?.Supplier}</ListGroupItem>
                  <ListGroupItem>{product.quantity}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link>
                    <button
                      className="px-2 py-1 rounded-lg border-2 hover:bg-sky-600 hover:text-white  border-sky-600"
                      onClick={() => handleUpdate(product._id)}
                    >
                      Stock update
                    </button>
                  </Card.Link>
                  <Card.Link>
                    <button
                      className="px-2 py-1 rounded-lg border-2 hover:bg-sky-600 hover:text-white  border-sky-600"
                      onClick={() => handleDelete(product._id)}
                    >
                      delete product
                    </button>
                  </Card.Link>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
        <Link to="/inventory">
          <button className="px-10 py-1 mt-10 rounded-lg border-2 hover:bg-gray-700 text-xl mb-3  text-white  border-gray-700">
            Manage inventory
          </button>
        </Link>
      </div>
      <UpcomingItems></UpcomingItems>
    </div>
  );
};

export default Home;
