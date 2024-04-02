import Bouton from '../Basics/Bouton';

export default function Footer() {

    return (
        <footer className='w-footerWidth p-movieLeft mt-20 flex flex-col gap-10 mobile:gap-6'>
            <div className='flex flex-row justify-between flex-wrap justify-between gap-4'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-font text-3xl mobile:text-lg font-bold'>ITVX Presents</h2>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">ITVX</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">ITVX Premium</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">TV Guide</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">Be on TV</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">Competitions</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">Signed stories</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">Shop</Bouton>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-font text-3xl mobile:text-lg font-bold'>Corporate</h2>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">ITV Plc</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">Social Purpose</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">Jobs</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">Press Centre</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">ITV Media</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">Commissioning</Bouton>
                </div>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-font text-3xl mobile:text-lg font-bold'>Information</h2>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">TV sign in code</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">ITVX Help</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">ITV Contact us</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">Terms of use</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">Privacy & Cookie Information</Bouton>
                    <Bouton intent="underline" size="footer" className="mobile:text-sm">Cookie Settings</Bouton>
                </div>
            </div>
            <p className='text-navigation text-sm mobile:text-xs font-semibold'>© ITV Consumer Limited 2024</p>
            <img className="w-24 mobile:w-20" src="/assets/images/logo-itvX.webp" alt="Logo"/>
        </footer>
    );
}