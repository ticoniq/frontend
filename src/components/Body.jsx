import React from "react";
import { Link } from "react-router-dom";
import {
  HomeIcon,
  ChevronRightIcon,
  StarIcon,
  MapPinIcon,
  Cog8ToothIcon,
  RocketLaunchIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";

function Body({
  id,
  description,
  image,
  video,
  user,
  trl,
  businessModels,
  categories,
  company,
  type,
  investmentEffort,
}) {
  const videoShow = () => {
    const url = new URL(video);
    const videoId = url.searchParams.get("v");
    return videoId;
  };

  function extractText(inputText) {
    const endIndex = inputText.indexOf('.');
    const extractedText = inputText.substring(0, endIndex + 1).trim();
    const decodedHtml = new DOMParser().parseFromString(extractedText, 'text/html').body.textContent;
    return decodedHtml;
  }

  return (
    <section>
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="min-w-0 flex-1">
          <div className="flex items-center sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-1">
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <HomeIcon
                className="mr-1.5 h-3 sm:h-4 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <ChevronRightIcon
                className="mr-1.5 h-3 sm:h-4 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <div className="mt-2 flex items-center text-xs sm:text-sm text-gray-500">
              {type.name}
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <ChevronRightIcon
                className="mr-1.5 h-3 sm:h-4 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
            </div>
            <div className="mt-2 flex items-center text-xs sm:text-sm text-gray-500">
              {extractText(description)}
            </div>
          </div>
        </div>
        <div className="mt-5 flex lg:ml-4 lg:mt-0">
          <span className="sm:ml-3">
            <Link
              to={`/productEdit/${id}`}
              type="button"
              className="inline-flex items-center rounded-md bg-newbBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Edit
            </Link>
          </span>
        </div>
      </div>

      <div className="flex flex-col w-full border-opacity-50 py-5 space-y-5">
        <div className="flex flex-col card border border-gray-100 bg-white md:flex-row">
          <div className="relative overflow-hidden rounded-md w-full md:w-8/12">
            <img src={image} className="w-full" alt="images" />
            <div className="absolute inset-0 h-full w-full overflow-hidden">
              <div className="flex h-full items-start justify-start">
                <div className="flex flex-row  bg-white rounded-br-md">
                  <div className="bg-newbBlue p-3 rounded-br-md">
                    <h5 className="text-lg font-bold text-white">
                      <StarIcon className="w-5" />
                    </h5>
                  </div>
                  <h5 className="text-md font-bold p-3">Patent</h5>
                </div>
              </div>
            </div>
            <div className="m-4">
              <h3 className="font-semibold text-md whitespace-pre-line">
                {extractText(description)}
              </h3>
              <p className="text-gray-400 whitespace-pre-line">{description}</p>
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
            <div>
              <iframe
              title="hello"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2522.7809344896245!2d6.097925576354815!3d50.77963437165688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0995d36ff22ff%3A0x3a4248b50ce934de!2sJ%C3%BClicher%20Str.%2072a%2C%2052070%20Aachen%2C%20Germany!5e0!3m2!1sen!2sgh!4v1692587761490!5m2!1sen!2sgh"
                className="border-none w-full h-full"
                loading="lazy"></iframe>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center card border border-gray-100 bg-white">
          <h5 className="text-md font-bold p-4 self-start">Video</h5>
          <div className="w-full md:w-8/12 py-5">
            <iframe
              className="w-full h-96"
              src={`https://www.youtube.com/embed/${videoShow()}`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center p-4 card border border-gray-100 bg-white">
          <h5 className="text-md font-bold self-start">Offer details</h5>
          <div className="grid grid-cols-1 text-gray-400 space-y-3 w-full py-5 md:grid-cols-2">
            <div>
              <p className="flex gap-1 text-lg">
                <Cog8ToothIcon className="w-6" /> Technology
              </p>
              <div className="flex flex-wrap space-x-3 my-3 ml-0 md:ml-7">
                {categories.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-200 px-2 rounded-2xl mb-3">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="flex gap-1 text-lg">
                <RocketLaunchIcon className="w-6" /> Business Model
              </p>
              <div className="flex flex-wrap space-x-3 my-3 ml-0 md:ml-7">
                {businessModels.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-200 px-2 rounded-2xl mb-3">
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="flex gap-1 text-lg">
                <ClockIcon className="w-6" /> TRL
              </p>
              <div className="flex flex-wrap space-x-3 my-3 ml-0 md:ml-7">
                <div className="bg-gray-200 px-2 rounded-2xl">{trl}</div>
              </div>
            </div>
            <div>
              <p className="flex gap-1 text-lg">
                <CurrencyDollarIcon className="w-6" /> Costs
              </p>
              <div className="flex flex-wrap space-x-3 my-3 ml-0 md:ml-7">
                <div className="bg-gray-200 px-2 rounded-2xl">{investmentEffort}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Body;
