/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useProductStore from "../Hooks/useProductStorage";
import Loading from "../Share/Loading";

const ProductDetail = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  const { data, upserting } = useProductStore();
  const [products, setProducts] = useState({});
  const [loading,setLoading] = useState(false);
  const [pic, setPic] = useState({
    pic1: '',
    pic2: '',
    pic3: ''
  });

  const { name, newPrice, details } = products;

  useEffect(() => {
    if (productId) {
      setLoading(true);
      fetch(`http://api.com.quickinun.com/server/product/${productId}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setProducts(data);
          setPic({
            pic1: data?.image,
            pic2: data?.img1,
            pic3: data?.img2
          });
          setLoading(false);
        });
    }
  }, [productId]);

  const checking = (p) => {
    const cartProduct = {
      name: p.name,
      image: p.image,
      price: parseFloat(p.newPrice),
      quantity: data?.find((p) => p._id === productId)
        ? data?.find((p) => p._id === productId).quantity
        : 1,
    };

    upserting({ ...cartProduct, _id: productId });
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen">
      {loading && <Loading/>}
      <div className="2xl:container 2xl:mx-auto lg:py-16  md:py-12 md:px-6 py-9 px-1 ">
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
          {/* <!-- Description Div --> */}
          <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-2 sm:gap-6 gap-4">
            <div className=" w-full lg:w-12/12  flex justify-center ">
              <img
                className="lg:h-[495px]  object-cover"
                src={`http://api.com.quickinun.com/server/file/${pic.pic1}`}
                alt={name}
              />
            </div>
            <div className="  w-full lg:w-6/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-2">
              <div className=" flex justify-center ">
                {products?.img1 &&
                  <img onClick={() => setPic({
                    ...pic,
                    pic1: pic.pic2,
                    pic2: pic.pic1
                  })} className="object-cover" src={`http://api.com.quickinun.com/server/file/${pic.pic2}`} alt={name} />
                }
              </div >
              <div className=" flex justify-center  ">
                {products?.img2 &&
                  <img
                    onClick={() => setPic({
                      ...pic,
                      pic1: pic.pic3,
                      pic3: pic.pic1
                    })}
                    className="object-cover"
                    src={`http://api.com.quickinun.com/server/file/${pic.pic3}`}
                    alt={name}
                  />
                }
              </div>
            </div >
          </div >

          <div className=" p-2 lg:p-0 w-full sm:w-96 md:w-8/12 lg:w-5/12 items-center">
            <h2 className=" font-semibold lg:text-3xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4 h-auto lg:w-full">
              {name}
            </h2>

            <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">
              ??????????????? : <span className="text-3xl font-bold">??? </span>{newPrice}
            </p>

            <button
              onClick={() => checking(products)}
              className="focus:outline-none focus:ring-2 hover:bg-clr/70 hover:text-gray-700 transition-all duration-300 focus:ring-offset-2 focus:ring-white font-medium text-base leading-4 text-white bg-clr w-full py-5 lg:mt-20 mt-6"
            >
              ?????????????????? ????????????
            </button>
          </div>
        </div >
        <p className="mt-10 font-semibold lg:text-xl text-xl lg:leading-6 leading-5 lg:mt-9 ">
          ???????????? ?????????????????? :
        </p>
        <p className="  h-[120px] overflow-y-auto font-normal text-base leading-6 text-gray-600 mt-4">
          {details}
        </p>
      </div >
    </div >
  );
};

export default ProductDetail;
