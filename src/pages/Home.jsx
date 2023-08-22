import { useSelector } from "react-redux";
import sanitizeHtml from 'sanitize-html';
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import {
  HomeIcon,
  ChevronRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

function Home() {
  const { selectedData } = useSelector((store) => store.products);

  function extractTextFromHTML(inputHtml) {
    const sanitizedHtml = sanitizeHtml(inputHtml, {
      allowedTags: [], // Remove all tags
      allowedAttributes: {}, // Remove all attributes
    });
    return sanitizedHtml;
  }

  return (
    <section className="flex w-full gap-12">
      {selectedData && (
        <>
          <div className="hidden space-y-4 md:w-2/12 md:block">
            <Menu user={selectedData.user}  />
          </div>
          <div className="w-full md:w-10/12">
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
                    Offers
                  </div>
                  <div className="mt-2 flex items-center text-sm text-gray-500">
                    <ChevronRightIcon
                      className="mr-1.5 h-3 sm:h-4 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-2 flex items-center text-xs sm:text-sm text-gray-500">
                    Intelligent Finite Elements in Structural mechanics
                  </div>
                </div>
              </div>
              <div className="mt-5 flex lg:ml-4 lg:mt-0">
                <span className="sm:ml-3">
                  <Link
                    to={`/product/${selectedData.id}`}
                    type="button"
                    className="inline-flex items-center rounded-md bg-newbBlue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                    View
                  </Link>
                </span>
              </div>
            </div>
            <div className="flex flex-col w-full border-opacity-50 py-5 space-y-5">
              <div className="flex flex-col card border border-gray-100 bg-white md:flex-row">
                <div className="relative overflow-hidden rounded-md w-full">
                  <img
                    src={selectedData.picture}
                    className="w-full"
                    alt="images"
                  />
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
                    <h3 className="font-semibold text-md my-2">
                      Intelligent Finite Elements in Structural mechanics
                    </h3>
                    <p className="text-gray-400 whitespace-pre-line">
                      {extractTextFromHTML(selectedData.description)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}

export default Home;
