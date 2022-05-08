import React from 'react'
import tw, { styled } from 'twin.macro'

export const ModuleDetails = ({ details, qrcode, timetable }) => {

    return (
        <div className='grow'>
            <div className="mx-5 lg:mx-32 flex justify-between flex-col h-full">
                <div className='flex flex-col md:flex-row md:justify-between md:items-center'>
                    <div className='md:text-left' style={{'maxWidth': '800px'}}>
                        <p className='md:mb-2 mb-3 text-xl font-semibold'>Course Details</p>
                        <p className='mb-4 md:mb-0 text-slate-400'>{details}</p>
                    </div>
                    <a className='md:hidden border-[#FFCB9B] mx-auto rounded border py-2 block cursor-pointer transition-all duration-200 hover:underline text-[#FFCB9B] hover:brightness-75' style={{maxWidth:'150px'}}>
                        <p className='italic text-center px-5'>Register</p>
                    </a>
                    <div className='mb-4 md:mb-0 hidden md:block lg:mr-5' style={{ 'maxWidth': '150px' }}>
                        <a href="#">
                            <QRCode>
                                <img className='w-full' src={'/assets/images/' + qrcode} />
                            </QRCode>
                            <DownloadText className='mt-2'>Scan or Click to Register</DownloadText>
                        </a>
                    </div>
                </div>
                <div className='grow flex flex-col md:mt-10 mt-3 lg:mt-5'>
                    <p className='mb-2 text-xl font-semibold mt-4 md:mt-0'>Time Table</p>
                    <Timetable className='grow mx-auto hover:scale-110 transition-transform'>
                        <a href='#'>
                            <img className="h-full" src={'/assets/images/' + timetable}></img>
                        </a>
                    </Timetable>
                    <DownloadText className='mx-auto text-xs pt-2'>Download Timetable</DownloadText>
                </div>
            </div>
        </div>
    )
}

const QRCode = styled.div`
    ${tw`mx-auto`}
    min-width: 100px;
    max-width: 200px;

`
const Timetable = styled.div`
    max-height: 100%;
`

const DownloadText = styled.p`
    ${tw`text-xs cursor-pointer text-gray-200 hover:text-gray-400 hover:underline italic transition-all duration-200`}
`