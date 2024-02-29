'use client'

import Modal from "./Modal"
import CustomButton from "../forms/CustomButton"
import useSignupModal from "@/app/hooks/useSignupModal"

const SignupModal = () => {
    const signupModal = useSignupModal()

    const content = (
        <form className="space-y-4">
            <input placeholder="Your email address" type="email" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />
            <input placeholder="Your password" type="password" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />
            <input placeholder="Reapet password" type="password" className="w-full h-[54px] border border-gray-300 px-4 rounded-xl" />
            
            <div className="p-5 bg-airbnb text-white rounded-xl opacity-80">
                The error message
            </div>
            
            <CustomButton
                label="Sign up"
                onClick={() => console.log('sign up clicked')}
            />
        </form>
    )

    return (
        <Modal 
            isOpen={signupModal.isOpen}
            close={signupModal.close}
            label="Sign up"
            content={content}
        />
    )
}

export default SignupModal
