import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { StarIcon, MapPinIcon, TrashIcon, CheckIcon } from "@heroicons/react/24/outline";
import { removeproductItem } from "../Redux/product/productSlice";

function EditBody({ id, description, image, user, company, type }) {
  const dispatch = useDispatch();
  const [isDeleting, setIsDeleting] = useState(false);

  function extractText(inputText) {
    const endIndex = inputText.indexOf(".");
    const extractedText = inputText.substring(0, endIndex + 1).trim();
    const decodedHtml = new DOMParser().parseFromString(
      extractedText,
      "text/html"
    ).body.textContent;
    return decodedHtml;
  }

  function handleDelete() {
    if (window.confirm("Are you sure you want to delete this item?")) {
      setIsDeleting(true);
      dispatch(removeproductItem(id));
    }
  }

  return (
    <section>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex items-center sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-1">
            <div className="mt-2 flex items-center text-xs sm:text-sm text-gray-500">
              {type.name}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="sm:ml-3">
            <Link
              to={`/product/${id}`}
              type="button"
              className="inline-flex items-center rounded-md bg-newbBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              View Offer
            </Link>
          </span>
        </div>
      </div>

      <div className="flex flex-col w-full border-opacity-50 py-5 space-y-5">
        <div className="flex flex-col card border border-gray-100 bg-white md:flex-row">
          <div className="relative rounded-md border border-gray-200 w-full md:w-8/12">
            <img src={image} className="w-full" alt="images" />
            <div className="absolute inset-0 h-full w-full overflow-hidden">
              <div className="flex justify-between h-full items-start ">
                <div className="flex flex-row  bg-white rounded-br-md border border-gray-200">
                  <div className="bg-newbBlue p-3 rounded-br-md">
                    <h5 className="text-lg font-bold text-white">
                      <StarIcon className="w-5" />
                    </h5>
                  </div>
                  <h5 className="text-md font-bold p-3">Patent</h5>
                </div>
                <div className="flex flex-row  bg-white rounded-bl-md border border-gray-200">
                  <button
                    className="text-md font-bold p-3 cursor-pointer"
                    onClick={handleDelete}>
                    <TrashIcon className="w-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="m-4">
              <h3 className="font-semibold text-md">
                <input
                  type="text"
                  defaultValue={extractText(description)}
                  className="input input-bordered w-full max-w-full my-3 h-10"
                />
              </h3>
              <textarea
                className="textarea textarea-bordered w-full h-full"
                defaultValue={description}
              />
            </div>
            <div className="m-4 space-x-3 flex flex-row justify-end">
              <button
                type="button"
                className="inline-flex items-center rounded-md px-3 py-2 text-sm font-semibold text-gray-400 shadow-sm">
                Cancle
              </button>
              <button
                type="button"
                className="inline-flex items-center rounded-md bg-gray-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600">
                <CheckIcon className="w-4" />
                Save
              </button>
            </div>
          </div>
          <div className="p-4 w-full md:w-4/12">
            <h3 className="text-lg font-semibold">Offered By</h3>
            <img className="h-9 my-5" src={company.logo} alt="log" />
            <article className="flex flex-row gap-4 items-center">
              <img
                className="h-10 rounded-full"
                src={user.profilePicture}
                alt=""
              />
              <div className="space-y-1">
                <div className="text-base leading-none">
                  {user.firstName} {user.lastName}
                </div>
                <div className="text-xs leading-none">{company.name}</div>
              </div>
            </article>
            <div className="flex items-baseline mt-3">
              <MapPinIcon className="w-6" />
              <p>
                {company.address.street}
                {company.address.house} {company.address.zipCode} <br />
                {company.address.city.name}
                {", "}
                {company.address.country.name}
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center card border border-gray-100 bg-white">
          <h5 className="text-md font-bold p-4 self-start">Video</h5>
          <div className="font-semibold text-md p-4 w-full">
            <input
              type="text"
              placeholder="Add a youtube or vimeo link"
              className="input input-bordered w-full my-3 h-10"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-center card border border-gray-100 bg-white">
          <h5 className="text-md font-bold p-4 self-start">Offer details</h5>
          <div className="font-semibold text-md p-4 w-full">
            <h3 className="font-semibold text-md text-red-500"> This is up to you :)</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EditBody;
