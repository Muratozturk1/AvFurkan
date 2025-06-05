import React from 'react';

const Contact = () => {
    return (
        <div className="container mx-auto px-4 py-20">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8 text-center">İletişim</h1>

                <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">E-posta</h3>
                            <a href="mailto:furkan.koc@avfurkankoc.com.tr" className="text-blue-600 hover:text-blue-800">
                                furkan.koc@avfurkankoc.com.tr
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800">Telefon</h3>
                            <a href="tel:+905326963929" className="text-blue-600 hover:text-blue-800">
                                +90 532 696 39 29
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 