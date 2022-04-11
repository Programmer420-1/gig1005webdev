import React from 'react'
import tw, { styled } from 'twin.macro'

export const ModuleDetails = ({ details, qrcode, timetable }) => {
    return (
        <div className='grow'>
            <div className="mx-5 lg:mx-20 flex justify-between flex-col h-full">
                <div className='md:grid md:grid-cols-4'>
                    <div className='md:text-left md:col-span-3'>
                        <p className='mb-2 text-xl font-semibold'>Course details</p>
                        <p className='mb-4 md:mb-0 text-slate-400'>{details}</p>
                    </div>
                    <div className='max-w-screen-sm mb-4 md:mb-0'>
                        <a href="#">
                            <QRCode>
                                <img className='w-full' src={'images/' + qrcode} />
                            </QRCode>
                            <p className='mt-2 text-xs text-center'>Scan or Click to Register</p>
                        </a>
                    </div>
                </div>
                <div className='grow flex flex-col mt-10'>
                    <p className='mb-2 text-xl font-semibold'>Time Table</p>
                    <Timetable className='grow mx-auto hover:scale-110 transition-transform'>
                        <a href='#'>
                        <img className="h-full" src={'images/' + timetable}></img>
                        </a>
                    </Timetable>
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