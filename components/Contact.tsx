import React from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form';

type IFormInput ={
    firstName: string
    lastName: string
    age: number
    email: string
    how:string
} 
export default function MyModal() {
  
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm<IFormInput>({
        defaultValues: {
            firstName: "",
            lastName: "",
            age: 18,
            how:'reference'
        }
    });
    console.log(watch("firstName")); // you can watch individual input by pass the name of the input
    let [isOpen, setIsOpen] = useState(false)
    function closeModal() {
        setIsOpen(false)
    }
    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <div className="pb-20 inset-0 flex items-center justify-center m-3 ">
                <form className='flex flex-col w-full '
                    onSubmit={handleSubmit((data) => {
                        alert(JSON.stringify(data));
                    })}
                >
                    <label>First Name</label>
                    <input {...register("firstName")} defaultValue="test" />
                    <label>LastName</label>
                    <input
                        {...register("lastName", { required: true, maxLength: 10 })}
                    />
                    <label>How did you find us?</label>
                    <select {...register("how")}>
                        <option value="female">Google Maps</option>
                        <option value="male">Facebook</option>
                        <option value="other">other</option>
                    </select>
                    {errors.lastName? <p>This field is required</p> : <></>}
                    <input type="submit" />
                </form>
               
            </div>
            <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                >
                    Open dialog
                </button>
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
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Submitted! Look out for updates sent to your email!
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Your payment has been successfully submitted. We’ve sent
                                            you an email with all of the details of your order.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Got it, thanks!
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}


