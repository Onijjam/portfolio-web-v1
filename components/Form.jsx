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
    const [emailSend, setEmailSend] = useState(0);
    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [textError, setTextError] = useState('');

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [id]: value,
        }));
    };

    const handleBlur = (e) => {
        const { id, value } = e.target;
        switch (id) {
            case 'name':
                setNameError(value.trim() === '' ? 'Le champ Nom ne peut être vide !' : '');
                break;
            case 'email':
                setEmailError(value.trim() === '' ? 'Le champ Email ne peut être vide !' : '');
                break;
            case 'text':
                setTextError(value.trim() === '' ? 'Le champ Message ne peut être vide !' : '');
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.name.trim() === '') {
            setNameError('Le champ nom ne peut pas être vide');
            return;
        }

        if (formData.email.trim() === '') {
            setEmailError('Le champ email ne peut pas être vide');
            return;
        }

        if (formData.text.trim() === '') {
            setTextError('Le champ message ne peut pas être vide');
            return;
        }

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
            {nameError && <p className="text-red-500 ml-8">{nameError}</p>}
            <div className={'relative flex items-center'}>
                <Input type={'name'} id={'name'} placeholder={'Nom'} value={formData.name} onChange={handleChange}
                       onBlur={handleBlur}/>
                <User className={'absolute right-6'} size={20}/>
            </div>
            {emailError && <p className="text-red-500 ml-8">{emailError}</p>}
            <div className={'relative flex items-center'}>
                <Input type={'email'} id={'email'} placeholder={'Email'} value={formData.email} onChange={handleChange}
                       onBlur={handleBlur}/>
                <MailIcon className={'absolute right-6'} size={20}/>
            </div>
            {textError && <p className="text-red-500 ml-8">{textError}</p>}
            <div className={'relative flex items-center'}>
                <Textarea id={'text'} placeholder={'Tapez votre message...'} value={formData.text}
                          onChange={handleChange} onBlur={handleBlur}/>
                <MessageSquare className={'absolute top-4 right-6'} size={20}/>
            </div>
            <Button type={'submit'}
                    className={`flex items-center gap-x-1 max-w-[166px] ${emailSend === 1 ? 'bg-green-500' : emailSend === 2 ? 'bg-red-500' : ''} ${emailSend === 1 ? 'hover:bg-green-400' : emailSend === 2 ? 'hover:bg-red-400' : ''}`}>
                {emailSend === 1 ?
                    <>
                        C'est envoyé
                        <Check size={20}/>
                    </>
                    : emailSend === 2 ?
                        <>
                            Erreur
                            <X size={20}/>
                        </>
                        :
                        <>
                            Discutons
                            <ArrowRightIcon size={20}/>
                        </>
                }
            </Button>
        </form>
    )
}

export default Form;