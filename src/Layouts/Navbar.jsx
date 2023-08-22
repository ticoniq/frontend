import { useSelector } from "react-redux";
import { Disclosure } from "@headlessui/react";
import { Link } from "react-router-dom";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  ChatBubbleOvalLeftIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/images/logo.svg";
import profile from "../assets/images/profile.png";

const user = {
  name: "Sven Pietsch",
  company: "Innoloft GmbH",
  imageUrl: profile,
};

function Navbar() {
  const { selectedData } = useSelector((store) => store.products);

  return (
    <>
      <nav className="min-h-full">
        <Disclosure as="nav" className="bg-newbBlue">
          {({ open }) => (
            <>
              <section className="mx-auto max-w-custom px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex gap-12 items-center">
                    <div className="flex-shrink-0">
                      <Link to="/">
                        <img
                          className="h-7 filter grayscale brightness-0 invert"
                          src={logo}
                          alt="log"
                        />
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <div className="form-control">
                          <input
                            type="text"
                            placeholder="Search"
                            className="input input-bordered h-8 max-w-96"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      <ul className="menu menu-horizontal place-content-center p-0 m-0 text-white">
                        <button className="btn btn-ghost btn-circle">
                          <div className="indicator">
                            <ChatBubbleOvalLeftIcon
                              className="h-6 w-6"
                              aria-hidden="false"
                            />
                          </div>
                        </button>
                        <li className="self-center">
                          <details>
                            <summary className="hover:text-white">EN</summary>
                            <ul className="p-2 bg-base-100 text-black">
                              <li>
                                <a>Link 1</a>
                              </li>
                              <li>
                                <a>Link 2</a>
                              </li>
                            </ul>
                          </details>
                        </li>
                        <button className="btn btn-ghost btn-circle">
                          <div className="indicator">
                            <BellIcon className="h-6 w-6" aria-hidden="false" />
                          </div>
                        </button>
                        <li>
                          <details>
                            <summary className="hover:text-white">
                              {selectedData && (
                                <img
                                  className="h-8 w-8 rounded-full"
                                  src={selectedData.user.profilePicture}
                                  alt=""
                                />
                              )}
                            </summary>
                            <ul className="p-2 bg-base-100 text-black">
                              <li>
                                <a>Profile</a>
                              </li>
                              <li>
                                <a>Logout</a>
                              </li>
                            </ul>
                          </details>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-transparent p-2 text-white hover:text-gray-400 focus:outline-none focus:text-gray-400">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-10" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-10" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </section>

              <Disclosure.Panel className="md:hidden">
                <div className="border-t border-gray-700 pb-3 pt-4">
                  <div className="flex items-center px-5">
                    {selectedData && (
                      <>
                        <div className="flex-shrink-0">
                          <img
                            className="h-10 w-10 rounded-full"
                            src={selectedData.user.profilePicture}
                            alt=""
                          />
                        </div>
                        <div className="ml-3 space-y-2">
                          <div className="text-base font-medium leading-none text-white">
                            {selectedData.user.firstName}{' '}
                            {selectedData.user.lastName}
                          </div>
                          <div className="text-sm font-medium leading-none text-gray-400">
                            {selectedData.user.position}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                  <div className="mt-3 space-y-1 px-2"></div>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </nav>
    </>
  );
}

export default Navbar;
