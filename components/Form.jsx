'use client';

import { Button } from './ui/button'
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare, Check, X } from "lucide-react";
import {sendEmail} from "/services/email";
import {useState} from "react";

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        text: '',
    });
    const [emailSend,setEmailSend] = useState(0);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const status = await sendEmail(formData);
        setFormData({
            name: '',
            email: '',
            text: '',
        });
        if (status === 200){
            setEmailSend(1);
        }
        else {
            setEmailSend(2);
        }
    };


    return (
        <form onSubmit={handleSubmit} className={'flex flex-col gap-y-4'}>
            <div className={'relative flex items-center'}>
                <Input type={'name'} id={'name'} placeholder={'Nom'} value={formData.name} onChange={handleChange}/>
                <User className={'absolute right-6'} size={20} />
            </div>
            <div className={'relative flex items-center'}>
                <Input type={'email'} id={'email'} placeholder={'Email'} value={formData.email} onChange={handleChange}/>
                <MailIcon className={'absolute right-6'} size={20} />
            </div>
            <div className={'relative flex items-center'}>
                <Textarea id={'text'} placeholder={'Tapez votre message...'} value={formData.text} onChange={handleChange}/>
                <MessageSquare className={'absolute top-4 right-6'} size={20} />
            </div>
            <Button type={'submit'} className={`flex items-center gap-x-1 max-w-[166px] ${emailSend === 1 ? 'bg-green-500' : emailSend === 2 ? 'bg-red-500' : ''} ${emailSend === 1 ? 'hover:bg-green-400' : emailSend === 2 ? 'hover:bg-red-400' : ''}`}>
                {emailSend === 1 ?
                    <>
                        C'est envoyé
                        <Check size={20} />
                    </>
                    : emailSend === 2 ?
                        <>
                            Erreur
                            <X size={20} />
                        </>
                        :
                        <>
                            Discutons
                            <ArrowRightIcon size={20} />
                        </>
                }
            </Button>
        </form>
    )
}

export default Form;