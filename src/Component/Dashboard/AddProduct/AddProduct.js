/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/aria-role */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

function AddProduct() {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const img = data.image[0];
    const img1 = data.img1[0];
    const img2 = data.img2[0];

    const form = new FormData();
    form.append("productImg", img);
    form.append("productImg1", img1);
    form.append("productImg2", img2);

    const productinfo = {
      name: data.name,
      oldPrice: data.oldprice,
      newPrice: data.newprice,
      details: data.description,
    };

    try {
      const { data } = await axios.post("https://quickinun.com/server/upload", form);
      // console.log(data);

      if (data?.uploaded) {
        const { productImg, productImg1, productImg2 } = data;
        const { data: productData } = await axios.post(
          "https://quickinun.com/server/add-product",
          { ...productinfo, image: productImg?.[0]?.filename, img1: productImg1?.[0]?.filename, img2: productImg2?.[0]?.filename }
        );

        productData?.acknowledged
          ? toast.success("Product successfully added")
          : toast.error("Unable to added product");
      } else {
        toast.error("Unable to upload image");
      }
    } catch (err) { }

    reset();
  };

  return (
    <div className="mb-10 h-full  w-full  px-4">
      <div className="flex flex-col items-center justify-center">
        <div className="bg-white shadow rounded lg:w-1/3  md:w-1/2 w-full p-10 mt-16">
          <p
            tabIndex={0}
            aria-label="Login to your account"
            className="text-2xl font-extrabold leading-6 mb-7 text-center text-gray-800"
          >
            Add Product
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <section className='flex flex-col gap-5'>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Product Main Image <br />
                  <small className="text-green-600 leading-6"> please choose a file</small>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    accept=".jpg, .png, .jpeg"
                    type="file"
                    className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("image", {
                      required: {
                        value: true,
                        message: "Image is Required",
                      },
                    })}
                  />
                </lable>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Product Secondary Image - 1 <br />
                  <small className="text-green-600 leading-6"> please choose a file</small>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    accept=".jpg, .png, .jpeg"
                    type="file"
                    className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("img1", {
                      required: {
                        value: false,
                        message: "Image is Required",
                      },
                    })}
                  />
                </lable>
                <lable className="text-sm font-medium leading-none text-gray-800">
                  Product Secondary Image - 2 <br />
                  <small className="text-green-600 leading-6"> please choose a file</small>
                  <input
                    aria-label="enter email adress"
                    role="input"
                    accept=".jpg, .png, .jpeg"
                    type="file"
                    className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                    {...register("img2", {
                      required: {
                        value: false,
                        message: "Image is Required",
                      },
                    })}
                  />
                </lable>
              </section>
              <label className="label">
                {errors.fileimage?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.fileimage.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Product Name
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Product name Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Old Price
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("oldprice", {
                  required: {
                    value: true,
                    message: "Old Price is Required",
                  },
                })}
              />
              <label className="label">
                {errors.oldprice?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.oldprice.message}
                  </span>
                )}
              </label>
            </div>
            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                New Price
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("newprice", {
                  required: {
                    value: true,
                    message: "New Price is Required",
                  },
                })}
              />
              <label className="label">
                {errors.newprice?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.newprice.message}
                  </span>
                )}
              </label>
            </div>

            <div>
              <lable className="text-sm font-medium leading-none text-gray-800">
                Product description
              </lable>
              <input
                aria-label="enter email adress"
                role="input"
                type="text"
                className="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
                {...register("description", {
                  required: {
                    value: true,
                    message: "Description is Required",
                  },
                })}
              />
              <label className="label">
                {errors.description?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.description.message}
                  </span>
                )}
              </label>
            </div>

            <div className="mt-8">
              <button
                role="button"
                aria-label="create my account"
                className="focus:ring-2 focus:ring-offset-2 focus:bg-green-600 leading-none text-white focus:outline-none bg-green-600 border rounded hover:bg-green-800 py-4 w-full font-bold text-lg"
              >
                Add product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
