import React from "react";

function Section1() {
    return (
        <div className="max-w-5xl mx-auto">
            <title>
                Terms & Conditions | Ignite Auth
            </title>
            <div className="leading-relaxed">
                <div className="text-center mx-auto ">
                    <h1 className="text-3xl font-bold">Terms and Conditions</h1>
                    <p className="">
                        Welcome to Ignite Auth. These terms and conditions outline the rules and regulations for the use of our web application.
                    </p>
                    <p>Last Update: January 1, 2024</p>
                </div>

                <div className="container text-left mx-auto my-8 border-2 p-5 rounded-lg">
                    {/* Introduction Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                        <p className="mb-4">
                            By accessing this web application, we assume you accept these terms and conditions. Do not continue to use Ignite Auth if you do not agree to take all of the terms and conditions stated on this page.
                        </p>
                        <p className="mb-4">
                            The following terminology applies to these Terms and Conditions, Privacy Statement, and Disclaimer Notice and any or all Agreements: "Client", "You", and "Your" refers to you, the person accessing this web application and accepting the Company's terms and conditions. "The Company", "Ourselves", "We", "Our", and "Us", refers to Ignition Nest Labs. "Party", "Parties", or "Us", refers to both the Client and ourselves, or either the Client or ourselves.
                        </p>
                    </section>

                    {/* License Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">License</h2>
                        <p className="mb-4">
                            Unless otherwise stated, Ignition Nest Labs and/or its licensors own the intellectual property rights for all material on Ignite Auth. All intellectual property rights are reserved. You may access this from Ignite Auth for your own personal use subjected to restrictions set in these terms and conditions.
                        </p>
                        <p className="mb-4">
                            You must not:
                            <ul className="list-disc pl-5">
                                <li>Republish material from Ignite Auth</li>
                                <li>Sell, rent, or sub-license material from Ignite Auth</li>
                                <li>Reproduce, duplicate or copy material from Ignite Auth</li>
                                <li>Redistribute content from Ignite Auth</li>
                            </ul>
                        </p>
                    </section>

                    {/* User Account Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">User Account</h2>
                        <p className="mb-4">
                            If you create an account with us, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
                        </p>
                        <p className="mb-4">
                            We reserve the right to refuse service, terminate accounts, remove or edit content, or cancel orders at our sole discretion.
                        </p>
                    </section>

                    {/* User Conduct Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">User Conduct</h2>
                        <p className="mb-4">
                            You agree not to use the Ignite Auth web application for any purpose that is illegal or prohibited by these terms and conditions. You must not use the web application in any way that could damage, disable, overburden, or impair the web application or interfere with any other party's use and enjoyment of it.
                        </p>
                        <p className="mb-4">
                            You must not engage in activities that:
                            <ul className="list-disc pl-5">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Infringe on the rights of any third party</li>
                                <li>Interfere with or disrupt the operation of the web application</li>
                            </ul>
                        </p>
                    </section>

                    {/* Termination Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Termination</h2>
                        <p className="mb-4">
                            We may terminate or suspend access to our web application immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the terms.
                        </p>
                        <p className="mb-4">
                            All provisions of the terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
                        </p>
                    </section>

                    {/* Governing Law Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Governing Law</h2>
                        <p className="mb-4">
                            These terms and conditions are governed by and construed in accordance with the laws of Rajkot, India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                        </p>
                    </section>

                    {/* Changes to Terms Section */}
                    <section className="mb-8">
                        <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
                        <p className="mb-4">
                            We reserve the right, at our sole discretion, to modify or replace these terms at any time. By continuing to access or use our web application after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the web application.
                        </p>
                    </section>

                    {/* Contacting the Company Section */}
                    <section>
                        <h2 className="text-2xl font-bold mb-4">Contacting the Company</h2>
                        <p>
                            If you have any questions about these terms and conditions, please contact us by email at{" "}
                            <a href="mailto:support@igniteauth.com" className="text-blue-500">
                                support@igniteauth.com
                            </a>{" "}
                            and we will be happy to assist you.
                        </p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Section1;
