import { Disclosure, DisclosureButton, DisclosurePanel} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Button } from "flowbite-react";
import {Logo} from '../index'
import { useDispatch } from 'react-redux'
import { setQuery } from '../../slices/QuerySlice'

const navigation = ["India", "Trade", "Tech", "Sport", "world"]


export default function Navbar() {

  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch(setQuery(e.target.innerHTML))
  }

  return (
    <Disclosure as="nav" className="bg-gray-800 ">
      <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center">
          <div className="absolute inset-y-0 right-0 flex items-center justify-end sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-end justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-start sm:justify-start">
            <div className="flex flex-shrink-0 sm:justify-start">
              <Logo textColor={'text-white'} />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4 mt-1">
                {navigation.map((item) => (
                  <Button
                    key={item}
                    gradientMonochrome="purple"
                    pill
                    onClick={(e) => handleClick(e)}
                  >
                    {item}
                  </Button>
                ))}
              </div>
            </div>
          </div>
      </div>
    </div>
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <Button
              key={item}
              outline 
              gradientDuoTone="cyanToBlue"
              className='w-full'
              onClick={(e) => handleClick(e)}
            >
              {item}
            </Button>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  )
}
