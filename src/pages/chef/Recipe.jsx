import React, { useState } from 'react';
import { FaRegHeart } from 'react-icons/fa';
import { Rating } from '@smastrom/react-rating';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react';

const Recipe = ({recipe, handleFav, favRecipe}) => {

    const {name, ingredients, rating, cooking_method, id } = recipe;
    let [isOpen, setIsOpen] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
    }

    const openModal = () => {
        setIsOpen(true)
    }

    return (
        <>
            <div className='p-5 border border-purple-500 rounded-lg flex flex-col  gap-5 justify-between  transition-all'>
                
                <div className='space-y-3'>
                    <h1 className='text-2xl text-red-500 font-semibold text-center'>{name}</h1>
                    <p className='leading-relaxed'><span className='font-semibold'>Ingredients : </span>{ingredients.join(",")}</p>
                    {/* <p className='leading-relaxed'><span className='font-semibold'>Cooking Method : </span> {cooking_method}</p> */}
                    <div className='flex '>
                        <Rating style={{ maxWidth: 120,marginRight:5 }} value={rating} readOnly />
                        {rating} Rating
                    </div>
                </div>

                <div className='flex justify-between'>
                    <button onClick={openModal} className=' hover:bg-blue-200 bg-blue-100 p-2 text-sm rounded-lg flex items-center'>
                        View Cooking Method
                    </button>
                    <button onClick={() => handleFav(id)}
                        disabled={favRecipe.includes(id)}
                        title='mark as to favourite'
                        className='p-3 rounded-full bg-red-500 text-white'>
                        <FaRegHeart/>
                    </button>
                </div>
            </div>
                {/* modal  */}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                            as="h3"
                            className="text-lg font-semibold leading-6 text-red-600"
                        >
                            {name}
                        </Dialog.Title>
                        <div className="mt-2">
                            <p className="leading-loose">
                            <span className='font-bold'>Cooking method : </span> {cooking_method}
                            </p>
                        </div>

                        <div className="mt-4">
                            <button
                            type="button"
                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                            onClick={closeModal}
                            >
                            close
                            </button>
                        </div>
                        </Dialog.Panel>
                    </Transition.Child>
                    </div>
                </div>
                </Dialog>
            </Transition>
        </>
    );
};

export default Recipe;