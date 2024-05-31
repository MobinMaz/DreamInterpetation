import React from "react";
import WizardImage from "../assets/images/wiz2.jpg";
const Welcome = () => (
    <section className="fixed top-0 -left-8 w-52 animate-fade-up animate-once animate-fill-forwards">
        <img src={WizardImage} className="w-full h-[570px]" />
        <p className="absolute top-0 -right-48 p-5 rounded-3xl bg-white/60">
        سلام به خونه من خوش اومدی دوست داری کمکت کنم؟    
        </p>
    </section>
);
export default Welcome;