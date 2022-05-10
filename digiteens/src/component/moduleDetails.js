import React from 'react'
import tw, { styled } from 'twin.macro'
import { NavLink as Link } from 'react-router-dom'

export const ModuleDetails = ({ details, qrcode, timetable, gForm }) => {

    return (
        <div className='grow'>
            <div className="mx-5 lg:mx-32 flex justify-between flex-col h-full">
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div className='md:text-left' style={{ 'maxWidth': '800px' }}>
                        <p className='md:mb-2 mb-3 text-xl font-semibold'>Course Details</p>
                        <p className='mb-4 md:mb-0 text-slate-400'>{details}</p>
                    </div>
                    <a href={gForm} target='_blank' className='md:hidden border-[#FFCB9B] mx-auto rounded border py-2 block cursor-pointer transition-all duration-200 hover:underline text-[#FFCB9B] hover:brightness-75' style={{ maxWidth: '150px' }}>
                        <p className='italic text-center px-5'>Register</p>
                    </a>
                    <div className='mb-4 md:mb-0 hidden md:block lg:mr-5' style={{ 'maxWidth': '150px' }}>
                        <a href="#">
                            <QRCode>
                                <img className='w-full' src={'/assets/images/' + qrcode} />
                            </QRCode>
                                <DownloadText className='mt-2' href={gForm} target='_blank'>
                                    Scan or Click to Register
                                </DownloadText>
                        

                        </a>
                    </div>
                </div>
                <div className='grow flex flex-col md:mt-10 mt-3 lg:mt-5'>
                    <p className='mb-2 text-xl font-semibold mt-4 md:mt-0'>Timetable</p>
                    <Timetable className='grow mx-auto hover:scale-110 transition-transform'>
                    <Link to={'/assets/timetable/' + timetable} target="_blank" >
                            <img className="timetable" src={'/assets/timetable/' + timetable} alt="module timetable"></img>
                        </Link>
                    </Timetable>
                    <Link to={'/assets/timetable/' + timetable} target="_blank" download>
                        <DownloadText className='mx-auto text-xs pt-2'>
                            Download Timetable
                        </DownloadText>
                    </Link>

                </div>
            </div>
        </div>
    )
}

const QRCode = styled.div`
    ${tw`mx-auto`}
    width: 150px;

`
const Timetable = styled.div`
    max-height: 100%;
`

const DownloadText = styled.a`
    text-decoration: none;
    ${tw`text-xs cursor-pointer text-gray-200 hover:text-gray-400 hover:underline italic transition-all duration-200`}
`