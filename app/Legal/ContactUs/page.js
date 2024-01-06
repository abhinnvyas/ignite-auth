import Navbar from '@/components/Navbar'
import React from 'react'
import Head from 'next/head';
export default function page() {
    return (
        <>
            <title>
                Contact Us | Ignite Auth
            </title>

            <div style={{
                height: "100vh",
                width: "100%",
                display: "flex",
                flexDirection: "column",

            }}>
                <Head>
                    <title>Contact Us | Ignite Auth </title>

                </Head>
                <div>
                    <Navbar />
                </div>
                <div style={{
                    height: "100vh",
                    display: "flex",
                }}>
                    <iframe src="https://form.jotform.com/233626007555455" title="Contact Us" width={"100%"} />
                </div>

            </div>
        </>

    )
}
