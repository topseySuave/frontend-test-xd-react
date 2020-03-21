import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faBezierCurve, faCode, faFileSignature, faFileMedicalAlt, faFan } from '@fortawesome/free-solid-svg-icons';

const ServiceSection = () => (
    <section className="container mt-40 bg-indigo-700 w-full text-white p-48 z-0">
        <h1 className="text-6xl graphie font-black"> services <br /> & portfolio </h1>

        <div class="flex content-start flex-wrap">
            <div class="w-1/3 p-2 mt-20">
                <div class="text-center p-2">
                    <FontAwesomeIcon icon={faDesktop} size="3x" />
                    <h1 className="text-3xl">Web Design</h1>
                    <p>modern web design services withnew trends and direction.</p>
                </div>
            </div>
            <div class="w-1/3 p-2 mt-20">
                <div class="text-center p-2">
                    <FontAwesomeIcon icon={faBezierCurve} size="3x" />
                    <h1 className="text-3xl">Branding</h1>
                    <p>highly professional branding and logo design work.</p>
                </div>
            </div>
            <div class="w-1/3 p-2 mt-20">
                <div class="text-center p-2">
                    <FontAwesomeIcon icon={faFan} size="3x" />
                    <h1 className="text-3xl">Motion graphics</h1>
                    <p>modern motion graphics and animation for businesses.</p>
                </div>
            </div>
            <div class="w-1/3 p-2 mt-20">
                <div class="text-center p-2">
                    <FontAwesomeIcon icon={faFileSignature} size="3x" />
                    <h1 className="text-3xl">ui/ux design</h1>
                    <p>Standard screen generation and design for all devices.</p>
                </div>
            </div>
            <div class="w-1/3 p-2 mt-20">
                <div class="text-center p-2">
                    <FontAwesomeIcon icon={faCode} size="3x" />
                    <h1 className="text-3xl">Web Development</h1>
                    <p>website development is something we are best in.</p>
                </div>
            </div>
            <div class="w-1/3 p-2 mt-20">
                <div class="text-center p-2">
                    <FontAwesomeIcon icon={faFileMedicalAlt} size="3x" />
                    <h1 className="text-3xl">App testing</h1>
                    <p>we test app for better user experience and results.</p>
                </div>
            </div>
        </div>

    </section>
);

export default ServiceSection;
